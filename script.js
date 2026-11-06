'use strict';

/* ================= CONFIG ================= */
const APP = {
  USER: { username: 'mousa', password: 'tarjomeh' },
  SENTENCE_MAX: 400,
  PARAGRAPH_MAX: 2800,
  MAX_CONCURRENCY: 3,
  DB_NAME: 'mousa_tx_db',
  STORE: 'jobs',
  SETTINGS_KEY: 'mousa_settings_v3',
  USAGE_KEY: 'mousa_usage_v1',
  STYLE_KEY: 'mousa_display_style'
};

/* ================= GLOSSARIES ================= */
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

const MODE_DEFS = {
  pdf: [
    { value:'bilingual', label:'📝 دوزبانه — جمله‌به‌جمله', hint:'هر جمله: انگلیسی و بلافاصله فارسی.', structure:'sentence' },
    { value:'original',  label:'🖼 صفحهٔ اصلی + ترجمه', hint:'هر صفحه با عکس کامل و ترجمه در زیر.', structure:'page' },
    { value:'text',      label:'📄 متن تمیز — پاراگرافی', hint:'پاراگراف‌های خوانا با ترجمه، بدون عکس.', structure:'paragraph' }
  ],
  docx: [
    { value:'text',     label:'📄 دوزبانه Word — پاراگراف + ترجمه', hint:'هر پاراگراف انگلیسی و ترجمه زیرش.', structure:'paragraph' },
    { value:'textonly', label:'📄 متن تمیز — فقط ترجمه', hint:'فقط ترجمهٔ فارسی بدون متن اصلی.', structure:'paragraph' }
  ]
};

/* ================= STATE ================= */
const state = {
  sourceType: 'pdf',
  file: null, fileName: '', fileSize: 0, fileHash: '',
  pdf: null, pageCount: 0,
  currentJob: null, running: false, cancelled: false,
  wakeLock: null, wakeLockWanted: false,
  displayStyle: 'columns',
  settings: { mmEmail: '', deeplKey: '' }
};

/* ================= UTILS ================= */
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeHtml = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

let toastTimer;
function toast(msg, type = '') {
  const el = $('#toast');
  if (!el) { console.log(msg); return; }
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = 'toast ' + type, 3200);
}

/* ================= INDEXEDDB ================= */
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
  return new Promise((res, rej) => {
    const r = db.transaction(APP.STORE, 'readonly').objectStore(APP.STORE).get(hash);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function dbPut(job) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).put(job);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function dbDelete(hash) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).delete(hash);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

/* ================= USAGE ================= */
function loadUsage() {
  try { return JSON.parse(localStorage.getItem(APP.USAGE_KEY) || '{}'); }
  catch { return {}; }
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
  try { localStorage.setItem(APP.USAGE_KEY, JSON.stringify(u)); } catch {}
  updateUsageStatus();
}
function updateUsageStatus() {
  const el = $('#usageStatus');
  if (!el) return;
  const u = loadUsage();
  const parts = [];
  if (u.deepl) parts.push(`DeepL: ${(u.deepl.count/1000).toFixed(0)}k`);
  if (u.mymemory) parts.push(`MM: ${u.mymemory.count.toLocaleString('fa-IR')}`);
  if (u.googleFree) parts.push(`G: ${(u.googleFree.count/1000).toFixed(0)}k`);
  el.textContent = '📊 ' + (parts.join(' · ') || '—');
}

/* ================= LOGIN ================= */
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = $('#loginForm');
  if (!loginForm) {
    console.error('loginForm not found');
    return;
  }
  loginForm.addEventListener('submit', e => {
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

  const logoutBtn = $('#logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (state.running && !confirm('ترجمه در حال اجراست. پیشرفت ذخیره می‌شود. خارج شویم؟')) return;
      location.reload();
    });
  }

  // pdf.js worker
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  } else {
    console.warn('pdfjsLib not loaded — PDF support unavailable');
  }
  if (typeof mammoth === 'undefined') {
    console.warn('mammoth not loaded — DOCX support unavailable');
  }
});

