'use strict';

const APP = {
  USER: { username: 'mousa', password: 'tarjomeh' },
  CHUNK_BILINGUAL: 600,
  CHUNK_ORIGINAL: 3000,
  MAX_CONCURRENCY: 3,
  DB_NAME: 'mousa_tx_db',
  STORE: 'jobs',
  SETTINGS_KEY: 'mousa_settings_v2',
  USAGE_KEY: 'mousa_usage_v1'
};

/* ---------- واژه‌نامه ---------- */
const GLOSSARIES = {
  ceramic:{
    'sintering':'زینتر کردن','sintered':'زینترشده','spark plasma sintering':'زینترینگ جرقه پلاسما',
    'hot pressing':'پرس گرم','isostatic pressing':'پرس ایزواستاتیک','densification':'چگالش',
    'porosity':'تخلخل','porous':'متخلخل','grain boundary':'مرز دانه','grain growth':'رشد دانه',
    'grain size':'اندازهٔ دانه','microstructure':'ریزساختار','amorphous':'آمورف',
    'phase transformation':'تبدیل فاز','phase diagram':'نمودار فاز','solid solution':'محلول جامد',
    'eutectic':'یوتکتیک','calcination':'کلسیناسیون','green body':'بدنهٔ خام',
    'slip casting':'ریخته‌گری دوغابی','tape casting':'ریخته‌گری نواری','sol-gel':'سل-ژل',
    'dielectric constant':'ثابت دی‌الکتریک','piezoelectric':'پیزوالکتریک',
    'ferroelectric':'فروالکتریک','fracture toughness':'چقرمگی شکست',
    'bending strength':'استحکام خمشی','flexural strength':'استحکام خمشی',
    'compressive strength':'استحکام فشاری','refractory':'دیرگداز','glaze':'لعاب',
    'kaolin':'کائولن','alumina':'آلومینا','zirconia':'زیرکونیا','silica':'سیلیس',
    'silicon carbide':'کاربید سیلیسیم','silicon nitride':'نیترید سیلیسیم',
    'spinel':'اسپینل','perovskite':'پروسکایت','mullite':'مولایت',
    'thermal expansion':'انبساط حرارتی','thermal shock resistance':'مقاومت به شوک حرارتی',
    'thermal conductivity':'رسانش گرمایی','creep':'خزش','wear resistance':'مقاومت به سایش',
    'corrosion':'خوردگی','binder':'چسباننده','slurry':'دوغاب','suspension':'سوسپانسیون',
    'deflocculant':'روان‌کننده','particle size distribution':'توزیع اندازهٔ ذرات',
    'specific surface area':'سطح ویژه','stoichiometry':'استوکیومتری','vacancy':'جای خالی',
    'dislocation':'نابجایی','dopant':'دوپانت','clinker':'کلینکر','pozzolan':'پوزولان',
    'hydration':'هیدراتاسیون','X-ray diffraction':'پراش پرتو ایکس',
    'scanning electron microscopy':'میکروسکوپ الکترونی روبشی',
    'differential scanning calorimetry':'کالریمتری روبشی تفاضلی'
  },
  physics:{
    'energy':'انرژی','momentum':'تکانه','angular momentum':'تکانهٔ زاویه‌ای','velocity':'سرعت',
    'acceleration':'شتاب','force':'نیرو','mass':'جرم','inertia':'اینرسی','friction':'اصطکاک',
    'torque':'گشتاور','entropy':'آنتروپی','enthalpy':'آنتالپی','quantum':'کوانتوم',
    'wave function':'تابع موج','uncertainty principle':'اصل عدم قطعیت','superposition':'برهم‌نهی',
    'entanglement':'درهم‌تنیدگی','photon':'فوتون','electron':'الکترون','proton':'پروتون',
    'neutron':'نوترون','nucleus':'هسته','spin':'اسپین','magnetic field':'میدان مغناطیسی',
    'electric field':'میدان الکتریکی','potential difference':'اختلاف پتانسیل',
    'capacitance':'ظرفیت خازنی','inductance':'اندوکتانس','resistance':'مقاومت',
    'conductivity':'رسانایی','refractive index':'ضریب شکست','wavelength':'طول موج',
    'frequency':'فرکانس','amplitude':'دامنه','polarization':'قطبش','diffraction':'پراش',
    'interference':'تداخل','relativity':'نسبیت','spacetime':'فضازمان','redshift':'انتقال به سرخ',
    'half-life':'نیمه‌عمر','cross section':'سطح مقطع','flux':'شار','thermodynamic':'ترمودینامیکی',
    'viscosity':'گرانروی','turbulence':'تلاطم','oscillation':'نوسان','resonance':'تشدید',
    'semiconductor':'نیمه‌رسانا','superconductor':'ابررسانا','plasma':'پلاسما'
  },
  chemistry:{
    'atom':'اتم','molecule':'مولکول','ion':'یون','covalent bond':'پیوند کووالانسی',
    'ionic bond':'پیوند یونی','metallic bond':'پیوند فلزی','hydrogen bond':'پیوند هیدروژنی',
    'oxidation':'اکسایش','reduction':'کاهش','catalyst':'کاتالیزور','reagent':'واکنشگر',
    'solvent':'حلال','solute':'حل‌شونده','solution':'محلول','precipitate':'رسوب',
    'titration':'تیتراسیون','molarity':'مولاریته','acid':'اسید','base':'باز','salt':'نمک',
    'equilibrium':'تعادل','kinetics':'سینتیک','activation energy':'انرژی فعال‌سازی',
    'isomer':'ایزومر','polymer':'پلیمر','monomer':'مونومر','crystallography':'بلورنگاری',
    'lattice':'شبکه','unit cell':'سلول واحد','ligand':'لیگاند','complex':'کمپلکس',
    'oxidation state':'حالت اکسایش','electronegativity':'الکترونگاتیوی','isotope':'ایزوتوپ',
    'distillation':'تقطیر','chromatography':'کروماتوگرافی','spectroscopy':'طیف‌سنجی',
    'buffer':'بافر','mole':'مول','valence':'ظرفیت','hybridization':'هیبریداسیون'
  },
  biology:{
    'cell':'سلول','membrane':'غشا','protein':'پروتئین','enzyme':'آنزیم','gene':'ژن',
    'transcription':'رونویسی','mutation':'جهش','metabolism':'متابولیسم',
    'photosynthesis':'فتوسنتز','respiration':'تنفس','tissue':'بافت','organ':'اندام',
    'organism':'ارگانیسم','bacteria':'باکتری','virus':'ویروس','antibody':'آنتی‌بادی',
    'hormone':'هورمون','neuron':'نورون','mitosis':'میتوز','meiosis':'میوز','allele':'آلل',
    'phenotype':'فنوتیپ','genotype':'ژنوتیپ','ecosystem':'بوم‌سازگان',
    'biodiversity':'تنوع زیستی','evolution':'فرگشت','species':'گونه','ribosome':'ریبوزوم',
    'mitochondria':'میتوکندری','chromosome':'کروموزوم','receptor':'گیرنده','immunity':'ایمنی'
  },
  general:{
    'introduction':'مقدمه','conclusion':'نتیجه‌گیری','chapter':'فصل','figure':'شکل',
    'table':'جدول','equation':'معادله','method':'روش','experiment':'آزمایش','result':'نتیجه',
    'discussion':'بحث','analysis':'تحلیل','sample':'نمونه','measurement':'اندازه‌گیری',
    'temperature':'دما','pressure':'فشار','density':'چگالی','volume':'حجم','surface':'سطح',
    'structure':'ساختار','property':'خواص','process':'فرآیند','parameter':'پارامتر',
    'efficiency':'بازدهی','application':'کاربرد','reference':'مرجع','abstract':'چکیده'
  }
};

