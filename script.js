'use strict';

/* ================= CONFIG ================= */
var APP = {
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
var GLOSSARIES = {
  ceramic:{
    'sintering':'زینتر کردن','sintered':'زینترشده','densification':'چگالش',
    'porosity':'تخلخل','porous':'متخلخل','grain boundary':'مرز دانه','grain growth':'رشد دانه',
    'grain size':'اندازهٔ دانه','microstructure':'ریزساختار','amorphous':'آمورف',
    'phase transformation':'تبدیل فاز','phase diagram':'نمودار فاز','solid solution':'محلول جامد',
    'eutectic':'یوتکتیک','calcination':'کلسیناسیون','green body':'بدنهٔ خام',
    'slip casting':'ریخته‌گری دوغابی','sol-gel':'سل-ژل',
    'dielectric constant':'ثابت دی‌الکتریک','piezoelectric':'پیزوالکتریک',
    'ferroelectric':'فروالکتریک','fracture toughness':'چقرمگی شکست',
    'bending strength':'استحکام خمشی','flexural strength':'استحکام خمشی',
    'compressive strength':'استحکام فشاری','refractory':'دیرگداز','glaze':'لعاب',
    'kaolin':'کائولن','alumina':'آلومینا','zirconia':'زیرکونیا','silica':'سیلیس',
    'silicon carbide':'کاربید سیلیسیم','silicon nitride':'نیترید سیلیسیم',
    'spinel':'اسپینل','perovskite':'پروسکایت','mullite':'مولایت',
    'thermal expansion':'انبساط حرارتی','thermal conductivity':'رسانش گرمایی',
    'creep':'خزش','wear resistance':'مقاومت به سایش','corrosion':'خوردگی',
    'binder':'چسباننده','slurry':'دوغاب','suspension':'سوسپانسیون',
    'particle size distribution':'توزیع اندازهٔ ذرات','specific surface area':'سطح ویژه',
    'stoichiometry':'استوکیومتری','vacancy':'جای خالی','dislocation':'نابجایی',
    'dopant':'دوپانت','clinker':'کلینکر','pozzolan':'پوزولان','hydration':'هیدراتاسیون',
    'X-ray diffraction':'پراش پرتو ایکس',
    'scanning electron microscopy':'میکروسکوپ الکترونی روبشی'
  },
  physics:{
    'energy':'انرژی','momentum':'تکانه','angular momentum':'تکانهٔ زاویه‌ای',
    'velocity':'سرعت','acceleration':'شتاب','force':'نیرو','mass':'جرم',
    'inertia':'اینرسی','friction':'اصطکاک','torque':'گشتاور','entropy':'آنتروپی',
    'enthalpy':'آنتالپی','quantum':'کوانتوم','wave function':'تابع موج',
    'uncertainty principle':'اصل عدم قطعیت','superposition':'برهم‌نهی',
    'entanglement':'درهم‌تنیدگی','photon':'فوتون','electron':'الکترون','proton':'پروتون',
    'neutron':'نوترون','nucleus':'هسته','spin':'اسپین','magnetic field':'میدان مغناطیسی',
    'electric field':'میدان الکتریکی','potential difference':'اختلاف پتانسیل',
    'capacitance':'ظرفیت خازنی','inductance':'اندوکتانس','resistance':'مقاومت',
    'conductivity':'رسانایی','refractive index':'ضریب شکست','wavelength':'طول موج',
    'frequency':'فرکانس','amplitude':'دامنه','polarization':'قطبش','diffraction':'پراش',
    'interference':'تداخل','relativity':'نسبیت','spacetime':'فضازمان',
    'half-life':'نیمه‌عمر','cross section':'سطح مقطع','flux':'شار',
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
    'isomer':'ایزومر','polymer':'پلیمر','monomer':'مونومر','lattice':'شبکه',
    'unit cell':'سلول واحد','ligand':'لیگاند','complex':'کمپلکس',
    'electronegativity':'الکترونگاتیوی','isotope':'ایزوتوپ','distillation':'تقطیر',
    'chromatography':'کروماتوگرافی','spectroscopy':'طیف‌سنجی','buffer':'بافر'
  },
  biology:{
    'cell':'سلول','membrane':'غشا','protein':'پروتئین','enzyme':'آنزیم','gene':'ژن',
    'transcription':'رونویسی','mutation':'جهش','metabolism':'متابولیسم',
    'photosynthesis':'فتوسنتز','respiration':'تنفس','tissue':'بافت','organ':'اندام',
    'organism':'ارگانیسم','bacteria':'باکتری','virus':'ویروس','antibody':'آنتی‌بادی',
    'hormone':'هورمون','neuron':'نورون','mitosis':'میتوز','meiosis':'میوز','allele':'آلل',
    'phenotype':'فنوتیپ','genotype':'ژنوتیپ','ecosystem':'بوم‌سازگان',
    'evolution':'فرگشت','species':'گونه','ribosome':'ریبوزوم',
    'mitochondria':'میتوکندری','chromosome':'کروموزوم','receptor':'گیرنده'
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

var DOMAIN_INFO = {
  ceramic:'🏺 سرامیک و مواد', physics:'⚛️ فیزیک', chemistry:'🧪 شیمی',
  biology:'🧬 زیست‌شناسی', general:'📄 عمومی'
};

var DOMAIN_KEYWORDS = {
  ceramic:['ceramic','sintering','alumina','zirconia','porosity','densification','grain','microstructure','refractory','glaze','kaolin','spinel','perovskite','silica','mullite','calcination','slurry','crystallite','clinker','cement','fracture','dielectric','piezoelectric','powder','compaction'],
  physics:['quantum','momentum','velocity','acceleration','electron','photon','entropy','relativity','magnetic','electric','wavelength','frequency','diffraction','interference','thermodynamic','energy','force','mass','particle','field','spin','radiation','nucleus','plasma','oscillation'],
  chemistry:['molecule','atom','reaction','oxidation','reduction','catalyst','solvent','acid','base','polymer','covalent','ionic','equilibrium','titration','compound','solution','molar','bond','ligand','isomer','synthesis','stoichiometry'],
  biology:['cell','protein','gene','dna','rna','enzyme','membrane','organism','tissue','species','evolution','bacteria','virus','hormone','neuron','photosynthesis','metabolism','chromosome','receptor','ecosystem']
};

var MODE_DEFS = {
  pdf: [
    { value:'bilingual', label:'📝 دوزبانه — جمله‌به‌جمله', hint:'هر جمله: انگلیسی و بلافاصله فارسی.', structure:'sentence' },
    { value:'original',  label:'🖼 صفحهٔ اصلی + ترجمه', hint:'هر صفحه با عکس کامل و ترجمه در زیر.', structure:'page' },
    { value:'text',      label:'📄 متن تمیز — پاراگرافی', hint:'پاراگراف‌های خوانا با ترجمه.', structure:'paragraph' }
  ],
  docx: [
    { value:'text',     label:'📄 دوزبانه — پاراگراف + ترجمه', hint:'هر پاراگراف انگلیسی و ترجمه زیرش.', structure:'paragraph' },
    { value:'textonly', label:'📄 فقط ترجمه', hint:'فقط ترجمهٔ فارسی.', structure:'paragraph' }
  ]
};

/* ================= STATE ================= */
var state = {
  sourceType: 'pdf',
  file: null, fileName: '', fileSize: 0, fileHash: '',
  pdf: null, pageCount: 0,
  currentJob: null, running: false, cancelled: false,
  wakeLock: null, wakeLockWanted: false,
  displayStyle: 'columns',
  settings: { mmEmail: '', deeplKey: '' }
};

/* ================= UTILS ================= */
function $(sel) {
  return document.querySelector(sel);
}
function sleep(ms) {
  return new Promise(function(r){ setTimeout(r, ms); });
}
function escapeRe(s) {
  if (!s) return '';
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

var toastTimer = null;
function toast(msg, type) {
  var el = $('#toast');
  if (!el) { console.log(msg); return; }
  el.textContent = msg;
  el.className = 'toast show ' + (type || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast ' + (type || ''); }, 3200);
}

/* ================= INDEXEDDB ================= */
function openDB() {
  return new Promise(function(resolve, reject){
    var req = indexedDB.open(APP.DB_NAME, 1);
    req.onupgradeneeded = function(e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(APP.STORE)) {
        db.createObjectStore(APP.STORE, { keyPath: 'hash' });
      }
    };
    req.onsuccess = function(e){ resolve(e.target.result); };
    req.onerror = function(e){ reject(e.target.error); };
  });
}
async function dbGet(hash) {
  var db = await openDB();
  return new Promise(function(resolve, reject){
    var r = db.transaction(APP.STORE, 'readonly').objectStore(APP.STORE).get(hash);
    r.onsuccess = function(){ resolve(r.result); };
    r.onerror = function(){ reject(r.error); };
  });
}
async function dbPut(job) {
  var db = await openDB();
  return new Promise(function(resolve, reject){
    var tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).put(job);
    tx.oncomplete = function(){ resolve(); };
    tx.onerror = function(){ reject(tx.error); };
  });
}
async function dbDelete(hash) {
  var db = await openDB();
  return new Promise(function(resolve, reject){
    var tx = db.transaction(APP.STORE, 'readwrite');
    tx.objectStore(APP.STORE).delete(hash);
    tx.oncomplete = function(){ resolve(); };
    tx.onerror = function(){ reject(tx.error); };
  });
}

/* ================= USAGE ================= */
function loadUsage() {
  try { return JSON.parse(localStorage.getItem(APP.USAGE_KEY) || '{}'); }
  catch (e) { return {}; }
}
function trackUsage(service, chars) {
  var today = new Date().toISOString().slice(0, 10);
  var month = today.slice(0, 7);
  var u = loadUsage();
  if (!u[service]) u[service] = {};
  var s = u[service];
  if (service === 'deepl') {
    if (s.month !== month) { s.month = month; s.count = 0; }
    s.count += chars;
  } else {
    if (s.day !== today) { s.day = today; s.count = 0; }
    s.count += chars;
  }
  try { localStorage.setItem(APP.USAGE_KEY, JSON.stringify(u)); } catch (e) {}
  updateUsageStatus();
}
function updateUsageStatus() {
  var el = $('#usageStatus');
  if (!el) return;
  var u = loadUsage();
  var parts = [];
  if (u.deepl) parts.push('DeepL: ' + (u.deepl.count/1000).toFixed(0) + 'k');
  if (u.mymemory) parts.push('MM: ' + u.mymemory.count.toLocaleString('fa-IR'));
  if (u.googleFree) parts.push('G: ' + (u.googleFree.count/1000).toFixed(0) + 'k');
  el.textContent = '📊 ' + (parts.join(' · ') || '—');
}

/* ================= LOGIN ================= */
function bindLogin() {
  var form = $('#loginForm');
  if (!form) {
    console.error('loginForm not found');
    return;
  }
  form.addEventListener('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    var u = ($('#username').value || '').trim();
    var p = ($('#password').value || '');
    if (u === APP.USER.username && p === APP.USER.password) {
      $('#loginScreen').classList.add('hidden');
      $('#app').classList.remove('hidden');
      if (!window._initDone) {
        window._initDone = true;
        initApp();
      }
      toast('خوش آمدید موسی 👋', 'success');
    } else {
      $('#loginError').classList.remove('hidden');
      $('#password').value = '';
      $('#password').focus();
    }
  });

  var logoutBtn = $('#logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(){
      if (state.running && !confirm('ترجمه در حال اجراست. پیشرفت ذخیره می‌شود. خارج شویم؟')) return;
      location.reload();
    });
  }
}