/* ================= PAGE OBSERVER ================= */
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

/* ================= INIT APP ================= */
function initApp() {
  try {
    const s = JSON.parse(localStorage.getItem(APP.SETTINGS_KEY) || '{}');
    Object.assign(state.settings, s);
  } catch {}

  if ($('#mmEmail')) $('#mmEmail').value = state.settings.mmEmail || '';
  if ($('#deeplKey')) $('#deeplKey').value = state.settings.deeplKey || '';

  const savedStyle = localStorage.getItem(APP.STYLE_KEY);
  state.displayStyle = (savedStyle === 'columns' || savedStyle === 'interlinear')
    ? savedStyle : (window.innerWidth < 900 ? 'interlinear' : 'columns');

  const dSel = $('#domainSelect'), gSel = $('#glossaryViewSelect');
  if (dSel) {
    Object.entries(DOMAIN_INFO).forEach(([k, v]) => {
      dSel.innerHTML += `<option value="${k}">${v}</option>`;
      gSel.innerHTML += `<option value="${k}">${v}</option>`;
    });
  }

  const on = (id, ev, fn) => {
    const el = $('#' + id);
    if (el) el.addEventListener(ev, fn);
  };

  on('fileInput', 'change', e => { if (e.target.files[0]) loadFile(e.target.files[0]); });
  on('domainSelect', 'change', updateGlossary);
  on('glossaryViewSelect', 'change', updateGlossary);
  on('modeSelect', 'change', onModeChange);
  on('startBtn', 'click', startTranslation);
  on('cancelBtn', 'click', () => { state.cancelled = true; toast('در حال لغو…'); });
  on('copyBtn', 'click', copyOutput);
  on('downloadTxtBtn', 'click', downloadTxt);
  on('downloadDocxBtn', 'click', downloadDocx);
  on('downloadHtmlBtn', 'click', downloadHtml);
  on('toggleOriginalBtn', 'click', toggleOriginal);
  on('clearJobBtn', 'click', clearCurrentJob);
  on('wakeLockBtn', 'click', onWakeLockBtn);
  on('settingsBtn', 'click', () => $('#settingsModal').classList.remove('hidden'));
  on('closeSettings', 'click', () => $('#settingsModal').classList.add('hidden'));
  on('saveSettings', 'click', saveSettings);

  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => setDisplayStyle(btn.dataset.style));
  });
  updateStyleButtons();

  window.addEventListener('online', () => { updateOnlineStatus(); toast('اتصال برقرار شد', 'success'); });
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
  updateUsageStatus();
}

function saveSettings() {
  state.settings.mmEmail = $('#mmEmail').value.trim();
  state.settings.deeplKey = $('#deeplKey').value.trim();
  try { localStorage.setItem(APP.SETTINGS_KEY, JSON.stringify(state.settings)); } catch {}
  $('#settingsModal').classList.add('hidden');
  toast('ذخیره شد', 'success');
}

function setDisplayStyle(style) {
  state.displayStyle = style;
  try { localStorage.setItem(APP.STYLE_KEY, style); } catch {}
  updateStyleButtons();
  if (state.currentJob && state.currentJob.structure === 'sentence') {
    const out = $('#output');
    out.dataset.hash = '';
    out.dataset.mode = '';
    renderOutput(state.currentJob);
  }
}
function updateStyleButtons() {
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.style === state.displayStyle);
  });
}
function onModeChange() {
  const mode = $('#modeSelect') ? $('#modeSelect').value : '';
  const def = (MODE_DEFS[state.sourceType] || []).find(m => m.value === mode);
  if (def && $('#modeHint')) $('#modeHint').textContent = def.hint;

  const styleRow = $('#displayStyleRow');
  const isSentence = (state.sourceType === 'pdf' && mode === 'bilingual');
  if (styleRow) styleRow.classList.toggle('hidden', !isSentence);

  const isParagraph = def && def.structure === 'paragraph';
  const toggleBtn = $('#toggleOriginalBtn');
  if (toggleBtn) toggleBtn.classList.toggle('hidden', !isParagraph);

  const pageRange = $('#pageRangeRow');
  if (pageRange) pageRange.classList.toggle('hidden', state.sourceType === 'docx');
}
function toggleOriginal() {
  const out = $('#output');
  const isHidden = out.classList.toggle('hide-originals');
  $('#toggleOriginalBtn').textContent = isHidden ? '👁 نمایش اصل' : '👁 پنهان اصل';
}

