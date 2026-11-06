'use strict';

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

/* ---------- glossaries ---------- */
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

/* ---------- mode definitions ---------- */
const MODE_DEFS = {
  pdf: [
    { value:'bilingual', label:'📝 دوزبانه — جمله‌به‌جمله', hint:'هر جمله: انگلیسی و بلافاصله فارسی.', structure:'sentence' },
    { value:'original',  label:'🖼 صفحهٔ اصلی + ترجمه', hint:'هر صفحه با عکس کامل (شامل تصویر و جدول) و ترجمه در زیر.', structure:'page' },
    { value:'text',      label:'📄 متن تمیز — پاراگرافی', hint:'پاراگراف‌های خوانا با ترجمه، بدون عکس. مناسب کتاب‌های متنی.', structure:'paragraph' }
  ],
  docx: [
    { value:'text',      label:'📄 دوزبانه Word — پاراگراف + ترجمه', hint:'هر پاراگراف انگلیسی و ترجمهٔ فارسی زیرش. خروجی .docx.', structure:'paragraph' },
    { value:'textonly',  label:'📄 متن تمیز — فقط ترجمه', hint:'فقط ترجمهٔ فارسی بدون متن اصلی. مناسب مطالعه و چاپ.', structure:'paragraph' }
  ]
};

/* ---------- state ---------- */
const state = {
  sourceType: 'pdf',
  file: null, fileName: '', fileSize: 0, fileHash: '',
  pdf: null, pageCount: 0,
  currentJob: null, running: false, cancelled: false,
  wakeLock: null, wakeLockWanted: false,
  displayStyle: 'columns',
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

/* ---------- usage ---------- */
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
  const u = loadUsage();
  const parts = [];
  if (u.deepl) parts.push(`DeepL: ${(u.deepl.count/1000).toFixed(0)}k`);
  if (u.mymemory) parts.push(`MM: ${u.mymemory.count.toLocaleString('fa-IR')}`);
  if (u.googleFree) parts.push(`G: ${(u.googleFree.count/1000).toFixed(0)}k`);
  $('#usageStatus').textContent = '📊 ' + (parts.join(' · ') || '—');
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
  if (state.running && !confirm('ترجمه در حال اجراست. پیشرفت ذخیره می‌شود. خارج شویم؟')) return;
  location.reload();
});

/* ---------- page observer for lazy rendering ---------- */
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

  const savedStyle = localStorage.getItem(APP.STYLE_KEY);
  state.displayStyle = (savedStyle === 'columns' || savedStyle === 'interlinear')
    ? savedStyle : (window.innerWidth < 900 ? 'interlinear' : 'columns');

  const dSel = $('#domainSelect'), gSel = $('#glossaryViewSelect');
  Object.entries(DOMAIN_INFO).forEach(([k, v]) => {
    dSel.innerHTML += `<option value="${k}">${v}</option>`;
    gSel.innerHTML += `<option value="${k}">${v}</option>`;
  });

  $('#fileInput').addEventListener('change', e => {
    if (e.target.files[0]) loadFile(e.target.files[0]);
  });
  $('#domainSelect').addEventListener('change', updateGlossary);
  $('#glossaryViewSelect').addEventListener('change', updateGlossary);
  $('#modeSelect').addEventListener('change', onModeChange);
  $('#startBtn').addEventListener('click', startTranslation);
  $('#cancelBtn').addEventListener('click', () => { state.cancelled = true; toast('در حال لغو…'); });
  $('#copyBtn').addEventListener('click', copyOutput);
  $('#downloadTxtBtn').addEventListener('click', downloadTxt);
  $('#downloadDocxBtn').addEventListener('click', downloadDocx);
  $('#downloadHtmlBtn').addEventListener('click', downloadHtml);
  $('#toggleOriginalBtn').addEventListener('click', toggleOriginal);
  $('#clearJobBtn').addEventListener('click', clearCurrentJob);
  $('#wakeLockBtn').addEventListener('click', onWakeLockBtn);
  $('#settingsBtn').addEventListener('click', () => $('#settingsModal').classList.remove('hidden'));
  $('#closeSettings').addEventListener('click', () => $('#settingsModal').classList.add('hidden'));
  $('#saveSettings').addEventListener('click', saveSettings);

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
  const mode = $('#modeSelect').value;
  const def = (MODE_DEFS[state.sourceType] || []).find(m => m.value === mode);
  if (def) $('#modeHint').textContent = def.hint;

  // display style only for PDF sentence mode
  const styleRow = $('#displayStyleRow');
  const isSentence = (state.sourceType === 'pdf' && mode === 'bilingual');
  styleRow.classList.toggle('hidden', !isSentence);

  // show/hide toggle original
  const isParagraph = def && def.structure === 'paragraph';
  $('#toggleOriginalBtn').classList.toggle('hidden', !isParagraph);

  // hide page range for DOCX
  $('#pageRangeRow').classList.toggle('hidden', state.sourceType === 'docx');
}

function toggleOriginal() {
  const out = $('#output');
  const isHidden = out.classList.toggle('hide-originals');
  $('#toggleOriginalBtn').textContent = isHidden ? '👁 نمایش اصل' : '👁 پنهان اصل';
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
  } catch (e) { toast('Wake Lock ناموفق', 'error'); }
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
  el.textContent = on ? '🔆 صفحه روشن' : '💤 خاموش';
  el.className = 'status-pill' + (on ? ' active' : '');
}
async function onWakeLockBtn() {
  if (state.wakeLock) await releaseWakeLock();
  else await requestWakeLock();
}

/* ---------- file loading ---------- */
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
      if (typeof pdfjsLib === 'undefined') {
        throw new Error('کتابخانهٔ pdf.js بارگذاری نشد. اتصال اینترنت را چک کنید.');
      }
      const buf = await file.arrayBuffer();
      state.pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      state.pageCount = state.pdf.numPages;
    } else {
      if (typeof mammoth === 'undefined') {
        throw new Error('کتابخانهٔ mammoth بارگذاری نشد.');
      }
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

    // detect domain
    const sample = await getSampleText();
    const domain = detectDomain(sample);
    $('#detectedDomain').innerHTML = `<span class="badge primary">${DOMAIN_INFO[domain]}</span>`;
    $('#domainSelect').value = domain;
    updateGlossary();

    populateModeSelect(type);

    // check existing job
    const existing = await dbGet(state.fileHash);
    if (existing) {
      state.currentJob = existing;
      $('#clearJobBtn').classList.remove('hidden');
      $('#progressWrap').classList.remove('hidden');
      $('#outputCard').classList.remove('hidden');
      // restore mode
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

/* ---------- extraction ---------- */
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
    if (text) {
      paragraphs.push({ id: idx++, tag: el.tagName.toLowerCase(), text });
    }
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

/* ---------- chunking ---------- */
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

function chunkBySentence(text, maxLen = APP.SENTENCE_MAX) {
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

function chunkByParagraph(text, maxLen = APP.PARAGRAPH_MAX) {
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

/* ---------- translation services ---------- */
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
    if (!res.ok) throw new Error('