/* ================= INIT ================= */
function initApp() {
  try {
    var s = JSON.parse(localStorage.getItem(APP.SETTINGS_KEY) || '{}');
    Object.assign(state.settings, s);
  } catch (e) {}

  if ($('#mmEmail')) $('#mmEmail').value = state.settings.mmEmail || '';
  if ($('#deeplKey')) $('#deeplKey').value = state.settings.deeplKey || '';

  var savedStyle = localStorage.getItem(APP.STYLE_KEY);
  state.displayStyle = (savedStyle === 'columns' || savedStyle === 'interlinear')
    ? savedStyle : (window.innerWidth < 900 ? 'interlinear' : 'columns');

  var dSel = $('#domainSelect');
  var gSel = $('#glossaryViewSelect');
  if (dSel && gSel) {
    Object.keys(DOMAIN_INFO).forEach(function(k){
      var v = DOMAIN_INFO[k];
      dSel.innerHTML += '<option value="' + k + '">' + v + '</option>';
      gSel.innerHTML += '<option value="' + k + '">' + v + '</option>';
    });
  }

  function on(id, ev, fn) {
    var el = $('#' + id);
    if (el) el.addEventListener(ev, fn);
  }

  on('fileInput', 'change', function(e){
    if (e.target.files && e.target.files[0]) loadFile(e.target.files[0]);
  });
  on('domainSelect', 'change', updateGlossary);
  on('glossaryViewSelect', 'change', updateGlossary);
  on('modeSelect', 'change', onModeChange);
  on('startBtn', 'click', startTranslation);
  on('cancelBtn', 'click', function(){ state.cancelled = true; toast('در حال لغو…'); });
  on('copyBtn', 'click', copyOutput);
  on('downloadTxtBtn', 'click', downloadTxt);
  on('downloadDocxBtn', 'click', downloadDocx);
  on('downloadHtmlBtn', 'click', downloadHtml);
  on('toggleOriginalBtn', 'click', toggleOriginal);
  on('clearJobBtn', 'click', clearCurrentJob);
  on('wakeLockBtn', 'click', onWakeLockBtn);
  on('settingsBtn', 'click', function(){ $('#settingsModal').classList.remove('hidden'); });
  on('closeSettings', 'click', function(){ $('#settingsModal').classList.add('hidden'); });
  on('saveSettings', 'click', saveSettings);

  document.querySelectorAll('.style-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ setDisplayStyle(btn.dataset.style); });
  });
  updateStyleButtons();

  window.addEventListener('online', function(){ updateOnlineStatus(); toast('اتصال برقرار شد', 'success'); });
  window.addEventListener('offline', function(){ updateOnlineStatus(); toast('اتصال قطع شد — صبر می‌کنم', 'error'); });

  setupPageObserver();
  updateOnlineStatus();
  updateGlossary();
  updateUsageStatus();
}

