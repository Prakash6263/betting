import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire('D:/prakash/batting/bettings/bettings-nextjs/package.json');
const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = 'D:\\prakash\\batting\\bettings\\tools\\shots';
fs.mkdirSync(OUT, { recursive: true });

const PAIRS = [
  ['/', '/index.html'],
  ['/login', '/login.html'],
  ['/register', '/register.html'],
  ['/dashboard', '/userdashboard/dashboard.html'],
  ['/advanced-stats', '/userdashboard/advanced-stats.html'],
  ['/ai-predictions', '/userdashboard/ai-predictions.html'],
  ['/help-support', '/userdashboard/help-support.html'],
  ['/market-analysis', '/userdashboard/market-analysis.html'],
  ['/match-analysis', '/userdashboard/match-analysis.html'],
  ['/match-reports', '/userdashboard/match-reports.html'],
  ['/match-schedule', '/userdashboard/match-schedule.html'],
  ['/matches', '/userdashboard/matches.html'],
  ['/news', '/userdashboard/news.html'],
  ['/player-analytics', '/userdashboard/player-analytics.html'],
  ['/profile', '/userdashboard/profile.html'],
  ['/settings', '/userdashboard/settings.html'],
  ['/sports-coverage', '/userdashboard/sports-coverage.html'],
  ['/team-performance', '/userdashboard/team-performance.html'],
  ['/value-bets', '/userdashboard/value-bets.html'],
  ['/watchlist', '/userdashboard/watchlist.html']
];

const IGNORE_CLASS = /^(goog|VIpgJd|translated)/;
const IGNORE_ID = /^(goog|_R_|_next)/;

async function prep(page) {
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const u = req.url();
    if (u.includes('translate.google.com') || u.includes('translate.googleapis.com') || u.includes('google.com/translate')) {
      req.abort();
    } else {
      req.continue();
    }
  });
}

async function snapshot(page) {
  return page.evaluate(() => {
    const IGNORE_CLASS = /^(goog|VIpgJd|translated)/;
    const IGNORE_ID = /^(goog|_R_|_next)/;
    const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
    const classes = new Set();
    const ids = new Set();
    document.querySelectorAll('body *').forEach((el) => {
      if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'NOSCRIPT') return;
      (el.className && typeof el.className === 'string' ? el.className.split(/\s+/) : []).forEach((c) => { if (c) classes.add(c); });
      if (el.id) ids.add(el.id);
    });
    const heads = [...document.querySelectorAll('h1,h2,h3,h4')].map((h) => norm(h.textContent)).filter(Boolean);
    const visibleText = norm(document.body.innerText);
    return {
      title: document.title || '',
      classes: [...classes].filter(c => !IGNORE_CLASS.test(c)).sort(),
      ids: [...ids].filter(i => !IGNORE_ID.test(i)).sort(),
      heads,
      text: visibleText,
      links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => h && !h.startsWith('#')).sort(),
      imgs: [...document.querySelectorAll('img[src]')].map(i => i.getAttribute('src')).filter(Boolean).sort()
    };
  });
}

function diffList(a, b) {
  const sa = new Set(a), sb = new Set(b);
  const onlyA = a.filter(x => !sb.has(x));
  const onlyB = b.filter(x => !sa.has(x));
  return { onlyA, onlyB };
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, protocolTimeout: 240000, args: ['--no-sandbox'] });
const pgNext = await browser.newPage();
const pgHtml = await browser.newPage();
await pgNext.setViewport({ width: 1440, height: 1000 });
await pgHtml.setViewport({ width: 1440, height: 1000 });
await prep(pgNext);
await prep(pgHtml);

const lines = [];
for (const [route, htmlPath] of PAIRS) {
  const name = route === '/' ? 'home' : route.slice(1);
  const nextUrl = 'http://localhost:3000' + route;
  const htmlUrl = 'http://localhost:8090' + htmlPath;
  try { await pgNext.goto(nextUrl, { waitUntil: 'networkidle2', timeout: 45000 }); } catch (e) { console.log('NEXT LOAD ERR', route, e.message.slice(0, 80)); }
  await new Promise(r => setTimeout(r, 1500));
  try { await pgHtml.goto(htmlUrl, { waitUntil: 'networkidle2', timeout: 45000 }); } catch (e) { console.log('HTML LOAD ERR', htmlPath, e.message.slice(0, 80)); }
  await new Promise(r => setTimeout(r, 1500));
  const a = await snapshot(pgNext);
  const b = await snapshot(pgHtml);
  await pgNext.screenshot({ path: path.join(OUT, name + '-next.png') });
  await pgHtml.screenshot({ path: path.join(OUT, name + '-html.png') });

  const issues = [];
  if (a.title !== b.title) issues.push('title [' + a.title + '] vs [' + b.title + ']');
  const cD = diffList(a.classes, b.classes);
  if (cD.onlyA.length || cD.onlyB.length) issues.push('classes only-next=' + JSON.stringify(cD.onlyA) + ' only-html=' + JSON.stringify(cD.onlyB));
  const iD = diffList(a.ids, b.ids);
  if (iD.onlyA.length || iD.onlyB.length) issues.push('ids only-next=' + JSON.stringify(iD.onlyA) + ' only-html=' + JSON.stringify(iD.onlyB));
  if (a.heads.join('\n') !== b.heads.join('\n')) {
    issues.push('headings next=' + JSON.stringify(a.heads.slice(0, 6)) + ' html=' + JSON.stringify(b.heads.slice(0, 6)));
  }
  const lD = diffList(a.links, b.links);
  if (lD.onlyA.length || lD.onlyB.length) issues.push('links only-next=' + JSON.stringify(lD.onlyA.slice(0, 8)) + ' only-html=' + JSON.stringify(lD.onlyB.slice(0, 8)));
  if (a.text !== b.text) {
    // show first difference span
    let i = 0;
    while (i < Math.min(a.text.length, b.text.length) && a.text[i] === b.text[i]) i++;
    issues.push('text mismatch @' + i + ' len next=' + a.text.length + ' html=' + b.text.length);
    issues.push('  next...' + a.text.slice(Math.max(0, i - 60), i + 90));
    issues.push('  html...' + b.text.slice(Math.max(0, i - 60), i + 90));
  }
  const status = issues.length === 0 ? 'PASS' : 'DIFF';
  lines.push(status + '  /' + name);
  for (const it of issues) lines.push('    - ' + it);
  console.log(status + ' /' + name + (issues.length ? ' -> ' + issues[0].slice(0, 110) : ''));
}
fs.writeFileSync(path.join(OUT, 'report2.txt'), lines.join('\n'), 'utf8');
console.log('report2 saved');
await browser.close();