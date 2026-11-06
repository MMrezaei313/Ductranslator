'use strict';

/* ============ ۱) پیکربندی ============ */
const APP = {
  USER: { username: 'mousa', password: 'tarjomeh' },
  CHUNK_SIZE: 3000,
  MAX_CONCURRENCY: 3,
  DB_NAME: 'mousa_tx_db',
  STORE: 'jobs',
  SETTINGS_KEY: 'mousa_settings_v2',
  USAGE_KEY: 'mousa_usage_v1'
};

/* ============ ۲) واژه‌نامه ============ */
const GLOSSARIES = {
  ceramic: {
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
  physics: {
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
  chemistry: {
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
  biology: {
    'cell':'سلول','membrane':'غشا','protein':'پروتئین','enzyme':'آنزیم','gene':'ژن',
    'transcription':'رونویسی','mutation':'جهش','metabolism':'متابولیسم',
    'photosynthesis':'فتوسنتز','respiration':'تنفس','tissue':'بافت','organ':'اندام',
    'organism':'ارگانیسم','bacteria':'باکتری','virus':'ویروس','antibody':'آنتی‌بادی',
    'hormone':'هورمون','neuron':'نورون','mitosis':'میتوز','meiosis':'میوز','allele':'آلل',
    'phenotype':'فنوتیپ','genotype':'ژنوتیپ','ecosystem':'بوم‌سازگان',
    'biodiversity':'تنوع زیستی','evolution':'فرگشت','species':'گونه','ribosome':'ریبوزوم',
    'mitochondria':'میتوکندری','chromosome':'کروموزوم','receptor':'گیرنده','immunity':'ایمنی'
  },
  general: {
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

/* ============ ۳) حالت ============ */
const state = {
  pdf: null, fileName: '', pageCount: 0, fileHash: '',
  currentJob: null, running: false, cancelled: false,
  wakeLock: null, wakeLockWanted: false,
  settings: { mmEmail: '', deeplKey: '' }
};

/* ============ ۴) ابزار ============ */
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let toastTimer = null;
function toast(msg, type = '') {
  const el = $('#toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = 'toast ' + type, 3200);
}

/* ============ ۵) IndexedDB ============ */
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
    const tx = db.transaction(APP.STORE, 'readonly');
    const req = tx.objectStore(APP.STORE).get(hash);
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

/* ============ ۶) مصرف سرویس‌ها ============ */
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

/* ============ ۷) ورود ============ */
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

/* ============ ۸) راه‌اندازی ============ */
function initApp() {
  // تنظیمات
  try {
    const s = JSON.parse(localStorage.getItem(APP.SETTINGS_KEY) || '{}');
    Object.assign(state.settings, s);
  } catch {}
  $('#mmEmail').value = state.settings.mmEmail || '';
  $('#deeplKey').value = state.settings.deeplKey || '';

  // پر کردن سلکت‌ها
  const dSel = $('#domainSelect'), gSel = $('#glossaryViewSelect');
  Object.entries(DOMAIN_INFO).forEach(([k, v]) => {
    dSel.innerHTML += `<option value="${k}">${v}</option>`;
    gSel.innerHTML += `<option value="${k}">${v}</option>`;
  });

  // رویدادها
  $('#pdfInput').addEventListener('change', e => {
    if (e.target.files[0]) loadPDF(e.target.files[0]);
  });
  $('#domainSelect').addEventListener('change', updateGlossary);
  $('#glossaryViewSelect').addEventListener('change', renderGlossary);
  $('#startBtn').addEventListener('click', startTranslation);
  $('#cancelBtn').addEventListener('click', () => { state.cancelled = true; toast('در حال لغو…'); });
  $('#copyBtn').addEventListener('click', copyOutput);
  $('#downloadBtn').addEventListener('click', downloadOutput);
  $('#clearJobBtn').addEventListener('click', clearCurrentJob);
  $('#wakeLockBtn').addEventListener('click', onWakeLockBtn);
  $('#settingsBtn').addEventListener('click', () => $('#settingsModal').classList.remove('hidden'));
  $('#closeSettings').addEventListener('click', () => $('#settingsModal').classList.add('hidden'));
  $('#saveSettings').addEventListener('click', saveSettings);

  // آنلاین/آفلاین
  window.addEventListener('online', () => {
    updateOnlineStatus();
    toast('اتصال برقرار شد — ادامه می‌دهم', 'success');
  });
  window.addEventListener('offline', () => {
    updateOnlineStatus();
    toast('اتصال قطع شد — صبر می‌کنم تا برگردد', 'error');
  });

  // بازگشت به تب
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      updateOnlineStatus();
      if (state.wakeLockWanted && !state.wakeLock) requestWakeLock();
    }
  });

  updateOnlineStatus();
  updateGlossary();
  renderGlossary();
  updateUsageStatus();
}

function saveSettings() {
  state.settings.mmEmail = $('#mmEmail').value.trim();
  state.settings.deeplKey = $('#deeplKey').value.trim();
  try { localStorage.setItem(APP.SETTINGS_KEY, JSON.stringify(state.settings)); } catch {}
  $('#settingsModal').classList.add('hidden');
  toast('ذخیره شد', 'success');
}

/* ============ ۹) وضعیت آنلاین ============ */
function updateOnlineStatus() {
  const el = $('#onlineStatus');
  if (navigator.onLine) {
    el.textContent = '🟢 آنلاین';
    el.className = 'status-pill online';
  } else {
    el.textContent = '🔴 آفلاین';
    el.className = 'status-pill offline';
  }
}

/* ============ ۱۰) Wake Lock ============ */
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) {
    toast('Wake Lock پشتیبانی نمی‌شود', 'error');
    return;
  }
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', () => {
      state.wakeLock = null;
      updateWakeUI();
    });
    state.wakeLockWanted = true;
    updateWakeUI();
  } catch (e) {
    toast('Wake Lock ناموفق: ' + e.message, 'error');
  }
}
async function releaseWakeLock() {
  if (state.wakeLock) {
    try { await state.wakeLock.release(); } catch {}
    state.wakeLock = null;
  }
  state.wakeLockWanted = false;
  updateWakeUI();
}
function updateWakeUI() {
  const on = !!state.wakeLock;
  $('#wakeLockBtn').classList.toggle('active', on);
  $('#wakeLockBtn').textContent = on ? '🔆' : '💤';
  const el = $('#wakeStatus');
  el.textContent = on ? '🔆 صفحه روشن می‌ماند' : '💤 Wake Lock خاموش';
  el.className = 'status-pill' + (on ? ' active' : '');
}
async function onWakeLockBtn() {
  if (state.wakeLock) await releaseWakeLock();
  else await requestWakeLock();
}