function saveSettings() {
  state.settings.mmEmail = $('#mmEmail').value.trim();
  state.settings.deeplKey = $('#deeplKey').value.trim();
  try { localStorage.setItem(APP.SETTINGS_KEY, JSON.stringify(state.settings)); } catch (e) {}
  $('#settingsModal').classList.add('hidden');
  toast('ذخیره شد', 'success');
}
function setDisplayStyle(style) {
  state.displayStyle = style;
  try { localStorage.setItem(APP.STYLE_KEY, style); } catch (e) {}
  updateStyleButtons();
  if (state.currentJob && state.currentJob.structure === 'sentence') {
    var out = $('#output');
    out.dataset.hash = '';
    out.dataset.mode = '';
    renderOutput(state.currentJob);
  }
}
function updateStyleButtons() {
  document.querySelectorAll('.style-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.style === state.displayStyle);
  });
}
function onModeChange() {
  var mode = $('#modeSelect') ? $('#modeSelect').value : '';
  var defs = MODE_DEFS[state.sourceType] || MODE_DEFS.pdf;
  var def = null;
  for (var i = 0; i < defs.length; i++) { if (defs[i].value === mode) { def = defs[i]; break; } }
  if (def && $('#modeHint')) $('#modeHint').textContent = def.hint;

  var styleRow = $('#displayStyleRow');
  var isSentence = (state.sourceType === 'pdf' && mode === 'bilingual');
  if (styleRow) styleRow.classList.toggle('hidden', !isSentence);

  var isParagraph = def && def.structure === 'paragraph';
  var toggleBtn = $('#toggleOriginalBtn');
  if (toggleBtn) toggleBtn.classList.toggle('hidden', !isParagraph || mode === 'textonly');

  var pageRange = $('#pageRangeRow');
  if (pageRange) pageRange.classList.toggle('hidden', state.sourceType === 'docx');
}
function toggleOriginal() {
  var out = $('#output');
  var isHidden = out.classList.toggle('hide-originals');
  $('#toggleOriginalBtn').textContent = isHidden ? '👁 نمایش اصل' : '👁 پنهان اصل';
}

/* ================= ONLINE / WAKE ================= */
function updateOnlineStatus() {
  var el = $('#onlineStatus');
  if (!el) return;
  if (navigator.onLine) { el.textContent = '🟢 آنلاین'; el.className = 'status-pill online'; }
  else { el.textContent = '🔴 آفلاین'; el.className = 'status-pill offline'; }
}
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) { toast('پشتیبانی نمی‌شود', 'error'); return; }
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', function(){ state.wakeLock = null; updateWakeUI(); });
    state.wakeLockWanted = true;
    updateWakeUI();
  } catch (e) { toast('Wake Lock ناموفق', 'error'); }
}
async function releaseWakeLock() {
  if (state.wakeLock) { try { await state.wakeLock.release(); } catch (e) {} state.wakeLock = null; }
  state.wakeLockWanted = false;
  updateWakeUI();
}
function updateWakeUI() {
  var on = !!state.wakeLock;
  var btn = $('#wakeLockBtn');
  var el = $('#wakeStatus');
  if (btn) { btn.classList.toggle('active', on); btn.textContent = on ? '🔆' : '💤'; }
  if (el) { el.textContent = on ? '🔆 روشن' : '💤 خاموش'; el.className = 'status-pill' + (on ? ' active' : ''); }
}
async function onWakeLockBtn() {
  if (state.wakeLock) await releaseWakeLock();
  else await requestWakeLock();
}

/* ================= FILE ================= */
function detectFileType(file) {
  var n = file.name.toLowerCase();
  if (n.indexOf('.pdf') !== -1 || file.type === 'application/pdf') return 'pdf';
  if (n.indexOf('.docx') !== -1) return 'docx';
  return null;
}

async function loadFile(file) {
  var type = detectFileType(file);
  if (!type) { toast('فقط PDF یا DOCX', 'error'); return; }

  try {
    if (type === 'pdf') {
      if (typeof pdfjsLib === 'undefined') throw new Error('pdf.js لود نشد');
      var buf = await file.arrayBuffer();
      state.pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      state.pageCount = state.pdf.numPages;
    } else {
      if (typeof mammoth === 'undefined') throw new Error('mammoth لود نشد');
      state.pdf = null;
      state.pageCount = 0;
    }

    state.sourceType = type;
    state.file = file;
    state.fileName = file.name;
    state.fileSize = file.size;
    state.fileHash = type + '|' + file.name + '|' + file.size + '|' + file.lastModified;

    var infoEl = $('#fileInfo');
    infoEl.classList.remove('hidden');
    if (type === 'pdf') {
      infoEl.innerHTML = '<strong>📕 ' + escapeHtml(file.name) + '</strong><br>' +
        state.pageCount + ' صفحه • ' + (file.size/1024/1024).toFixed(2) + ' مگابایت';
    } else {
      infoEl.innerHTML = '<strong>📘 ' + escapeHtml(file.name) + '</strong><br>Word • ' +
        (file.size/1024/1024).toFixed(2) + ' مگابایت';
    }

    if (type === 'pdf') {
      $('#toPage').value = Math.min(3, state.pageCount);
      $('#toPage').max = state.pageCount;
      $('#fromPage').max = state.pageCount;
    }

    var sample = await getSampleText();
    var domain = detectDomain(sample);
    $('#detectedDomain').innerHTML = '<span class="badge primary">' + DOMAIN_INFO[domain] + '</span>';
    $('#domainSelect').value = domain;
    updateGlossary();

    populateModeSelect(type);

    var existing = await dbGet(state.fileHash);
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
      toast('پیشرفت ذخیره: ' + countDone(existing) + '/' + countTotal(existing), 'success');
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
    var p1 = await extractPage(1);
    var p2 = state.pageCount > 1 ? await extractPage(2) : '';
    return p1 + ' ' + p2;
  }
  if (state.sourceType === 'docx') {
    var paras = await extractDocxParagraphs(state.file);
    return paras.slice(0, 10).map(function(p){ return p.text; }).join(' ');
  }
  return '';
}

