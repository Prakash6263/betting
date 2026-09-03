import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'bettings');
const OUT = path.join(ROOT, 'bettings-nextjs');
const APP_DIR = path.join(OUT, 'src', 'app');
const NEXT_SCRIPTS_DIR = path.join(OUT, 'public', 'assets', 'next');

// ---------------------------------------------------------------
// Page inventory
// ---------------------------------------------------------------
const DASHBOARD_PAGES = [
  'advanced-stats', 'ai-predictions', 'dashboard', 'help-support',
  'market-analysis', 'match-analysis', 'match-reports', 'match-schedule',
  'matches', 'news', 'player-analytics', 'profile', 'settings',
  'sports-coverage', 'team-performance', 'value-bets', 'watchlist'
];

const ROUTE_MAP = {
  'index.html': '/',
  'login.html': '/login',
  'register.html': '/register'
};
for (const name of DASHBOARD_PAGES) ROUTE_MAP[name + '.html'] = '/' + name;

const jobs = [];
jobs.push({ htmlFile: 'index.html', kind: 'root', route: '/' });
jobs.push({ htmlFile: 'login.html', kind: 'root', route: '/login' });
jobs.push({ htmlFile: 'register.html', kind: 'root', route: '/register' });
for (const name of DASHBOARD_PAGES) {
  jobs.push({
    htmlFile: path.join('userdashboard', name + '.html'),
    kind: 'dashboard',
    route: '/' + name
  });
}

// ---------------------------------------------------------------
// HTML tokenizer helpers
// ---------------------------------------------------------------
const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const RAWTEXT_TAGS = new Set(['script', 'style']);
const DROP_TAGS = new Set(['meta', 'base', '!doctype', 'doctype']);
const WRAP_TAGS = new Set(['html', 'head', 'body']);
const SKIP_CONTENT_TAGS = new Set(['title']);

function findTagEnd(html, from) {
  let i = from;
  let quote = null;
  while (i < html.length) {
    const ch = html[i];
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === '>') {
      return i;
    }
    i++;
  }
  return -1;
}

function parseAttrs(raw) {
  const attrs = [];
  let i = 0;
  const n = raw.length;
  while (i < n) {
    while (i < n && /\s/.test(raw[i])) i++;
    if (i >= n) break;
    if (raw[i] === '/') break; // trailing self-close slash
    let j = i;
    while (j < n && !/[\s=/>]/.test(raw[j])) j++;
    const name = raw.slice(i, j);
    if (!name) { i = j + 1; continue; }
    i = j;
    while (i < n && /\s/.test(raw[i])) i++;
    let value = null;
    let hasValue = false;
    if (i < n && raw[i] === '=') {
      hasValue = true;
      i++;
      while (i < n && /\s/.test(raw[i])) i++;
      if (i < n && (raw[i] === '"' || raw[i] === "'")) {
        const q = raw[i];
        i++;
        const start = i;
        while (i < n && raw[i] !== q) i++;
        value = raw.slice(start, i);
        if (i < n) i++; // skip closing quote
      } else {
        const start = i;
        while (i < n && !/[\s>]/.test(raw[i])) i++;
        value = raw.slice(start, i);
      }
    }
    attrs.push({ name, value, hasValue });
  }
  return attrs;
}

