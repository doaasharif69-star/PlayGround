const STORAGE_KEYS = {
  users: "ashtar-katkot-users",
  session: "ashtar-katkot-session",
  tasks: "ashtar-katkot-tasks",
  prayers: "ashtar-katkot-prayers",
  quranPages: "ashtar-katkot-quran-pages",
  prayerTimes: "ashtar-katkot-prayer-times",
  pomodoroForest: "ashtar-katkot-pomodoro-forest",
  pomodoroTree: "ashtar-katkot-selected-tree"
};

const PUBLIC_PAGES = ["login"];
const DEFAULT_PRAYER_ITEMS = [
  { id: "Fajr", name: "الفجر" },
  { id: "Dhuhr", name: "الظهر" },
  { id: "Asr", name: "العصر" },
  { id: "Maghrib", name: "المغرب" },
  { id: "Isha", name: "العشاء" }
];
const COURSE_DATA = [
  {
    title: "اللغة الإنجليزية",
    description: "روابط مرتبة حسب المستوى لتسهيل البدء ثم التدرج.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "اللغة الإنجليزية | مستوى مبتدئ", provider: "إبراهيم عادل - ZAmericanEnglish", url: "https://teracourses.com/ar/course/english-beginner-course9" },
          { title: "كورسات قناة ZAmericanEnglish", provider: "إبراهيم عادل", url: "https://teracourses.com/ar/instructor/zamericanenglish" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "اللغة الإنجليزية | مستوى متوسط", provider: "English For You", url: "https://teracourses.com/ar/course/english-intermediate-course2" },
          { title: "تدريب الاستماع B1", provider: "Listening Time", url: "https://teracourses.com/ar/course/english-intermediate-course3" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "اللغة الإنجليزية | مستوى متقدم", provider: "English For You", url: "https://teracourses.com/ar/course/english-advanced-course1" },
          { title: "مستوى متقدم إضافي", provider: "English For You", url: "https://teracourses.com/ar/course/english-advanced-course2" }
        ]
      }
    ]
  },
  {
    title: "البرمجة",
    description: "ابدئي من الأساسيات ثم انتقلي للمسارات العملية والمشاريع.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "تعلم البرمجة من الصفر", provider: "أكاديمية حسوب", url: "https://academy.hsoub.com/learn-programming/" },
          { title: "C Programming From Basics to Mastery", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2247" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Learn HTML & CSS", provider: "MaharaTech - أحمد الدُميري", url: "https://stagging.maharatech.gov.eg/course/view.php?id=36" },
          { title: "Javascript", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=741" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "قناة Elzero Web School", provider: "أسامة الزيرو", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { title: "Javascript Developer Track", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=999&lang=en" }
        ]
      }
    ]
  },
  {
    title: "التصميم الجرافيكي",
    description: "روابط عربية مناسبة لبناء أساس بصري جيد ثم التطور نحو أعمال عملية.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "مقدمة في التصميم الجرافيكي", provider: "إدراك عبر Egyincs", url: "https://egyincs.com/courses/introduction-to-graphic-design/" },
          { title: "مقدمة في التصميم الجرافيكي", provider: "إدراك عبر Egyincs - نسخة أخرى", url: "https://egyincs.com/courses/introduction-to-graphic-design-course/" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "أفضل كورسات تصميم جرافيك", provider: "الرابحون", url: "https://www.alrab7on.com/best-graphic-design-courses/" },
          { title: "أساسيات التصميم الجرافيكي", provider: "Yes I'm a Designer عبر TeraCourses", url: "https://teracourses.com/ar/course/graphic-design-fundamentals-course3" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Graphic Design Specialization", provider: "Coursera", url: "https://www.coursera.org/specializations/graphic-design/" },
          { title: "Fundamentals of Graphic Design", provider: "Coursera", url: "https://www.coursera.org/learn/fundamentals-of-graphic-design" }
        ]
      }
    ]
  },
  {
    title: "UI / UX",
    description: "مصادر مرتبة لتعلم تجربة المستخدم والانتقال إلى بناء بورتفوليو.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "UX Design Fundamentals", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=1231" },
          { title: "قناة UI | UX بالعربي", provider: "UI | UX بالعربي", url: "https://www.youtube.com/@uix591" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "UI/UX (Front End) Developer Track", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/view.php?id=1428" },
          { title: "كورس UX Design", provider: "إدراك عبر Egyincs", url: "https://egyincs.com/courses/edraak-ux-design-course/" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "مسار UI/UX المطوّر", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/view.php?id=1428&lang=en" },
          { title: "UX Design Fundamentals - نسخة إضافية", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2106" }
        ]
      }
    ]
  },
  {
    title: "أردوينو والأنظمة المدمجة",
    description: "مسار مناسب لمن يريد التطبيق العملي على الإلكترونيات والدوائر.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "Embedded C: Hardware Essentials", provider: "MaharaTech - Mohamed Aboelrous", url: "https://maharatech.gov.eg/course/view.php?id=2271" },
          { title: "C Programming From Basics to Mastery", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2247" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Learn HTML & CSS للمتحكمات والواجهات", provider: "MaharaTech", url: "https://stagging.maharatech.gov.eg/course/view.php?id=36" },
          { title: "Embedded C Course", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2271" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "مسارات Embedded على MaharaTech", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
          { title: "قناة Arafa Microsys", provider: "م. حسام عرفة", url: "https://teracourses.com/ar/course/underactuated-robotics-course1" }
        ]
      }
    ]
  },
  {
    title: "الروبوتات",
    description: "ابدئي بالأساسيات العملية ثم انتقلي إلى بناء روبوتات ومفاهيم التحكم.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "هندسة الروبوتات", provider: "Arafa Microsys - م. حسام عرفة", url: "https://teracourses.com/ar/course/underactuated-robotics-course1" },
          { title: "الدرس الأول من كورس صناعة روبوت", provider: "Arafa Microsys", url: "https://teracourses.com/ar/lesson/underactuated-robotics-course1-lesson2" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Embedded C للروبوتات", provider: "MaharaTech - Mohamed Aboelrous", url: "https://maharatech.gov.eg/course/view.php?id=2271" },
          { title: "C Programming", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2247" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "روبوتكس متقدم", provider: "MIT OpenCourseWare عبر TeraCourses", url: "https://teracourses.com/ar/course/underactuated-robotics-course4" },
          { title: "Underactuated Robotics", provider: "MIT / Russ Tedrake عبر TeraCourses", url: "https://teracourses.com/en/course/underactuated-robotics-course2" }
        ]
      }
    ]
  },
  {
    title: "الذكاء الاصطناعي",
    description: "مسار تدريجي من الشرح العربي العام إلى مساقات أكثر تقدماً.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "قناة AI بالعربي", provider: "AI بالعربي", url: "https://www.youtube.com/@aiarab" },
          { title: "استكشاف أكاديمية الذكاء الاصطناعي", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Generative AI", provider: "MaharaTech - Ahmed EL-Sallab", url: "https://maharatech.gov.eg/mod/hvp/view.php?id=15316" },
          { title: "Generative AI - نسخة بديلة", provider: "MaharaTech", url: "https://maharatech.gov.eg/mod/hvp/view.php?id=15295" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Generative AI and the Future of Digital Learning Content", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2350&lang=en" },
          { title: "Generative AI - Course Sections", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/section.php?id=7845" }
        ]
      }
    ]
  }
];
const TREE_OPTIONS = [
  { id: "oak", name: "شجرة البلوط", emoji: "🌳", color: "#58a66c" },
  { id: "pine", name: "شجرة الصنوبر", emoji: "🌲", color: "#2f8c5b" },
  { id: "blossom", name: "شجرة مزهرة", emoji: "🌸", color: "#f08ab2" },
  { id: "palm", name: "نخلة", emoji: "🌴", color: "#d7a84c" }
];
const MORNING_AZKAR = [
  { text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، آية الكرسي.", repeat: "مرة واحدة" },
  { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، قُلْ أَعُوذُ بِرَبِّ النَّاسِ.", repeat: "3 مرات" },
  { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ.", repeat: "مرة واحدة" },
  { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ.", repeat: "مرة واحدة" },
  { text: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا.", repeat: "3 مرات" },
  { text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ خَلْقَكَ أَنَّكَ أَنْتَ اللَّهُ.", repeat: "4 مرات" },
  { text: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ.", repeat: "مرة واحدة" },
  { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ.", repeat: "7 مرات" },
  { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ.", repeat: "3 مرات" },
  { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي وَفِي سَمْعِي وَفِي بَصَرِي.", repeat: "3 مرات" },
  { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ.", repeat: "مرة واحدة" },
  { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", repeat: "100 مرة" },
  { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ.", repeat: "10 مرات" },
  { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", repeat: "10 مرات" },
  { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", repeat: "100 مرة" }
];
const EVENING_AZKAR = [
  { text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، آية الكرسي.", repeat: "مرة واحدة" },
  { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، قُلْ أَعُوذُ بِرَبِّ النَّاسِ.", repeat: "3 مرات" },
  { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ.", repeat: "مرة واحدة" },
  { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ.", repeat: "مرة واحدة" },
  { text: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا.", repeat: "3 مرات" },
  { text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ خَلْقَكَ أَنَّكَ أَنْتَ اللَّهُ.", repeat: "4 مرات" },
  { text: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ.", repeat: "مرة واحدة" },
  { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ.", repeat: "7 مرات" },
  { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ.", repeat: "3 مرات" },
  { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي وَفِي سَمْعِي وَفِي بَصَرِي.", repeat: "3 مرات" },
  { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ.", repeat: "مرة واحدة" },
  { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", repeat: "100 مرة" },
  { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ.", repeat: "10 مرات" },
  { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", repeat: "10 مرات" },
  { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", repeat: "100 مرة" }
];

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentPage() {
  return document.body.dataset.page || "tasks";
}

function getUsers() {
  return readStorage(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
  writeStorage(STORAGE_KEYS.users, users);
}

function getSession() {
  return readStorage(STORAGE_KEYS.session, null);
}

function saveSession(session) {
  writeStorage(STORAGE_KEYS.session, session);
}

function getCurrentUser() {
  const session = getSession();
  if (!session?.email) return null;
  return getUsers().find((user) => user.email === session.email) || null;
}

function updateUserProfile(patch) {
  const session = getSession();
  if (!session?.email) return null;

  const users = getUsers();
  const index = users.findIndex((user) => user.email === session.email);
  if (index === -1) return null;

  users[index] = { ...users[index], ...patch };
  saveUsers(users);
  return users[index];
}

function enforceAuth() {
  const page = getCurrentPage();
  const user = getCurrentUser();
  if (!user && !PUBLIC_PAGES.includes(page)) {
    window.location.href = "login.html";
    return null;
  }
  if (user && page === "login") {
    window.location.href = "index.html";
    return null;
  }
  return user;
}

function hydrateAuthLinks(user) {
  document.querySelectorAll(".auth-nav-link").forEach((link) => {
    if (user) {
      link.textContent = `خروج | ${user.name}`;
      link.href = "#logout";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem(STORAGE_KEYS.session);
        window.location.href = "login.html";
      });
    } else {
      link.textContent = "الحساب";
      link.href = "login.html";
    }
  });
}

function formatTime24ToArabic(time24) {
  if (!time24) return "--:--";
  const [hoursRaw, minutes] = time24.split(":");
  const hours = Number(hoursRaw);
  const suffix = hours >= 12 ? "م" : "ص";
  const displayHour = ((hours + 11) % 12) + 1;
  return `${String(displayHour).padStart(2, "0")}:${minutes} ${suffix}`;
}

function setRingProgress(selector, percent) {
  const ring = document.querySelector(selector);
  if (!ring) return;
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const safePercent = Math.max(0, Math.min(100, percent));
  const offset = circumference - (safePercent / 100) * circumference;
  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${offset}`;
}

function getProfileMessage(name, gender) {
  const birdWord = gender === "female" ? "كتكوتة" : "كتكوت";
  return `${name} أشطر ${birdWord} يا ناس`;
}

function getTasksForUser(user) {
  const all = readStorage(STORAGE_KEYS.tasks, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  const entry = all[user.email];
  if (Array.isArray(entry)) {
    all[user.email] = { date: todayKey, items: [] };
    writeStorage(STORAGE_KEYS.tasks, all);
    return [];
  }
  if (!entry || entry.date !== todayKey) {
    all[user.email] = { date: todayKey, items: [] };
    writeStorage(STORAGE_KEYS.tasks, all);
    return [];
  }
  return entry.items || [];
}

function saveTasksForUser(user, tasks) {
  const all = readStorage(STORAGE_KEYS.tasks, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  all[user.email] = { date: todayKey, items: tasks };
  writeStorage(STORAGE_KEYS.tasks, all);
}

function getPrayerStateForUser(user) {
  const all = readStorage(STORAGE_KEYS.prayers, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  return all[user.email]?.[todayKey] || {};
}

function savePrayerStateForUser(user, prayerState) {
  const all = readStorage(STORAGE_KEYS.prayers, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  all[user.email] = all[user.email] || {};
  all[user.email][todayKey] = prayerState;
  writeStorage(STORAGE_KEYS.prayers, all);
}

function getQuranPagesForUser(user) {
  const all = readStorage(STORAGE_KEYS.quranPages, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  return all[user.email]?.[todayKey] || 0;
}

function saveQuranPagesForUser(user, pages) {
  const all = readStorage(STORAGE_KEYS.quranPages, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  all[user.email] = all[user.email] || {};
  all[user.email][todayKey] = pages;
  writeStorage(STORAGE_KEYS.quranPages, all);
}

function getPrayerTimesForUser(user) {
  const all = readStorage(STORAGE_KEYS.prayerTimes, {});
  return all[user.email] || {};
}

function savePrayerTimesForUser(user, prayerTimes) {
  const all = readStorage(STORAGE_KEYS.prayerTimes, {});
  all[user.email] = prayerTimes;
  writeStorage(STORAGE_KEYS.prayerTimes, all);
}

function getForestForUser(user) {
  const all = readStorage(STORAGE_KEYS.pomodoroForest, {});
  return all[user.email] || [];
}

function saveForestForUser(user, forest) {
  const all = readStorage(STORAGE_KEYS.pomodoroForest, {});
  all[user.email] = forest;
  writeStorage(STORAGE_KEYS.pomodoroForest, all);
}

function getSelectedTreeForUser(user) {
  const all = readStorage(STORAGE_KEYS.pomodoroTree, {});
  return all[user.email] || TREE_OPTIONS[0].id;
}

function saveSelectedTreeForUser(user, treeId) {
  const all = readStorage(STORAGE_KEYS.pomodoroTree, {});
  all[user.email] = treeId;
  writeStorage(STORAGE_KEYS.pomodoroTree, all);
}

function initLoginPage() {
  if (getCurrentPage() !== "login") return;

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const status = document.getElementById("auth-status");
  const tabs = document.querySelectorAll(".auth-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      const isLogin = tab.dataset.authTab === "login";
      loginForm.classList.toggle("hidden", !isLogin);
      registerForm.classList.toggle("hidden", isLogin);
      status.textContent = isLogin ? "أهلاً بعودتك." : "أنشئي حسابك الآن وابدئي رحلتك.";
    });
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const users = getUsers();
    const newUser = {
      name: document.getElementById("register-name").value.trim(),
      gender: document.getElementById("register-gender").value,
      city: document.getElementById("register-city").value.trim(),
      country: document.getElementById("register-country").value.trim(),
      email: document.getElementById("register-email").value.trim().toLowerCase(),
      password: document.getElementById("register-password").value
    };

    if (users.some((user) => user.email === newUser.email)) {
      status.textContent = "هذا البريد مسجل بالفعل.";
      return;
    }

    users.push(newUser);
    saveUsers(users);
    saveSession({ email: newUser.email });
    window.location.href = "index.html";
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;
    const user = getUsers().find((item) => item.email === email && item.password === password);

    if (!user) {
      status.textContent = "البيانات غير صحيحة، حاولي مرة أخرى.";
      return;
    }

    saveSession({ email: user.email });
    window.location.href = "index.html";
  });
}

function initTasksPage(user) {
  const taskList = document.getElementById("task-list");
  if (!taskList || !user) return;

  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskStats = document.getElementById("task-stats");
  const progressValue = document.getElementById("tasks-progress-value");
  const progressNote = document.getElementById("tasks-progress-note");
  const displayName = document.getElementById("display-name");
  const chickCard = document.getElementById("chick-card");
  const celebrationText = document.getElementById("celebration-text");
  const motivationCard = document.getElementById("motivation-card");
  const clearCompletedBtn = document.getElementById("clear-completed");
  const seedTasksBtn = document.getElementById("seed-tasks");

  const suggestedTasks = [
    "ترتيب أولويات اليوم",
    "إنهاء أهم مهمة في الصباح",
    "مراجعة درس أو كورس",
    "قراءة ورد القرآن",
    "راحة قصيرة وتجديد النشاط"
  ];

  let tasks = getTasksForUser(user);
  displayName.textContent = user.name;

  function saveTasks() {
    saveTasksForUser(user, tasks);
  }

  function getTasksPercent() {
    if (!tasks.length) return 0;
    return Math.round((tasks.filter((task) => task.done).length / tasks.length) * 100);
  }

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const item = document.createElement("li");
      item.className = `task-item ${task.done ? "done" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.checked = task.done;
      checkbox.addEventListener("change", () => {
        task.done = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      const main = document.createElement("div");
      main.className = "task-main";
      main.innerHTML = `<div class="task-label">${task.text}</div><div class="task-meta">${task.done ? "تم الإنجاز" : "بانتظار التنفيذ"}</div>`;

      const removeBtn = document.createElement("button");
      removeBtn.className = "delete-btn";
      removeBtn.type = "button";
      removeBtn.textContent = "حذف";
      removeBtn.addEventListener("click", () => {
        tasks = tasks.filter((entry) => entry.id !== task.id);
        saveTasks();
        renderTasks();
      });

      item.append(checkbox, main, removeBtn);
      taskList.appendChild(item);
    });

    const doneCount = tasks.filter((task) => task.done).length;
    const percent = getTasksPercent();
    taskStats.textContent = `${doneCount} من ${tasks.length} تم إنجازها`;
    progressValue.textContent = `${percent}%`;
    setRingProgress(".tasks-ring", percent);

    if (!tasks.length) {
      progressNote.textContent = "أضيفي أول مهمة الآن وابدئي يومك بطاقة جميلة.";
    } else if (percent === 100) {
      progressNote.textContent = "أبدعتِ اليوم وحققتِ إنجازًا كاملًا.";
    } else {
      progressNote.textContent = "واصلي التقدّم، كل مهمة تُقربك من الاحتفال.";
    }

    if (tasks.length > 0 && percent === 100) {
      chickCard.classList.remove("hidden");
      motivationCard.classList.add("hidden");
      celebrationText.textContent = getProfileMessage(user.name, user.gender);
    } else {
      chickCard.classList.add("hidden");
      motivationCard.classList.remove("hidden");
    }
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = taskInput.value.trim();
    if (!value) return;
    const id = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    tasks.unshift({ id, text: value, done: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  });

  clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.done);
    saveTasks();
    renderTasks();
  });

  seedTasksBtn.addEventListener("click", () => {
    const existing = new Set(tasks.map((task) => task.text));
    suggestedTasks.forEach((taskText) => {
      if (!existing.has(taskText)) {
        const id = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
        tasks.push({ id, text: taskText, done: false });
      }
    });
    saveTasks();
    renderTasks();
  });

  renderTasks();
}

async function fetchPrayerTimes(city, country) {
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=5`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network error");
  const json = await response.json();
  return json.data.timings;
}

function initPrayerPage(user) {
  const prayerList = document.getElementById("prayer-list");
  if (!prayerList || !user) return;

  const progressValue = document.getElementById("prayer-progress-value");
  const progressNote = document.getElementById("prayer-progress-note");
  const quranForm = document.getElementById("quran-form");
  const quranPagesInput = document.getElementById("quran-pages");
  const quranSummaryText = document.getElementById("quran-summary-text");
  const quranBar = document.getElementById("quran-bar");
  const notifyBtn = document.getElementById("notify-btn");
  const notifyStatus = document.getElementById("notify-status");
  const cityForm = document.getElementById("city-form");
  const cityInput = document.getElementById("city-input");
  const countryInput = document.getElementById("country-input");
  const prayerLocationText = document.getElementById("prayer-location-text");
  const prayerFetchStatus = document.getElementById("prayer-fetch-status");
  const quranGoal = 4;

  let prayerState = getPrayerStateForUser(user);
  let quranPages = getQuranPagesForUser(user);
  let prayerTimes = getPrayerTimesForUser(user);
  let prayers = DEFAULT_PRAYER_ITEMS.map((item) => ({
    ...item,
    time: prayerTimes[item.id] || "--:--",
    done: Boolean(prayerState[item.id])
  }));

  function syncPrayerObjects() {
    prayers = DEFAULT_PRAYER_ITEMS.map((item) => ({
      ...item,
      time: prayerTimes[item.id] || "--:--",
      done: Boolean(prayerState[item.id])
    }));
  }

  function savePrayerState() {
    const state = {};
    prayers.forEach((prayer) => {
      state[prayer.id] = prayer.done;
    });
    prayerState = state;
    savePrayerStateForUser(user, prayerState);
  }

  function computePrayerProgress() {
    const prayerDone = prayers.filter((prayer) => prayer.done).length;
    const prayerShare = (prayerDone / DEFAULT_PRAYER_ITEMS.length) * 70;
    const quranShare = Math.min(quranPages / quranGoal, 1) * 30;
    return Math.round(prayerShare + quranShare);
  }

  function renderPrayers() {
    prayerList.innerHTML = "";

    prayers.forEach((prayer) => {
      const item = document.createElement("li");
      item.className = `prayer-item ${prayer.done ? "done" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.checked = prayer.done;
      checkbox.addEventListener("change", () => {
        prayer.done = checkbox.checked;
        savePrayerState();
        renderPrayers();
      });

      const main = document.createElement("div");
      main.className = "prayer-main";
      main.innerHTML = `<div class="prayer-name">${prayer.name}</div><div class="task-meta">${formatTime24ToArabic(prayer.time)}</div>`;
      item.append(checkbox, main);
      prayerList.appendChild(item);
    });

    const percent = computePrayerProgress();
    const quranPercent = Math.min((quranPages / quranGoal) * 100, 100);
    progressValue.textContent = `${percent}%`;
    setRingProgress(".prayer-ring", percent);
    quranPagesInput.value = quranPages;
    quranBar.style.width = `${quranPercent}%`;
    quranSummaryText.textContent = `هدف اليوم: ${quranGoal} صفحات. قرأتِ ${quranPages} صفحة اليوم.`;
    prayerLocationText.textContent = `المدينة الحالية: ${user.city} - ${user.country}`;

    if (percent === 100) {
      progressNote.textContent = "ما شاء الله، يوم مليء بالالتزام والبركة.";
    } else if (percent >= 50) {
      progressNote.textContent = "ممتاز، أنتِ في منتصف الطريق.";
    } else {
      progressNote.textContent = "ابدئي بعلامة صح واحدة ثم سيصبح الأمر أسهل.";
    }
  }

  async function loadPrayerTimes(shouldPersistProfile = false) {
    prayerFetchStatus.textContent = "جارٍ جلب أوقات الصلاة حسب المدينة...";
    try {
      const timings = await fetchPrayerTimes(user.city, user.country);
      prayerTimes = timings;
      savePrayerTimesForUser(user, prayerTimes);
      syncPrayerObjects();
      renderPrayers();
      prayerFetchStatus.textContent = "تم تحديث أوقات الصلاة بنجاح.";

      if (shouldPersistProfile) {
        updateUserProfile({ city: user.city, country: user.country });
      }
    } catch {
      syncPrayerObjects();
      renderPrayers();
      prayerFetchStatus.textContent = "تعذر جلب الأوقات الآن، تم عرض آخر بيانات محفوظة.";
    }
  }

  cityInput.value = user.city;
  countryInput.value = user.country;

  cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    user.city = cityInput.value.trim() || user.city;
    user.country = countryInput.value.trim() || user.country;
    loadPrayerTimes(true);
  });

  quranForm.addEventListener("submit", (event) => {
    event.preventDefault();
    quranPages = Math.max(0, Number(quranPagesInput.value) || 0);
    saveQuranPagesForUser(user, quranPages);
    renderPrayers();
  });

  notifyBtn.addEventListener("click", async () => {
    if (!("Notification" in window)) {
      notifyStatus.textContent = "هذا المتصفح لا يدعم الإشعارات.";
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      notifyStatus.textContent = "تم تفعيل الإشعارات.";
      new Notification("أشطر كتكوت", {
        body: "تذكير لطيف: راجعي صلاتك وورد القرآن."
      });
    } else {
      notifyStatus.textContent = "لم يتم السماح بالإشعارات.";
    }
  });

  if ("Notification" in window && Notification.permission === "granted") {
    notifyStatus.textContent = "الإشعارات مفعلة بالفعل.";
  }

  syncPrayerObjects();
  renderPrayers();
  loadPrayerTimes(false);
}

function renderAzkarList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "azkar-card";
    card.innerHTML = `<strong>${item.repeat}</strong><p>${item.text}</p>`;
    container.appendChild(card);
  });
}

function initAzkarPage() {
  if (!document.getElementById("morning-azkar")) return;
  renderAzkarList("morning-azkar", MORNING_AZKAR);
  renderAzkarList("evening-azkar", EVENING_AZKAR);
}

function initCoursesPage() {
  const coursesGrid = document.getElementById("courses-grid");
  if (!coursesGrid) return;

  COURSE_DATA.forEach((course) => {
    const card = document.createElement("details");
    card.className = "course-card panel course-accordion";
    card.innerHTML = `
      <summary class="course-summary">
        <div>
          <p class="mini-title">افتحي الكورس لرؤية الروابط</p>
          <h2>${course.title}</h2>
          <p class="helper-text">${course.description}</p>
        </div>
      </summary>
      <div class="course-levels">
        ${course.levels
          .map(
            (level) => `
              <section class="course-level-block">
                <h3>${level.name}</h3>
                <div class="course-links">
                  ${level.items
                    .map(
                      (item) => `
                        <a class="course-link-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
                          <strong>${item.title}</strong>
                          <span>بتاع: ${item.provider}</span>
                        </a>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
          )
          .join("")}
      </div>
    `;
    coursesGrid.appendChild(card);
  });
}

function initPomodoroPage(user) {
  const treeChoices = document.getElementById("tree-choices");
  if (!treeChoices || !user) return;

  const focusMinutesInput = document.getElementById("focus-minutes");
  const breakMinutesInput = document.getElementById("break-minutes");
  const timerDisplay = document.getElementById("timer-display");
  const timerStatus = document.getElementById("timer-status");
  const startButton = document.getElementById("start-timer");
  const pauseButton = document.getElementById("pause-timer");
  const resetButton = document.getElementById("reset-timer");
  const treePlant = document.getElementById("tree-plant");
  const forestGrid = document.getElementById("forest-grid");
  const forestCounter = document.getElementById("forest-counter");

  let forest = getForestForUser(user);
  let selectedTreeId = getSelectedTreeForUser(user);
  let timerId = null;
  let totalSeconds = Number(focusMinutesInput.value) * 60;
  let remainingSeconds = totalSeconds;
  let isRunning = false;

  function selectedTree() {
    return TREE_OPTIONS.find((tree) => tree.id === selectedTreeId) || TREE_OPTIONS[0];
  }

  function formatSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function renderForest() {
    forestGrid.innerHTML = "";
    forestCounter.textContent = `${forest.length} شجرة`;
    forest.forEach((tree) => {
      const item = document.createElement("div");
      item.className = "forest-item";
      item.style.setProperty("--tree-color", tree.color);
      item.innerHTML = `<div class="forest-emoji">${tree.emoji}</div><strong>${tree.name}</strong><span>${tree.duration} دقيقة</span>`;
      forestGrid.appendChild(item);
    });
  }

  function renderTreeChoices() {
    treeChoices.innerHTML = "";
    TREE_OPTIONS.forEach((tree) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tree-choice ${tree.id === selectedTreeId ? "active" : ""}`;
      button.style.setProperty("--tree-color", tree.color);
      button.innerHTML = `<span class="tree-choice-emoji">${tree.emoji}</span><strong>${tree.name}</strong>`;
      button.addEventListener("click", () => {
        selectedTreeId = tree.id;
        saveSelectedTreeForUser(user, tree.id);
        renderTreeChoices();
        updateGrowingTree();
      });
      treeChoices.appendChild(button);
    });
  }

  function updateGrowingTree() {
    const progress = totalSeconds === 0 ? 0 : ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    const tree = selectedTree();
    treePlant.style.setProperty("--growth", `${Math.max(progress, 8)}%`);
    treePlant.style.setProperty("--tree-color", tree.color);
    treePlant.dataset.tree = tree.emoji;
  }

  function resetTimerDisplay() {
    totalSeconds = Math.max(1, Number(focusMinutesInput.value) || 25) * 60;
    remainingSeconds = totalSeconds;
    timerDisplay.textContent = formatSeconds(remainingSeconds);
    updateGrowingTree();
  }

  function playCompletionSound() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.03 + index * 0.16);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.17 + index * 0.16);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(context.currentTime + index * 0.16);
      oscillator.stop(context.currentTime + 0.2 + index * 0.16);
    });
  }

  function completeSession() {
    clearInterval(timerId);
    timerId = null;
    isRunning = false;
    const tree = selectedTree();
    forest.unshift({
      id: `${Date.now()}`,
      name: tree.name,
      emoji: tree.emoji,
      color: tree.color,
      duration: Math.max(1, Number(focusMinutesInput.value) || 25)
    });
    saveForestForUser(user, forest);
    renderForest();
    playCompletionSound();
    timerStatus.textContent = `أحسنت! نمت ${tree.name} داخل غابتك، خذي استراحة ${breakMinutesInput.value} دقائق.`;
    resetTimerDisplay();
  }

  function tick() {
    remainingSeconds -= 1;
    timerDisplay.textContent = formatSeconds(remainingSeconds);
    updateGrowingTree();
    if (remainingSeconds <= 0) {
      completeSession();
    }
  }

  startButton.addEventListener("click", () => {
    if (isRunning) return;
    if (remainingSeconds !== totalSeconds && remainingSeconds <= 0) {
      resetTimerDisplay();
    }
    isRunning = true;
    timerStatus.textContent = `جارٍ زرع ${selectedTree().name}... حافظي على تركيزك.`;
    timerId = window.setInterval(tick, 1000);
  });

  pauseButton.addEventListener("click", () => {
    if (!isRunning) return;
    clearInterval(timerId);
    timerId = null;
    isRunning = false;
    timerStatus.textContent = "تم إيقاف الجلسة مؤقتًا. يمكنك العودة متى أردت.";
  });

  resetButton.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    isRunning = false;
    timerStatus.textContent = "تمت إعادة الجلسة. ابدئي زرعة جديدة عندما تكونين جاهزة.";
    resetTimerDisplay();
  });

  focusMinutesInput.addEventListener("input", resetTimerDisplay);

  renderTreeChoices();
  renderForest();
  resetTimerDisplay();
}

function initProfilePage(user) {
  const form = document.getElementById("profile-dashboard-form");
  if (!form || !user) return;

  const nameInput = document.getElementById("dashboard-name");
  const genderInput = document.getElementById("dashboard-gender");
  const emailInput = document.getElementById("dashboard-email");
  const cityInput = document.getElementById("dashboard-city");
  const countryInput = document.getElementById("dashboard-country");
  const passwordInput = document.getElementById("dashboard-password");
  const status = document.getElementById("profile-status");
  const summary = document.getElementById("profile-summary");

  function renderSummary() {
    const tasks = getTasksForUser(user);
    const prayerState = getPrayerStateForUser(user);
    const quranPages = getQuranPagesForUser(user);
    const tasksDone = tasks.filter((task) => task.done).length;
    const prayersDone = Object.values(prayerState).filter(Boolean).length;

    const items = [
      { label: "مهام اليوم", value: `${tasksDone}/${tasks.length || 0}` },
      { label: "صلوات اليوم", value: `${prayersDone}/5` },
      { label: "ورد القرآن", value: `${quranPages} صفحة` },
      { label: "رسالة التشجيع", value: getProfileMessage(user.name, user.gender) }
    ];

    summary.innerHTML = "";
    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "summary-card";
      card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
      summary.appendChild(card);
    });
  }

  nameInput.value = user.name;
  genderInput.value = user.gender;
  emailInput.value = user.email;
  cityInput.value = user.city;
  countryInput.value = user.country;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const patch = {
      name: nameInput.value.trim(),
      gender: genderInput.value,
      city: cityInput.value.trim(),
      country: countryInput.value.trim()
    };
    if (passwordInput.value.trim()) {
      patch.password = passwordInput.value;
    }
    const updatedUser = updateUserProfile(patch);
    if (!updatedUser) {
      status.textContent = "تعذر حفظ التعديلات.";
      return;
    }
    Object.assign(user, updatedUser);
    passwordInput.value = "";
    hydrateAuthLinks(user);
    renderSummary();
    status.textContent = "تم حفظ بياناتك بنجاح.";
  });

  renderSummary();
}

document.addEventListener("DOMContentLoaded", () => {
  initLoginPage();
  const user = enforceAuth();
  if (getCurrentPage() !== "login" && !user) return;
  hydrateAuthLinks(user);
  initTasksPage(user);
  initPrayerPage(user);
  initAzkarPage();
  initCoursesPage();
  initPomodoroPage(user);
  initProfilePage(user);
});