const DOMAIN_INFO = {
  ceramic:'🏺 سرامیک و مواد', physics:'⚛️ فیزیک', chemistry:'🧪 شیمی',
  biology:'🧬 زیست‌شناسی', general:'📄 عمومی'
};

const DOMAIN_KEYWORDS = {
  ceramic:['ceramic','sintering','alumina','zirconia','porosity','densification','grain','microstructure','refractory','glaze','kaolin','spinel','perovskite','silica','mullite','calcination','slurry','crystallite','clinker','cement','fracture','dielectric','piezoelectric','powder','compaction'],
  physics:['quantum','momentum','velocity','acceleration','electron','photon','entropy','relativity','magnetic','electric','wavelength','frequency','diffraction','interference','thermodynamic','energy','force','mass','particle','field','spin','radiation','nucleus','plasma','oscillation'],
  chemistry:['molecule','atom','reaction','oxidation','reduction','catalyst','solvent','acid','base','polymer','covalent','ionic','equilibrium','titration','compound','solution','molar','bond','ligand','isomer','synthesis','stoichiometry'],
  biology:['cell','protein','gene','dna','rna','enzyme','membrane','organism','tissue','species','evolution','bacteria','virus','hormone','neuron','photosynthesis','metabolism','chromosome','receptor','ecosystem']
};

/* ---------- state ---------- */
const state = {
  pdf: null, fileName: '', pageCount: 0, fileHash: '',
  currentJob: null, running: false, cancelled: false,
  wakeLock: null, wakeLockWanted: false,
  settings: { mmEmail: '', deeplKey: '' }
};

/* ---------- utilities ---------- */
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeHtml = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