/* ================= ONLINE / WAKE LOCK ================= */
function updateOnlineStatus() {
  const el = $('#onlineStatus');
  if (!el) return;
  if (navigator.onLine) { el.textContent = '🟢 آنلاین'; el.className = 'status-pill online'; }
  else { el.textContent = '🔴 آفلاین'; el.className = 'status-pill offline'; }
}
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) { toast('Wake Lock پشتیبانی نمی‌شود', 'error'); return; }
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', () => { state.wakeLock = null; updateWakeUI(); });
    state.wakeLockWanted = true;
    updateWakeUI();
  } catch (e) { toast('Wake Lock ناموفق', 'error'); }
}
async function releaseWakeLock() {
  if (state.wakeLock) { try { await state.wakeLock.release(); } catch {} state.wakeLock = null; }
  state.wakeLockWanted = false;
  updateWakeUI();
}
function updateWakeUI() {
  const on = !!state.wakeLock;
  const btn = $('#wakeLockBtn');
  const el = $('#wakeStatus');
  if (btn) {
    btn.classList.toggle('active', on);
    btn.textContent = on ? '🔆' : '💤';
  }
  if (el) {
    el.textContent = on ? '🔆 صفحه روشن' : '💤 خاموش';
    el.className = 'status-pill' + (on ? ' active' : '');
  }
}
async function onWakeLockBtn() {
  if (state.wakeLock) await releaseWakeLock();
  else await requestWakeLock();
}