/* ============ ۱۱) PDF و هش ============ */
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

    $('#toPage').value = state.pageCount;
    $('#toPage').max = state.pageCount;
    $('#fromPage').max = state.pageCount;

    // تشخیص حوزه
    const sample = await extractPages(1, Math.min(3, state.pageCount));
    const domain = detectDomain(sample);
    $('#detectedDomain').innerHTML =
      `<span class="badge primary">${DOMAIN_INFO[domain]}</span>`;
    $('#domainSelect').value = domain;
    updateGlossary();

    // بررسی وجود کار قبلی
    const existing = await dbGet(state.fileHash);
    if (existing) {
      const done = existing.chunks.filter(c => c.status === 'done').length;
      const total = existing.chunks.length;
      $('#clearJobBtn').classList.remove('hidden');
      $('#startBtn').textContent = 'شروع / ادامهٔ ترجمه';
      $('#progressWrap').classList.remove('hidden');
      updateProgressUI(existing);
      toast(`پیشرفت ذخیره‌شده پیدا شد: ${done}/${total}`, 'success');
    } else {
      $('#clearJobBtn').classList.add('hidden');
      $('#progressWrap').classList.add('hidden');
    }

    $('#domainCard').classList.remove('hidden');
    $('#runCard').classList.remove('hidden');
    toast('PDF بارگذاری شد', 'success');
  } catch (e) {
    toast('خطا در PDF: ' + e.message, 'error');
  }
}

async function extractPages(from, to) {
  let text = '';
  for (let i = from; i <= to; i++) {
    const page = await state.pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it => it.str + (it.hasEOL ? '\n' : ' ')).join('') + '\n\n';
  }
  return text.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
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

/* ============ ۱۲) واژه‌نامه ============ */
function updateGlossary() {
  const d = $('#domainSelect').value;
  const g = GLOSSARIES[d] || {};
  const rows = Object.entries(g)
    .map(([en, fa]) => `<div class="g-row"><span class="g-en" dir="ltr">${en}</span><span class="g-fa">${fa}</span></div>`)
    .join('');
  $('#glossaryTable').innerHTML = rows || '<p class="muted" style="padding:12px">موردی نیست</p>';
}
function renderGlossary() { updateGlossary(); }