function tokenize(html) {
  const tokens = [];
  const n = html.length;
  const pushText = (start, end) => {
    if (end > start) tokens.push({ type: 'text', text: html.slice(start, end) });
  };

  let segStart = 0;
  let i = 0;
  while (i < n) {
    const lt = html.indexOf('<', i);
    if (lt === -1) { pushText(segStart, n); break; }
    const after = lt + 1 < n ? html[lt + 1] : '';
    const tagLike = /[a-zA-Z]/.test(after) || after === '/' || after === '!' || after === '?';
    if (!tagLike) { i = lt + 1; continue; }

    pushText(segStart, lt);

    if (html.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt + 4);
      i = end === -1 ? n : end + 3;
      segStart = i;
      continue;
    }
    if (html.startsWith('<!', lt) || html.startsWith('<?', lt)) {
      const end = html.indexOf('>', lt);
      i = end === -1 ? n : end + 1;
      segStart = i;
      continue;
    }

    let j = lt + 1;
    if (html[j] === '/') {
      // closing tag
      j++;
      let k = j;
      while (k < n && !/[\s>]/.test(html[k])) k++;
      const name = html.slice(j, k);
      const gt = html.indexOf('>', k);
      if (gt === -1) { i = n; break; }
      tokens.push({ type: 'close', name: name.toLowerCase() });
      i = gt + 1;
      segStart = i;
      continue;
    }

    // opening tag
    let k = j;
    while (k < n && !/[\s/>]/.test(html[k])) k++;
    const rawName = html.slice(j, k);
    const name = rawName.toLowerCase();
    const gt = findTagEnd(html, k);
    if (gt === -1) { i = n; break; }
    const attrsRaw = html.slice(k, gt);
    const trimmed = attrsRaw.trimEnd();
    const selfClose = trimmed.endsWith('/');
    const attrs = parseAttrs(trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed);
    tokens.push({ type: 'open', name, rawName, attrs, selfClose });
    i = gt + 1;
    segStart = i;

    if (RAWTEXT_TAGS.has(name)) {
      const closeRe = new RegExp('</' + name + '\\s*>', 'ig');
      closeRe.lastIndex = i;
      const m = closeRe.exec(html);
      if (m) {
        const content = html.slice(i, m.index);
        tokens.push({ type: 'raw', name, attrs, content });
        i = m.index + m[0].length;
        segStart = i;
      } else {
        i = n;
      }
    }
  }
  return tokens;
}
// JSX conversion helpers
// ---------------------------------------------------------------
const BOOLEAN_ATTRS = new Set([
  'allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'controls',
  'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'inert',
  'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate',
  'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'truespeed'
]);

const UNITLESS_CSS = new Set([
  'animationIterationCount', 'aspectRatio', 'borderImageOutset', 'borderImageSlice',
  'borderImageWidth', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup', 'columnCount',
  'columns', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative',
  'flexOrder', 'gridArea', 'gridRow', 'gridRowEnd', 'gridRowSpan', 'gridRowStart',
  'gridColumn', 'gridColumnEnd', 'gridColumnSpan', 'gridColumnStart', 'fontWeight',
  'lineClamp', 'lineHeight', 'opacity', 'order', 'orphans', 'tabSize', 'widows',
  'zIndex', 'zoom', 'fillOpacity', 'floodOpacity', 'stopOpacity', 'strokeDasharray',
  'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth'
]);