function populateModeSelect(type) {
  var sel = $('#modeSelect');
  sel.innerHTML = '';
  var defs = MODE_DEFS[type] || MODE_DEFS.pdf;
  for (var i = 0; i < defs.length; i++) {
    var opt = document.createElement('option');
    opt.value = defs[i].value;
    opt.textContent = defs[i].label;
    sel.appendChild(opt);
  }
  onModeChange();
}

async function extractPage(pageNum) {
  var page = await state.pdf.getPage(pageNum);
  var content = await page.getTextContent();
  return content.items.map(function(it){
    return it.str + (it.hasEOL ? '\n' : ' ');
  }).join('').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
}

async function extractDocxParagraphs(file) {
  if (typeof mammoth === 'undefined') throw new Error('mammoth لود نشد');
  var arrayBuffer = await file.arrayBuffer();
  var result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
  var parser = new DOMParser();
  var doc = parser.parseFromString(result.value, 'text/html');
  var paragraphs = [];
  var idx = 0;
  var els = doc.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (text) paragraphs.push({ id: idx++, tag: el.tagName.toLowerCase(), text: text });
  }
  return paragraphs;
}

function detectDomain(text) {
  var lower = ' ' + text.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ') + ' ';
  var best = 'general', max = 0;
  Object.keys(DOMAIN_KEYWORDS).forEach(function(d){
    var words = DOMAIN_KEYWORDS[d];
    var s = 0;
    for (var i = 0; i < words.length; i++) {
      var m = lower.match(new RegExp('\\b' + escapeRe(words[i]) + '\\b', 'g'));
      if (m) s += m.length;
    }
    if (s > max) { max = s; best = d; }
  });
  return max >= 3 ? best : 'general';
}

/* ================= GLOSSARY ================= */
function updateGlossary() {
  var d = $('#glossaryViewSelect').value;
  var g = GLOSSARIES[d] || {};
  var keys = Object.keys(g);
  var rows = keys.map(function(en){
    return '<div class="g-row"><span class="g-en" dir="ltr">' + escapeHtml(en) +
      '</span><span class="g-fa">' + escapeHtml(g[en]) + '</span></div>';
  }).join('');
  $('#glossaryTable').innerHTML = rows || '<p class="muted" style="padding:12px">موردی نیست</p>';
}

function protectGlossary(text, glossary, map) {
  var out = text;
  var terms = Object.keys(glossary).filter(function(t){ return t && t.trim(); })
    .sort(function(a,b){ return b.length - a.length; });
  for (var i = 0; i < terms.length; i++) {
    var term = terms[i];
    var re = new RegExp('\\b' + escapeRe(term) + '\\b', 'gi');
    out = out.replace(re, (function(t){
      return function() {
        var entry = null;
        for (var j = 0; j < map.length; j++) {
          if (map[j].term === t) { entry = map[j]; break; }
        }
        if (!entry) {
          entry = { m: '[[' + map.length + ']]', t: glossary[t], term: t };
          map.push(entry);
        }
        return entry.m;
      };
    })(term));
  }
  return out;
}
function restoreGlossary(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, function(m, i){
    var e = map[Number(i)];
    return (e && e.t) ? e.t : m;
  });
}
function restoreOriginal(text, map) {
  if (!map || !map.length) return text;
  return text.replace(/\[\[\s*(\d+)\s*\]\]/g, function(m, i){
    var e = map[Number(i)];
    return (e && e.term) ? e.term : m;
  });
}

/* ================= CHUNKING ================= */
var ABBREVIATIONS = ['Fig','Eq','e.g','i.e','vs','Dr','Mr','Ms','Mrs','Prof','Inc','Ltd','Co','No','Vol','pp','cf'];

function protectAbbrev(text) {
  var out = text;
  for (var i = 0; i < ABBREVIATIONS.length; i++) {
    var ab = ABBREVIATIONS[i];
    var re = new RegExp('\\b' + escapeRe(ab) + '\\.', 'g');
    out = out.replace(re, function(m){ return m.replace(/\./g, '§'); });
  }
  return out;
}
function unprotectAbbrev(text) { return text.replace(/§/g, '.'); }