let toastTimer;
function toast(msg, type = '') {
  const el = $('#toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = 'toast ' + type, 3200);
}

/* ---------- IndexedDB ---------- */
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(APP.DB_NAME, 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(APP.STORE)) {
        db.createObjectStore(APP.STORE, { keyPath: 'hash' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}
async function dbGet(hash) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(APP.STORE, 'readonly').objectStore(APP.STORE).get(hash);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function dbPut(job) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).put(job);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function dbDelete(hash) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).delete(hash);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/* ---------- usage ---------- */
function loadUsage() {
  try { return JSON.parse(localStorage.getItem(APP.USAGE_KEY) || '{}'); }
  catch { return {}; }
}
function saveUsage(u) {
  try { localStorage.setItem(APP.USAGE_KEY, JSON.stringify(u)); } catch {}
}
function trackUsage(service, chars) {
  const today = new Date().toISOString().slice(0, 10);
  const month = today.slice(0, 7);
  const u = loadUsage();
  if (!u[service]) u[service] = {};
  const s = u[service];
  if (service === 'deepl') {
    if (s.month !== month) { s.month = month; s.count = 0; }
    s.count += chars;
  } else {
    if (s.day !== today) { s.day = today; s.count = 0; }
    s.count += chars;
  }
  saveUsage(u);
  updateUsageStatus();
}
function updateUsageStatus() {
  const u = loadUsage();
  const parts = [];
  if (u.deepl) parts.push(`DeepL: ${(u.deepl.count/1000).toFixed(0)}k/500k`);
  if (u.mymemory) parts.push(`MyMemory: ${u.mymemory.count.toLocaleString('fa-IR')}`);
  if (u.googleFree) parts.push(`Google: ${(u.googleFree.count/1000).toFixed(0)}k`);
  $('#usageStatus').textContent = '📊 ' + (parts.join(' · ') || 'مصرف: —');
}

/* ---------- login ---------- */
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const u = $('#username').value.trim();
  const p = $('#password').value;
  if (u === APP.USER.username && p === APP.USER.password) {
    $('#loginScreen').classList.add('hidden');
    $('#app').classList.remove('hidden');
    if (!window._init) { window._init = true; initApp(); }
    toast('خوش آمدید موسی 👋', 'success');
  } else {
    $('#loginError').classList.remove('hidden');
    $('#password').value = '';
    $('#password').focus();
  }
});
$('#logoutBtn').addEventListener('click', () => {
  if (state.running && !confirm('ترجمه در حال اجراست. مطمئنید؟ پیشرفت ذخیره می‌شود.')) return;
  location.reload();
});

/* ---------- page observer ---------- */
let pageObserver = null;

function setupPageObserver() {
  if (pageObserver) pageObserver.disconnect();
  pageObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const card = entry.target;
      const canvas = card.querySelector('canvas');
      if (!canvas) continue;
      if (entry.isIntersecting) {
        if (!card.dataset.rendered) {
          card.dataset.rendered = '1';
          renderPageCanvas(card.dataset.page, canvas).catch(err => {
            console.warn('render fail', err);
            card.dataset.rendered = '';
          });
        }
      } else if (card.dataset.rendered === '1' && canvas.width > 0) {
        canvas.width = 0; canvas.height = 0;
        card.dataset.rendered = '';
      }
    }
  }, { rootMargin: '500px 0px', threshold: 0 });
}

async function renderPageCanvas(pageNum, canvas) {
  if (!state.pdf) return;
  const page = await state.pdf.getPage(parseInt(pageNum, 10));
  const container = canvas.parentElement;
  const targetW = Math.min(900, container.clientWidth || 800);
  const baseVp = page.getViewport({ scale: 1 });
  const scale = Math.min(2, targetW / baseVp.width);
  const vp = page.getViewport({ scale });
  canvas.width = Math.round(vp.width);
  canvas.height = Math.round(vp.height);
  await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
}

/* ---------- init ---------- */
function initApp() {
  try {
    const s = JSON.parse(localStorage.getItem(APP.SETTINGS_KEY) || '{}');
    Object.assign(state.settings, s);
  } catch {}
  $('#mmEmail').value = state.settings.mmEmail || '';
  $('#deeplKey').value = state.settings.deeplKey || '';

  const dSel = $('#domainSelect'), gSel = $('#glossaryViewSelect');
  Object.entries(DOMAIN_INFO).forEach(([k, v]) => {
    dSel.innerHTML += `<option value="${k}">${v}</option>`;
    gSel.innerHTML += `<option value="${k}">${v}</option>`;
  });

  $('#pdfInput').addEventListener('change', e => {
    if (e.target.files[0]) loadPDF(e.target.files[0]);
  });
  $('#domainSelect').addEventListener('change', updateGlossary);
  $('#glossaryViewSelect').addEventListener('change', updateGlossary);
  $('#modeSelect').addEventListener('change', updateModeHint);
  $('#startBtn').addEventListener('click', startTranslation);
  $('#cancelBtn').addEventListener('click', () => { state.cancelled = true; toast('در حال لغو…'); });
  $('#copyBtn').addEventListener('click', copyOutput);
  $('#downloadTxtBtn').addEventListener('click', downloadTxt);
  $('#downloadHtmlBtn').addEventListener('click', downloadHtml);
  $('#clearJobBtn').addEventListener('click', clearCurrentJob);
  $('#wakeLockBtn').addEventListener('click', onWakeLockBtn);
  $('#settingsBtn').addEventListener('click', () => $('#settingsModal').classList.remove('hidden'));
  $('#closeSettings').addEventListener('click', () => $('#settingsModal').classList.add('hidden'));
  $('#saveSettings').addEventListener('click', saveSettings);

  window.addEventListener('online', () => { updateOnlineStatus(); toast('اتصال برقرار شد — ادامه می‌دهم', 'success'); });
  window.addEventListener('offline', () => { updateOnlineStatus(); toast('اتصال قطع شد — صبر می‌کنم', 'error'); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      updateOnlineStatus();
      if (state.wakeLockWanted && !state.wakeLock) requestWakeLock();
    }
  });

  setupPageObserver();
  updateOnlineStatus();
  updateGlossary();
  updateModeHint();
  updateUsageStatus();
}