/* ================= FILE LOADING ================= */
function detectFileType(file) {
  const n = file.name.toLowerCase();
  if (n.endsWith('.pdf') || file.type === 'application/pdf') return 'pdf';
  if (n.endsWith('.docx') || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
  return null;
}

async function loadFile(file) {
  const type = detectFileType(file);
  if (!type) { toast('فقط PDF یا DOCX پشتیبانی می‌شود', 'error'); return; }

  try {
    if (type === 'pdf') {
      if (typeof pdfjsLib === 'undefined') throw new Error('pdf.js بارگذاری نشد');
      const buf = await file.arrayBuffer();
      state.pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      state.pageCount = state.pdf.numPages;
    } else {
      if (typeof mammoth === 'undefined') throw new Error('mammoth بارگذاری نشد');
      state.pdf = null;
      state.pageCount = 0;
    }

    state.sourceType = type;
    state.file = file;
    state.fileName = file.name;
    state.fileSize = file.size;
    state.fileHash = `${type}|${file.name}|${file.size}|${file.lastModified}`;

    const infoEl = $('#fileInfo');
    infoEl.classList.remove('hidden');
    if (type === 'pdf') {
      infoEl.innerHTML = `<strong>📕 ${file.name}</strong><br>${state.pageCount} صفحه • ${(file.size/1024/1024).toFixed(2)} مگابایت`;
    } else {
      infoEl.innerHTML = `<strong>📘 ${file.name}</strong><br>Word • ${(file.size/1024/1024).toFixed(2)} مگابایت`;
    }

    if (type === 'pdf') {
      $('#toPage').value = Math.min(10, state.pageCount);
      $('#toPage').max = state.pageCount;
      $('#fromPage').max = state.pageCount;
    }

    const sample = await getSampleText();
    const domain = detectDomain(sample);
    $('#detectedDomain').innerHTML = `<span class="badge primary">${DOMAIN_INFO[domain]}</span>`;
    $('#domainSelect').value = domain;
    updateGlossary();

    populateModeSelect(type);

    const existing = await dbGet(state.fileHash);
    if (existing) {
      state.currentJob = existing;
      $('#clearJobBtn').classList.remove('hidden');
      $('#progressWrap').classList.remove('hidden');
      $('#outputCard').classList.remove('hidden');
      if (existing.mode) $('#modeSelect').value = existing.mode;
      if (existing.displayStyle) {
        state.displayStyle = existing.displayStyle;
        updateStyleButtons();
      }
      onModeChange();
      updateProgressUI(existing);
      renderOutput(existing);
      toast(`پیشرفت ذخیره: ${countDone(existing)}/${countTotal(existing)}`, 'success');
    } else {
      $('#clearJobBtn').classList.add('hidden');
      $('#progressWrap').classList.add('hidden');
    }

    $('#domainCard').classList.remove('hidden');
    $('#runCard').classList.remove('hidden');
    toast('فایل بارگذاری شد', 'success');
  } catch (e) {
    console.error(e);
    toast('خطا: ' + e.message, 'error');
  }
}

async function getSampleText() {
  if (state.sourceType === 'pdf' && state.pdf) {
    const p1 = await extractPage(1);
    const p2 = state.pageCount > 1 ? await extractPage(2) : '';
    return p1 + ' ' + p2;
  }
  if (state.sourceType === 'docx') {
    const paras = await extractDocxParagraphs(state.file);
    return paras.slice(0, 10).map(p => p.text).join(' ');
  }
  return '';
}

function populateModeSelect(type) {
  const sel = $('#modeSelect');
  sel.innerHTML = '';
  const defs = MODE_DEFS[type] || MODE_DEFS.pdf;
  for (const d of defs) {
    const opt = document.createElement('option');
    opt.value = d.value;
    opt.textContent = d.label;
    sel.appendChild(opt);
  }
  onModeChange();
}

/* ================= EXTRACTION ================= */
async function extractPage(pageNum) {
  const page = await state.pdf.getPage(pageNum);
  const content = await page.getTextContent();
  return content.items.map(it => it.str + (it.hasEOL ? '\n' : ' ')).join('')
    .replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
}

async function extractDocxParagraphs(file) {
  if (typeof mammoth === 'undefined') throw new Error('mammoth بارگذاری نشد');
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.convertToHtml({ arrayBuffer });
  const parser = new DOMParser();
  const doc = parser.parseFromString(result.value, 'text/html');
  const paragraphs = [];
  let idx = 0;
  doc.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote').forEach(el => {
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (text) paragraphs.push({ id: idx++, tag: el.tagName.toLowerCase(), text });
  });
  return paragraphs;
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

/* ================= GLOSSARY ================= */
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
function restoreGlossary(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, i) => {
    const e = map[Number(i)];
    return (e && e.t) ? e.t : m;
  });
}
function restoreOriginal(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, i) => {
    const e = map[Number(i)];
    return (e && e.term) ? e.term : m;
  });
}

/* ================= CHUNKING ================= */
const ABBREVIATIONS = ['Fig','Eq','e.g','i.e','vs','et al','Dr','Mr','Ms','Mrs','Prof','Inc','Ltd','Co','No','Vol','pp','cf'];

function protectAbbrev(text) {
  let out = text;
  for (const ab of ABBREVIATIONS) {
    const re = new RegExp('\\b' + escapeRe(ab) + '\\.', 'g');
    out = out.replace(re, m => m.replace(/\./g, '§'));
  }
  return out;
}
function unprotectAbbrev(text) { return text.replace(/§/g, '.'); }

