/* ============================================
   IslamBasics — the reciters, ONE list for the whole site
   ============================================
   The Quran reader (quran.js) and every verse page (verse/*.html, with
   listen.js) play the same recitations, chosen by the same setting. This
   list used to live inside quran.js, which only the Quran page loads; the
   verse pages — where most readers now arrive, from a search — had no way
   to hear the verse at all. Moved here, not copied: one dataset, two pages.

   Per-ayah audio comes from everyayah.com, where each file is named
   {surah3}{ayah3}.mp3 — e.g. 002255.mp3 is Ayat al-Kursi. Every folder below
   was checked to be live before being listed here. */
const RECITERS = [
  { id: "Alafasy_128kbps",                    name: "Mishary Rashid Alafasy",   ar: "مشاري راشد العفاسي" },
  { id: "Yasser_Ad-Dussary_128kbps",          name: "Yasser Al-Dossary",        ar: "ياسر الدوسري" },
  { id: "Abdurrahmaan_As-Sudais_192kbps",     name: "Abdurrahman As-Sudais",    ar: "عبد الرحمن السديس" },
  { id: "Maher_AlMuaiqly_64kbps",             name: "Maher Al-Muaiqly",         ar: "ماهر المعيقلي" },
  { id: "Abdul_Basit_Murattal_64kbps",        name: "Abdul Basit (Murattal)",   ar: "عبد الباسط عبد الصمد" },
  { id: "Husary_128kbps",                     name: "Mahmoud Al-Husary",        ar: "محمود خليل الحصري" },
  { id: "Minshawy_Murattal_128kbps",          name: "Al-Minshawi (Murattal)",   ar: "محمد صديق المنشاوي" },
  { id: "Saood_ash-Shuraym_128kbps",          name: "Saud Ash-Shuraim",         ar: "سعود الشريم" },
  { id: "Ghamadi_40kbps",                     name: "Saad Al-Ghamdi",           ar: "سعد الغامدي" },
  { id: "Hudhaify_128kbps",                   name: "Ali Al-Hudhaify",          ar: "علي الحذيفي" },
  { id: "Abdullaah_3awwaad_Al-Juhaynee_128kbps", name: "Abdullah Al-Juhany",    ar: "عبد الله الجهني" },
  { id: "Nasser_Alqatami_128kbps",            name: "Nasser Al-Qatami",         ar: "ناصر القطامي" },
  { id: "Salah_Al_Budair_128kbps",            name: "Salah Al-Budair",          ar: "صلاح البدير" },
  { id: "Muhammad_Ayyoub_128kbps",            name: "Muhammad Ayyoub",          ar: "محمد أيوب" },
  { id: "Ali_Jaber_64kbps",                   name: "Ali Jaber",                ar: "علي جابر" },
  { id: "Fares_Abbad_64kbps",                 name: "Fares Abbad",              ar: "فارس عباد" }
];

/* The reader's choice, kept under one key: pick a reciter on a verse page
   and the Quran reader opens with him, and the other way round. */
const RECITER_KEY = "iitw-reciter";

function getReciter() {
  let saved = null;
  try { saved = localStorage.getItem(RECITER_KEY); } catch (e) {}
  return RECITERS.some(r => r.id === saved) ? saved : RECITERS[0].id;
}

function setReciter(id) {
  if (!RECITERS.some(r => r.id === id)) return;
  try { localStorage.setItem(RECITER_KEY, id); } catch (e) {}
}

function pad3(n) { return String(n).padStart(3, "0"); }

function ayahAudioUrl(surahNum, ayahNumInSurah) {
  return "https://everyayah.com/data/" + getReciter() + "/" + pad3(surahNum) + pad3(ayahNumInSurah) + ".mp3";
}