function chunkBySentence(text, maxLen) {
  if (!maxLen) maxLen = APP.SENTENCE_MAX;
  var prot = protectAbbrev(text);
  var raw = prot.split(/(?<=[.!?])\s+(?=[A-Z\u0600-\u06FF])|\n+/);
  var out = [];
  for (var i = 0; i < raw.length; i++) {
    var s = unprotectAbbrev(raw[i]).trim();
    if (!s) continue;
    while (s.length > maxLen) {
      var idx = s.lastIndexOf(' ', maxLen);
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
  var sentences = chunkBySentence(text, maxLen * 0.9);
  var chunks = [];
  var cur = '';
  for (var i = 0; i < sentences.length; i++) {
    var s = sentences[i];
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
function extractGoogleText(data) {
  if (!data) throw new Error('پاسخ خالی');
  if (typeof data === 'string') return data;
  if (!Array.isArray(data)) throw new Error('پاسخ نامعتبر');

  var first = data[0];
  if (typeof first === 'string') return first;

  if (Array.isArray(first) && first.length > 0) {
    if (typeof first[0] === 'string') {
      return first.map(function(seg){
        if (Array.isArray(seg) && typeof seg[0] === 'string') return seg[0];
        if (typeof seg === 'string') return seg;
        return '';
      }).join('');
    }
    if (Array.isArray(first[0]) && typeof first[0][0] === 'string') {
      return first.map(function(seg){
        return Array.isArray(seg) ? seg[0] : '';
      }).join('');
    }
  }
  throw new Error('فرمت پاسخ نامشخص');
}

async function googleClients5(text) {
  var url = 'https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=fa&q=' +
    encodeURIComponent(text);
  var res = await fetch(url);
  if (!res.ok) throw new Error('clients5 ' + res.status);
  var data = await res.json();
  return extractGoogleText(data);
}

async function googleClassic(text) {
  var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q=' +
    encodeURIComponent(text);
  var res = await fetch(url);
  if (!res.ok) throw new Error('googleapis ' + res.status);
  var data = await res.json();
  return extractGoogleText(data);
}

async function googleViaProxy(text) {
  var inner = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q=' +
    encodeURIComponent(text);
  var url = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(inner);
  var res = await fetch(url);
  if (!res.ok) throw new Error('proxy ' + res.status);
  var data = await res.json();
  return extractGoogleText(data);
}

async function myMemory(text) {
  var parts = chunkBySentence(text, 450);
  var out = '';
  for (var i = 0; i < parts.length; i++) {
    var url = 'https://api.mymemory.translated.net/get?q=' +
      encodeURIComponent(parts[i]) + '&langpair=en%7Cfa';
    if (state.settings.mmEmail) url += '&de=' + encodeURIComponent(state.settings.mmEmail);
    var res = await fetch(url);
    if (!res.ok) throw new Error('MyMemory ' + res.status);
    var data = await res.json();
    if (Number(data.responseStatus) !== 200) {
      throw new Error('MyMemory: ' + (data.responseDetails || 'quota'));
    }
    out += data.responseData.translatedText + ' ';
    await sleep(150);
  }
  trackUsage('mymemory', text.length);
  return out.trim();
}

async function libreTranslate(text) {
  var instances = ['https://translate.terraprint.co', 'https://libretranslate.de'];
  for (var i = 0; i < instances.length; i++) {
    try {
      var res = await fetch(instances[i] + '/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, source: 'en', target: 'fa', format: 'text' })
      });
      if (res.ok) {
        var d = await res.json();
        if (d.translatedText) return d.translatedText;
      }
    } catch (e) {}
  }
  throw new Error('LibreTranslate ناموفق');
}

async function deeplTranslate(text) {
  if (!state.settings.deeplKey) throw new Error('کلید DeepL نیست');
  var isFree = state.settings.deeplKey.endsWith(':fx');
  var base = isFree ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  var res = await fetch(base + '/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': 'DeepL-Auth-Key ' + state.settings.deeplKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: [text], source_lang: 'EN', target_lang: 'FA' })
  });
  if (!res.ok) throw new Error('DeepL ' + res.status);
  var d = await res.json();
  trackUsage('deepl', text.length);
  return d.translations[0].text;
}

async function translateWithFallback(text) {
  var errors = [];
  var chain = [];

  if (state.settings.deeplKey) chain.push({ name: 'DeepL', fn: deeplTranslate });
  chain.push({ name: 'Google5', fn: googleClients5 });
  chain.push({ name: 'Google', fn: googleClassic });
  chain.push({ name: 'Proxy', fn: googleViaProxy });
  chain.push({ name: 'MyMemory', fn: myMemory });
  chain.push({ name: 'Libre', fn: libreTranslate });

  for (var i = 0; i < chain.length; i++) {
    try {
      var result = await chain[i].fn(text);
      if (result && result.trim()) {
        if (chain[i].name.indexOf('Google') === 0 || chain[i].name === 'Proxy') {
          trackUsage('googleFree', text.length);
        }
        console.log('✅ ' + chain[i].name + ': ' + result.slice(0, 50));
        return result;
      }
    } catch (e) {
      errors.push(chain[i].name + ': ' + e.message);
      console.warn('❌ ' + chain[i].name + ' -> ' + e.message);
    }
  }
  throw new Error(errors.join(' | '));
}

/* ================= COUNTERS ================= */
function countDone(job) {
  var n = 0;
  for (var i = 0; i < job.pages.length; i++) {
    for (var j = 0; j < job.pages[i].chunks.length; j++) {
      if (job.pages[i].chunks[j].status === 'done') n++;
    }
  }
  return n;
}
function countTotal(job) {
  var n = 0;
  for (var i = 0; i < job.pages.length; i++) n += job.pages[i].chunks.length;
  return n;
}