/* ============ ۱۳) محافظت از واژه‌نامه ============ */
function protectGlossary(text, glossary) {
  const map = [];
  let out = text;
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  for (const term of terms) {
    const re = new RegExp('\\b' + escapeRe(term) + '\\b', 'gi');
    out = out.replace(re, () => {
      const i = map.length;
      map.push({ m: `[[${i}]]`, t: glossary[term] });
      return `[[${i}]]`;
    });
  }
  return { text: out, map };
}
function restoreGlossary(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, i) => map[+i] ? map[+i].t : m);
}

/* ============ ۱۴) تکه‌بندی ============ */
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

/* ============ ۱۵) سرویس‌ها ============ */
async function googleFree(text) {
  const url = 'https://translate.googleapis.com/translate_a/single'
    + '?client=gtx&sl=en&tl=fa&dt=t&q=' + encodeURIComponent(text);
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
    let url = 'https://api.mymemory.translated.net/get?q='
      + encodeURIComponent(p) + '&langpair=en|fa';
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, source: 'en', target: 'fa' })
      });
      if (res.ok) {
        const d = await res.json();
        return d.translatedText;
      }
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
    headers: {
      'Authorization': 'DeepL-Auth-Key ' + state.settings.deeplKey,
      'Content-Type': 'application/json'
    },
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
  throw lastErr || new Error('همهٔ سرویس‌ها ناموفق');
}