function camelize(name) {
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function propNameFor(element, rawName) {
  let name = rawName;
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  if (name === 'viewbox' && element === 'svg') return 'viewBox';
  if (name.includes('-')) name = camelize(name);
  // React property aliases for static form defaults
  if (element === 'input' || element === 'textarea' || element === 'select') {
    if (name === 'value') return 'defaultValue';
  }
  if (element === 'input' && name === 'checked') return 'defaultChecked';
  return name;
}

function styleToJsx(value) {
  const props = [];
  const decls = String(value).split(';');
  for (const declRaw of decls) {
    const decl = declRaw.trim();
    if (!decl) continue;
    const idx = decl.indexOf(':');
    if (idx <= 0) continue;
    let key = decl.slice(0, idx).trim();
    let val = decl.slice(idx + 1).trim().replace(/\s*!important\s*$/i, '');
    if (!key || !val) continue;
    key = camelize(key.replace(/^-(webkit|moz|ms|o)-/, (_, p) => p + '-'));
    let rendered;
    if (/^-?\d+(\.\d+)?$/.test(val) && UNITLESS_CSS.has(key)) {
      rendered = Number(val);
    } else if (/^0(\.0+)?$/.test(val)) {
      rendered = 0;
    } else {
      rendered = JSON.stringify(val);
    }
    props.push(key + ': ' + rendered);
  }
  return '{' + props.join(', ') + '}';
}

function rewriteUrl(value, kind) {
  if (!value) return value;
  const v = String(value).trim();
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#|\/)/i.test(v)) return value;
  let s = v.replace(/^\.\//, '');
  const htmlLink = s.match(/^((?:[^/?#]+\/)*)([^/?#]+\.html)([?#].*)?$/i);
  if (htmlLink) {
    const route = ROUTE_MAP[htmlLink[2].toLowerCase()];
    if (route) return route + (htmlLink[3] || '');
    return value;
  }
  if (kind === 'dashboard') {
    if (s.startsWith('assets/')) return '/assets/' + s.slice('assets/'.length);
    return value;
  }
  if (s.startsWith('css/')) return '/css/' + s.slice(4);
  if (s.startsWith('images/')) return '/images/' + s.slice(7);
  if (s.startsWith('userdashboard/assets/')) return '/assets/' + s.slice('userdashboard/assets/'.length);
  if (s.startsWith('userdashboard/')) {
    const inner = s.slice('userdashboard/'.length);
    const innerLink = inner.match(/^([^/?#]+\.html)([?#].*)?$/i);
    if (innerLink) {
      const route = ROUTE_MAP[innerLink[1].toLowerCase()];
      if (route) return route + (innerLink[2] || '');
    }
    return value;
  }
  return value;
}

function attrsToJsx(attrs, element, kind, pageMeta) {
  const parts = [];
  for (const attr of attrs) {
    const rawName = attr.name;
    const lname = rawName.toLowerCase();
    // Inline event handlers -> data attribute that a small runtime helper binds.
    if (/^on[a-z]+$/.test(lname) && attr.hasValue) {
      parts.push('data-o-' + lname + '={' + JSON.stringify(attr.value) + '}');
      pageMeta.hasInlineEvents = true;
      continue;
    }
    const name = propNameFor(element, rawName);
    if (attr.hasValue) {
      let value = attr.value;
      if (name === 'className' || name === 'htmlFor' || name === 'style' || /^(data-|aria-)/.test(name)) {
        if (name === 'style') {
          parts.push('style={' + styleToJsx(value) + '}');
          continue;
        }
        parts.push(name + '={' + JSON.stringify(value) + '}');
        continue;
      }
      if (['href', 'src', 'action', 'poster', 'data-src', 'srcset'].includes(lname)) {
        value = rewriteUrl(value, kind);
      }
      parts.push(name + '={' + JSON.stringify(value) + '}');
    } else {
      const finalName = propNameFor(element, lname);
      if (BOOLEAN_ATTRS.has(lname)) {
        parts.push(finalName);
      } else {
        parts.push(finalName + '={""}');
      }
    }
  }
  return parts;
}

function textToJsx(text) {
  return text
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;');
}

function rawElementToJsx(t, kind, pageMeta) {
  const name = t.name;
  if (name === 'script') {
    const hasContent = t.content && t.content.trim().length > 0;
    if (hasContent) {
      const idx = pageMeta.inlineScriptCount++;
      const slug = pageMeta.slug;
      const fileName = slug + '-inline-' + idx + '.js';
      const filePath = path.join(NEXT_SCRIPTS_DIR, fileName);
      const publicPath = '/assets/next/' + fileName;
      fs.writeFileSync(filePath, t.content, 'utf8');
      pageMeta.generatedScripts.push(filePath);
      pageMeta.orderedScripts.push(publicPath);
    } else {
      const srcAttr = (t.attrs || []).find((a) => a.name.toLowerCase() === 'src');
      if (srcAttr) pageMeta.orderedScripts.push(rewriteUrl(srcAttr.value, kind));
    }
    return '';
  }
  const attrParts = attrsToJsx(t.attrs, name, kind, pageMeta);
  const attrsStr = attrParts.length ? ' ' + attrParts.join(' ') : '';
  if (t.content && t.content.trim().length > 0) {
    return '<' + name + attrsStr + ' dangerouslySetInnerHTML={{ __html: ' + JSON.stringify(t.content) + ' }} />';
  }
  return '<' + name + attrsStr + ' />';
}
function elementToJsx(node, kind, pageMeta) {
  let name = node.name;
  if (name === 'a') {
    const hrefAttr = (node.attrs || []).find((a) => a.name.toLowerCase() === 'href');
    if (hrefAttr && hrefAttr.hasValue) {
      const rewritten = rewriteUrl(hrefAttr.value, kind);
      if (rewritten.startsWith('/')) {
        name = 'Link';
        pageMeta.usesLink = true;
      }
    }
  }
  const attrParts = attrsToJsx(node.attrs, node.name, kind, pageMeta);
  const attrsStr = attrParts.length ? ' ' + attrParts.join(' ') : '';
  const leaf = VOID_TAGS.has(node.name) || node.selfClose;
  if (leaf) return '<' + name + attrsStr + ' />';
  const inner = Array.isArray(node.parts) ? node.parts.join('') : node.parts;
  return '<' + name + attrsStr + '>' + inner + '</' + name + '>';
}
// Whole document -> JSX body
// ---------------------------------------------------------------
function convertDocument(html, kind, pageMeta) {
  if (html.charCodeAt(0) === 0xfeff) html = html.slice(1);
  const tokens = tokenize(html);
  const out = [];
  const stack = [];
  const skipContent = [];

  const appendToCurrent = (str) => {
    if (!str) return;
    if (skipContent.length) return;
    if (stack.length) stack[stack.length - 1].parts.push(str);
    else out.push(str);
  };

  for (const t of tokens) {
    if (t.type === 'comment') continue;
    if (t.type === 'doctype') continue;
    if (t.type === 'text') {
      if (skipContent.length) continue;
      appendToCurrent(textToJsx(t.text));
      continue;
    }
    if (t.type === 'raw') {
      if (skipContent.length) continue;
      appendToCurrent(rawElementToJsx(t, kind, pageMeta));
      continue;
    }
    if (t.type === 'open') {
      if (RAWTEXT_TAGS.has(t.name)) continue; // handled by 'raw' token
      if (skipContent.length) {
        if (SKIP_CONTENT_TAGS.has(t.name)) skipContent.push(t.name);
        continue;
      }
      if (SKIP_CONTENT_TAGS.has(t.name)) { skipContent.push(t.name); continue; }
      if (DROP_TAGS.has(t.name)) continue;
      if (WRAP_TAGS.has(t.name)) continue;
      const node = { name: t.name, attrs: t.attrs, parts: [], selfClose: t.selfClose };
      stack.push(node);
      if (VOID_TAGS.has(t.name) || t.selfClose) {
        const popped = stack.pop();
        appendToCurrent(elementToJsx(popped, kind, pageMeta));
      }
      continue;
    }
    // close
    if (skipContent.length) {
      if (skipContent[skipContent.length - 1] === t.name) skipContent.pop();
      continue;
    }
    let found = -1;
    for (let idx = stack.length - 1; idx >= 0; idx--) {
      if (stack[idx].name === t.name) { found = idx; break; }
    }
    if (found === -1) continue;
    const popped = stack.splice(found);
    // popped[0] is the matched element; any extra entries are unclosed children
    const innerNodes = popped.slice(1);
    let inner = '';
    for (const innerNode of innerNodes) {
      inner += elementToJsx(innerNode, kind, pageMeta);
    }
    popped[0].parts = inner + popped[0].parts.join('');
    appendToCurrent(elementToJsx(popped[0], kind, pageMeta));
  }
  // auto-close anything left on the stack
  while (stack.length) {
    const node = stack.pop();
    appendToCurrent(elementToJsx(node, kind, pageMeta));
  }
  return out.join('');
}

// ---------------------------------------------------------------
// Page file assembly
// ---------------------------------------------------------------
const EVENT_HELPER_PATH = path.join(NEXT_SCRIPTS_DIR, 'inline-events.js');
function slugFromRoute(route) {
  return route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '-');
}

function buildPageFile(pageMeta) {
  if (pageMeta.hasInlineEvents) {
    pageMeta.orderedScripts.push('/assets/next/inline-events.js');
  }
  if (pageMeta.rootSwitcher) {
    pageMeta.jsx = injectRootLanguageSwitcher(pageMeta.jsx);
  }
  // Write the per-page boot loader that runs scripts after hydration.
  const bootFile = pageMeta.slug + '-boot.js';
  const bootPublic = '/assets/next/' + bootFile;
  fs.writeFileSync(
    path.join(NEXT_SCRIPTS_DIR, bootFile),
    bootSource(pageMeta.orderedScripts),
    'utf8'
  );
  const bootTag = '<Script src={' + JSON.stringify(bootPublic) + '} strategy="afterInteractive" />';
  const lines = [];
  lines.push("import Script from 'next/script';");
  if (pageMeta.usesLink) lines.push("import Link from 'next/link';");
  lines.push('');
  lines.push('export default function Page() {');
  lines.push('  return (');
  lines.push('    <>');
  lines.push(pageMeta.jsx);
  lines.push(bootTag);
  lines.push('    </>');
  lines.push('  );');
  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

const ROOT_LANG_SWITCHER = [
  '<div className={"dropdown ms-2"} style={{display:"inline-block"}}>',
  '  <button className={"theme-toggle-btn"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"} type={"button"} aria-expanded={"false"} style={{display:"inline-flex",alignItems:"center",gap:"8px",border:"1px solid rgba(255,255,255,.18)",background:"rgba(255,255,255,.05)",color:"#fff",borderRadius:"8px",padding:"8px 12px",fontSize:"12px"}}>',
  '    <i className={"bi bi-translate text-success"}></i>',
  '    <span className={"fw-semibold"} id={"selectedLangText"}>FR</span>',
  '    <i className={"bi bi-chevron-down"} style={{fontSize:"9px"}}></i>',
  '  </button>',
  '  <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary shadow-lg"}>',
  '    <li><a className={"dropdown-item small d-flex justify-content-between py-2 language-option"} data-language={"en"} href={"#"}><span>English</span><span className={"badge bg-success ms-2"}>EN</span></a></li>',
  '    <li><hr className={"dropdown-divider border-secondary my-1"} /></li>',
  '    <li><a className={"dropdown-item small d-flex justify-content-between py-2 language-option"} data-language={"fr"} href={"#"}><span>Fran\u00e7ais (French)</span><span className={"badge bg-success ms-2"}>FR</span></a></li>',
  '  </ul>',
  '</div>'
].join('\n');

function injectRootLanguageSwitcher(jsx) {
  const token = jsx.indexOf('{"btn-login"}');
  if (token === -1) return jsx;
  let start = token;
  while (start > 0 && jsx[start - 1] !== '<') start--;
  if (start === token || start === 0) return jsx;
  const insertAt = start - 1;
  return jsx.slice(0, insertAt) + '\n' + ROOT_LANG_SWITCHER + '\n' + jsx.slice(insertAt);
}
function bootSource(srcs) {
  const list = JSON.stringify(srcs);
  return [
    '(function () {',
    '  var srcs = ' + list + ';',
    '  var i = 0;',
    '  function next() {',
    '    if (i >= srcs.length) {',
    "      try { document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true })); } catch (e) {}",
    "      try { window.dispatchEvent(new Event('load')); } catch (e) {}",
    '      return;',
    '    }',
    '    var url = srcs[i++];',
    "    var s = document.createElement('script');",
    '    s.src = url;',
    '    s.async = false;',
    '    s.onload = next;',
    '    s.onerror = next;',
    '    document.head.appendChild(s);',
    '  }',
    '  next();',
    '})();',
    ''
  ].join('\n');
}
const EVENT_HELPER_SOURCE = `(function () {
  function __fiInlineEvents() {
    var els = document.querySelectorAll('[data-o-onclick],[data-o-onsubmit],[data-o-onchange],[data-o-oninput],[data-o-onkeyup],[data-o-onkeydown],[data-o-onblur],[data-o-onfocus],[data-o-onmouseover],[data-o-onmouseout],[data-o-ondblclick],[data-o-oncontextmenu]');
    var evs = ['onclick','onsubmit','onchange','oninput','onkeyup','onkeydown','onblur','onfocus','onmouseover','onmouseout','ondblclick','oncontextmenu'];
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      for (var j = 0; j < evs.length; j++) {
        var code = el.getAttribute('data-o-' + evs[j]);
        if (code !== null) {
          (function (element, handlerCode) {
            element[evs[j]] = function (event) {
              return (new Function('event', 'with(this) {' + handlerCode + '}')).call(element, event);
            };
          })(el, code);
        }
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __fiInlineEvents);
  } else {
    __fiInlineEvents();
  }
})();
`;
// Run
// ---------------------------------------------------------------
fs.mkdirSync(NEXT_SCRIPTS_DIR, { recursive: true });
if (!fs.existsSync(EVENT_HELPER_PATH)) {
  fs.writeFileSync(EVENT_HELPER_PATH, EVENT_HELPER_SOURCE, 'utf8');
}

for (const job of jobs) {
  const htmlPath = path.join(SRC, job.htmlFile);
  if (!fs.existsSync(htmlPath)) {
    console.error('MISSING SOURCE: ' + htmlPath);
    process.exitCode = 1;
    continue;
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const pageMeta = {
    slug: slugFromRoute(job.route),
    jsx: '',
    hasInlineEvents: false,
    inlineScriptCount: 0,
    generatedScripts: [],
    orderedScripts: [],
    usesLink: false,
    rootSwitcher: job.kind === 'root'
  };
  pageMeta.jsx = convertDocument(html, job.kind, pageMeta);

  const fileContent = buildPageFile(pageMeta);
  const routePath = job.route === '/' ? '' : job.route.replace(/^\//, '');
  const pageDir = path.join(APP_DIR, routePath);
  fs.mkdirSync(pageDir, { recursive: true });
  const pageFile = path.join(pageDir, 'page.jsx');
  fs.writeFileSync(pageFile, fileContent, 'utf8');
  console.log('generated ' + pageFile + ' (' + fileContent.length + ' bytes, scripts: ' + pageMeta.generatedScripts.length + ')');
}
console.log('DONE');