function chunkBySentence(text, maxLen) {
  if (!maxLen) maxLen = APP.SENTENCE_MAX;
  const prot = protectAbbrev(text);
  const raw = prot.split(/(?<=[.!?])\s+(?=[A-Z\u0600-\u06FF])|\n+/);
  const out = [];
  for (let s of raw) {
    s = unprotectAbbrev(s).trim();
    if (!s) continue;
    while (s.length > maxLen) {
      let idx = s.lastIndexOf(' ', maxLen);
      if (idx < maxLen * 0.35) idx = maxLen;
      out.push(s.slice(0, idx).trim());
      s = s.slice(idx).trim();
    }
    if (s) out.push(s);
  }
  return out;
}

function chunkByParagraph(text, maxLen) {
  if (!maxLen) maxLen = APP.PARAGRAPH_MAX;
  if (text.length <= maxLen) return [text];
  const sentences = chunkBySentence(text, maxLen * 0.9);
  const chunks = [];
  let cur = '';
  for (const s of sentences) {
    if ((cur + ' ' + s).trim().length > maxLen && cur) {
      chunks.push(cur);
      cur = s;
    } else {
      cur = cur ? cur + ' ' + s : s;
    }
  }
  if (cur.trim()) chunks.push(cur);
  return chunks;
}

/* ================= SERVICES ================= */
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
  const parts = chunkBySentence(text, 450);
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
  throw lastErr || new Error('همه ناموفق');
}

/* ================= COUNTERS ================= */
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