function saveSettings() {
  state.settings.mmEmail = $('#mmEmail').value.trim();
  state.settings.deeplKey = $('#deeplKey').value.trim();
  try { localStorage.setItem(APP.SETTINGS_KEY, JSON.stringify(state.settings)); } catch {}
  $('#settingsModal').classList.add('hidden');
  toast('ذخیره شد', 'success');
}

function updateModeHint() {
  const m = $('#modeSelect').value;
  $('#modeHint').textContent = m === 'bilingual'
    ? 'هر بخش: متن اصلی انگلیسی بالا، ترجمهٔ فارسی زیر آن. مناسب یادگیری اصطلاحات.'
    : 'هر صفحه به‌صورت عکس کامل رندر می‌شود (شامل تصاویر و جداول)، سپس ترجمهٔ فارسی زیر آن.';
}

/* ---------- online ---------- */
function updateOnlineStatus() {
  const el = $('#onlineStatus');
  if (navigator.onLine) { el.textContent = '🟢 آنلاین'; el.className = 'status-pill online'; }
  else { el.textContent = '🔴 آفلاین'; el.className = 'status-pill offline'; }
}

/* ---------- wake lock ---------- */
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) { toast('Wake Lock پشتیبانی نمی‌شود', 'error'); return; }
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', () => { state.wakeLock = null; updateWakeUI(); });
    state.wakeLockWanted = true;
    updateWakeUI();
  } catch (e) { toast('Wake Lock ناموفق: ' + e.message, 'error'); }
}
async function releaseWakeLock() {
  if (state.wakeLock) { try { await state.wakeLock.release(); } catch {} state.wakeLock = null; }
  state.wakeLockWanted = false;
  updateWakeUI();
}
function updateWakeUI() {
  const on = !!state.wakeLock;
  $('#wakeLockBtn').classList.toggle('active', on);
  $('#wakeLockBtn').textContent = on ? '🔆' : '💤';
  const el = $('#wakeStatus');
  el.textContent = on ? '🔆 صفحه روشن' : '💤 Wake Lock خاموش';
  el.className = 'status-pill' + (on ? ' active' : '');
}
async function onWakeLockBtn() {
  if (state.wakeLock) await releaseWakeLock();
  else await requestWakeLock();
}

/* ---------- PDF ---------- */
async function loadPDF(file) {
  try {
    const buf = await file.arrayBuffer();
    state.pdf = await pdfjsLib.getDocument({ data: buf }).promise;
    state.fileName = file.name;
    state.pageCount = state.pdf.numPages;
    state.fileHash = `${file.name}|${file.size}|${file.lastModified}|${state.pageCount}`;

    $('#fileInfo').classList.remove('hidden');
    $('#fileInfo').innerHTML =
      `<strong>${file.name}</strong><br>${state.pageCount} صفحه • ${(file.size/1024/1024).toFixed(2)} مگابایت`;

    $('#toPage').value = Math.min(10, state.pageCount);
    $('#toPage').max = state.pageCount;
    $('#fromPage').max = state.pageCount;

    const sample = await extractPage(1) + ' ' + await extractPage(Math.min(2, state.pageCount));
    const domain = detectDomain(sample);
    $('#detectedDomain').innerHTML = `<span class="badge primary">${DOMAIN_INFO[domain]}</span>`;
    $('#domainSelect').value = domain;
    updateGlossary();

    const existing = await dbGet(state.fileHash);
    if (existing) {
      $('#clearJobBtn').classList.remove('hidden');
      $('#modeSelect').value = existing.mode || 'bilingual';
      $('#modeSelect').disabled = true;
      updateModeHint();
      updateProgressUI(existing);
      $('#progressWrap').classList.remove('hidden');
      state.currentJob = existing;
      renderOutput(existing);
      toast(`پیشرفت ذخیره‌شده: ${countDone(existing)}/${countTotal(existing)}`, 'success');
    } else {
      $('#clearJobBtn').classList.add('hidden');
      $('#modeSelect').disabled = false;
      $('#progressWrap').classList.add('hidden');
    }

    $('#domainCard').classList.remove('hidden');
    $('#runCard').classList.remove('hidden');
    toast('PDF بارگذاری شد', 'success');
  } catch (e) {
    toast('خطا در PDF: ' + e.message, 'error');
  }
}

async function extractPage(pageNum) {
  const page = await state.pdf.getPage(pageNum);
  const content = await page.getTextContent();
  return content.items.map(it => it.str + (it.hasEOL ? '\n' : ' ')).join('')
    .replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
}

function detectDomain(text) {
  const lower = ' ' + text.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ') + ' ';
  let best = 'general', max = 0;
  for (const [d, words] of Object.entries(DOMAIN_KEYWORDS)) {
    let s = 0;
    for (const w of words) {
      const m = lower.match(new RegExp('\\b' + escapeRe(w) + '\\b', 'g'));
      if (m) s += m.length;
    }
    if (s > max) { max = s; best = d; }
  }
  return max >= 3 ? best : 'general';
}