/* ================= MAIN FLOW ================= */
async function startTranslation() {
  if (!state.file) { toast('ابتدا فایل را انتخاب کنید', 'error'); return; }
  if (state.running) return;

  var mode = $('#modeSelect').value;
  var defs = MODE_DEFS[state.sourceType] || [];
  var def = null;
  for (var i = 0; i < defs.length; i++) { if (defs[i].value === mode) { def = defs[i]; break; } }
  var structure = (def && def.structure) || 'sentence';

  var from = 1, to = 1;
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
    var job = await dbGet(state.fileHash);

    if (job && job.mode !== mode) {
      if (!confirm('این فایل با حالت دیگری ذخیره شده. حذف و از نو؟')) {
        state.running = false;
        $('#startBtn').classList.remove('hidden');
        $('#cancelBtn').classList.add('hidden');
        return;
      }
      await dbDelete(state.fileHash);
      job = null;
    }

    if (job) {
      var done0 = countDone(job);
      var total0 = countTotal(job);
      if (total0 === 0) {
        await dbDelete(state.fileHash);
        job = null;
      } else if (done0 === total0) {
        if (!confirm('قبلاً کامل ترجمه شده. از نو؟')) {
          state.currentJob = job;
          renderOutput(job);
          updateProgressUI(job);
          return;
        }
        await dbDelete(state.fileHash);
        job = null;
      } else if (done0 > 0) {
        if (!confirm(done0 + '/' + total0 + ' قبلاً ترجمه شده. ادامه؟\n\n«لغو» = از نو')) {
          await dbDelete(state.fileHash);
          job = null;
        }
      }
    }

    if (!job) {
      setProgress(0, 'استخراج متن...');
      var glossary = GLOSSARIES[$('#domainSelect').value] || {};
      var glossaryMap = [];
      var pages = [];

      if (state.sourceType === 'pdf') {
        for (var p = from; p <= to; p++) {
          if (state.cancelled) break;
          var rawPage = await extractPage(p);
          if (!rawPage.trim()) { pages.push({ pageNum: p, chunks: [] }); continue; }
          var protectedText = protectGlossary(rawPage, glossary, glossaryMap);
          var parts = (structure === 'sentence')
            ? chunkBySentence(protectedText)
            : chunkByParagraph(protectedText);
          var chunkArr = [];
          for (var k = 0; k < parts.length; k++) {
            chunkArr.push({
              id: p + '-' + k, text: parts[k], translated: null, status: 'pending', tag: 'p'
            });
          }
          pages.push({ pageNum: p, chunks: chunkArr });
          if ((p - from) % 5 === 0) {
            setProgress(Math.min(5, Math.round(((p - from + 1) / (to - from + 1)) * 5)),
              'استخراج صفحهٔ ' + p + '...');
          }
        }
      } else {
        var paras = await extractDocxParagraphs(state.file);
        var chunks = [];
        for (var q = 0; q < paras.length; q++) {
          var prot = protectGlossary(paras[q].text, glossary, glossaryMap);
          chunks.push({
            id: 'p-' + q, tag: paras[q].tag,
            text: prot, translated: null, status: 'pending'
          });
        }
        pages.push({ pageNum: 1, chunks: chunks });
      }

      job = {
        hash: state.fileHash, fileName: state.fileName,
        sourceType: state.sourceType, pageCount: state.pageCount,
        from: from, to: to, mode: mode, structure: structure,
        displayStyle: state.displayStyle,
        domain: $('#domainSelect').value,
        glossaryMap: glossaryMap, pages: pages,
        createdAt: Date.now(), updatedAt: Date.now()
      };
      await dbPut(job);
      toast('متن استخراج شد — شروع ترجمه', 'success');
    }

    for (var pi = 0; pi < job.pages.length; pi++) {
      for (var ci = 0; ci < job.pages[pi].chunks.length; ci++) {
        if (job.pages[pi].chunks[ci].status === 'translating') {
          job.pages[pi].chunks[ci].status = 'pending';
        }
      }
    }
    await dbPut(job);

    state.currentJob = job;
    var outputEl = $('#output');
    outputEl.innerHTML = '';
    outputEl.dataset.hash = '';
    outputEl.dataset.mode = '';
    renderOutput(job);
    updateProgressUI(job);

    if (!state.wakeLock) requestWakeLock();

    await runWorkers(job);

    if (state.cancelled) {
      toast('لغو شد (پیشرفت ذخیره شده)', 'error');
    } else {
      var failed = 0;
      for (var fpi = 0; fpi < job.pages.length; fpi++) {
        for (var fci = 0; fci < job.pages[fpi].chunks.length; fci++) {
          if (job.pages[fpi].chunks[fci].status === 'failed') failed++;
        }
      }
      toast(failed ? 'پایان با ' + failed + ' خطا' : '✅ ترجمه کامل شد', failed ? 'error' : 'success');
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
  var lastRender = 0;
  function scheduleRender() {
    var now = Date.now();
    if (now - lastRender > 900) {
      lastRender = now;
      renderOutput(job);
      updateProgressUI(job);
    }
  }

  var queue = [];
  for (var i = 0; i < job.pages.length; i++) {
    for (var j = 0; j < job.pages[i].chunks.length; j++) {
      if (job.pages[i].chunks[j].status === 'pending') queue.push(job.pages[i].chunks[j]);
    }
  }

  async function worker() {
    while (queue.length > 0) {
      if (state.cancelled) break;
      if (!navigator.onLine) await waitForOnline();
      if (state.cancelled) break;
      var chunk = queue.shift();
      if (!chunk) break;
      chunk.status = 'translating';
      try {
        var translated = await translateWithFallback(chunk.text);
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

  var workers = [];
  for (var w = 0; w < APP.MAX_CONCURRENCY; w++) workers.push(worker());
  await Promise.all(workers);
  renderOutput(job);
  updateProgressUI(job);
}

function waitForOnline() {
  return new Promise(function(resolve){
    if (navigator.onLine) return resolve();
    var done = false;
    function go() {
      if (done) return;
      done = true;
      window.removeEventListener('online', go);
      clearInterval(check);
      resolve();
    }
    var check = setInterval(function(){ if (navigator.onLine) go(); }, 2000);
    window.addEventListener('online', go);
  });
}

/* ================= RENDER ================= */
function renderOutput(job) {
  if (!job) return;
  var output = $('#output');
  var style = (job.structure === 'sentence')
    ? (state.displayStyle || job.displayStyle || 'columns')
    : job.structure;

  var needsRebuild =
    output.dataset.hash !== job.hash ||
    output.dataset.mode !== (job.mode + ':' + style) ||
    output.children.length === 0;

  if (needsRebuild) {
    output.innerHTML = '';
    output.dataset.hash = job.hash;
    output.dataset.mode = job.mode + ':' + style;

    if (job.structure === 'sentence') {
      for (var i = 0; i < job.pages.length; i++) {
        var page = job.pages[i];
        if (!page.chunks.length) continue;
        output.appendChild(pageMarker(page.pageNum));
        for (var j = 0; j < page.chunks.length; j++) {
          output.appendChild(buildSentencePair(page.chunks[j], job.glossaryMap, style));
        }
      }
    } else if (job.structure === 'page') {
      setupPageObserver();
      for (var pi = 0; pi < job.pages.length; pi++) {
        var pg = job.pages[pi];
        if (!pg.chunks.length) continue;
        var card = buildPageCard(pg, job.glossaryMap);
        output.appendChild(card);
        if (pageObserver) pageObserver.observe(card);
      }
    } else {
      if (job.mode === 'textonly') output.classList.add('hide-originals');
      else output.classList.remove('hide-originals');
      var wrap = document.createElement('div');
      wrap.className = 'paragraphs-container';
      for (var pp = 0; pp < job.pages.length; pp++) {
        for (var cc = 0; cc < job.pages[pp].chunks.length; cc++) {
          wrap.appendChild(buildParagraphCard(job.pages[pp].chunks[cc], job.glossaryMap));
        }
      }
      output.appendChild(wrap);
    }
  } else {
    if (job.structure === 'sentence') {
      for (var si = 0; si < job.pages.length; si++) {
        for (var sj = 0; sj < job.pages[si].chunks.length; sj++) {
          var schunk = job.pages[si].chunks[sj];
          var sel = output.querySelector('.sentence-pair[data-chunk-id="' + schunk.id + '"] .s-fa');
          if (sel) updateFa(sel, schunk, job.glossaryMap);
        }
      }
    } else if (job.structure === 'page') {
      for (var pgi = 0; pgi < job.pages.length; pgi++) {
        var pg2 = job.pages[pgi];
        var card2 = output.querySelector('.page-card[data-page="' + pg2.pageNum + '"]');
        if (!card2) continue;
        var trans2 = card2.querySelector('.page-translation');
        if (trans2) updatePageTranslation(trans2, pg2, job.glossaryMap);
      }
    } else {
      for (var pi2 = 0; pi2 < job.pages.length; pi2++) {
        for (var cj = 0; cj < job.pages[pi2].chunks.length; cj++) {
          var cchunk = job.pages[pi2].chunks[cj];
          var el = output.querySelector('.paragraph-card[data-chunk-id="' + cchunk.id + '"] .dp-translation');
          if (el) updateParagraphTranslation(el, cchunk, job.glossaryMap);
        }
      }
    }
  }
}

function pageMarker(num) {
  var el = document.createElement('div');
  el.className = 'page-marker';
  el.textContent = 'صفحهٔ ' + num;
  return el;
}

function buildSentencePair(chunk, map, style) {
  var wrap = document.createElement('div');
  wrap.className = 'sentence-pair ' + style;
  wrap.dataset.chunkId = chunk.id;

  var en = document.createElement('div');
  en.className = 's-en';
  en.dir = 'ltr';
  en.textContent = restoreOriginal(chunk.text, map);
  wrap.appendChild(en);

  var fa = document.createElement('div');
  fa.className = 's-fa';
  fa.dir = 'rtl';
  updateFa(fa, chunk, map);
  wrap.appendChild(fa);
  return wrap;
}

function updateFa(el, chunk, map) {
  el.classList.remove('error', 'pending');
  if (chunk.status === 'done') {
    el.textContent = restoreGlossary(chunk.translated, map);
  } else if (chunk.status === 'failed') {
    el.textContent = '⚠️ ' + (chunk.error || 'خطا');
    el.classList.add('error');
  } else if (chunk.status === 'translating') {
    el.textContent = '⏳ در حال ترجمه…';
    el.classList.add('pending');
  } else {
    el.textContent = '⏸ در انتظار';
    el.classList.add('pending');
  }
}

function buildPageCard(page, map) {
  var card = document.createElement('div');
  card.className = 'page-card';
  card.dataset.page = page.pageNum;
  card.appendChild(pageMarker(page.pageNum));

  var canvas = document.createElement('canvas');
  canvas.className = 'page-canvas';
  card.appendChild(canvas);

  var trans = document.createElement('div');
  trans.className = 'page-translation';
  trans.dir = 'rtl';
  updatePageTranslation(trans, page, map);
  card.appendChild(trans);
  return card;
}

function updatePageTranslation(el, page, map) {
  if (!page.chunks.length) { el.textContent = '(بدون متن استخراج‌شدنی)'; return; }
  var allDone = true;
  for (var i = 0; i < page.chunks.length; i++) {
    if (page.chunks[i].status !== 'done') { allDone = false; break; }
  }
  if (allDone) {
    var parts = [];
    for (var k = 0; k < page.chunks.length; k++) {
      parts.push(restoreGlossary(page.chunks[k].translated || '', map));
    }
    el.textContent = parts.join(' ');
    return;
  }
  var done = 0, failed = 0;
  for (var m = 0; m < page.chunks.length; m++) {
    if (page.chunks[m].status === 'done') done++;
    if (page.chunks[m].status === 'failed') failed++;
  }
  if (done === 0 && failed === 0) {
    el.textContent = '⏳ در انتظار ترجمه…';
  } else {
    el.textContent = '⏳ ' + done + '/' + page.chunks.length + ' ترجمه شده' +
      (failed ? ' (' + failed + ' خطا)' : '');
  }
}

function buildParagraphCard(chunk, map) {
  var card = document.createElement('div');
  card.className = 'paragraph-card';
  card.dataset.chunkId = chunk.id;
  card.dataset.tag = chunk.tag || 'p';

  var orig = document.createElement('div');
  orig.className = 'dp-original';
  orig.dir = 'ltr';
  orig.textContent = restoreOriginal(chunk.text, map);
  card.appendChild(orig);

  var trans = document.createElement('div');
  trans.className = 'dp-translation';
  trans.dir = 'rtl';
  updateParagraphTranslation(trans, chunk, map);
  card.appendChild(trans);
  return card;
}

function updateParagraphTranslation(el, chunk, map) {
  el.classList.remove('error', 'pending');
  if (chunk.status === 'done') {
    el.textContent = restoreGlossary(chunk.translated, map);
  } else if (chunk.status === 'failed') {
    el.textContent = '⚠️ ' + (chunk.error || 'خطا');
    el.classList.add('error');
  } else if (chunk.status === 'translating') {
    el.textContent = '⏳ در حال ترجمه…';
    el.classList.add('pending');
  } else {
    el.textContent = '⏸ در انتظار';
    el.classList.add('pending');
  }
}

function updateProgressUI(job) {
  var total = countTotal(job);
  var done = countDone(job);
  var failed = 0;
  for (var i = 0; i < job.pages.length; i++) {
    for (var j = 0; j < job.pages[i].chunks.length; j++) {
      if (job.pages[i].chunks[j].status === 'failed') failed++;
    }
  }
  var pct = total ? Math.round(((done + failed) / total) * 100) : 0;
  $('#progressBar').style.width = pct + '%';
  $('#progressText').textContent = 'ترجمه: ' + (done + failed) + '/' + total + ' بخش';
  $('#chunkStats').textContent = '✅ موفق: ' + done + '   ⚠️ ناموفق: ' + failed +
    '   ⏳ در انتظار: ' + (total - done - failed);
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
  var out = $('#output');
  out.innerHTML = '';
  out.dataset.hash = '';
  out.dataset.mode = '';
  $('#outputCard').classList.add('hidden');
  $('#progressWrap').classList.add('hidden');
  $('#clearJobBtn').classList.add('hidden');
  toast('ذخیره حذف شد', 'success');
}

/* ================= PAGE OBSERVER ================= */
var pageObserver = null;
function setupPageObserver() {
  if (pageObserver) pageObserver.disconnect();
  pageObserver = new IntersectionObserver(function(entries){
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var card = entry.target;
      var canvas = card.querySelector('canvas');
      if (!canvas) continue;
      if (entry.isIntersecting) {
        if (!card.dataset.rendered) {
          card.dataset.rendered = '1';
          renderPageCanvas(card.dataset.page, canvas).catch(function(err){
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
  var page = await state.pdf.getPage(parseInt(pageNum, 10));
  var container = canvas.parentElement;
  var targetW = Math.min(900, container.clientWidth || 800);
  var baseVp = page.getViewport({ scale: 1 });
  var scale = Math.min(2, targetW / baseVp.width);
  var vp = page.getViewport({ scale: scale });
  canvas.width = Math.round(vp.width);
  canvas.height = Math.round(vp.height);
  await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
}

/* ================= OUTPUT ================= */
async function copyOutput() {
  var job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  var txt = buildPlainText(job);
  if (!txt.trim()) { toast('چیزی ترجمه نشده', 'error'); return; }
  try { await navigator.clipboard.writeText(txt); toast('کپی شد', 'success'); }
  catch (e) { toast('کپی ناموفق', 'error'); }
}

function buildPlainText(job) {
  var lines = [];
  for (var i = 0; i < job.pages.length; i++) {
    var page = job.pages[i];
    if (!page.chunks.length) continue;
    if (job.structure === 'page' || job.structure === 'sentence') {
      lines.push('════════ صفحهٔ ' + page.pageNum + ' ════════');
      lines.push('');
    }
    for (var j = 0; j < page.chunks.length; j++) {
      var c = page.chunks[j];
      if (job.mode === 'textonly') {
        if (c.status === 'done') { lines.push(restoreGlossary(c.translated, job.glossaryMap)); lines.push(''); }
      } else if (job.structure === 'sentence') {
        lines.push('▸ ' + restoreOriginal(c.text, job.glossaryMap));
        lines.push('▸ ' + (c.status === 'done' ? restoreGlossary(c.translated, job.glossaryMap) : '[' + c.status + ']'));
        lines.push('');
      } else if (job.structure === 'paragraph') {
        lines.push(restoreOriginal(c.text, job.glossaryMap));
        lines.push('');
        lines.push(c.status === 'done' ? restoreGlossary(c.translated, job.glossaryMap) : '[' + c.status + ']');
        lines.push('');
        lines.push('────────────────────');
        lines.push('');
      } else {
        if (c.status === 'done') lines.push(restoreGlossary(c.translated, job.glossaryMap));
      }
    }
    lines.push('');
  }
  return lines.join('\n');
}

function downloadTxt() {
  var job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  var txt = buildPlainText(job);
  if (!txt.trim()) { toast('چیزی ترجمه نشده', 'error'); return; }
  var base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
  var blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'tarjomeh-' + base + '.txt';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود TXT موفق', 'success');
}

async function downloadDocx() {
  var job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  if (typeof docx === 'undefined') { toast('docx.js لود نشد', 'error'); return; }

  toast('در حال ساخت Word...');
  try {
    var Document = docx.Document;
    var Packer = docx.Packer;
    var Paragraph = docx.Paragraph;
    var TextRun = docx.TextRun;
    var AlignmentType = docx.AlignmentType;

    var children = [];
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: job.fileName, bold: true, size: 32 })]
    }));
    children.push(new Paragraph({ text: '' }));

    for (var i = 0; i < job.pages.length; i++) {
      var page = job.pages[i];
      for (var j = 0; j < page.chunks.length; j++) {
        var c = page.chunks[j];
        if (c.status !== 'done') continue;

        if (job.mode !== 'textonly') {
          var origText = restoreOriginal(c.text, job.glossaryMap);
          children.push(new Paragraph({
            children: [new TextRun({
              text: origText, color: '666666', italics: true, size: 22
            })],
            spacing: { before: 200, after: 80 }
          }));
        }

        var transText = restoreGlossary(c.translated, job.glossaryMap);
        children.push(new Paragraph({
          children: [new TextRun({
            text: transText, size: 26, rightToLeft: true
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

    var doc = new Document({
      creator: 'Mousa Translator',
      sections: [{ properties: {}, children: children }]
    });

    var blob = await Packer.toBlob(doc);
    var base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'tarjomeh-' + base + '.docx';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    toast('دانلود DOCX موفق', 'success');
  } catch (e) {
    console.error(e);
    toast('خطا در Word: ' + e.message, 'error');
  }
}

async function downloadHtml() {
  var job = state.currentJob;
  if (!job) { toast('خروجی خالی', 'error'); return; }
  if (job.mode !== 'original') { toast('فقط در حالت صفحهٔ اصلی', 'error'); return; }
  toast('در حال ساخت HTML...');

  var parts = [];
  parts.push('<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8">');
  parts.push('<title>' + escapeHtml(job.fileName) + '</title>');
  parts.push('<style>body{font-family:Vazirmatn,sans-serif;max-width:900px;margin:0 auto;padding:20px;background:#f1f5fb}h3{color:#1e40af}.page{background:#fff;border-radius:12px;padding:16px;margin-bottom:20px}.page img{width:100%;border-radius:8px}.trans{margin-top:16px;padding:12px;background:#f0fdf4;border-radius:8px;color:#166534;white-space:pre-wrap}</style>');
  parts.push('</head><body>');
  parts.push('<h2 style="text-align:center">' + escapeHtml(job.fileName) + '</h2>');

  for (var i = 0; i < job.pages.length; i++) {
    var page = job.pages[i];
    if (!page.chunks.length) continue;
    parts.push('<div class="page"><h3>صفحهٔ ' + page.pageNum + '</h3>');
    try {
      var p = await state.pdf.getPage(page.pageNum);
      var baseVp = p.getViewport({ scale: 1 });
      var scale = Math.min(1.5, 900 / baseVp.width);
      var vp = p.getViewport({ scale: scale });
      var canvas = document.createElement('canvas');
      canvas.width = vp.width; canvas.height = vp.height;
      await p.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
      parts.push('<img src="' + canvas.toDataURL('image/jpeg', 0.85) + '">');
    } catch (e) {}
    var textParts = [];
    for (var j = 0; j < page.chunks.length; j++) {
      if (page.chunks[j].status === 'done') {
        textParts.push(restoreGlossary(page.chunks[j].translated || '', job.glossaryMap));
      }
    }
    parts.push('<div class="trans">' + escapeHtml(textParts.join(' ') || '(ترجمه نشده)') + '</div></div>');
  }
  parts.push('</body></html>');

  var base = (job.fileName || 'translation').replace(/\.(pdf|docx)$/i, '');
  var blob = new Blob([parts.join('\n')], { type: 'text/html;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'tarjomeh-' + base + '.html';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
  toast('دانلود HTML موفق', 'success');
}

/* ================= BOOT ================= */
document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM ready');

  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
    console.log('pdf.js OK');
  } else {
    console.warn('pdf.js NOT loaded');
  }
  if (typeof mammoth !== 'undefined') console.log('mammoth OK');
  else console.warn('mammoth NOT loaded');
  if (typeof docx !== 'undefined') console.log('docx OK');
  else console.warn('docx NOT loaded');

  bindLogin();
});