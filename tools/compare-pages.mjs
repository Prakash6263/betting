import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'bettings');
const BASE = process.env.BASE_URL || 'http://localhost:3000';

const DASHBOARD_PAGES = [
  'advanced-stats', 'ai-predictions', 'dashboard', 'help-support',
  'market-analysis', 'match-analysis', 'match-reports', 'match-schedule',
  'matches', 'news', 'player-analytics', 'profile', 'settings',
  'sports-coverage', 'team-performance', 'value-bets', 'watchlist'
];
const jobs = [];
jobs.push({ file: 'index.html', route: '/' });
jobs.push({ file: 'login.html', route: '/login' });
jobs.push({ file: 'register.html', route: '/register' });
for (const name of DASHBOARD_PAGES) jobs.push({ file: path.join('userdashboard', name + '.html'), route: '/' + name });

const strip = (html) => html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '');

function attrTokens(html, attr) {
  const re = new RegExp(attr + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')', 'gi');
  const counts = new Map();
  let m;
  while ((m = re.exec(html)) !== null) {
    const value = (m[1] ?? m[2] ?? '').split(/\s+/).filter(Boolean);
    for (const tok of value) counts.set(tok, (counts.get(tok) || 0) + 1);
  }
  return counts;
}

function diff(a, b) {
  const onlyA = []; const onlyB = []; const diffCount = [];
  for (const [k, v] of a) {
    if (!b.has(k)) onlyA.push(k);
    else if (b.get(k) !== v) diffCount.push(k + ':' + v + '->' + b.get(k));
  }
  for (const [k] of b) if (!a.has(k)) onlyB.push(k);
  return { onlyA, onlyB, diffCount };
}

let failures = 0;
for (const job of jobs) {
  const originalPath = path.join(SRC, job.file);
  const original = strip(fs.readFileSync(originalPath, 'utf8'));
  const res = await fetch(BASE + job.route);
  const served = strip(await res.text());

  const origClass = attrTokens(original, 'class');
  const servedClass = attrTokens(served, 'class');
  const classDiff = diff(origClass, servedClass);

  const origId = attrTokens(original, 'id');
  const servedId = attrTokens(served, 'id');
  const idDiff = diff(origId, servedId);

  const hasLang = served.includes('selectedLangText') && served.includes('language-option') && served.includes('data-language');
  const hasTheme = served.includes('assets/js/theme.js');
  const langJs = served.includes('assets/js/language.js');

  const ok = classDiff.onlyA.length === 0 && classDiff.onlyB.length === 0 && classDiff.diffCount.length === 0 &&
             idDiff.onlyA.length === 0 && idDiff.onlyB.length === 0 && idDiff.diffCount.length === 0;
  if (!ok) failures++;
  console.log(
    (ok ? 'OK  ' : 'FAIL') + ' ' + job.route.padEnd(16) +
    ' classes=' + JSON.stringify(classDiff) +
    ' ids=' + JSON.stringify(idDiff) +
    ' lang=' + hasLang + ' theme=' + hasTheme + ' langJs=' + langJs
  );
}
console.log(failures === 0 ? 'ALL MATCH' : failures + ' MISMATCH(ES)');