/* ---------- glossary ---------- */
function updateGlossary() {
  const d = $('#glossaryViewSelect').value;
  const g = GLOSSARIES[d] || {};
  const rows = Object.entries(g)
    .map(([en, fa]) => `<div class="g-row"><span class="g-en" dir="ltr">${escapeHtml(en)}</span><span class="g-fa">${escapeHtml(fa)}</span></div>`)
    .join('');
  $('#glossaryTable').innerHTML = rows || '<p class="muted" style="padding:12px">موردی نیست</p>';
}

function protectGlossary(text, glossary, map) {
  let out = text;
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  for (const term of terms) {
    const re = new RegExp('\\b' + escapeRe(term) + '\\b', 'gi');
    out = out.replace(re, () => {
      let entry = map.find(e => e.term === term);
      if (!entry) {
        entry = { m: `[[${map.length}]]`, t: glossary[term], term };
        map.push(entry);
      }
      return entry.m;
    });
  }
  return out;
}

/* ترجمه را برمی‌گرداند (فارسی) */
function restoreGlossary(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, i) => {
    const e = map[Number(i)];
    return (e && e.t) ? e.t : m;
  });
}

/* متن اصلی را برمی‌گرداند (انگلیسی) — جدید */
function restoreOriginal(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, i) => {
    const e = map[Number(i)];
    return (e && e.term) ? e.term : m;
  });
}

/* ---------- chunking ---------- */
function splitSentences(text) {
  const out = [];
  let buf = '';
  for (let i = 0; i < text.length; i++) {
    buf += text[i];
    if ('.!?;\n'.includes(text[i])) {
      const n = text[i + 1];
      if (n === undefined || /\s/.test(n)) { out.push(buf); buf = ''; }
    }
  }
  if (buf.trim()) out.push(buf);
  return out.map(s => s.trim()).filter(Boolean);
}

function chunkText(text, maxLen) {
  const ss = splitSentences(text);
  const chunks = [];
  let cur = '';
  for (let s of ss) {
    while (s.length > maxLen) {
      if (cur) { chunks.push(cur); cur = ''; }
      chunks.push(s.slice(0, maxLen));
      s = s.slice(maxLen);
    }
    if ((cur + ' ' + s).trim().length > maxLen) {
      if (cur) chunks.push(cur);
      cur = s;
    } else {
      cur = cur ? cur + ' ' + s : s;
    }
  }
  if (cur.trim()) chunks.push(cur);
  return chunks;
}