/* ============ ۱۶) جریان اصلی ============ */
async function startTranslation() {
  if (!state.pdf) { toast('ابتدا PDF را انتخاب کنید', 'error'); return; }
  if (state.running) return;

  const from = Math.max(1, parseInt($('#fromPage').value, 10) || 1);
  const to = Math.min(state.pageCount, parseInt($('#toPage').value, 10) || 1);
  if (from > to) { toast('محدوده معتبر نیست', 'error'); return; }

  state.running = true;
  state.cancelled = false;
  $('#startBtn').classList.add('hidden');
  $('#cancelBtn').classList.remove('hidden');
  $('#progressWrap').classList.remove('hidden');
  $('#outputCard').classList.remove('hidden');
  $('#output').textContent = '';
  $('#clearJobBtn').classList.add('hidden');

  try {
    // بررسی وجود کار قبلی
    let job = await dbGet(state.fileHash);
    let isResume = false;

    if (job && job.chunks.some(c => c.status === 'done' || c.status === 'failed')) {
      // از قبل نیمه‌تمام است
      const done = job.chunks.filter(c => c.status === 'done').length;
      const total = job.chunks.length;
      if (done > 0 && done < total) {
        const go = confirm(`پیشرفت ذخیره‌شده موجود است (${done}/${total} بخش). ادامه بدهم؟\n\n«تأیید» = ادامه، «لغو» = شروع از نو`);
        if (!go) {
          await dbDelete(state.fileHash);
          job = null;
        } else {
          isResume = true;
        }
      } else if (done === total) {
        // کامل است
        if (confirm('این فایل قبلاً کامل ترجمه شده. دوباره از نو ترجمه کنم؟')) {
          await dbDelete(state.fileHash);
          job = null;
        } else {
          state.currentJob = job;
          renderOutput();
          toast('ترجمهٔ کامل بارگذاری شد', 'success');
          return;
        }
      } else {
        job = null;
      }
    } else {
      job = null;
    }

    // اگر کار جدید است
    if (!job) {
      setProgress(0, 'در حال استخراج متن از PDF…');
      const rawText = await extractPages(from, to);
      if (!rawText || rawText.length < 50) throw new Error('متنی استخراج نشد (PDF اسکن‌شده؟)');

      const domain = $('#domainSelect').value;
      const glossary = GLOSSARIES[domain] || {};
      const { text: protectedText, map } = protectGlossary(rawText, glossary);
      const rawChunks = chunkText(protectedText, APP.CHUNK_SIZE);

      job = {
        hash: state.fileHash,
        fileName: state.fileName,
        pageCount: state.pageCount,
        domain,
        from, to,
        glossaryMap: map, // برای بازگردانی
        chunks: rawChunks.map((text, i) => ({
          index: i, text, status: 'pending', translated: null
        })),
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      await dbPut(job);
      toast(`${rawChunks.length} بخش آماده شد — شروع ترجمه`, 'success');
    } else {
      toast('ادامهٔ ترجمهٔ قبلی…', 'success');
    }

    // ریست بخش‌های گیرکرده
    job.chunks.forEach(c => {
      if (c.status === 'translating') c.status = 'pending';
    });
    await dbPut(job);

    state.currentJob = job;
    renderOutput();
    updateProgressUI(job);

    // درخواست Wake Lock
    if (!state.wakeLock) requestWakeLock();

    await runWorkers(job);

    if (state.cancelled) {
      toast('ترجمه لغو شد (پیشرفت ذخیره شده)', 'error');
    } else {
      const done = job.chunks.filter(c => c.status === 'done').length;
      const failed = job.chunks.filter(c => c.status === 'failed').length;
      toast(`پایان: ${done} موفق، ${failed} ناموفق`, failed ? 'error' : 'success');
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
    if (now - lastRender > 800) {
      lastRender = now;
      renderOutput();
      updateProgressUI(job);
    }
  };

  async function worker() {
    while (true) {
      if (state.cancelled) break;

      // اگر آفلاین است صبر کن
      if (!navigator.onLine) {
        await waitForOnline();
        if (state.cancelled) break;
      }

      const chunk = job.chunks.find(c => c.status === 'pending');
      if (!chunk) break;

      chunk.status = 'translating';
      await dbPut(job);

      try {
        const translated = await translateWithFallback(chunk.text);
        chunk.translated = translated;
        chunk.status = 'done';
      } catch (e) {
        chunk.status = 'failed';
        chunk.error = e.message;
      }

      job.updatedAt = Date.now();
      await dbPut(job); // ذخیرهٔ فوری بعد از هر بخش
      scheduleRender();
    }
  }

  const workers = Array.from({ length: APP.MAX_CONCURRENCY }, () => worker());
  await Promise.all(workers);
  renderOutput();
  updateProgressUI(job);
}

function waitForOnline() {
  return new Promise(resolve => {
    if (navigator.onLine) return resolve();
    const handler = () => {
      window.removeEventListener('online', handler);
      clearInterval(check);
      resolve();
    };
    const check = setInterval(() => {
      if (navigator.onLine) {
        window.removeEventListener('online', handler);
        clearInterval(check);
        resolve();
      }
    }, 2000);
    window.addEventListener('online', handler);
  });
}

function renderOutput() {
  if (!state.currentJob) return;
  const job = state.currentJob;
  const map = job.glossaryMap || [];

  const parts = job.chunks.map(c => {
    if (c.status === 'done' && c.translated) return restoreGlossary(c.translated, map);
    if (c.status === 'failed') return `[⚠️ بخش ${c.index + 1} ناموفق: ${c.error || ''}]`;
    if (c.status === 'translating') return `[⏳ بخش ${c.index + 1} در حال ترجمه…]`;
    return `[⏸ بخش ${c.index + 1} در انتظار]`;
  });

  $('#output').textContent = parts.join('\n\n');
  $('#outputCard').classList.remove('hidden');
}

function updateProgressUI(job) {
  const total = job.chunks.length;
  const done = job.chunks.filter(c => c.status === 'done').length;
  const failed = job.chunks.filter(c => c.status === 'failed').length;
  const pct = total ? Math.round(((done + failed) / total) * 100) : 0;

  $('#progressBar').style.width = pct + '%';
  $('#progressText').textContent = `ترجمه: ${done + failed}/${total} بخش`;
  $('#chunkStats').textContent =
    `✅ موفق: ${done}   ⚠️ ناموفق: ${failed}   ⏳ در انتظار: ${total - done - failed}`;
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
  $('#output').textContent = '';
  $('#outputCard').classList.add('hidden');
  $('#progressWrap').classList.add('hidden');
  $('#clearJobBtn').classList.add('hidden');
  toast('ذخیرهٔ قبلی حذف شد', 'success');
}

/* ============ ۱۷) خروجی ============ */
async function copyOutput() {
  const txt = state.currentJob
    ? state.currentJob.chunks
        .filter(c => c.status === 'done')
        .map(c => restoreGlossary(c.translated || '', state.currentJob.glossaryMap || []))
        .join('\n\n')
    : $('#output').textContent;
  if (!txt.trim()) { toast('متنی برای کپی نیست', 'error'); return; }
  try {
    await navigator.clipboard.writeText(txt);
    toast('کپی شد', 'success');
  } catch {
    toast('کپی ناموفق', 'error');
  }
}

function downloadOutput() {
  if (!state.currentJob) { toast('خروجی خالی', 'error'); return; }
  const done = state.currentJob.chunks.filter(c => c.status === 'done');
  if (!done.length) { toast('هنوز چیزی ترجمه نشده', 'error'); return; }

  const map = state.currentJob.glossaryMap || [];
  const txt = done.map(c => restoreGlossary(c.translated, map)).join('\n\n');

  const base = (state.fileName || 'translation').replace(/\.pdf$/i, '');
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tarjomeh-${base}-${done.length}of${state.currentJob.chunks.length}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(`دانلود شد (${done.length} بخش)`, 'success');
}

/* ============ ۱۸) راه‌اندازی pdf.js ============ */
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}