/* ================= MAIN FLOW ================= */
async function startTranslation() {
  if (!state.file) { toast('ابتدا فایل را انتخاب کنید', 'error'); return; }
  if (state.running) return;

  const mode = $('#modeSelect').value;
  const structure = (MODE_DEFS[state.sourceType].find(m => m.value === mode) || {}).structure || 'sentence';

  let from = 1, to = 1;
  if (state.sourceType === 'pdf') {
    from = Math.max(1, parseInt($('#fromPage').value, 10) || 1);
    to = Math.min(state.pageCount, parseInt($('#toPage').value, 10) || 1);
    if (from > to) { toast('محدوده معتبر نیست', 'error'); return; }
  }

  state.running = true;
  state.cancelled = false;
  $('#startBtn').classList.add('hidden');
  $('#cancelBtn').classList.remove('hidden');
  $('#progressWrap').classList.remove('hidden');
  $('#outputCard').classList.remove('hidden');
  $('#clearJobBtn').classList.add('hidden');
  $('#downloadDocxBtn').classList.toggle('hidden', structure !== 'paragraph');
  $('#downloadHtmlBtn').classList.toggle('hidden', mode !== 'original');

  try {
    let job = await dbGet(state.fileHash);

    if (job && job.mode !== mode) {
      if (!confirm('این فایل با حالت دیگری ذخیره شده. حذف و از نو شروع شود؟')) {
        state.running = false;
        $('#startBtn').classList.remove('hidden');
        $('#cancelBtn').classList.add('hidden');
        return;
      }
      await dbDelete(state.fileHash);
      job = null;
    }

    if (job) {
      const done = countDone(job);
      const total = countTotal(job);
      if (total === 0 || done === total) {
        if (done === total && !confirm('قبلاً کامل ترجمه شده. از نو؟')) {
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
      }
    }

    if (!job) {
      setProgress(0, 'استخراج متن...');
      const glossary = GLOSSARIES[$('#domainSelect').value] || {};
      const glossaryMap = [];
      const pages = [];

      if (state.sourceType === 'pdf') {
        for (let p = from; p <= to; p++) {
          if (state.cancelled) break;
          const rawPage = await extractPage(p);
          if (!rawPage.trim()) { pages.push({ pageNum: p, chunks: [] }); continue; }
          const protectedText = protectGlossary(rawPage, glossary, glossaryMap);
          let parts;
          if (structure === 'sentence') parts = chunkBySentence(protectedText);
          else parts = chunkByParagraph(protectedText);
          pages.push({
            pageNum: p,
            chunks: parts.map((text, i) => ({
              id: `${p}-${i}`, text, translated: null, status: 'pending'
            }))
          });
          if ((p - from) % 5 === 0) {
            setProgress(Math.min(5, Math.round(((p - from + 1) / (to - from + 1)) * 5)), `استخراج صفحهٔ ${p}...`);
          }
        }
      } else {
        // DOCX
        const paras = await extractDocxParagraphs(state.file);
        const chunks = paras.map((para, i) => {
          const prot = protectGlossary(para.text, glossary, glossaryMap);
          return {
            id: `p-${i}`, tag: para.tag,
            text: prot, translated: null, status: 'pending'
          };
        });
        pages.push({ pageNum: 1, chunks });
      }

      job = {
        hash: state.fileHash, fileName: state.fileName,
        sourceType: state.sourceType, pageCount: state.pageCount,
        from, to, mode, structure,
        displayStyle: state.displayStyle,
        domain: $('#domainSelect').value,
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

/* ================= RENDER ================= */
function renderOutput(job) {
  if (!job) return;
  const output = $('#output');
  const style = (job.structure === 'sentence') ? (state.displayStyle || job.displayStyle || 'columns') : job.structure;

  const needsRebuild =
    output.dataset.hash !== job.hash ||
    output.dataset.mode !== (job.mode + ':' + style) ||
    output.children.length === 0;

  if (needsRebuild) {
    output.innerHTML = '';
    output.dataset.hash = job.hash;
    output.dataset.mode = job.mode + ':' + style;

    if (job.structure === 'sentence') {
      for (const page of job.pages) {
        if (!page.chunks.length) continue;
        output.appendChild(pageMarker(page.pageNum));
        for (const chunk of page.chunks) {
          output.appendChild(buildSentencePair(chunk, job.glossaryMap, style));
        }
      }
    } else if (job.structure === 'page') {
      setupPageObserver();
      for (const page of job.pages) {
        if (!page.chunks.length) continue;
        const card = buildPageCard(page, job.glossaryMap);
        output.appendChild(card);
        if (pageObserver) pageObserver.observe(card);
      }
    } else {
      // paragraph
      const wrap = document.createElement('div');
      wrap.className = 'paragraphs-container';
      const hideOriginal = (job.mode === 'textonly');
      if (hideOriginal) output.classList.add('hide-originals');
      else output.classList.remove('hide-originals');
      for (const page of job.pages) {
        for (const chunk of page.chunks) {
          wrap.appendChild(buildParagraphCard(chunk, job.glossaryMap, job.mode));
        }
      }
      output.appendChild(wrap);
    }
  } else {
    if (job.structure === 'sentence') {
      for (const page of job.pages) for (const chunk of page.chunks) {
        const el = output.querySelector(`.sentence-pair[data-chunk-id="${chunk.id}"] .s-fa`);
        if (el) updateFa(el, chunk, job.glossaryMap);
      }
    } else if (job.structure === 'page') {
      for (const page of job.pages) {
        const card = output.querySelector(`.page-card[data-page="${page.pageNum}"]`);
        if (!card) continue;
        const trans = card.querySelector('.page-translation');
        if (trans) updatePageTranslation(trans, page, job.glossaryMap);
      }
    } else {
      for (const page of job.pages) for (const chunk of page.chunks) {
        const el = output.querySelector(`.paragraph-card[data-chunk-id="${chunk.id}"] .dp-translation`);
        if (el) updateParagraphTranslation(el, chunk, job.glossaryMap);
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

function buildSentencePair(chunk, map, style) {
  const wrap = document.createElement('div');
  wrap.className = 'sentence-pair ' + style;
  wrap.dataset.chunkId = chunk.id;
  const en = document.createElement('div');
  en.className = 's-en';
  en.dir = 'ltr';
  en.textContent = restoreOriginal(chunk.text, map);
  wrap.appendChild(en);
  const fa = document.createElement('div');
  fa.className = 's-fa';
  fa.dir = 'rtl';
  updateFa(fa, chunk, map);
  wrap.appendChild(fa);
  return wrap;
}

function updateFa(el, chunk, map) {
  el.classList.remove('error', 'pending');
  if (chunk.status === 'done') el.textContent = restoreGlossary(chunk.translated, map);
  else if (chunk.status === 'failed') { el.textContent = `⚠️ ${chunk.error || 'خطا'}`; el.classList.add('error'); }
  else if (chunk.status === 'translating') { el.textContent = '⏳ در حال ترجمه…'; el.classList.add('pending'); }
  else { el.textContent = '⏸ در انتظار'; el.classList.add('pending'); }
}

function buildPageCard(page, map) {
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
  if (!page.chunks.length) { el.textContent = '(بدون متن استخراج‌شدنی)'; return; }
  if (page.chunks.every(c => c.status === 'done')) {
    el.textContent = page.chunks.map(c => restoreGlossary(c.translated || '', map)).join(' ');
    return;
  }
  const done = page.chunks.filter(c => c.status === 'done').length;
  const failed = page.chunks.filter(c => c.status === 'failed').length;
  if (done === 0 && failed === 0) el.textContent = '⏳ در انتظار ترجمه…';
  else el.textContent = `⏳ ${done}/${page.chunks.length} ترجمه شده${failed ? ` (${failed} خطا)` : ''}`;
}

function buildParagraphCard(chunk, map, mode) {
  const card = document.createElement('div');
  card.className = 'paragraph-card';
  card.dataset.chunkId = chunk.id;
  card.dataset.tag = chunk.tag || 'p';

  const orig = document.createElement('div');
  orig.className = 'dp-original';
  orig.dir = 'ltr';
  orig.textContent = restoreOriginal(chunk.text, map);
  card.appendChild(orig);

  const trans = document.createElement('div');
  trans.className = 'dp-translation';
  trans.dir = 'rtl';
  updateParagraphTranslation(trans, chunk, map);
  card.appendChild(trans);

  return card;
}

function updateParagraphTranslation(el, chunk, map) {
  el.classList.remove('error', 'pending');
  if (chunk.status === 'done') el.textContent = restoreGlossary(chunk.translated, map);
  else if (chunk.status === 'failed') { el.textContent = `⚠️ ${chunk.error || 'خطا'}`; el.classList.add('error'); }
  else if (chunk.status === 'translating') { el.textContent = '⏳ در حال ترجمه…'; el.classList.add('pending'); }
  else { el.textContent = '⏸ در انتظار'; el.classList.add('pending'); }
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
  if (!confirm('ذخیرهٔ این فایل حذف شود؟')) return;
  await dbDelete(state.fileHash);
  state.currentJob = null;
  $('#output').innerHTML = '';
  $('#output').dataset.hash = '';
  $('#output').dataset.mode = '';
  $('#outputCard').classList.add('hidden');
  $('#progressWrap').classList.add('hidden');
  $('#clearJobBtn').classList.add('hidden');
  toast('ذخیره حذف شد', 'success');
}

/* ================= OUTPUT: TXT / DOCX / HTML ================= */
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
    if (job.structure === 'page' || job.structure === 'sentence') {
      lines.push(`════════ صفحهٔ ${page.pageNum} ════════`);
      lines.push('');
    }
    for (const chunk of page.chunks) {
      if (job.mode === 'textonly') {
        if (chunk.status === 'done') { lines.push(restoreGlossary(chunk.translated, job.glossaryMap)); lines.push(''); }
      } else if (job.structure === 'sentence') {
        lines.push('▸ ' + restoreOriginal(chunk.text, job.glossaryMap));
        lines.push('▸ ' + (chunk.status === 'done' ? restoreGlossary(chunk.translated, job.glossaryMap) : `[${chunk.status}]`));
        lines.push('');
      } else if (job.structure === 'paragraph') {
        lines.push(restoreOriginal(chunk.text, job.glossaryMap));
        lines.push('');
        lines.push(chunk.status === 'done' ? restoreGlossary(chunk.translated, job.glossaryMap) : `[${chunk.status}]`);
        lines.push('');
        lines.push('—'.repeat(20));
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
  const base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tarjomeh-${base}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود TXT موفق', 'success');
}

async function downloadDocx() {
  const job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  if (typeof docx === 'undefined') { toast('docx.js بارگذاری نشد', 'error'); return; }

  toast('در حال ساخت فایل Word...');
  try {
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;

    const children = [];
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: job.fileName, bold: true, size: 32 })]
    }));
    children.push(new Paragraph({ text: '' }));

    for (const page of job.pages) {
      for (const chunk of page.chunks) {
        if (chunk.status !== 'done') continue;

        // Original (skip if textonly)
        if (job.mode !== 'textonly') {
          const origText = restoreOriginal(chunk.text, job.glossaryMap);
          children.push(new Paragraph({
            children: [new TextRun({
              text: origText,
              color: '666666',
              italics: true,
              size: 22
            })],
            spacing: { before: 200, after: 80 }
          }));
        }

        // Translation
        const transText = restoreGlossary(chunk.translated, job.glossaryMap);
        children.push(new Paragraph({
          children: [new TextRun({
            text: transText,
            size: 26,
            rightToLeft: true
          })],
          alignment: AlignmentType.RIGHT,
          spacing: { before: 80, after: 200 }
        }));

        if (job.mode !== 'textonly') {
          children.push(new Paragraph({
            children: [new TextRun({ text: '· · ·', color: 'cccccc' })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 100, after: 100 }
          }));
        }
      }
    }

    const doc = new Document({
      creator: 'Mousa Translator',
      sections: [{ properties: {}, children }]
    });

    const blob = await Packer.toBlob(doc);
    const base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tarjomeh-${base}.docx`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    toast('دانلود DOCX موفق', 'success');
  } catch (e) {
    console.error(e);
    toast('خطا در ساخت Word: ' + e.message, 'error');
  }
}

async function downloadHtml() {
  const job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  if (job.mode !== 'original') { toast('فقط در حالت صفحهٔ اصلی', 'error'); return; }
  toast('در حال ساخت HTML...');

  const parts = [];
  parts.push('<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8">');
  parts.push(`<title>${escapeHtml(job.fileName)}</title>`);
  parts.push('<style>body{font-family:Vazirmatn,system-ui,sans-serif;max-width:900px;margin:0 auto;padding:20px;line-height:1.9;background:#f1f5fb}h3{color:#1e40af}.page{background:#fff;border-radius:12px;padding:16px;margin-bottom:20px}.page img{width:100%;border-radius:8px}.trans{margin-top:16px;padding:12px;background:#f0fdf4;border-radius:8px;color:#166534;text-align:justify;white-space:pre-wrap}</style>');
  parts.push('</head><body>');
  parts.push(`<h2 style="text-align:center">${escapeHtml(job.fileName)}</h2>`);

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
      parts.push(`<img src="${canvas.toDataURL('image/jpeg', 0.85)}">`);
    } catch {}
    const text = page.chunks.filter(c => c.status === 'done').map(c => restoreGlossary(c.translated || '', job.glossaryMap)).join(' ');
    parts.push(`<div class="trans">${escapeHtml(text || '(ترجمه نشده)')}</div></div>`);
  }
  parts.push('</body></html>');

  const base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
  const blob = new Blob([parts.join('\n')], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tarjomeh-${base}.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود HTML موفق', 'success');
}