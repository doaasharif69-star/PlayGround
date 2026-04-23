const STORAGE_KEYS = {
  users: "ashtar-katkot-users",
  session: "ashtar-katkot-session",
  tasks: "ashtar-katkot-tasks",
  prayers: "ashtar-katkot-prayers",
  quranPages: "ashtar-katkot-quran-pages",
  prayerTimes: "ashtar-katkot-prayer-times",
  azkarState: "ashtar-katkot-azkar-state",
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
    description: "قسم شامل يضم أنواع برمجة مختلفة بالعربي من الأساسيات إلى المسارات المتقدمة.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "تعلم البرمجة من الصفر", provider: "أكاديمية حسوب", url: "https://academy.hsoub.com/learn-programming/" },
          { title: "C Programming From Basics to Mastery", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2247" },
          { title: "Codezilla Academy", provider: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
          { title: "أساسيات Python بالعربي", provider: "نتائج عربية لبايثون", url: "https://www.youtube.com/results?search_query=python+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "أساسيات Java بالعربي", provider: "نتائج عربية لجافا", url: "https://www.youtube.com/results?search_query=java+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "أساسيات C++ بالعربي", provider: "نتائج عربية لـ C++", url: "https://www.youtube.com/results?search_query=c%2B%2B+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Learn HTML & CSS", provider: "MaharaTech - أحمد الدُميري", url: "https://stagging.maharatech.gov.eg/course/view.php?id=36" },
          { title: "Javascript", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=741" },
          { title: "Introduction to JavaScript", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/section.php?id=4370" },
          { title: "Database Fundamentals", provider: "MaharaTech - Salma Mamdouh", url: "https://dev.maharatech.gov.eg/course/view.php?id=740" },
          { title: "برمجة قواعد البيانات SQL بالعربي", provider: "نتائج عربية لـ SQL", url: "https://www.youtube.com/results?search_query=sql+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "برمجة تطبيقات Flutter بالعربي", provider: "نتائج عربية لفلتر", url: "https://www.youtube.com/results?search_query=flutter+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "قناة Elzero Web School", provider: "أسامة الزيرو", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { title: "Javascript Developer Track", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=999&lang=en" },
          { title: "Asynchronous Web Development", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "Java IO and Network Programming", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "Maven Essentials Training", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "مسارات Back-End متقدمة بالعربي", provider: "نتائج عربية للباك إند", url: "https://www.youtube.com/results?search_query=backend+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      }
    ]
  },
  {
    title: "Web Development",
    description: "مسار كامل لتطوير الويب من الواجهة إلى المسارات العملية المتقدمة.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "Learn HTML & CSS", provider: "MaharaTech - أحمد الدُميري", url: "https://stagging.maharatech.gov.eg/course/view.php?id=36" },
          { title: "تعلم تطوير الويب من الصفر", provider: "أكاديمية حسوب", url: "https://academy.hsoub.com/learn-programming/" },
          { title: "Elzero Web School", provider: "أسامة الزيرو", url: "https://www.youtube.com/@ElzeroWebSchool" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Introduction to JavaScript", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/section.php?id=4370" },
          { title: "Javascript Developer Track", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=999&lang=en" },
          { title: "Codezilla Frontend", provider: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Asynchronous Web Development", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "Java IO and Network Programming", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "Maven Essentials Training", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" }
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
          { title: "مقدمة في التصميم الجرافيكي", provider: "إدراك عبر Egyincs - نسخة أخرى", url: "https://egyincs.com/courses/introduction-to-graphic-design-course/" },
          { title: "أساسيات Graphic Design بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=graphic+design+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "تعلم التصميم للمبتدئين", provider: "الرابحون", url: "https://www.alrab7on.com/best-graphic-design-courses/" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "أفضل كورسات تصميم جرافيك", provider: "الرابحون", url: "https://www.alrab7on.com/best-graphic-design-courses/" },
          { title: "أساسيات التصميم الجرافيكي", provider: "Yes I'm a Designer عبر TeraCourses", url: "https://teracourses.com/ar/course/graphic-design-fundamentals-course3" },
          { title: "تصميم الشعارات والهوية البصرية", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D8%A7%D9%84%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "تصميم السوشيال ميديا", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D8%B3%D9%88%D8%B4%D9%8A%D8%A7%D9%84+%D9%85%D9%8A%D8%AF%D9%8A%D8%A7+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Graphic Design Specialization", provider: "Coursera", url: "https://www.coursera.org/specializations/graphic-design/" },
          { title: "Fundamentals of Graphic Design", provider: "Coursera", url: "https://www.coursera.org/learn/fundamentals-of-graphic-design" },
          { title: "بورتفوليو مصمم جرافيك", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=graphic+design+portfolio+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "مسارات احتراف التصميم", provider: "TeraCourses", url: "https://teracourses.com/ar/search?query=graphic+design" }
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
  },
  {
    title: "Cyber Security",
    description: "مسار مناسب لبناء أساس قوي ثم الانتقال لتخصصات الأمن السيبراني.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "ITI Cybersecurity Academy for Beginners", provider: "MaharaTech", url: "https://maharatech.gov.eg/mod/page/view.php?id=14058" },
          { title: "مدخل إلى الأمن السيبراني", provider: "Cyber Security بالعربي", url: "https://www.youtube.com/results?search_query=%D8%A3%D9%85%D9%86+%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "مسارات Cybersecurity على MaharaTech", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
          { title: "Cyber Security Academy", provider: "MaharaTech", url: "https://maharatech.gov.eg/mod/page/view.php?id=14058" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "تخصص الأمن السيبراني", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
          { title: "مصادر متقدمة في الأمن السيبراني", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=%D8%A3%D9%85%D9%86+%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A+%D9%85%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      }
    ]
  },
  {
    title: "Front-End Development",
    description: "مسار متخصص للواجهات من HTML و CSS حتى المشاريع المتقدمة وإدارة الواجهات.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "HTML و CSS من الصفر", provider: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { title: "Learn HTML & CSS", provider: "MaharaTech", url: "https://stagging.maharatech.gov.eg/course/view.php?id=36" },
          { title: "أساسيات Front-End بالعربي", provider: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "JavaScript بالعربي", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/section.php?id=4370" },
          { title: "Front-End Projects", provider: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool/playlists" },
          { title: "Responsive Web Design بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=responsive+web+design+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Javascript Developer Track", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=999&lang=en" },
          { title: "React بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=react+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Advanced Front-End", provider: "Codezilla", url: "https://www.youtube.com/@Codezilla/playlists" }
        ]
      }
    ]
  },
  {
    title: "Back-End Development",
    description: "تعلم بناء الخوادم وقواعد البيانات وواجهات API بمستويات واضحة.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "مدخل إلى Back-End", provider: "أكاديمية حسوب", url: "https://academy.hsoub.com/learn-programming/" },
          { title: "PHP بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=php+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Node.js بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=node.js+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Database Fundamentals", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/view.php?id=740" },
          { title: "REST API بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=rest+api+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "SQL للمطورين", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/view.php?id=740" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Back-End متقدم بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=backend+advanced+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Java IO and Network Programming", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" },
          { title: "Maven Essentials Training", provider: "MaharaTech", url: "https://maharatech.gov.eg/my/index.php" }
        ]
      }
    ]
  },
  {
    title: "علوم البيانات",
    description: "مسار عربي لتعلم تحليل البيانات، الإحصاء التطبيقي، والتعامل مع البيانات الضخمة.",
    levels: [
      {
        name: "مبتدئ",
        items: [
          { title: "مدخل إلى تحليل البيانات", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
          { title: "Data Analysis بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=data+analysis+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Excel لتحليل البيانات", provider: "Coursera", url: "https://www.coursera.org/search?query=excel%20data%20analysis" }
        ]
      },
      {
        name: "متوسط",
        items: [
          { title: "Power BI بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=power+bi+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Python لتحليل البيانات", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=python+for+data+analysis+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "Data Analysis", provider: "Coursera", url: "https://www.coursera.org/search?query=data%20analysis" }
        ]
      },
      {
        name: "محترف",
        items: [
          { title: "Data Science", provider: "Coursera", url: "https://www.coursera.org/search?query=data%20science" },
          { title: "Machine Learning بالعربي", provider: "نتائج يوتيوب عربية", url: "https://www.youtube.com/results?search_query=machine+learning+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
          { title: "تحليل بيانات متقدم", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
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
const LIFE_AZKAR = [
  { title: "دعاء دخول الحمام", text: "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ." },
  { title: "دعاء الخروج من الحمام", text: "غُفْرَانَكَ." },
  { title: "دعاء لبس الثوب", text: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ." },
  { title: "دعاء خلع الثوب", text: "بِسْمِ اللَّهِ." },
  { title: "دعاء الخروج من البيت", text: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ." },
  { title: "دعاء دخول البيت", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ." },
  { title: "دعاء الريح", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ." },
  { title: "دعاء الرعد", text: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ." },
  { title: "دعاء المطر", text: "اللَّهُمَّ صَيِّبًا نَافِعًا." },
  { title: "دعاء البرد والشتاء", text: "اللَّهُمَّ اجْعَلْهُ غَيْثًا مُغِيثًا، هَنِيئًا مَرِيئًا." },
  { title: "دعاء الألم", text: "ضَعْ يَدَكَ عَلَى الَّذِي يَأْلَمُ مِنْ جَسَدِكَ وَقُلْ: بِسْمِ اللَّهِ، ثَلَاثًا، وَقُلْ سَبْعًا: أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ." },
  { title: "دعاء الكرب", text: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ." },
  { title: "دعاء قبل المذاكرة", text: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا." },
  { title: "دعاء بعد المذاكرة", text: "اللَّهُمَّ اسْتَوْدَعْتُكَ مَا قَرَأْتُ وَمَا حَفِظْتُ فَرُدَّهُ عَلَيَّ عِنْدَ حَاجَتِي إِلَيْهِ." },
  { title: "دعاء النوم", text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا." },
  { title: "دعاء الاستيقاظ", text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ." }
];
const SKILL_CATEGORIES = [
  {
    title: "التواصل الفعّال",
    type: "Soft Skill",
    links: [
      { title: "مهارات التواصل", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "Communication Skills", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "التواصل بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "إدارة الوقت",
    type: "Soft Skill",
    links: [
      { title: "إدارة الوقت", provider: "رواق", url: "https://www.rwaq.org/" },
      { title: "Time Management", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "تنظيم الوقت", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D9%88%D9%82%D8%AA+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "القيادة",
    type: "Soft Skill",
    links: [
      { title: "Leadership", provider: "Coursera Arabic Results", url: "https://www.coursera.org/search?query=leadership" },
      { title: "مهارات القيادة", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "القيادة بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "العمل الجماعي",
    type: "Soft Skill",
    links: [
      { title: "العمل ضمن فريق", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "Teamwork", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Teamwork بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=teamwork+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "حل المشكلات",
    type: "Soft Skill",
    links: [
      { title: "Problem Solving", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "حل المشكلات", provider: "رواق", url: "https://www.rwaq.org/" },
      { title: "حل المشكلات بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%AD%D9%84+%D8%A7%D9%84%D9%85%D8%B4%D9%83%D9%84%D8%A7%D8%AA+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "التفاوض",
    type: "Soft Skill",
    links: [
      { title: "Negotiation", provider: "Coursera", url: "https://www.coursera.org/search?query=negotiation" },
      { title: "مهارات التفاوض", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D9%88%D8%B6+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "فن التفاوض", provider: "إدراك", url: "https://www.edraak.org/" }
    ]
  },
  {
    title: "العرض والتقديم",
    type: "Soft Skill",
    links: [
      { title: "Presentation Skills", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "العرض والتقديم بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=presentation+skills+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "مهارات الإلقاء", provider: "رواق", url: "https://www.rwaq.org/" }
    ]
  },
  {
    title: "الذكاء العاطفي",
    type: "Soft Skill",
    links: [
      { title: "Emotional Intelligence", provider: "Coursera", url: "https://www.coursera.org/search?query=emotional%20intelligence" },
      { title: "الذكاء العاطفي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%B9%D8%A7%D8%B7%D9%81%D9%8A+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "إدارة المشاعر", provider: "إدراك", url: "https://www.edraak.org/" }
    ]
  },
  {
    title: "السيرة الذاتية والمقابلات",
    type: "Soft Skill",
    links: [
      { title: "كتابة CV", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Job Interview", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D9%85%D9%82%D8%A7%D8%A8%D9%84%D8%A7%D8%AA+%D8%A7%D9%84%D8%B9%D9%85%D9%84+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "السيرة الذاتية", provider: "إدراك", url: "https://www.edraak.org/" }
    ]
  },
  {
    title: "إكسل Excel",
    type: "Hard Skill",
    links: [
      { title: "Excel بالعربي", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Excel بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=excel+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Excel Skills", provider: "Coursera", url: "https://www.coursera.org/search?query=excel" }
    ]
  },
  {
    title: "Power BI",
    type: "Hard Skill",
    links: [
      { title: "Power BI بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=power+bi+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Power BI", provider: "Coursera", url: "https://www.coursera.org/search?query=power%20bi" },
      { title: "تحليل البيانات", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  },
  {
    title: "تحليل البيانات",
    type: "Hard Skill",
    links: [
      { title: "Data Analysis", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "تحليل البيانات بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=data+analysis+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Data Analysis", provider: "Coursera", url: "https://www.coursera.org/search?query=data%20analysis" }
    ]
  },
  {
    title: "Python",
    type: "Hard Skill",
    links: [
      { title: "Python بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=python+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Python", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Python", provider: "Coursera", url: "https://www.coursera.org/search?query=python" }
    ]
  },
  {
    title: "Java",
    type: "Hard Skill",
    links: [
      { title: "Java بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=java+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Java", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Java", provider: "Coursera", url: "https://www.coursera.org/search?query=java" }
    ]
  },
  {
    title: "C++",
    type: "Hard Skill",
    links: [
      { title: "C++ بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=c%2B%2B+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "C++", provider: "Coursera", url: "https://www.coursera.org/search?query=c%2B%2B" },
      { title: "برمجة ++C", provider: "رواق", url: "https://www.rwaq.org/" }
    ]
  },
  {
    title: "SQL وقواعد البيانات",
    type: "Hard Skill",
    links: [
      { title: "SQL بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=sql+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Database Fundamentals", provider: "MaharaTech", url: "https://dev.maharatech.gov.eg/course/view.php?id=740" },
      { title: "SQL", provider: "Coursera", url: "https://www.coursera.org/search?query=sql" }
    ]
  },
  {
    title: "Web Development",
    type: "Hard Skill",
    links: [
      { title: "تطوير الويب بالعربي", provider: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
      { title: "Web Development", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Web Development", provider: "Coursera", url: "https://www.coursera.org/search?query=web%20development" }
    ]
  },
  {
    title: "Cyber Security",
    type: "Hard Skill",
    links: [
      { title: "Cyber Security Academy", provider: "MaharaTech", url: "https://maharatech.gov.eg/mod/page/view.php?id=14058" },
      { title: "الأمن السيبراني بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%A3%D9%85%D9%86+%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Cyber Security", provider: "Coursera", url: "https://www.coursera.org/search?query=cyber%20security" }
    ]
  },
  {
    title: "UI/UX",
    type: "Hard Skill",
    links: [
      { title: "UI/UX بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=ui+ux+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "UX Design", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=1231" },
      { title: "UI/UX", provider: "Coursera", url: "https://www.coursera.org/search?query=ux%20design" }
    ]
  },
  {
    title: "Graphic Design",
    type: "Hard Skill",
    links: [
      { title: "Graphic Design بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=graphic+design+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "التصميم الجرافيكي", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "Graphic Design", provider: "Coursera", url: "https://www.coursera.org/search?query=graphic%20design" }
    ]
  },
  {
    title: "Flutter وتطوير التطبيقات",
    type: "Hard Skill",
    links: [
      { title: "Flutter بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=flutter+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Mobile Apps", provider: "Coursera", url: "https://www.coursera.org/search?query=flutter" },
      { title: "تطوير التطبيقات", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  },
  {
    title: "الذكاء الاصطناعي",
    type: "Hard Skill",
    links: [
      { title: "Generative AI", provider: "MaharaTech", url: "https://maharatech.gov.eg/course/view.php?id=2350&lang=en" },
      { title: "AI بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "AI", provider: "Coursera", url: "https://www.coursera.org/search?query=artificial%20intelligence" }
    ]
  },
  {
    title: "إدارة المشاريع",
    type: "Soft Skill",
    links: [
      { title: "إدارة المشاريع بالعربي", provider: "رواق", url: "https://www.rwaq.org/" },
      { title: "Project Management", provider: "Coursera", url: "https://www.coursera.org/search?query=project%20management" },
      { title: "إدارة المشاريع", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "التسويق الرقمي",
    type: "Hard Skill",
    links: [
      { title: "التسويق الرقمي", provider: "إدراك", url: "https://www.edraak.org/" },
      { title: "Digital Marketing", provider: "Coursera", url: "https://www.coursera.org/search?query=digital%20marketing" },
      { title: "Digital Marketing بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=digital+marketing+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ]
  },
  {
    title: "الجداول الإلكترونية المتقدمة",
    type: "Hard Skill",
    links: [
      { title: "Excel المتقدم", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "Google Sheets بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=google+sheets+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Spreadsheet Skills", provider: "Coursera", url: "https://www.coursera.org/search?query=spreadsheet" }
    ]
  },
  {
    title: "الاختبار وضمان الجودة",
    type: "Hard Skill",
    links: [
      { title: "Software Testing", provider: "MaharaTech", url: "https://maharatech.gov.eg/" },
      { title: "اختبار البرمجيات بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=software+testing+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "QA Testing", provider: "Coursera", url: "https://www.coursera.org/search?query=software%20testing" }
    ]
  },
  {
    title: "DevOps",
    type: "Hard Skill",
    links: [
      { title: "DevOps", provider: "Coursera", url: "https://www.coursera.org/search?query=devops" },
      { title: "DevOps بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=devops+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "أدوات النشر والتشغيل", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  },
  {
    title: "الشبكات",
    type: "Hard Skill",
    links: [
      { title: "Networking", provider: "Coursera", url: "https://www.coursera.org/search?query=networking" },
      { title: "الشبكات بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Networks", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  },
  {
    title: "الحوسبة السحابية",
    type: "Hard Skill",
    links: [
      { title: "Cloud Computing", provider: "Coursera", url: "https://www.coursera.org/search?query=cloud%20computing" },
      { title: "Cloud بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=cloud+computing+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "الحوسبة السحابية", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  },
  {
    title: "الأنظمة المدمجة وإنترنت الأشياء",
    type: "Hard Skill",
    links: [
      { title: "Arduino بالعربي", provider: "يوتيوب عربي", url: "https://www.youtube.com/results?search_query=arduino+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" },
      { title: "Robotics", provider: "Coursera", url: "https://www.coursera.org/search?query=robotics" },
      { title: "Embedded Systems", provider: "MaharaTech", url: "https://maharatech.gov.eg/" }
    ]
  }
];
const BOOK_CATEGORIES = [
  {
    title: "ثقافة عامة",
    count: "200+ كتاب عربي",
    description: "مكتبة واسعة لبناء الثقافة العامة والمعرفة اليومية من أكثر من مصدر قراءة.",
    sources: [
      { label: "هنداوي", url: "https://www.hindawi.org/books/" },
      { label: "الأرشيف العربي", url: "https://archive.org/search?query=arabic+culture+books" },
      { label: "كتب متنوعة", url: "https://archive.org/details/booksbylanguage_arabic" }
    ]
  },
  {
    title: "ترفيهية",
    count: "200+ كتاب عربي",
    description: "قصص خفيفة وقراءات ممتعة ومواد ترفيهية مناسبة للقراءة الحرة.",
    sources: [
      { label: "هنداوي أدب", url: "https://www.hindawi.org/books/categories/literature/" },
      { label: "الأرشيف الترفيهي", url: "https://archive.org/search?query=arabic+stories" },
      { label: "قصص عربية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22stories%22" }
    ]
  },
  {
    title: "أطفال",
    count: "200+ كتاب عربي",
    description: "قصص وحكايات وتعليم مبسط للأطفال بمستويات عمرية مختلفة.",
    sources: [
      { label: "كتب أطفال", url: "https://archive.org/search?query=arabic+children+books" },
      { label: "مكتبة الطفل", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22children%22" },
      { label: "قصص تربوية", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "حرف ومهارات",
    count: "200+ كتاب عربي",
    description: "كتب للحرف العملية والمهارات اليدوية والتطبيقات المنزلية والإبداعية.",
    sources: [
      { label: "مهارات عملية", url: "https://archive.org/search?query=arabic+crafts+books" },
      { label: "كتب تطبيقية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22crafts%22" },
      { label: "تعلم المهارات", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "السير الذاتية",
    count: "200+ كتاب عربي",
    description: "سير شخصيات مؤثرة وتجارب حياة ملهمة ومذكرات متنوعة.",
    sources: [
      { label: "هنداوي سير", url: "https://www.hindawi.org/books/categories/biographies/" },
      { label: "أرشيف السير", url: "https://archive.org/search?query=arabic+biographies" },
      { label: "مذكرات وشخصيات", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22biography%22" }
    ]
  },
  {
    title: "فلسفة",
    count: "200+ كتاب عربي",
    description: "مكتبة فلسفية عربية ومترجمة تشمل المداخل والمدارس والقراءات العميقة.",
    sources: [
      { label: "هنداوي فلسفة", url: "https://www.hindawi.org/books/categories/philosophy/" },
      { label: "أرشيف الفلسفة", url: "https://archive.org/search?query=arabic+philosophy+books" },
      { label: "فلسفة مترجمة", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22philosophy%22" }
    ]
  },
  {
    title: "سفر ورحلات",
    count: "200+ كتاب عربي",
    description: "أدب الرحلات وتجارب السفر والجولات الحضارية والجغرافية.",
    sources: [
      { label: "أدب الرحلات", url: "https://archive.org/search?query=arabic+travel+books" },
      { label: "رحلات عربية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22travel%22" },
      { label: "كتب رحلات", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "رياضة",
    count: "200+ كتاب عربي",
    description: "تدريب رياضي وتغذية رياضية وتاريخ الرياضات المختلفة.",
    sources: [
      { label: "كتب رياضة", url: "https://archive.org/search?query=arabic+sports+books" },
      { label: "تدريب ولياقة", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22sports%22" },
      { label: "رياضة وصحة", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "طبخ من جميع أنحاء العالم",
    count: "200+ كتاب عربي",
    description: "وصفات عربية وعالمية وكتب مطابخ متنوعة وحلويات ومخبوزات.",
    sources: [
      { label: "كتب طبخ", url: "https://archive.org/search?query=arabic+cookbook" },
      { label: "مطابخ عالمية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22cooking%22" },
      { label: "وصفات وطبخ", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "فنون",
    count: "200+ كتاب عربي",
    description: "كتب الفنون البصرية والموسيقى والمسرح والرسم والتذوق الفني.",
    sources: [
      { label: "كتب فنون", url: "https://archive.org/search?query=arabic+arts+books" },
      { label: "أرشيف الفنون", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22art%22" },
      { label: "فنون وأدب", url: "https://www.hindawi.org/books/categories/plays/" }
    ]
  },
  {
    title: "طبية",
    count: "200+ كتاب عربي",
    description: "مراجع طبية وصحية وتوعوية وكتب مبسطة ومتخصصة.",
    sources: [
      { label: "كتب طبية", url: "https://archive.org/search?query=arabic+medical+books" },
      { label: "علوم وصحة", url: "https://www.hindawi.org/books/categories/science/" },
      { label: "طب وصيدلة", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22medicine%22" }
    ]
  },
  {
    title: "قانون",
    count: "200+ كتاب عربي",
    description: "مراجع قانونية وتشريعات ودراسات قانونية عربية.",
    sources: [
      { label: "كتب قانون", url: "https://archive.org/search?query=arabic+law+books" },
      { label: "أرشيف قانوني", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22law%22" },
      { label: "دراسات قانونية", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "اقتصاد وأعمال",
    count: "200+ كتاب عربي",
    description: "اقتصاد، إدارة، ريادة أعمال، محاسبة، واستثمار.",
    sources: [
      { label: "كتب اقتصاد", url: "https://archive.org/search?query=arabic+economics+books" },
      { label: "أعمال وإدارة", url: "https://archive.org/search?query=arabic+business+books" },
      { label: "سياسة واقتصاد", url: "https://www.hindawi.org/books/categories/politics/" }
    ]
  },
  {
    title: "جغرافيا",
    count: "200+ كتاب عربي",
    description: "كتب الجغرافيا البشرية والطبيعية والخرائط والدول.",
    sources: [
      { label: "كتب جغرافيا", url: "https://archive.org/search?query=arabic+geography+books" },
      { label: "أرشيف جغرافي", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22geography%22" },
      { label: "رحلات وجغرافيا", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "تاريخ",
    count: "200+ كتاب عربي",
    description: "تاريخ حضارات وأمم وأحداث وشخصيات عبر العصور.",
    sources: [
      { label: "هنداوي تاريخ", url: "https://www.hindawi.org/books/categories/history/" },
      { label: "أرشيف التاريخ", url: "https://archive.org/search?query=arabic+history+books" },
      { label: "تاريخ عربي", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22history%22" }
    ]
  },
  {
    title: "علم النفس",
    count: "200+ كتاب عربي",
    description: "كتب علم النفس، العلاج المعرفي، الشخصية، والصحة النفسية.",
    sources: [
      { label: "كتب نفسية", url: "https://archive.org/search?query=arabic+psychology+books" },
      { label: "علم النفس العربي", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22psychology%22" },
      { label: "علوم اجتماعية", url: "https://www.hindawi.org/books/categories/sociology/" }
    ]
  },
  {
    title: "تطوير الذات",
    count: "200+ كتاب عربي",
    description: "تنمية بشرية، إنتاجية، عادات، تحفيز، وإدارة الحياة.",
    sources: [
      { label: "تنمية بشرية", url: "https://archive.org/search?query=arabic+self+development+books" },
      { label: "عادات وإنتاجية", url: "https://archive.org/search?query=arabic+productivity+books" },
      { label: "كتب تطوير الذات", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "تعليمية ودراسية",
    count: "200+ كتاب عربي",
    description: "كتب مدرسية وتعليمية ومراجع مناسبة لمراحل عمرية ودراسية مختلفة.",
    sources: [
      { label: "كتب تعليمية", url: "https://archive.org/search?query=arabic+education+books" },
      { label: "مكتبة تعليم", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22education%22" },
      { label: "تعلم ودراسة", url: "https://www.hindawi.org/books/" }
    ]
  },
  {
    title: "تكنولوجيا ومعلومات",
    count: "200+ كتاب عربي",
    description: "كتب الحاسوب والتكنولوجيا ونظم المعلومات ومفاهيم التقنية الأساسية والمتقدمة.",
    sources: [
      { label: "كتب تقنية", url: "https://archive.org/search?query=arabic+technology+books" },
      { label: "نظم المعلومات", url: "https://archive.org/search?query=arabic+information+systems+books" },
      { label: "علوم وتقنية", url: "https://www.hindawi.org/books/categories/science/" }
    ]
  },
  {
    title: "علمية",
    count: "200+ كتاب عربي",
    description: "كتب الفيزياء والكيمياء والأحياء والعلوم العامة والمراجع العلمية.",
    sources: [
      { label: "هنداوي علوم", url: "https://www.hindawi.org/books/categories/science/" },
      { label: "أرشيف العلوم", url: "https://archive.org/search?query=arabic+science+books" },
      { label: "كتب علمية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22science%22" }
    ]
  },
  {
    title: "دينية",
    count: "200+ كتاب عربي",
    description: "مكتبة دينية واسعة في العقيدة والفقه والسيرة والتفسير والحديث.",
    sources: [
      { label: "المكتبة الشاملة", url: "https://shamela.ws/" },
      { label: "أرشيف إسلامي", url: "https://archive.org/search?query=arabic+islamic+books" },
      { label: "كتب دينية", url: "https://archive.org/details/booksbylanguage_arabic?and[]=subject%3A%22Islam%22" }
    ]
  },
  {
    title: "الأدب",
    count: "200+ كتاب",
    description: "الأدب العربي والعالمي، روايات، شعر، نقد، ومسرحيات.",
    sources: [
      { label: "هنداوي أدب", url: "https://www.hindawi.org/books/categories/literature/" },
      { label: "هنداوي شعر", url: "https://www.hindawi.org/books/categories/poetry/" },
      { label: "الأرشيف الأدبي", url: "https://archive.org/search?query=arabic+literature+books" }
    ]
  }
];
const MOTIVATION_PALETTES = [
  ["#1fb6a6", "#57a0ff", "#f9d66c", "#ffffff"],
  ["#ff9cb5", "#ffd36e", "#fff7e8", "#ffffff"],
  ["#0f8d81", "#17324d", "#fff3bf", "#d6f7f1"],
  ["#7f7dff", "#57a0ff", "#ffe7f1", "#ffffff"],
  ["#ffb56a", "#1fb6a6", "#fffaf0", "#ffffff"],
  ["#56cfe1", "#5e60ce", "#edf6ff", "#ffffff"]
];

const MOTIVATION_HEADLINES = [
  "خير واسع يقترب",
  "بشارة بعد صبر",
  "جبر يليق بقلبك",
  "راحة من الله",
  "فرح مفاجئ",
  "فتح قريب",
  "رزق مبارك",
  "دعوة مجابة",
  "نور بعد انتظار",
  "طمأنينة نازلة",
  "يوم أجمل",
  "قادم أجمل"
];

const MOTIVATION_MAIN_LINES = [
  "الخير الذي تنتظرينه",
  "الفرح الذي دعوتِ به",
  "الجبر الذي يحتاجه قلبك",
  "اليسر الذي سيبدل حالك",
  "الخبر الجميل الذي تتمنينه",
  "الباب الذي سيُفتح لك",
  "الطمأنينة التي تبحثين عنها",
  "الراحة التي ترجينها",
  "الأيام البيضاء التي تتمنينها",
  "الهدية التي أعدها الله لك",
  "المفاجأة اللطيفة القادمة",
  "السعة التي ستطمئنك"
];

const MOTIVATION_ENDINGS = [
  "قد تكون أقرب إليك مما تظنين، فاصبري وابتسمي.",
  "في طريقها إليك بلطف رباني لا يخيب.",
  "سيأتيك في الوقت الذي يبهرك ويجبرك.",
  "قد يطرق بابك فجأة ويبدل يومك كله.",
  "يحمله الله لك في توقيت مليء بالحكمة والجمال.",
  "سيصل إليك حين يكون قلبك مهيأ للفرح.",
  "مكتوب لك بطريقة أجمل مما تخيلتِ.",
  "يُدبَّر لك الآن بهدوء ورحمة.",
  "سيأتيك ومعه سكينة وامتنان كبير.",
  "يقترب بخطوات لا ترينها لكن الله يدبرها.",
  "سيفتح الله له الأبواب من حيث لا تشعرين.",
  "قادم ومعه أثر جميل يبقى طويلًا في قلبك."
];

const GOD_MESSAGE_OPENINGS = [
  "الله يقول لقلبك اليوم:",
  "هذه بشرى لقلبك:",
  "رسالة طمأنينة لك:",
  "كأنها منحة لك الآن:",
  "بشارة تليق بصبرك:",
  "رسالة نور لك:",
  "هذا لطف من الله لك:",
  "كلمات سلام لك اليوم:"
];

const GOD_MESSAGE_CORES = [
  "لن يضيع دعاؤك",
  "ما تأخر إلا ليأتي أجمل",
  "قلبك سيُجبر",
  "الأمل الذي تحملينه صادق",
  "باب الخير سيفتح",
  "الضيق لن يدوم",
  "رزقك يعرف طريقه إليك",
  "الفرج أقرب من خوفك",
  "الله يدبر لك الأفضل",
  "الراحة ستصل إلى قلبك",
  "الخير الذي تطلبينه مكتوب",
  "أيامك القادمة ألطف",
  "التيسير يمشي إليك",
  "أمنيتك لم تُنسَ",
  "ما تظنينه بعيدًا قريب",
  "الله يسمعك الآن"
];

const GOD_MESSAGE_ENDINGS = [
  "فلا تخافي.",
  "فاهدئي.",
  "واطمئني.",
  "وثقي بالله.",
  "واستمري.",
  "فالقادم أجمل.",
  "فالله لا يخذل قلبًا لجأ إليه.",
  "وسيأتيك الجبر في أجمل صورة."
];

function createMotivationSvg(line, paletteIndex) {
  const palette = MOTIVATION_PALETTES[paletteIndex % MOTIVATION_PALETTES.length];
  const [c1, c2, c3, c4] = palette;
  const safeLine = encodeURIComponent(line);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='${encodeURIComponent(c1)}'/><stop offset='1' stop-color='${encodeURIComponent(c2)}'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><circle cx='650' cy='110' r='74' fill='${encodeURIComponent(c3)}' opacity='0.9'/><circle cx='155' cy='120' r='28' fill='${encodeURIComponent(c4)}' opacity='0.48'/><path d='M0 485 C120 425 260 545 400 470 C560 385 690 495 800 430 L800 600 L0 600 Z' fill='${encodeURIComponent(c4)}' opacity='0.92'/><path d='M0 528 C150 455 290 560 455 500 C620 438 710 505 800 468 L800 600 L0 600 Z' fill='${encodeURIComponent(c3)}' opacity='0.42'/><text x='400' y='276' font-size='54' text-anchor='middle' fill='white' font-family='Cairo'>${safeLine}</text></svg>`;
}

function buildMotivationPosters() {
  const posters = [];
  for (let i = 0; i < 120; i += 1) {
    const headline = MOTIVATION_HEADLINES[i % MOTIVATION_HEADLINES.length];
    const line = MOTIVATION_MAIN_LINES[i % MOTIVATION_MAIN_LINES.length];
    const ending = MOTIVATION_ENDINGS[i % MOTIVATION_ENDINGS.length];
    posters.push({
      title: headline,
      text: `${line} ${ending}`,
      image: createMotivationSvg(headline, i)
    });
  }
  return posters;
}

function buildGodMessages() {
  const messages = [];
  for (let i = 0; i < 128; i += 1) {
    const opening = GOD_MESSAGE_OPENINGS[i % GOD_MESSAGE_OPENINGS.length];
    const core = GOD_MESSAGE_CORES[i % GOD_MESSAGE_CORES.length];
    const ending = GOD_MESSAGE_ENDINGS[i % GOD_MESSAGE_ENDINGS.length];
    messages.push(`${opening} ${core}، ${ending}`);
  }
  return messages;
}

const MOTIVATION_POSTERS = buildMotivationPosters();
const GOD_MESSAGES = buildGodMessages();
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

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
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
      link.textContent = `خروج | ${getDisplayPetName(user)}`;
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

function getDisplayPetName(user) {
  return user.petName?.trim() || user.name;
}

function getProfileMessage(user) {
  const birdWord = user.gender === "female" ? "كتكوتة" : "كتكوت";
  return `${getDisplayPetName(user)} أشطر ${birdWord} يا ناس`;
}

function getTasksForUser(user) {
  const all = readStorage(STORAGE_KEYS.tasks, {});
  const todayKey = getTodayKey();
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
  const todayKey = getTodayKey();
  all[user.email] = { date: todayKey, items: tasks };
  writeStorage(STORAGE_KEYS.tasks, all);
}

function getPrayerStateForUser(user) {
  const all = readStorage(STORAGE_KEYS.prayers, {});
  const todayKey = getTodayKey();
  return all[user.email]?.[todayKey] || {};
}

function savePrayerStateForUser(user, prayerState) {
  const all = readStorage(STORAGE_KEYS.prayers, {});
  const todayKey = getTodayKey();
  all[user.email] = all[user.email] || {};
  all[user.email][todayKey] = prayerState;
  writeStorage(STORAGE_KEYS.prayers, all);
}

function getQuranPagesForUser(user) {
  const all = readStorage(STORAGE_KEYS.quranPages, {});
  const todayKey = getTodayKey();
  return all[user.email]?.[todayKey] || 0;
}

function saveQuranPagesForUser(user, pages) {
  const all = readStorage(STORAGE_KEYS.quranPages, {});
  const todayKey = getTodayKey();
  all[user.email] = all[user.email] || {};
  all[user.email][todayKey] = pages;
  writeStorage(STORAGE_KEYS.quranPages, all);
}

function ensureTodayPrayerBucket(user) {
  const prayerAll = readStorage(STORAGE_KEYS.prayers, {});
  const quranAll = readStorage(STORAGE_KEYS.quranPages, {});
  const todayKey = getTodayKey();

  prayerAll[user.email] = prayerAll[user.email] || {};
  quranAll[user.email] = quranAll[user.email] || {};

  if (!prayerAll[user.email][todayKey]) {
    prayerAll[user.email][todayKey] = {};
  }

  if (typeof quranAll[user.email][todayKey] !== "number") {
    quranAll[user.email][todayKey] = 0;
  }

  writeStorage(STORAGE_KEYS.prayers, prayerAll);
  writeStorage(STORAGE_KEYS.quranPages, quranAll);
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

function getAzkarStateForUser(user) {
  const all = readStorage(STORAGE_KEYS.azkarState, {});
  const todayKey = getTodayKey();
  return all[user.email]?.[todayKey] || { morning: [], evening: [] };
}

function saveAzkarStateForUser(user, state) {
  const all = readStorage(STORAGE_KEYS.azkarState, {});
  const todayKey = getTodayKey();
  all[user.email] = all[user.email] || {};
  all[user.email][todayKey] = state;
  writeStorage(STORAGE_KEYS.azkarState, all);
}

function getForestForUser(user) {
  const all = readStorage(STORAGE_KEYS.pomodoroForest, {});
  const stored = all[user.email];
  if (Array.isArray(stored)) {
    const migrated = { [getTodayKey()]: stored };
    all[user.email] = migrated;
    writeStorage(STORAGE_KEYS.pomodoroForest, all);
    return migrated;
  }
  return stored || {};
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
      petName: document.getElementById("register-pet-name").value.trim(),
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
  displayName.textContent = getDisplayPetName(user);

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
      celebrationText.textContent = getProfileMessage(user);
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

  ensureTodayPrayerBucket(user);

  const prayerPercentBadge = document.getElementById("prayer-percent-badge");
  const progressNote = document.getElementById("prayer-progress-note");
  const quranForm = document.getElementById("quran-form");
  const quranPagesInput = document.getElementById("quran-pages");
  const quranSummaryText = document.getElementById("quran-summary-text");
  const quranBar = document.getElementById("quran-bar");
  const quranPercentBadge = document.getElementById("quran-percent-badge");
  const prayerSaveButton = document.getElementById("save-prayer-btn");
  const prayerSaveStatus = document.getElementById("prayer-save-status");
  const quranSaveStatus = document.getElementById("quran-save-status");
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
  let draftPrayerState = { ...prayerState };
  let prayers = DEFAULT_PRAYER_ITEMS.map((item) => ({
    ...item,
    time: prayerTimes[item.id] || "--:--",
    done: Boolean(draftPrayerState[item.id])
  }));

  function syncPrayerObjects() {
    prayers = DEFAULT_PRAYER_ITEMS.map((item) => ({
      ...item,
      time: prayerTimes[item.id] || "--:--",
      done: Boolean(draftPrayerState[item.id])
    }));
  }

  function buildPrayerDraft() {
    const state = {};
    prayers.forEach((prayer) => {
      state[prayer.id] = prayer.done;
    });
    return state;
  }

  function computePrayerProgress(source = prayers) {
    const prayerDone = source.filter((prayer) => prayer.done).length;
    return Math.round((prayerDone / DEFAULT_PRAYER_ITEMS.length) * 100);
  }

  function computeQuranProgress() {
    return Math.min(Math.round((quranPages / quranGoal) * 100), 100);
  }

  function computeTotalProgress() {
    const prayerDone = prayers.filter((prayer) => prayer.done).length;
    const prayerShare = (prayerDone / DEFAULT_PRAYER_ITEMS.length) * 70;
    const quranShare = Math.min(quranPages / quranGoal, 1) * 30;
    return Math.round(prayerShare + quranShare);
  }

  function renderPrayers() {
    const todayKey = getTodayKey();
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
        draftPrayerState = buildPrayerDraft();
        renderPrayers();
      });

      const main = document.createElement("div");
      main.className = "prayer-main";
      main.innerHTML = `<div class="prayer-name">${prayer.name}</div><div class="task-meta">${formatTime24ToArabic(prayer.time)}</div>`;
      item.append(checkbox, main);
      prayerList.appendChild(item);
    });

    const percent = computePrayerProgress();
    const quranPercent = computeQuranProgress();
    prayerPercentBadge.textContent = `${percent}%`;
    quranPercentBadge.textContent = `${quranPercent}%`;
    quranPagesInput.value = quranPages;
    quranBar.style.width = `${quranPercent}%`;
    quranSummaryText.textContent = `هدف اليوم: ${quranGoal} صفحات. قرأتِ ${quranPages} صفحة اليوم.`;
    prayerLocationText.textContent = `المدينة الحالية: ${user.city} - ${user.country}`;
    prayerSaveStatus.textContent = prayerSaveStatus.textContent.includes("تم")
      ? `تم حفظ الصلوات ليوم ${todayKey}.`
      : prayerSaveStatus.textContent;
    quranSaveStatus.textContent = quranSaveStatus.textContent.includes("تم")
      ? `تم حفظ القرآن ليوم ${todayKey}.`
      : quranSaveStatus.textContent;

    const total = computeTotalProgress();
    if (total === 100) {
      progressNote.textContent = "ما شاء الله، الصلاة والقرآن اليوم في أفضل صورة.";
    } else if (total >= 50) {
      progressNote.textContent = "التقدم جميل، استمري على نفس الهدوء والانتظام.";
    } else {
      progressNote.textContent = "ابدئي بالصلاة الحالية أو بصفحة قرآن واحدة وسيبدأ اليوم يتغير.";
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
    quranSaveStatus.textContent = `تم حفظ القرآن ليوم ${getTodayKey()}.`;
    renderPrayers();
  });

  prayerSaveButton.addEventListener("click", () => {
    prayerState = { ...draftPrayerState };
    savePrayerStateForUser(user, prayerState);
    prayerSaveStatus.textContent = `تم حفظ الصلوات ليوم ${getTodayKey()}.`;
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
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "azkar-card";
    card.innerHTML = `
      <div class="azkar-card-top">
        <strong>${item.repeat}</strong>
        <input class="checkbox azkar-checkbox" type="checkbox" data-index="${index}">
      </div>
      <p>${item.text}</p>
    `;
    container.appendChild(card);
  });
}

function initAzkarPage(user) {
  if (!document.getElementById("morning-azkar") || !user) return;
  let azkarState = getAzkarStateForUser(user);
  renderAzkarList("morning-azkar", MORNING_AZKAR);
  renderAzkarList("evening-azkar", EVENING_AZKAR);

  const morningStatus = document.getElementById("morning-azkar-status");
  const eveningStatus = document.getElementById("evening-azkar-status");
  const morningPercent = document.getElementById("morning-azkar-percent");
  const eveningPercent = document.getElementById("evening-azkar-percent");
  const saveMorningBtn = document.getElementById("save-morning-azkar");
  const saveEveningBtn = document.getElementById("save-evening-azkar");

  function syncCheckboxes() {
    document.querySelectorAll("#morning-azkar .azkar-checkbox").forEach((checkbox) => {
      checkbox.checked = Boolean(azkarState.morning[Number(checkbox.dataset.index)]);
    });
    document.querySelectorAll("#evening-azkar .azkar-checkbox").forEach((checkbox) => {
      checkbox.checked = Boolean(azkarState.evening[Number(checkbox.dataset.index)]);
    });
  }

  function updatePercentages() {
    const morningDone = azkarState.morning.filter(Boolean).length;
    const eveningDone = azkarState.evening.filter(Boolean).length;
    morningPercent.textContent = `${Math.round((morningDone / MORNING_AZKAR.length) * 100) || 0}%`;
    eveningPercent.textContent = `${Math.round((eveningDone / EVENING_AZKAR.length) * 100) || 0}%`;
  }

  document.querySelectorAll("#morning-azkar .azkar-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      azkarState.morning[Number(checkbox.dataset.index)] = checkbox.checked;
      updatePercentages();
    });
  });

  document.querySelectorAll("#evening-azkar .azkar-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      azkarState.evening[Number(checkbox.dataset.index)] = checkbox.checked;
      updatePercentages();
    });
  });

  saveMorningBtn.addEventListener("click", () => {
    saveAzkarStateForUser(user, azkarState);
    morningStatus.textContent = "تم حفظ أذكار الصباح.";
  });

  saveEveningBtn.addEventListener("click", () => {
    saveAzkarStateForUser(user, azkarState);
    eveningStatus.textContent = "تم حفظ أذكار المساء.";
  });

  syncCheckboxes();
  updatePercentages();
}

function initSebhaPage() {
  const presets = document.getElementById("sebha-presets");
  if (!presets) return;

  const customText = document.getElementById("sebha-custom-text");
  const targetInput = document.getElementById("sebha-target");
  const currentText = document.getElementById("sebha-current-text");
  const counter = document.getElementById("sebha-counter");
  const targetText = document.getElementById("sebha-target-text");
  const countButton = document.getElementById("sebha-count-btn");
  const resetButton = document.getElementById("sebha-reset-btn");
  let count = 0;

  function resolveText() {
    return customText.value.trim() || presets.value;
  }

  function renderSebha() {
    currentText.textContent = resolveText();
    counter.textContent = count;
    targetText.textContent = `من ${Math.max(1, Number(targetInput.value) || 33)}`;
  }

  presets.addEventListener("change", renderSebha);
  customText.addEventListener("input", renderSebha);
  targetInput.addEventListener("input", renderSebha);

  countButton.addEventListener("click", () => {
    count += 1;
    renderSebha();
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    renderSebha();
  });

  renderSebha();
}

function initLifeAzkarPage() {
  const grid = document.getElementById("life-azkar-grid");
  if (!grid) return;

  LIFE_AZKAR.forEach((item) => {
    const card = document.createElement("article");
    card.className = "azkar-card life-azkar-card";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.text}</p>`;
    grid.appendChild(card);
  });
}

function initMotivationPage() {
  const wheel = document.getElementById("motivation-wheel");
  if (!wheel) return;

  const spinButton = document.getElementById("spin-wheel-btn");
  const messageButton = document.getElementById("god-message-btn");
  const image = document.getElementById("motivation-image");
  const title = document.getElementById("motivation-title");
  const text = document.getElementById("motivation-text");
  const godMessageBox = document.getElementById("god-message-box");
  let currentRotation = 0;

  function setPoster(poster) {
    image.src = poster.image;
    title.textContent = poster.title;
    text.textContent = poster.text;
  }

  spinButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * MOTIVATION_POSTERS.length);
    const poster = MOTIVATION_POSTERS[index];
    const extraRotation = 1080 + Math.floor(Math.random() * 720);
    currentRotation += extraRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;
    window.setTimeout(() => setPoster(poster), 900);
  });

  messageButton.addEventListener("click", () => {
    const message = GOD_MESSAGES[Math.floor(Math.random() * GOD_MESSAGES.length)];
    godMessageBox.textContent = message;
  });

  setPoster(MOTIVATION_POSTERS[0]);
}

function initSkillsPage() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  SKILL_CATEGORIES.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card panel";
    card.innerHTML = `
      <div class="panel-head">
        <div>
          <p class="mini-title">${skill.type}</p>
          <h2>${skill.title}</h2>
        </div>
      </div>
      <div class="skill-links">
        ${skill.links
          .map(
            (link) => `
              <a class="course-link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
                <strong>${link.title}</strong>
                <span>المصدر: ${link.provider}</span>
              </a>
            `
          )
          .join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

function initBooksPage() {
  const grid = document.getElementById("books-grid");
  const readerFrame = document.getElementById("books-reader-frame");
  const readerTitle = document.getElementById("reader-title");
  const readerDescription = document.getElementById("reader-description");
  if (!grid || !readerFrame || !readerTitle || !readerDescription) return;

  function openSource(categoryTitle, source) {
    readerTitle.textContent = `${categoryTitle} | ${source.label}`;
    readerDescription.textContent = "إذا كانت المكتبة تسمح بالعرض الداخلي فستظهر هنا مباشرة داخل الموقع. لو رفضت المكتبة العرض فهذا يكون بسبب حماية المصدر نفسه وليس من الموقع.";
    readerFrame.src = source.url;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  BOOK_CATEGORIES.forEach((category) => {
    const card = document.createElement("article");
    card.className = "book-card panel";
    card.innerHTML = `
      <div class="panel-head">
        <div>
          <p class="mini-title">${category.count}</p>
          <h2>${category.title}</h2>
        </div>
      </div>
      <p class="helper-text">${category.description}</p>
      <div class="book-sources">
        ${category.sources
          .map(
            (source) => `
              <button class="course-link-card book-open-btn" type="button" data-title="${category.title}" data-source-label="${source.label}" data-url="${source.url}">
                <strong>${source.label}</strong>
                <span>افتحي مكتبة القراءة العربية داخل الموقع</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll(".book-open-btn").forEach((button) => {
    button.addEventListener("click", () => {
      openSource(button.dataset.title, {
        label: button.dataset.sourceLabel,
        url: button.dataset.url
      });
    });
  });

  const firstCategory = BOOK_CATEGORIES[0];
  if (firstCategory?.sources?.[0]) {
    openSource(firstCategory.title, firstCategory.sources[0]);
  }
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
  const forestHistory = document.getElementById("forest-history");

  let forest = getForestForUser(user);
  let selectedTreeId = getSelectedTreeForUser(user);
  let timerId = null;
  let totalSeconds = Number(focusMinutesInput.value) * 60;
  let remainingSeconds = totalSeconds;
  let isRunning = false;
  const todayKey = getTodayKey();

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
    forestHistory.innerHTML = "";
    const todayForest = forest[todayKey] || [];
    forestCounter.textContent = `${todayForest.length} شجرة اليوم`;
    todayForest.forEach((tree) => {
      const item = document.createElement("div");
      item.className = "forest-item";
      item.style.setProperty("--tree-color", tree.color);
      item.innerHTML = `<div class="forest-emoji">${tree.emoji}</div><strong>${tree.name}</strong><span>${tree.duration} دقيقة</span>`;
      forestGrid.appendChild(item);
    });

    Object.entries(forest)
      .filter(([date]) => date !== todayKey)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .forEach(([date, trees]) => {
        const day = document.createElement("section");
        day.className = "history-day";
        day.innerHTML = `<h3>غابة يوم ${date}</h3><p class="helper-text">${trees.length} شجرة محفوظة.</p>`;
        const dayGrid = document.createElement("div");
        dayGrid.className = "forest-grid";
        trees.forEach((tree) => {
          const item = document.createElement("div");
          item.className = "forest-item";
          item.style.setProperty("--tree-color", tree.color);
          item.innerHTML = `<div class="forest-emoji">${tree.emoji}</div><strong>${tree.name}</strong><span>${tree.duration} دقيقة</span>`;
          dayGrid.appendChild(item);
        });
        day.appendChild(dayGrid);
        forestHistory.appendChild(day);
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
    forest[todayKey] = forest[todayKey] || [];
    forest[todayKey].unshift({
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
  const petNameInput = document.getElementById("dashboard-pet-name");
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
      { label: "رسالة التشجيع", value: getProfileMessage(user) }
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
  petNameInput.value = getDisplayPetName(user);
  genderInput.value = user.gender;
  emailInput.value = user.email;
  cityInput.value = user.city;
  countryInput.value = user.country;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const patch = {
      name: nameInput.value.trim(),
      petName: petNameInput.value.trim(),
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
  initAzkarPage(user);
  initCoursesPage();
  initPomodoroPage(user);
  initProfilePage(user);
  initSebhaPage();
  initLifeAzkarPage();
  initMotivationPage();
  initSkillsPage();
  initBooksPage();
});