/* ---------- services ---------- */
async function googleFree(text) {
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q=' + encodeURIComponent(text);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Google ' + res.status);
  const data = await res.json();
  const out = data[0].map(s => s[0]).join('');
  trackUsage('googleFree', text.length);
  return out;
}
async function myMemory(text) {
  const parts = chunkText(text, 450);
  let out = '';
  for (const p of parts) {
    let url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(p) + '&langpair=en|fa';
    if (state.settings.mmEmail) url += '&de=' + encodeURIComponent(state.settings.mmEmail);
    const res = await fetch(url);
    if (!res.ok) throw new Error('MyMemory ' + res.status);
    const data = await res.json();
    if (Number(data.responseStatus) !== 200) throw new Error('سهمیه MyMemory');
    out += data.responseData.translatedText + ' ';
    await sleep(120);
  }
  trackUsage('mymemory', text.length);
  return out.trim();
}
async function libreTranslate(text) {
  const instances = ['https://libretranslate.com', 'https://translate.argosopentech.com'];
  for (const base of instances) {
    try {
      const res = await fetch(base + '/translate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, source: 'en', target: 'fa' })
      });
      if (res.ok) { const d = await res.json(); return d.translatedText; }
    } catch {}
  }
  throw new Error('LibreTranslate ناموفق');
}
async function deeplTranslate(text) {
  if (!state.settings.deeplKey) throw new Error('کلید DeepL تنظیم نشده');
  const isFree = state.settings.deeplKey.endsWith(':fx');
  const base = isFree ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  const res = await fetch(base + '/v2/translate', {
    method: 'POST',
    headers: { 'Authorization': 'DeepL-Auth-Key ' + state.settings.deeplKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: [text], source_lang: 'EN', target_lang: 'FA' })
  });
  if (!res.ok) throw new Error('DeepL ' + res.status);
  const d = await res.json();
  trackUsage('deepl', text.length);
  return d.translations[0].text;
}
async function translateWithFallback(text) {
  const order = [];
  if (state.settings.deeplKey) order.push(deeplTranslate);
  order.push(googleFree, myMemory, libreTranslate);
  let lastErr;
  for (const fn of order) {
    try { return await fn(text); }
    catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('همه ناموفق');
}

/* ---------- counters ---------- */
function countDone(job) {
  let n = 0;
  for (const p of job.pages) for (const c of p.chunks) if (c.status === 'done') n++;
  return n;
}
function countTotal(job) {
  let n = 0;
  for (const p of job.pages) n += p.chunks.length;
  return n;
}

/* ---------- main flow ---------- */
async function startTranslation() {
  if (!state.pdf) { toast('ابتدا PDF را انتخاب کنید', 'error'); return; }
  if (state.running) return;

  const from = Math.max(1, parseInt($('#fromPage').value, 10) || 1);
  const to = Math.min(state.pageCount, parseInt($('#toPage').value, 10) || 1);
  if (from > to) { toast('محدوده معتبر نیست', 'error'); return; }

  const mode = $('#modeSelect').value;
  const chunkSize = mode === 'bilingual' ? APP.CHUNK_BILINGUAL : APP.CHUNK_ORIGINAL;

  state.running = true;
  state.cancelled = false;
  $('#startBtn').classList.add('hidden');
  $('#cancelBtn').classList.remove('hidden');
  $('#progressWrap').classList.remove('hidden');
  $('#outputCard').classList.remove('hidden');
  $('#clearJobBtn').classList.add('hidden');
  $('#downloadHtmlBtn').classList.toggle('hidden', mode !== 'original');
  $('#modeSelect').disabled = true;

  try {
    let job = await dbGet(state.fileHash);

    if (job) {
      const done = countDone(job);
      const total = countTotal(job);

      if (total === 0) {
        await dbDelete(state.fileHash);
        job = null;
      } else if (done === total) {
        if (!confirm('این فایل قبلاً کامل ترجمه شده. از نو ترجمه کنم؟')) {
          state.currentJob = job;
          renderOutput(job);
          updateProgressUI(job);
          return;
        }
        await dbDelete(state.fileHash);
        job = null;
      } else if (done > 0) {
        if (!confirm(`${done}/${total} بخش قبلاً ترجمه شده. ادامه بدهم؟\n\n«لغو» = از نو`)) {
          await dbDelete(state.fileHash);
          job = null;
        }
      } else {
        await dbDelete(state.fileHash);
        job = null;
      }
    }

    if (!job) {
      setProgress(0, 'استخراج متن از PDF...');
      const glossary = GLOSSARIES[$('#domainSelect').value] || {};
      const glossaryMap = [];
      const pages = [];

      for (let p = from; p <= to; p++) {
        if (state.cancelled) break;
        const rawPage = await extractPage(p);
        if (!rawPage.trim()) {
          pages.push({ pageNum: p, chunks: [] });
          continue;
        }
        const protectedText = protectGlossary(rawPage, glossary, glossaryMap);
        const parts = chunkText(protectedText, chunkSize);
        pages.push({
          pageNum: p,
          chunks: parts.map((text, i) => ({
            id: `${p}-${i}`,
            text,
            translated: null,
            status: 'pending'
          }))
        });
        if ((p - from) % 5 === 0) {
          setProgress(Math.min(5, Math.round(((p - from + 1) / (to - from + 1)) * 5)), `استخراج صفحهٔ ${p}...`);
        }
      }

      job = {
        hash: state.fileHash, fileName: state.fileName, pageCount: state.pageCount,
        from, to, mode, domain: $('#domainSelect').value,
        glossaryMap, pages,
        createdAt: Date.now(), updatedAt: Date.now()
      };
      await dbPut(job);
      toast('متن استخراج شد — شروع ترجمه', 'success');
    }

    for (const p of job.pages) for (const c of p.chunks) {
      if (c.status === 'translating') c.status = 'pending';
    }
    await dbPut(job);

    state.currentJob = job;
    // پاک کردن خروجی قبلی برای rebuild تازه
    $('#output').innerHTML = '';
    $('#output').dataset.hash = '';
    $('#output').dataset.mode = '';
    renderOutput(job);
    updateProgressUI(job);

    if (!state.wakeLock) requestWakeLock();

    await runWorkers(job);

    if (state.cancelled) toast('لغو شد (پیشرفت ذخیره شده)', 'error');
    else {
      const failed = job.pages.flatMap(p => p.chunks).filter(c => c.status === 'failed').length;
      toast(failed ? `پایان با ${failed} خطا` : '✅ ترجمه کامل شد', failed ? 'error' : 'success');
    }
  } catch (e) {
    console.error(e);
    toast('خطا: ' + e.message, 'error');
  } finally {
    state.running = false;
    $('#startBtn').classList.remove('hidden');
    $('#cancelBtn').classList.add('hidden');
    updateUsageStatus();
  }
}

async function runWorkers(job) {
  let lastRender = 0;
  const scheduleRender = () => {
    const now = Date.now();
    if (now - lastRender > 900) {
      lastRender = now;
      renderOutput(job);
      updateProgressUI(job);
    }
  };

  const queue = [];
  for (const page of job.pages) for (const c of page.chunks) {
    if (c.status === 'pending') queue.push(c);
  }

  async function worker() {
    while (queue.length) {
      if (state.cancelled) break;
      if (!navigator.onLine) await waitForOnline();
      if (state.cancelled) break;
      const chunk = queue.shift();
      if (!chunk) break;

      chunk.status = 'translating';
      try {
        const translated = await translateWithFallback(chunk.text);
        chunk.translated = translated;
        chunk.status = 'done';
      } catch (e) {
        chunk.status = 'failed';
        chunk.error = e.message;
      }
      job.updatedAt = Date.now();
      await dbPut(job);
      scheduleRender();
    }
  }

  await Promise.all(Array.from({ length: APP.MAX_CONCURRENCY }, () => worker()));
  renderOutput(job);
  updateProgressUI(job);
}

function waitForOnline() {
  return new Promise(resolve => {
    if (navigator.onLine) return resolve();
    const handler = () => { window.removeEventListener('online', handler); clearInterval(check); resolve(); };
    const check = setInterval(() => {
      if (navigator.onLine) { window.removeEventListener('online', handler); clearInterval(check); resolve(); }
    }, 2000);
    window.addEventListener('online', handler);
  });
}

/* ---------- rendering (بهینه) ---------- */
function renderOutput(job) {
  if (!job) return;
  const output = $('#output');

  const needsRebuild =
    output.dataset.hash !== job.hash ||
    output.dataset.mode !== job.mode ||
    output.children.length === 0;

  if (needsRebuild) {
    output.innerHTML = '';
    output.dataset.hash = job.hash;
    output.dataset.mode = job.mode;

    if (job.mode === 'bilingual') {
      for (const page of job.pages) {
        if (!page.chunks.length) continue;
        output.appendChild(pageMarker(page.pageNum));
        for (const chunk of page.chunks) {
          output.appendChild(buildBilingualPair(chunk, job.glossaryMap));
        }
      }
    } else {
      setupPageObserver();
      for (const page of job.pages) {
        if (!page.chunks.length) continue;
        const card = buildOriginalPageCard(page, job.glossaryMap);
        output.appendChild(card);
        if (pageObserver) pageObserver.observe(card);
      }
    }
  } else {
    // فقط متن‌ها را به‌روزرسانی کن
    if (job.mode === 'bilingual') {
      for (const page of job.pages) {
        for (const chunk of page.chunks) {
          const el = output.querySelector(`.bilingual-pair[data-chunk-id="${chunk.id}"] .pair-translated`);
          if (el) updateBilingualTranslated(el, chunk, job.glossaryMap);
        }
      }
    } else {
      for (const page of job.pages) {
        const card = output.querySelector(`.page-card[data-page="${page.pageNum}"]`);
        if (!card) continue;
        const trans = card.querySelector('.page-translation');
        if (trans) updatePageTranslation(trans, page, job.glossaryMap);
      }
    }
  }
}

function pageMarker(num) {
  const el = document.createElement('div');
  el.className = 'page-marker';
  el.textContent = `صفحهٔ ${num}`;
  return el;
}

function buildBilingualPair(chunk, map) {
  const wrap = document.createElement('div');
  wrap.className = 'bilingual-pair';
  wrap.dataset.chunkId = chunk.id;

  const orig = document.createElement('div');
  orig.className = 'pair-original';
  orig.dir = 'ltr';
  orig.textContent = restoreOriginal(chunk.text, map); // ← انگلیسی
  wrap.appendChild(orig);

  const trans = document.createElement('div');
  trans.className = 'pair-translated';
  trans.dir = 'rtl';
  updateBilingualTranslated(trans, chunk, map);
  wrap.appendChild(trans);

  return wrap;
}

function updateBilingualTranslated(el, chunk, map) {
  el.classList.remove('error', 'pending');
  if (chunk.status === 'done') {
    el.textContent = restoreGlossary(chunk.translated, map);
  } else if (chunk.status === 'failed') {
    el.textContent = `⚠️ ${chunk.error || 'خطا'}`;
    el.classList.add('error');
  } else if (chunk.status === 'translating') {
    el.textContent = '⏳ در حال ترجمه…';
    el.classList.add('pending');
  } else {
    el.textContent = '⏸ در انتظار';
    el.classList.add('pending');
  }
}

function buildOriginalPageCard(page, map) {
  const card = document.createElement('div');
  card.className = 'page-card';
  card.dataset.page = page.pageNum;

  card.appendChild(pageMarker(page.pageNum));

  const canvas = document.createElement('canvas');
  canvas.className = 'page-canvas';
  card.appendChild(canvas);

  const trans = document.createElement('div');
  trans.className = 'page-translation';
  trans.dir = 'rtl';
  updatePageTranslation(trans, page, map);
  card.appendChild(trans);

  return card;
}

function updatePageTranslation(el, page, map) {
  if (!page.chunks.length) {
    el.textContent = '(این صفحه متن استخراج‌شدنی ندارد)';
    return;
  }
  if (page.chunks.every(c => c.status === 'done')) {
    el.textContent = page.chunks
      .map(c => restoreGlossary(c.translated || '', map))
      .join(' ');
    return;
  }
  const done = page.chunks.filter(c => c.status === 'done').length;
  const failed = page.chunks.filter(c => c.status === 'failed').length;
  if (done === 0 && failed === 0) {
    el.textContent = '⏳ در انتظار ترجمه…';
  } else {
    el.textContent = `⏳ ${done}/${page.chunks.length} بخش ترجمه شده${failed ? ` (${failed} خطا)` : ''}`;
  }
}

function updateProgressUI(job) {
  const total = countTotal(job);
  const done = countDone(job);
  const failed = job.pages.flatMap(p => p.chunks).filter(c => c.status === 'failed').length;
  const pct = total ? Math.round(((done + failed) / total) * 100) : 0;

  $('#progressBar').style.width = pct + '%';
  $('#progressText').textContent = `ترجمه: ${done + failed}/${total} بخش`;
  $('#chunkStats').textContent = `✅ موفق: ${done}   ⚠️ ناموفق: ${failed}   ⏳ در انتظار: ${total - done - failed}`;
}

function setProgress(pct, txt) {
  $('#progressBar').style.width = pct + '%';
  $('#progressText').textContent = txt;
  $('#chunkStats').textContent = '';
}

async function clearCurrentJob() {
  if (!state.fileHash) return;
  if (!confirm('ذخیرهٔ این فایل حذف شود و از نو شروع کنیم؟')) return;
  await dbDelete(state.fileHash);
  state.currentJob = null;
  $('#output').innerHTML = '';
  $('#output').dataset.hash = '';
  $('#output').dataset.mode = '';
  $('#outputCard').classList.add('hidden');
  $('#progressWrap').classList.add('hidden');
  $('#clearJobBtn').classList.add('hidden');
  $('#modeSelect').disabled = false;
  toast('ذخیره حذف شد', 'success');
}

/* ---------- output ---------- */
async function copyOutput() {
  const job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  const txt = buildPlainText(job);
  if (!txt.trim()) { toast('چیزی ترجمه نشده', 'error'); return; }
  try { await navigator.clipboard.writeText(txt); toast('کپی شد', 'success'); }
  catch { toast('کپی ناموفق', 'error'); }
}

function buildPlainText(job) {
  const lines = [];
  for (const page of job.pages) {
    if (!page.chunks.length) continue;
    lines.push(`════════ صفحهٔ ${page.pageNum} ════════`);
    lines.push('');
    for (const chunk of page.chunks) {
      if (job.mode === 'bilingual') {
        lines.push('▸ متن اصلی:');
        lines.push(restoreOriginal(chunk.text, job.glossaryMap)); // ← انگلیسی
        lines.push('');
        lines.push('▸ ترجمه:');
        lines.push(chunk.status === 'done' ? restoreGlossary(chunk.translated, job.glossaryMap) : `[${chunk.status}]`);
        lines.push('');
      } else {
        if (chunk.status === 'done') lines.push(restoreGlossary(chunk.translated, job.glossaryMap));
      }
    }
    lines.push('');
  }
  return lines.join('\n');
}

function downloadTxt() {
  const job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  const txt = buildPlainText(job);
  if (!txt.trim()) { toast('چیزی ترجمه نشده', 'error'); return; }
  const base = (job.fileName || 'translation').replace(/\.pdf$/i, '');
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tarjomeh-${job.mode}-${base}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود TXT موفق', 'success');
}

async function downloadHtml() {
  const job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  if (job.mode !== 'original') { toast('این گزینه فقط در حالت صفحهٔ اصلی', 'error'); return; }
  toast('در حال ساخت HTML با تصاویر — چند لحظه صبر…');

  const parts = [];
  parts.push('<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8">');
  parts.push(`<title>${escapeHtml(job.fileName)}</title>`);
  parts.push('<style>body{font-family:Vazirmatn,system-ui,sans-serif;max-width:900px;margin:0 auto;padding:20px;line-height:1.9;background:#f1f5fb;color:#0f172a}h3{color:#1e40af;border-bottom:2px solid #c7d7ef;padding-bottom:6px;margin-top:36px}.page{background:#fff;border-radius:12px;padding:16px;margin-bottom:20px;box-shadow:0 2px 12px rgba(0,0,0,.08)}.page img{width:100%;display:block;border-radius:8px;border:1px solid #e5e7eb}.page .trans{margin-top:16px;padding:12px;background:#f0fdf4;border-radius:8px;color:#166534;text-align:justify;font-size:14px;white-space:pre-wrap;word-wrap:break-word}.note{text-align:center;color:#64748b;font-size:13px;margin:20px 0}</style>');
  parts.push('</head><body>');
  parts.push(`<h2 style="text-align:center">${escapeHtml(job.fileName)}</h2>`);
  parts.push('<p class="note">ترجمهٔ دوزبانه — هر صفحه با تصویر اصلی و ترجمه در زیر</p>');

  for (const page of job.pages) {
    if (!page.chunks.length) continue;
    parts.push(`<div class="page"><h3>صفحهٔ ${page.pageNum}</h3>`);
    try {
      const p = await state.pdf.getPage(page.pageNum);
      const baseVp = p.getViewport({ scale: 1 });
      const scale = Math.min(1.5, 900 / baseVp.width);
      const vp = p.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.width = vp.width; canvas.height = vp.height;
      await p.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      parts.push(`<img src="${dataUrl}" alt="صفحه ${page.pageNum}">`);
    } catch (e) {
      parts.push(`<p class="note">⚠️ تصویر صفحه رندر نشد</p>`);
    }
    const text = page.chunks
      .filter(c => c.status === 'done')
      .map(c => restoreGlossary(c.translated || '', job.glossaryMap))
      .join(' ');
    parts.push(`<div class="trans">${escapeHtml(text || '(ترجمه نشده)')}</div></div>`);
  }
  parts.push('</body></html>');

  const base = (job.fileName || 'translation').replace(/\.pdf$/i, '');
  const blob = new Blob([parts.join('\n')], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tarjomeh-${base}.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود HTML موفق', 'success');
}

/* ---------- pdf.js worker ---------- */
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}