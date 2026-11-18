export type KnowledgeCategory =
  | 'Personal Profile'
  | 'Education'
  | 'Professional Experience'
  | 'Professional Training'
  | 'Technical Skills'
  | 'Projects'
  | 'Certifications'
  | 'Leadership'
  | 'Volunteering'
  | 'Contact Information'
  | 'Professional Links';

export interface KnowledgeLink {
  label: { EN: string; AR: string };
  url: string;
  isInternalAnchor?: boolean;
}

export interface KnowledgeSubTopic {
  aspect: 'tech' | 'role' | 'impact' | 'link' | 'date';
  response: { EN: string; AR: string };
}

export interface KnowledgeEntry {
  id: string;
  category: KnowledgeCategory;
  title: { EN: string; AR: string };
  response: { EN: string; AR: string };
  detailedResponse?: { EN: string; AR: string };
  keywords: string[];
  synonyms: string[];
  entityTriggers?: string[];
  urls?: KnowledgeLink[];
  sourceSection: string;
  followUpQuestions: { EN: string; AR: string }[];
  highlightBadges?: { EN: string[]; AR: string[] };
  subTopics?: KnowledgeSubTopic[];
}

export interface SuggestedQuestionItem {
  id: string;
  category: 'projects' | 'skills' | 'certifications' | 'opportunities' | 'general';
  iconType:
    | 'user'
    | 'code'
    | 'layers'
    | 'briefcase'
    | 'award'
    | 'chip'
    | 'graduation'
    | 'users'
    | 'sparkles'
    | 'mail';
  text: {
    EN: string;
    AR: string;
  };
}

export interface ConversationContextState {
  lastEntryId: string | null;
  lastCategory: KnowledgeCategory | null;
  recentEntryIds: string[];
  preferredLang: 'EN' | 'AR';
}

export interface LocalAnswerResult {
  entryId: string | null;
  category: KnowledgeCategory | null;
  title: string;
  reply: string;
  lang: 'EN' | 'AR';
  links: KnowledgeLink[];
  followUpQuestions: string[];
  highlightBadges: string[];
  isFallback: boolean;
}

export const INITIAL_WELCOME_MESSAGE = {
  EN: `Hello! 👋 I'm Fatma's AI portfolio assistant.

I'm here to help you discover her professional background, data analytics projects, technical skills, certifications, and experience.

Whether you're a recruiter, potential collaborator, or simply curious about her work, feel free to ask me anything!`,
  AR: `أهلاً بك! 👋 أنا المساعد الذكي الخاص بملف أعمال فاطمة عبد الفتاح.

أنا هنا لمساعدتك في التعرّف على خلفيتها المهنية، ومشاريع تحليل البيانات والذكاء الاصطناعي التطبيقي، ومهاراتها التقنية، وشهاداتها المعتمدة، وخبراتها العملية.

سواء كنت مسؤول توظيف، أو شريكاً محتملاً في مشروع، أو مهتماً بالتعرّف على أعمالها، يسعدني الإجابة عن أي سؤال!`,
};

export const UNSUPPORTED_FALLBACK_MESSAGE = {
  EN: "I don't have verified information about that yet. You can ask me about Fatma's projects, professional experience, skills, certifications, or contact details.",
  AR: 'لا تتوفر لديّ معلومات موثقة حول هذا السؤال حالياً. يمكنك سؤالي عن مشاريع فاطمة، خبراتها المهنية، مهاراتها التقنية، شهاداتها المعتمدة، أو بيانات التواصل معها.',
};

// ============================================================================
// SUGGESTED QUESTIONS (Interactive Chips Required by Prompt)
// ============================================================================
export const SUGGESTED_QUESTIONS: SuggestedQuestionItem[] = [
  {
    id: 'q-who',
    category: 'general',
    iconType: 'user',
    text: {
      EN: 'Who is Fatma?',
      AR: 'من هي فاطمة عبد الفتاح؟',
    },
  },
  {
    id: 'q-skills',
    category: 'skills',
    iconType: 'code',
    text: {
      EN: 'What are her technical skills?',
      AR: 'ما هي مهاراتها التقنية؟',
    },
  },
  {
    id: 'q-basira',
    category: 'projects',
    iconType: 'layers',
    text: {
      EN: 'What is the BASIRA project?',
      AR: 'احكيلي عن مشروع بصيرة.',
    },
  },
  {
    id: 'q-experience',
    category: 'general',
    iconType: 'briefcase',
    text: {
      EN: 'Tell me about her professional experience.',
      AR: 'ما هي خبرتها في النيابة العامة المصرية؟',
    },
  },
  {
    id: 'q-education',
    category: 'general',
    iconType: 'graduation',
    text: {
      EN: 'What is her academic background?',
      AR: 'ما هي خلفيتها الأكاديمية؟',
    },
  },
  {
    id: 'q-ms-certs',
    category: 'certifications',
    iconType: 'award',
    text: {
      EN: 'What Microsoft certifications does she have?',
      AR: 'معاها شهادات إيه؟',
    },
  },
  {
    id: 'q-applied-ai',
    category: 'projects',
    iconType: 'chip',
    text: {
      EN: 'What are her Applied AI projects?',
      AR: 'ما هي مشاريعها في الذكاء الاصطناعي التطبيقي؟',
    },
  },
  {
    id: 'q-leadership',
    category: 'general',
    iconType: 'users',
    text: {
      EN: 'What leadership roles has she held?',
      AR: 'ما هي الأدوار القيادية والتطوعية التي تولتها؟',
    },
  },
  {
    id: 'q-contact',
    category: 'opportunities',
    iconType: 'mail',
    text: {
      EN: 'How can I contact her?',
      AR: 'أتواصل معاها إزاي؟',
    },
  },
];

export const TOPIC_SHORTCUTS = [
  {
    id: 'topic-work',
    category: 'projects' as const,
    icon: 'zap',
    title: {
      EN: 'Get to know my work',
      AR: 'تعرّف على أعمالي ومشاريعي',
    },
    subtitle: {
      EN: 'Projects, experience, and impact',
      AR: 'المشاريع، الخبرات، والأثر الفعلي',
    },
    prompt: {
      EN: 'What are her Applied AI projects?',
      AR: 'ما هي مشاريعها في الذكاء الاصطناعي التطبيقي؟',
    },
  },
  {
    id: 'topic-skills',
    category: 'skills' as const,
    icon: 'layers',
    title: {
      EN: 'Explore my skills',
      AR: 'استكشف مهاراتي التقنية',
    },
    subtitle: {
      EN: 'Data, BI, AI, and modern tools',
      AR: 'تحليل البيانات، ذكاء الأعمال، والذكاء الاصطناعي',
    },
    prompt: {
      EN: 'What are her technical skills?',
      AR: 'ما هي مهاراتها التقنية؟',
    },
  },
  {
    id: 'topic-certs',
    category: 'certifications' as const,
    icon: 'award',
    title: {
      EN: 'View my certifications',
      AR: 'استعرض شهاداتي المعتمدة',
    },
    subtitle: {
      EN: 'Microsoft, Google, IBM, and more',
      AR: 'شهادات Microsoft و Google و IBM والمزيد',
    },
    prompt: {
      EN: 'What Microsoft certifications does she have?',
      AR: 'معاها شهادات إيه؟',
    },
  },
  {
    id: 'topic-collab',
    category: 'opportunities' as const,
    icon: 'users',
    title: {
      EN: 'Find collaboration opportunities',
      AR: 'فرص العمل والتعاون',
    },
    subtitle: {
      EN: 'Roles, projects, and contact details',
      AR: 'الأدوار الوظيفية، المشاريع، وبيانات التواصل',
    },
    prompt: {
      EN: 'How can I contact her?',
      AR: 'أتواصل معاها إزاي؟',
    },
  },
];

// ============================================================================
// STRUCTURED LOCAL PROFESSIONAL KNOWLEDGE BASE
// ============================================================================
export const FATMA_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // 1. PERSONAL PROFILE — WHO IS FATMA
  {
    id: 'profile-who',
    category: 'Personal Profile',
    title: {
      EN: 'Fatma Abdel Fattah — Data Analyst | Applied AI | Business Intelligence',
      AR: 'فاطمة عبد الفتاح — محللة بيانات | الذكاء الاصطناعي التطبيقي | ذكاء الأعمال',
    },
    response: {
      EN: `Fatma Abdel Fattah is a Cairo-based **Data Analyst** specializing in **Applied AI** and **Business Intelligence**, and a **Management Information Systems (MIS)** graduate with hands-on experience in Data Analysis, Data Mining, Data Cleaning, Business Intelligence, Applied AI, Machine Learning, Deep Learning, Agentic AI, Azure, and Automation.

She is skilled in **Python (Pandas, NumPy), SQL, Excel, Power BI (Microsoft Certified PL-300), and Tableau**, with strong experience in preparing, cleaning, analyzing, and transforming data into actionable insights and AI-driven solutions.

She has professional experience working with the Egyptian Justice System at the **Egyptian Public Prosecution** (10/2024 – 12/2025), is completing the 9-month **Digilians AI & Data Analytics Diploma** supported by MCIT in collaboration with the **Egyptian Military Academy** and the **Military Technical College** (12/2025 – 09/2026), and also brings experience in Sales & Marketing and leadership/volunteering activities.`,
      AR: `فاطمة عبد الفتاح هي **محللة بيانات (Data Analyst)** مقيمة في القاهرة ومتخصصة في **الذكاء الاصطناعي التطبيقي (Applied AI)** و**ذكاء الأعمال (Business Intelligence)**، وخريجة **نظم المعلومات الإدارية (MIS)** بخبرة عملية في تحليل البيانات، والتنقيب عن البيانات (Data Mining)، وتنظيف البيانات، وذكاء الأعمال، والتعلم الآلي، والتعلم العميق، ووكلاء الذكاء الاصطناعي (Agentic AI)، وMicrosoft Azure، والأتمتة.

تمتلك مهارات متقدمة في **Python (Pandas, NumPy)، وSQL، وExcel، وPower BI (معتمدة بشهادة PL-300 من مايكروسوفت)، وTableau**، مع خبرة عملية في منظومة العدالة المصرية من خلال عملها في **النيابة العامة المصرية** (10/2024 – 12/2025)، بالإضافة إلى دراستها في **دبلومة ديجيليانز لتحليل البيانات والذكاء الاصطناعي** (برنامج مدته 9 أشهر مدعوم من وزارة الاتصالات بالتعاون مع الأكاديمية العسكرية المصرية والكلية الفنية العسكرية، 12/2025 – 09/2026)، إلى جانب خبرة في المبيعات والتسويق والأنشطة القيادية والتطوعية.`,
    },
    keywords: [
      'fatma',
      'abdel',
      'fattah',
      'who',
      'about',
      'bio',
      'profile',
      'summary',
      'introduce',
      'introduction',
      'background',
      'overview',
      'cairo',
      'فاطمه',
      'فاطمة',
      'عبد الفتاح',
      'عبدالفتاح',
      'مين',
      'من هي',
      'نبذه',
      'نبذة',
      'عرفني',
      'تعريف',
      'ملفها',
      'القاهره',
      'القاهرة',
    ],
    synonyms: [
      'who is fatma',
      'who is fatma abdel fattah',
      'tell me about fatma',
      'about fatma',
      'introduce fatma',
      'professional summary',
      'مين فاطمه',
      'مين فاطمة عبد الفتاح',
      'من هي فاطمة',
      'احكيلي عن فاطمه',
      'كلمني عن فاطمة',
    ],
    urls: [
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
      {
        label: { EN: 'Explore About Section', AR: 'استعراض قسم نبذة عني' },
        url: '#about',
        isInternalAnchor: true,
      },
      {
        label: { EN: 'LinkedIn Profile', AR: 'حساب LinkedIn' },
        url: 'https://www.linkedin.com/in/fatma-abdel-fattah/',
      },
    ],
    sourceSection: 'About Me, Hero & Official CV',
    followUpQuestions: [
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
      { EN: 'What are her technical skills?', AR: 'ما هي مهاراتها التقنية؟' },
      { EN: 'What Microsoft certifications does she have?', AR: 'معاها شهادات إيه؟' },
    ],
    highlightBadges: {
      EN: ['Data Analyst', 'Business Intelligence', 'Applied AI', 'MIS Graduate'],
      AR: ['محللة بيانات', 'ذكاء الأعمال BI', 'الذكاء الاصطناعي التطبيقي', 'نظم معلومات إدارية'],
    },
  },

  // 2. PERSONAL PROFILE — WHY HIRE / GOOD FIT / CORE STRENGTHS
  {
    id: 'profile-fit',
    category: 'Personal Profile',
    title: {
      EN: 'Why Fatma is a Strong Fit for Data Analyst & BI Roles',
      AR: 'لماذا تُعد فاطمة مرشحة مميزة لأدوار تحليل البيانات وذكاء الأعمال',
    },
    response: {
      EN: `Fatma stands out as a Data Analyst candidate because she bridges structured data rigor with real business, AI, and frontend execution:

- **Verified Technical Credentials**: She holds the official Microsoft Certified: Power BI Data Analyst Associate (PL-300) and Microsoft Azure Data Fundamentals certifications, alongside 8 Google Data Analytics and 3 IBM Machine Learning/Deep Learning certificates.
- **Institutional Data Discipline**: Her work at the Egyptian Public Prosecution trained her in high-accuracy reporting, verification, and decision support.
- **End-to-End Applied AI & BI Execution**: She built 10 real-world projects across Data & AI (BASIRA, Digital Student Identity at Sadat Academy, TechUni Intelligence Hub, BodyIntel, and an Excel Business Performance Dashboard) and Frontend Digital Experiences (POLD, ALPHA, Sanad A+, Ziad Zakaria Portfolio, and an LMS platform).`,
      AR: `تتميز فاطمة كمرشحة قوية لأدوار تحليل البيانات وذكاء الأعمال لأنها تجمع بين الدقة التحليلية والتطبيق العملي للذكاء الاصطناعي وتطوير الواجهات:

- **اعتمادات دولية موثقة**: حاصلة على شهادة Microsoft Certified: Power BI Data Analyst Associate (PL-300) وشهادة Microsoft Azure Data Fundamentals، بالإضافة إلى 8 شهادات في تحليل البيانات من Google و3 شهادات في التعلم الآلي والعميق من IBM.
- **انضباط ودقة في إدارة البيانات**: خبرتها في النيابة العامة المصرية أكسبتها دقة عالية في إعداد التقارير التحليلية ومراجعة البيانات ودعم اتخاذ القرار.
- **تنفيذ 10 مشاريع حقيقية متكاملة**: تشمل 5 مشاريع في البيانات والذكاء الاصطناعي (بصيرة BASIRA، نظام الهوية الرقمية والإنذار المبكر بأكاديمية السادات، TechUni Intelligence Hub، BodyIntel، ولوحة معلومات أداء الأعمال بـ Excel) و5 مشاريع في تطوير الواجهات والتجارب الرقمية.`,
    },
    keywords: [
      'fit',
      'hire',
      'hiring',
      'recruiter',
      'candidate',
      'strengths',
      'strong',
      'why',
      'value',
      'mindset',
      'advantage',
      'qualities',
      'مرشحه',
      'توظيف',
      'نقاط القوه',
      'مميزات',
      'لماذا',
      'تناسب',
      'قدرات',
    ],
    synonyms: [
      'why might fatma be a good fit for a data analyst role',
      'why hire fatma',
      'what are her core strengths',
      'what makes fatma stand out',
      'لماذا تعد فاطمة مرشحة مميزة',
      'ايه نقاط قوتها',
      'ليه اعين فاطمه',
    ],
    urls: [
      {
        label: { EN: 'Contact Fatma', AR: 'تواصل مع فاطمة' },
        url: '#contact',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Core Strengths & About Me',
    followUpQuestions: [
      { EN: 'How can I contact her?', AR: 'أتواصل معاها إزاي؟' },
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
    ],
    highlightBadges: {
      EN: ['Analytical Thinking', 'Attention to Detail', 'Insight-Driven Decisions', 'Microsoft PL-300'],
      AR: ['تفكير تحليلي قوي', 'دقة واهتمام بالتفاصيل', 'قرارات مبنية على البيانات', 'معتمدة PL-300'],
    },
  },

  // 3. PROJECT 01 — BASIRA
  {
    id: 'project-basira',
    category: 'Projects',
    title: {
      EN: '01 — BASIRA | AI-Powered Arabic Customer Intelligence (Featured Flagship Project)',
      AR: '01 — بصيرة (BASIRA) | ذكاء العملاء باللغة العربية المدعوم بالذكاء الاصطناعي',
    },
    response: {
      EN: `**BASIRA** transforms real Arabic customer reviews into meaningful business insights using Natural Language Processing and Aspect-Based Sentiment Analysis. Built around **8,150 real restaurant reviews**, the platform helps businesses understand customer opinions about food, service, and atmosphere through interactive dashboards.

- **Fatma's Contribution**: As Team Leader, she collected customer reviews through web scraping, cleaned and analyzed the dataset, evaluated and selected the most suitable AI model, and developed the complete frontend and backend (model training was handled collaboratively by her teammates).
- **Live Demo**: https://eldahan.lovable.app/`,
      AR: `**بصيرة (BASIRA)** منصة ذكية لتحويل آراء العملاء المكتوبة باللغة العربية إلى رؤى تساعد أصحاب الأعمال على اتخاذ قرارات أفضل. يعتمد المشروع على **8,150 مراجعة حقيقية**، ويستخدم معالجة اللغة الطبيعية وتحليل المشاعر لفهم تقييمات الطعام والخدمة والأجواء، وعرض النتائج في لوحات معلومات تفاعلية.

- **مساهمة فاطمة**: قادت الفريق، وجمعت البيانات الحقيقية باستخدام Web Scraping، ونظفتها وحللتها، وقيّمت النماذج واختارت الأنسب، ثم طورت واجهتي الـFrontend والـBackend بالكامل، بينما تولى زملاؤها تدريب النموذج.
- **رابط المشروع المباشر**: https://eldahan.lovable.app/`,
    },
    keywords: [
      'basira',
      'baseera',
      'basera',
      'eldahan',
      'el dahan',
      'sentiment',
      'arabic nlp',
      'nlp',
      'absa',
      '8150',
      '8,150',
      'reviews',
      'restaurant',
      'web scraping',
      'flagship',
      'بصيره',
      'بصيرة',
      'الدهان',
      'تحليل المشاعر',
      'تقييمات',
      'مراجعه',
      'مطعم',
    ],
    synonyms: [
      'what is basira',
      'what is the basira project',
      'tell me about the basira project',
      'tell me about basira',
      'basira project',
      'مشروع بصيره بيعمل ايه',
      'احكيلي عن مشروع بصيره',
      'ما هو مشروع بصيرة',
      'تفاصيل مشروع بصيرة',
    ],
    entityTriggers: ['basira', 'baseera', 'basera', 'بصيره', 'بصيرة', 'eldahan'],
    urls: [
      {
        label: { EN: 'Open Live BASIRA Demo', AR: 'فتح منصة بصيرة المباشرة' },
        url: 'https://eldahan.lovable.app/',
      },
      {
        label: { EN: 'View Projects Section', AR: 'استعراض قسم المشاريع' },
        url: '#projects',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Selected Data & AI Projects — 01 BASIRA',
    followUpQuestions: [
      { EN: 'What are her Applied AI projects?', AR: 'ما هي مشاريعها في الذكاء الاصطناعي التطبيقي؟' },
      { EN: 'What are her technical skills?', AR: 'ما هي مهاراتها التقنية؟' },
    ],
    highlightBadges: {
      EN: ['8,150 Reviews', 'Arabic NLP', 'Sentiment Analysis', 'Interactive Dashboards'],
      AR: ['8,150 مراجعة حقيقية', 'Arabic NLP', 'تحليل المشاعر ABSA', 'Frontend & Backend'],
    },
    subTopics: [
      {
        aspect: 'tech',
        response: {
          EN: `In **BASIRA**, Fatma used **Web Scraping** to collect **8,150 real Arabic restaurant reviews**, cleaned and analyzed the data, evaluated and selected the best AI model for **Arabic Natural Language Processing (NLP)** and **Aspect-Based Sentiment Analysis (ABSA)** across food, service, and atmosphere, and built the complete **Frontend and Backend** with interactive dashboards (live at https://eldahan.lovable.app/).`,
          AR: `في مشروع **بصيرة (BASIRA)**، استخدمت فاطمة **Web Scraping** لجمع **8,150 مراجعة عربية حقيقية**، وقامت بتنظيف وتحليل البيانات، وتقييم واختيار النموذج الأنسب لمعالجة اللغة الطبيعية العربية (**Arabic NLP**) وتحليل المشاعر (**Aspect-Based Sentiment Analysis**)، بالإضافة إلى تطوير الـ **Frontend والـ Backend بالكامل** وبناء لوحات المعلومات التفاعلية (https://eldahan.lovable.app/).`,
        },
      },
      {
        aspect: 'role',
        response: {
          EN: `As **Team Leader** on **BASIRA**, Fatma collected customer reviews through web scraping, cleaned and analyzed the 8,150-review dataset, evaluated and selected the most suitable AI model, and developed the complete frontend and backend, while model training was handled collaboratively by her teammates.`,
          AR: `بصفتها **قائدة الفريق (Team Leader)** في مشروع **بصيرة**، جمعت فاطمة البيانات الحقيقية باستخدام Web Scraping، ونظفتها وحللتها، وقيّمت النماذج واختارت الأنسب، ثم طورت واجهتي الـFrontend والـBackend بالكامل، بينما تولى زملاؤها تدريب النموذج.`,
        },
      },
      {
        aspect: 'link',
        response: {
          EN: `You can explore the live **BASIRA** demo here: https://eldahan.lovable.app/`,
          AR: `يمكنك استعراض منصة **بصيرة (BASIRA)** مباشرة عبر الرابط الرسمي: https://eldahan.lovable.app/`,
        },
      },
    ],
  },

  // 4. PROJECT 02 — DIGITAL STUDENT IDENTITY & EARLY WARNING SYSTEM (SADAT ACADEMY)
  {
    id: 'project-student-id',
    category: 'Projects',
    title: {
      EN: '02 — Digital Student Identity & Early Warning System (Sadat Academy)',
      AR: '02 — نظام الهوية الرقمية للطلاب والإنذار المبكر الأكاديمي (أكاديمية السادات)',
    },
    response: {
      EN: `The **Digital Student Identity & Early Warning System** (*AI & Academic Analytics Project | Sadat Academy*) is an AI-assisted academic platform designed to manage digital student identities, monitor academic performance, and identify early signs of academic difficulties. The system uses student data and performance indicators to support timely alerts, academic follow-up, and informed intervention.

- **Fatma's Contribution**: Prepared, cleaned, and analyzed student data, helped define early-warning indicators, developed interactive dashboards, and built the frontend interface to make academic insights easier to understand and act upon.
- **Project Type**: AI-Assisted Academic Demo.`,
      AR: `**نظام الهوية الرقمية للطلاب والإنذار المبكر الأكاديمي** (*مشروع تحليلات أكاديمية وذكاء اصطناعي | أكاديمية السادات*) هو منصة أكاديمية ذكية لإدارة الهوية الرقمية للطلاب، ومتابعة أدائهم الدراسي، والكشف المبكر عن مؤشرات التعثر الأكاديمي. صُممت لمساعدة الطلاب والمسؤولين عن متابعتهم على اكتشاف المخاطر مبكرًا والاستفادة من التنبيهات والمؤشرات في التدخل المناسب.

- **مساهمة فاطمة**: جهزت بيانات الطلاب ونظفتها وحللتها، وساهمت في تحديد مؤشرات الإنذار المبكر، وتطوير لوحات معلومات تفاعلية، وبناء واجهة المستخدم لعرض النتائج بصورة واضحة.`,
    },
    keywords: [
      'student',
      'identity',
      'early warning',
      'sadat',
      'sadat academy',
      'academic',
      'intervention',
      'الهويه الرقميه',
      'الهوية الرقمية',
      'الطالب',
      'الطلاب',
      'الانذار المبكر',
      'الإنذار المبكر',
      'اكاديميه السادات',
      'أكاديمية السادات',
      'التعثر الاكاديمي',
    ],
    synonyms: [
      'digital student identity',
      'early warning system',
      'sadat academy project',
      'student early warning project',
      'مشروع الهويه الرقميه للطالب',
      'نظام الانذار المبكر اكاديميه السادات',
    ],
    entityTriggers: ['early warning', 'student identity', 'sadat academy', 'الهويه الرقميه', 'الانذار المبكر', 'اكاديميه السادات'],
    urls: [
      {
        label: { EN: 'View in Projects Section', AR: 'استعراض في قسم المشاريع' },
        url: '#projects',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Selected Data & AI Projects — 02 Digital Student Identity',
    followUpQuestions: [
      { EN: 'What is TechUni Intelligence Hub?', AR: 'ما هو مشروع TechUni Intelligence Hub؟' },
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
    ],
    highlightBadges: {
      EN: ['Sadat Academy', 'Academic Analytics', 'Early-Warning Indicators', 'Interactive Dashboards'],
      AR: ['أكاديمية السادات', 'تحليلات أكاديمية', 'مؤشرات الإنذار المبكر', 'واجهة المستخدم'],
    },
  },

  // 5. PROJECT 03, 04, 05 — TECHUNI, BODYINTEL, DASHBOARD VISUALIZATION
  {
    id: 'project-data-ai-suite',
    category: 'Projects',
    title: {
      EN: 'TechUni Intelligence Hub, BodyIntel & Dashboard Visualization',
      AR: 'مشاريع TechUni Intelligence Hub و BodyIntel و Dashboard Visualization',
    },
    response: {
      EN: `Alongside **BASIRA** and the **Digital Student Identity System**, Fatma's Data & AI Projects include:

- **03 — TechUni Intelligence Hub** (*Predictive Analytics*):
  A student enrollment analytics system that tracks student populations, analyzes trends, predicts future enrollment growth, and produces reports supporting better academic planning and resource decisions.
  - **Live Project**: https://meek-tanuki-9331e0.netlify.app/

- **04 — BodyIntel** (*AI Body Performance*):
  An AI-powered platform that analyzes body measurements and physical performance metrics, classifies users, and provides personalized fitness recommendations.
  - **Live Project**: https://magical-youtiao-23446d.netlify.app/

- **05 — Dashboard Visualization — Business Performance Analysis** (*Sales & Business Intelligence*):
  An interactive business performance dashboard built using Excel and Power Query for data preparation, KPIs, and visualizations that transform sales data into insights about revenue, profitability, customer segments, regional performance, and sales trends.
  - **View Dashboard**: https://www.linkedin.com/posts/fatma-abdel-fattah_dataanalytics-excel-powerquery-activity-7433202548833959936-EJzv`,
      AR: `إلى جانب مشروع **بصيرة (BASIRA)** و**نظام الهوية الرقمية والإنذار المبكر**، تضم مشاريع فاطمة في البيانات والذكاء الاصطناعي:

- **03 — TechUni Intelligence Hub** (*التحليلات التنبؤية*):
  منصة تحليلية ذكية لمتابعة أعداد الطلاب، ودراسة تغيرها عبر الوقت، واستخدام النماذج التنبؤية لتقدير معدلات نمو أعداد الطلاب مستقبلاً لدعم التخطيط الأكاديمي.
  - **رابط المشروع**: https://meek-tanuki-9331e0.netlify.app/

- **04 — BodyIntel** (*تحليل الأداء البدني بالذكاء الاصطناعي*):
  نظام يعتمد على الذكاء الاصطناعي لتحليل القياسات البدنية ومؤشرات الأداء، وتصنيف المستخدمين وفق خصائصهم، وتقديم توصيات لياقة بدنية مخصصة.
  - **رابط المشروع**: https://magical-youtiao-23446d.netlify.app/

- **05 — Dashboard Visualization — Business Performance Analysis** (*تحليلات المبيعات وذكاء الأعمال*):
  لوحة معلومات تفاعلية طورتها فاطمة باستخدام Excel وPower Query لتحويل بيانات المبيعات إلى مؤشرات ورؤى بصرية حول الإيرادات والربحية وشرائح العملاء والأداء الإقليمي.
  - **عرض لوحة المعلومات**: https://www.linkedin.com/posts/fatma-abdel-fattah_dataanalytics-excel-powerquery-activity-7433202548833959936-EJzv`,
    },
    keywords: [
      'techuni',
      'bodyintel',
      'body intel',
      'dashboard visualization',
      'excel dashboard',
      'business performance dashboard',
      'enrollment',
      'predictive',
      'fitness',
      'sales analytics',
      'power query',
      'تيكوني',
      'بودي انتل',
      'لوحه معلومات اكسل',
      'مبيعات',
    ],
    synonyms: [
      'what is techuni intelligence hub',
      'what is bodyintel',
      'tell me about dashboard visualization',
      'tell me about her excel dashboard',
      'ما هو مشروع techuni',
      'مشروع bodyintel',
      'لوحة معلومات excel',
    ],
    entityTriggers: ['techuni', 'bodyintel', 'dashboard visualization', 'excel dashboard', 'business performance dashboard'],
    urls: [
      {
        label: { EN: 'TechUni Live Link', AR: 'رابط مشروع TechUni' },
        url: 'https://meek-tanuki-9331e0.netlify.app/',
      },
      {
        label: { EN: 'BodyIntel Live Link', AR: 'رابط مشروع BodyIntel' },
        url: 'https://magical-youtiao-23446d.netlify.app/',
      },
      {
        label: { EN: 'View Dashboard Showcase', AR: 'عرض لوحة المعلومات على LinkedIn' },
        url: 'https://www.linkedin.com/posts/fatma-abdel-fattah_dataanalytics-excel-powerquery-activity-7433202548833959936-EJzv',
      },
    ],
    sourceSection: 'Featured Projects — Data & AI Projects (03, 04, 05)',
    followUpQuestions: [
      { EN: 'Tell me about her Frontend & Digital Experience projects.', AR: 'حدثني عن مشاريعها في تطوير الواجهات الأمامية.' },
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
    ],
    highlightBadges: {
      EN: ['TechUni Hub', 'BodyIntel ML', 'Dashboard Visualization', 'Predictive Analytics'],
      AR: ['TechUni Hub', 'BodyIntel ML', 'Dashboard Visualization', 'تحليلات تنبؤية'],
    },
  },

  // 6. PROJECTS 06–10 — FRONTEND & DIGITAL EXPERIENCES
  {
    id: 'projects-frontend',
    category: 'Projects',
    title: {
      EN: 'Frontend & Digital Experiences (Projects 06 – 10)',
      AR: 'مشاريع تطوير الواجهات والتجارب الرقمية (06 – 10)',
    },
    response: {
      EN: `In addition to her Data & AI work, Fatma has developed complete, responsive frontend experiences across 5 real-world digital platforms:

- **06 — POLD Menu | Interactive Restaurant Digital Menu**: Complete frontend for a real burger restaurant digital menu with intuitive navigation and responsive layouts (https://pold-iota.vercel.app/).
- **07 — ALPHA Website | Technology Company Website**: Corporate website frontend showcasing technology services, digital products, and portfolio (https://alphaa-tech.com/).
- **08 — Sanad A+ | Healthcare Platform**: Digital healthcare platform frontend supporting care-related services for older adults and individuals living with Alzheimer's disease (https://sanadaplus.com/ar).
- **09 — Ziad Zakaria Portfolio | Professional Portfolio**: Complete personal branding portfolio frontend with cohesive visual hierarchy (https://mr-ziad-zakaria.lovable.app/).
- **10 — LMS Platform | Learning Management System**: Educational technology frontend interfaces organizing digital learning workflows and courses (https://lms-course.alphaa-tech.com/login).`,
      AR: `إلى جانب مشاريع تحليل البيانات والذكاء الاصطناعي، طورت فاطمة الواجهات الأمامية (Frontend) لـ 5 منصات ومواقع رقمية حقيقية:

- **06 — POLD Menu | منيو رقمي تفاعلي للمطاعم**: تطوير الـFrontend بالكامل لمنيو رقمي حقيقي لمطعم برجر بتصميم متجاوب وسهل التنقل (https://pold-iota.vercel.app/).
- **07 — ALPHA Website | موقع شركة تكنولوجيا وحلول رقمية**: تطوير واجهة موقع احترافي لشركة تكنولوجيا وحلول رقمية (https://alphaa-tech.com/).
- **08 — Sanad A+ (سند) | منصة الرعاية الصحية**: تطوير واجهة المستخدم لمنصة صحية تدعم خدمات الرعاية لكبار السن والمصابين بألزهايمر (https://sanadaplus.com/ar).
- **09 — Ziad Zakaria Portfolio | موقع بورتفوليو احترافي**: تطوير الـFrontend بالكامل لموقع بورتفوليو وهوية مهنية (https://mr-ziad-zakaria.lovable.app/).
- **10 — LMS Platform | منصة إدارة التعلم الإلكتروني**: تطوير واجهات منصة إدارة التعلم وتنظيم المحتوى التعليمي والدورات (https://lms-course.alphaa-tech.com/login).`,
    },
    keywords: [
      'frontend',
      'front-end',
      'web development',
      'websites',
      'pold',
      'alpha',
      'alphaa',
      'sanad',
      'alzheimer',
      'healthcare',
      'ziad zakaria',
      'lms',
      'learning management system',
      'menu',
      'واجهات',
      'فرونت اند',
      'مواقع',
      'سند',
      'منيو',
      'زياد زكريا',
      'منصه تعليميه',
    ],
    synonyms: [
      'tell me about her frontend and digital experience projects',
      'what websites has she built',
      'frontend projects',
      'pold alpha sanad lms',
      'حدثني عن مشاريعها في تطوير الواجهات الاماميه',
      'مشاريع الفرونت اند',
    ],
    entityTriggers: ['pold', 'alphaa', 'sanad', 'ziad zakaria', 'lms', 'frontend', 'فرونت اند', 'سند'],
    urls: [
      {
        label: { EN: 'POLD Digital Menu', AR: 'مشروع POLD' },
        url: 'https://pold-iota.vercel.app/',
      },
      {
        label: { EN: 'ALPHA Website', AR: 'موقع شركة ALPHA' },
        url: 'https://alphaa-tech.com/',
      },
      {
        label: { EN: 'Sanad A+ Healthcare', AR: 'منصة سند الصحية' },
        url: 'https://sanadaplus.com/ar',
      },
    ],
    sourceSection: 'Frontend & Digital Experiences (06–10)',
    followUpQuestions: [
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
      { EN: 'How can I contact her?', AR: 'أتواصل معاها إزاي؟' },
    ],
    highlightBadges: {
      EN: ['POLD Menu', 'ALPHA Website', 'Sanad A+ Healthcare', 'Ziad Portfolio & LMS'],
      AR: ['منيو POLD', 'موقع ALPHA', 'منصة سند الصحية', 'منصة LMS وبورتفوليو'],
    },
  },

  // 7. PROJECTS — ALL 10 PROJECTS OVERVIEW
  {
    id: 'projects-overview',
    category: 'Projects',
    title: {
      EN: "Fatma's 10 Featured Projects (Data, AI & Frontend Experiences)",
      AR: 'مشاريع فاطمة المميزة (10 مشاريع في تحليل البيانات، الذكاء الاصطناعي، وتطوير الواجهات)',
    },
    response: {
      EN: `Fatma's portfolio showcases **10 real-world projects** across two specialized tracks:

**Data & AI Projects (01–05)**:
1. **01 — BASIRA — AI-Powered Arabic Customer Intelligence** (*Featured Flagship*): Arabic NLP & Aspect-Based Sentiment Analysis on 8,150 real restaurant reviews; Fatma led the team, scraped, cleaned & analyzed the data, selected the AI model, and built the full frontend & backend (https://eldahan.lovable.app/).
2. **02 — Digital Student Identity & Early Warning System** (*Sadat Academy*): Student data analysis, early-warning risk indicators, interactive dashboards, and frontend UI.
3. **03 — TechUni Intelligence Hub**: University enrollment trend analysis and predictive modeling (https://meek-tanuki-9331e0.netlify.app/).
4. **04 — BodyIntel — AI Body Performance**: Machine learning body metric classification & personalized fitness recommendations (https://magical-youtiao-23446d.netlify.app/).
5. **05 — Dashboard Visualization — Business Performance Analysis**: Interactive Excel & Power Query sales and profitability dashboard (https://www.linkedin.com/posts/fatma-abdel-fattah_dataanalytics-excel-powerquery-activity-7433202548833959936-EJzv).

**Frontend & Digital Experiences (06–10)**:
6. **06 — POLD Menu — Interactive Restaurant Digital Menu** (https://pold-iota.vercel.app/)
7. **07 — ALPHA Website — Technology Company Website** (https://alphaa-tech.com/)
8. **08 — Sanad A+ — Healthcare Platform** (https://sanadaplus.com/ar)
9. **09 — Ziad Zakaria Portfolio — Professional Portfolio** (https://mr-ziad-zakaria.lovable.app/)
10. **10 — LMS Platform — Learning Management System** (https://lms-course.alphaa-tech.com/login)`,
      AR: `يضم ملف أعمال فاطمة **10 مشاريع تطبيقية** موزعة على مسارين رئيسيين:

**أولاً: مشاريع البيانات والذكاء الاصطناعي (01–05)**:
1. **01 — بصيرة (BASIRA) — ذكاء العملاء باللغة العربية** (*المشروع الرئيسي*): تحليل 8,150 مراجعة حقيقية باستخدام Arabic NLP وتحليل المشاعر؛ قادت فاطمة الفريق، وجمعت البيانات بـ Web Scraping، ونظفتها وحللتها، واختارت النموذج، وطورت الـFrontend والـBackend بالكامل (https://eldahan.lovable.app/).
2. **02 — نظام الهوية الرقمية للطلاب والإنذار المبكر** (*أكاديمية السادات*): تجهيز وتحليل بيانات الطلاب، وتحديد مؤشرات التعثر المبكر، وتصميم اللوحات التفاعلية والواجهة الأمامية.
3. **03 — TechUni Intelligence Hub**: تحليلات تنبؤية لتقدير نمو أعداد الطلاب (https://meek-tanuki-9331e0.netlify.app/).
4. **04 — BodyIntel — تحليل الأداء البدني بالذكاء الاصطناعي**: نظام تعلم آلة لتحليل القياسات البدنية وتقديم توصيات مخصصة (https://magical-youtiao-23446d.netlify.app/).
5. **05 — Dashboard Visualization — تحليل أداء الأعمال**: لوحة معلومات تفاعلية باستخدام Excel وPower Query لتحليل المبيعات والربحية.

**ثانياً: تطوير الواجهات والتجارب الرقمية (06–10)**:
6. **06 — POLD Menu — منيو رقمي تفاعلي للمطاعم** (https://pold-iota.vercel.app/)
7. **07 — ALPHA Website — موقع شركة تكنولوجيا** (https://alphaa-tech.com/)
8. **08 — Sanad A+ — منصة الرعاية الصحية** (https://sanadaplus.com/ar)
9. **09 — Ziad Zakaria Portfolio — بورتفوليو احترافي** (https://mr-ziad-zakaria.lovable.app/)
10. **10 — LMS Platform — منصة إدارة التعلم** (https://lms-course.alphaa-tech.com/login)`,
    },
    keywords: [
      'projects',
      'project',
      'portfolio',
      'built',
      'work',
      'applied ai',
      'case studies',
      'applications',
      'systems',
      'مشاريع',
      'مشاريعها',
      'مشروع',
      'اعمال',
      'أعمالها',
      'بنت',
      'نفذت',
      'تطبيقات',
    ],
    synonyms: [
      'what projects has she built',
      'what are her applied ai projects',
      'tell me about her applied ai projects',
      'tell me about her projects',
      'what did she build',
      'ايه مشاريعها',
      'ما هي مشاريعها',
      'احكيلي عن مشاريعها',
      'مشاريع الذكاء الاصطناعي',
    ],
    urls: [
      {
        label: { EN: 'Live BASIRA Project', AR: 'مشروع بصيرة المباشر' },
        url: 'https://eldahan.lovable.app/',
      },
      {
        label: { EN: 'Browse All 10 Projects', AR: 'تصفح جميع المشاريع (10)' },
        url: '#projects',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Selected Data & AI Projects + Frontend Experiences',
    followUpQuestions: [
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
      { EN: 'Tell me about her Frontend & Digital Experience projects.', AR: 'حدثني عن مشاريعها في تطوير الواجهات الأمامية.' },
    ],
    highlightBadges: {
      EN: ['5 Data & AI Projects', '5 Frontend Projects', 'BASIRA (8,150 Reviews)', 'Live Demos'],
      AR: ['5 مشاريع بيانات وذكاء اصطناعي', '5 مشاريع Frontend', 'مشروع بصيرة', 'روابط حية'],
    },
  },

  // 8. PROFESSIONAL EXPERIENCE — EGYPTIAN PUBLIC PROSECUTION
  {
    id: 'experience-prosecution',
    category: 'Professional Experience',
    title: {
      EN: 'Professional Experience — Egyptian Public Prosecution',
      AR: 'الخبرة العملية — النيابة العامة المصرية',
    },
    response: {
      EN: `Fatma worked as a **Data Entry Specialist** at the **Egyptian Public Prosecution** in Assiut from **October 2024 to December 2025**.

In this role, she:
- Prepared structured analytical reports and organized official case data with high precision.
- Tracked case progression and court referrals systematically.
- Supported decision-making within the investigation office through reliable data verification and structured reporting.

Alongside her professional work, she is advancing her expertise through the **Digilians AI & Data Analytics Diploma** at the **Egyptian Military Academy** (December 2025 – September 2026).`,
      AR: `عملت فاطمة في وظيفة **أخصائي إدخال وإدارة بيانات (Data Entry Specialist)** في **النيابة العامة المصرية** بمحافظة أسيوط خلال الفترة من **أكتوبر 2024 حتى ديسمبر 2025**.

خلال عملها قامت بـ:
- إعداد تقارير تحليلية منظمة وإدارة البيانات الرسمية بدقة وموثوقية عالية.
- متابعة مسار القضايا والإحالات للمحاكم بشكل منهجي ومنظم.
- دعم اتخاذ القرار داخل المكتب الفني والتحقيقات من خلال التحقق من جودة البيانات وتنظيم التقارير.

وإلى جانب خبرتها العملية، تواصل تطوير مهاراتها المتقدمة من خلال **دبلومة ديجيليانز للذكاء الاصطناعي وتحليل البيانات** في **الأكاديمية العسكرية المصرية** (ديسمبر 2025 – سبتمبر 2026).`,
    },
    keywords: [
      'experience',
      'work',
      'job',
      'career',
      'employment',
      'prosecution',
      'egyptian public prosecution',
      'public prosecution',
      'data entry',
      'assiut',
      'court',
      'cases',
      'خبره',
      'خبرتها',
      'خبراتها',
      'عمل',
      'شغل',
      'وظيفه',
      'النيابه',
      'النيابة',
      'النيابة العامة',
      'اسيوط',
      'أسيوط',
    ],
    synonyms: [
      'what is her experience at the egyptian public prosecution',
      'what did fatma do at the egyptian public prosecution',
      'tell me about her professional experience',
      'where has she worked',
      'work experience',
      'احكيلي عن خبراتها',
      'خبرتها في النيابه العامه',
      'اشتغلت فين',
      'ما هي خبرتها العملية',
    ],
    entityTriggers: ['prosecution', 'النيابه', 'النيابة', 'data entry', 'assiut', 'اسيوط'],
    urls: [
      {
        label: { EN: 'View Experience & Education', AR: 'استعراض الخبرة والتعليم' },
        url: '#experience',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Experience & Education',
    followUpQuestions: [
      { EN: 'What is her academic background?', AR: 'ما هي خلفيتها الأكاديمية؟' },
      { EN: 'What leadership roles has she held?', AR: 'ما هي الأدوار القيادية والتطوعية التي تولتها؟' },
    ],
    highlightBadges: {
      EN: ['Egyptian Public Prosecution', 'Oct 2024 – Dec 2025', 'Analytical Reporting', 'Case Tracking'],
      AR: ['النيابة العامة المصرية', '10/2024 – 12/2025', 'تقارير تحليلية', 'متابعة القضايا'],
    },
  },

  // 9. PROFESSIONAL TRAINING — DIGILIANS AI & DATA ANALYTICS DIPLOMA
  {
    id: 'training-digilians',
    category: 'Professional Training',
    title: {
      EN: 'Digilians AI & Data Analytics Diploma — Egyptian Military Academy',
      AR: 'دبلومة ديجيليانز للذكاء الاصطناعي وتحليل البيانات — الأكاديمية العسكرية المصرية',
    },
    response: {
      EN: `Fatma is completing **Training in Data Analysis & Artificial Intelligence through the Digilians Diploma** (*Digilians AI and Data Analytics*) at the **Egyptian Military Academy** (**12/2025 – 09/2026**).

This is a **9-month program** supported by the **Ministry of Communications and Information Technology (MCIT)** in collaboration with the **Egyptian Military Academy** and the **Military Technical College**.`,
      AR: `تدرس فاطمة في برنامج **التدريب في تحليل البيانات والذكاء الاصطناعي من خلال دبلومة ديجيليانز (Digilians AI and Data Analytics Diploma)** في **الأكاديمية العسكرية المصرية** خلال الفترة من **12/2025 حتى 09/2026**.

وهو **برنامج تدريبي مدته 9 أشهر** مدعوم من **وزارة الاتصالات وتكنولوجيا المعلومات** بالتعاون مع **الأكاديمية العسكرية المصرية** و**الكلية الفنية العسكرية**.`,
    },
    keywords: [
      'digilians',
      'diploma',
      'military academy',
      'egyptian military academy',
      'military technical college',
      'mcit',
      'ministry of communications',
      'training',
      'internship',
      'bootcamp',
      'ديجيليانز',
      'دبلومه',
      'دبلومة',
      'الاكاديميه العسكريه',
      'الأكاديمية العسكرية',
      'الكليه الفنيه العسكريه',
      'وزارة الاتصالات',
      'تدريب',
    ],
    synonyms: [
      'tell me about the digilians diploma',
      'what training has she completed',
      'egyptian military academy diploma',
      'دبلومة ديجيليانز',
      'تدريب الاكاديمية العسكرية',
    ],
    entityTriggers: ['digilians', 'ديجيليانز', 'military academy', 'الاكاديميه العسكريه', 'military technical college'],
    urls: [
      {
        label: { EN: 'View Experience & Education', AR: 'استعراض الخبرة والتعليم' },
        url: '#experience',
        isInternalAnchor: true,
      },
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
    ],
    sourceSection: 'Experience & Education (Milestone 06) & Official CV',
    followUpQuestions: [
      { EN: 'What is her academic background?', AR: 'ما هي خلفيتها الأكاديمية؟' },
      { EN: 'What are her technical skills?', AR: 'ما هي مهاراتها التقنية؟' },
    ],
    highlightBadges: {
      EN: ['Digilians Diploma (9 Months)', 'Egyptian Military Academy', 'MCIT & Military Technical College', '12/2025 – 09/2026'],
      AR: ['دبلومة ديجيليانز (9 أشهر)', 'الأكاديمية العسكرية المصرية', 'وزارة الاتصالات والكلية الفنية العسكرية', '12/2025 – 09/2026'],
    },
  },

  // 10. EDUCATION — BACHELOR'S IN MIS
  {
    id: 'education-mis',
    category: 'Education',
    title: {
      EN: "Academic Background — Bachelor's Degree in Management Information Systems (MIS)",
      AR: 'الخلفية الأكاديمية — بكالوريوس نظم المعلومات الإدارية (MIS)',
    },
    response: {
      EN: `Fatma holds a **Bachelor's Degree in Management Information Systems (MIS)** from the **Higher Institute of Electronic Commerce Systems in Sohag** (**2021 – 2024**).

During her degree, she:
- Built a strong foundation in **Python, C, HTML, SQL, Database Management, and Systems Analysis**.
- Developed a **database-driven Python application for account and inventory management** as a graduation project.
- Applied **data analysis, reporting, database querying, and query optimization**.
- Studied **networking fundamentals, system architecture, and information systems**.

She is also completing the 9-month **Digilians AI & Data Analytics Diploma** supported by MCIT in collaboration with the **Egyptian Military Academy** and the **Military Technical College** (12/2025 – 09/2026).`,
      AR: `حصلت فاطمة على درجة **البكالوريوس في نظم المعلومات الإدارية (Management Information Systems - MIS)** من **المعهد العالي لنظم التجارة الإلكترونية بسوهاج** (**2021 – 2024**).

خلال دراستها الأكاديمية قامت بـ:
- بناء أساس قوي في **Python، وC، وHTML، وSQL، وإدارة قواعد البيانات، وتحليل النظم**.
- تطوير **تطبيق Python معتمد على قواعد البيانات لإدارة الحسابات والمخزون** كمشروع تخرج.
- تطبيق **تحليل البيانات، وإعداد التقارير، والاستعلام عن قواعد البيانات، وتحسين الاستعلامات (Query Optimization)**.
- دراسة **أساسيات الشبكات، وبنية النظم (System Architecture)، ونظم المعلومات**.

كما تواصل دراستها التطبيقية في **دبلومة ديجيليانز للذكاء الاصطناعي وتحليل البيانات** (9 أشهر) بالأكاديمية العسكرية المصرية بالتعاون مع وزارة الاتصالات والكلية الفنية العسكرية (12/2025 – 09/2026).`,
    },
    keywords: [
      'education',
      'academic',
      'degree',
      'bachelor',
      'university',
      'college',
      'institute',
      'mis',
      'management information systems',
      'e-commerce',
      'electronic commerce',
      'sohag',
      'study',
      'studied',
      'graduate',
      'inventory management',
      'تعليم',
      'اكاديمي',
      'أكاديمية',
      'دراسه',
      'دراستها',
      'مؤهل',
      'بكالوريوس',
      'كليه',
      'معهد',
      'نظم المعلومات',
      'التجاره الالكترونيه',
      'سوهاج',
      'خريجه',
    ],
    synonyms: [
      'what is her academic background',
      'what is her education',
      'where did she study',
      'what degree does she have',
      'ما هي خلفيتها الاكاديميه',
      'درست فين',
      'خريجة ايه',
      'مؤهلها الدراسي',
    ],
    entityTriggers: ['mis', 'bachelor', 'academic', 'education', 'sohag', 'بكالوريوس', 'نظم المعلومات', 'مؤهل', 'اكاديميه'],
    urls: [
      {
        label: { EN: 'View Experience & Education', AR: 'استعراض الخبرة والتعليم' },
        url: '#experience',
        isInternalAnchor: true,
      },
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
    ],
    sourceSection: 'Experience & Education (Milestone 01) & Official CV',
    followUpQuestions: [
      { EN: 'What leadership roles has she held?', AR: 'ما هي الأدوار القيادية والتطوعية التي تولتها؟' },
      { EN: 'What Microsoft certifications does she have?', AR: 'معاها شهادات إيه؟' },
    ],
    highlightBadges: {
      EN: ["Bachelor's in MIS (2021–2024)", 'Python & SQL Foundation', 'Systems Analysis', 'Digilians AI Diploma'],
      AR: ['بكالوريوس نظم معلومات إدارية', '2021 – 2024', 'سوهاج', 'دبلومة ديجيليانز'],
    },
  },

  // 11. TECHNICAL SKILLS — COMPLETE STACK
  {
    id: 'skills-overview',
    category: 'Technical Skills',
    title: {
      EN: "Fatma's Technical & Soft Skills Stack",
      AR: 'المهارات التقنية والشخصية وحزمة أدوات تحليل البيانات والذكاء الاصطناعي',
    },
    response: {
      EN: `Fatma's technical and professional skills span the complete data analytics, BI, and applied AI lifecycle:

- **Programming & Databases**: Python (Pandas, NumPy), SQL (Joins, Aggregations, Subqueries), PostgreSQL, R Programming.
- **Data Analysis & Data Preparation**: Data Cleaning, Data Preprocessing, Data Mining, Exploratory Data Analysis (EDA), Data Interpretation, Descriptive Statistics, KPI Analysis, Data Visualization.
- **Business Intelligence & Reporting**: Power BI (Desktop & Service — Microsoft Certified PL-300), Tableau, Advanced DAX, Dashboard Development, Data Storytelling, Business Reporting.
- **Excel**: Pivot Tables, XLOOKUP/VLOOKUP, Advanced Formulas, Data Analysis Functions, Power Query.
- **Artificial Intelligence & Machine Learning**: Machine Learning, Deep Learning (Keras & TensorFlow), Arabic NLP & ABSA (XLM-T), Generative AI, Agentic AI, AI Applications.
- **Cloud, Automation & Web Development**: Microsoft Azure (Azure Data Fundamentals), Workflow Automation, AI Automation, Frontend & Backend Development, Responsive Web Design, UI/UX Implementation.
- **Soft Skills**: Analytical Thinking, Creative Thinking, Problem-Solving, Attention to Detail, Communication, Teamwork, Leadership, Time Management, Adaptability, Ability to Work Under Pressure, Learning Agility.`,
      AR: `تمتلك فاطمة منظومة مهارات تقنية وشخصية متكاملة تغطي دورة حياة تحليل البيانات، وذكاء الأعمال، والذكاء الاصطناعي التطبيقي:

- **البرمجة وقواعد البيانات (Programming & Databases)**: Python (Pandas, NumPy)، وSQL (Joins, Aggregations, Subqueries)، وPostgreSQL، وبرمجة R.
- **تحليل وتجهيز البيانات (Data Analysis & Preparation)**: تنظيف البيانات (Data Cleaning)، والمعالجة المسبقة، والتنقيب عن البيانات (Data Mining)، والتحليل الاستكشافي (EDA)، وتفسير البيانات، والإحصاء الوصفي، وتحليل مؤشرات الأداء (KPI Analysis)، وتصوير البيانات.
- **ذكاء الأعمال والتقارير (Business Intelligence & Reporting)**: Power BI (Desktop & Service — معتمدة بشهادة PL-300)، وTableau، وAdvanced DAX، وتطوير لوحات المعلومات، وسرد القصص بالبيانات (Data Storytelling)، وتقارير الأعمال.
- **مايكروسوفت إكسل (Excel)**: الجداول المحورية (Pivot Tables)، وXLOOKUP/VLOOKUP، والمعادلات المتقدمة، ودوال تحليل البيانات، وPower Query.
- **الذكاء الاصطناعي وتعلم الآلة (AI & Machine Learning)**: Machine Learning، وDeep Learning (Keras & TensorFlow)، ومعالجة اللغة العربية وتحليل المشاعر (Arabic NLP & ABSA)، والذكاء الاصطناعي التوليدي (Generative AI)، ووكلاء الذكاء الاصطناعي (Agentic AI).
- **السحابة والأتمتة وتطوير الويب (Cloud, Automation & Web)**: Microsoft Azure، وأتمتة سير العمل (Workflow & AI Automation)، وتطوير الواجهات الأمامية والخلفية (Frontend & Backend).
- **المهارات الشخصية (Soft Skills)**: التفكير التحليلي والإبداعي، حل المشكلات، الاهتمام بالتفاصيل، التواصل، العمل الجماعي، القيادة، إدارة الوقت، المرونة والقدرة على العمل تحت ضغط، وسرعة التعلم.`,
    },
    keywords: [
      'skills',
      'skill',
      'technical',
      'soft skills',
      'stack',
      'tools',
      'technologies',
      'programming',
      'python',
      'pandas',
      'numpy',
      'sql',
      'postgresql',
      'power bi',
      'powerbi',
      'dax',
      'tableau',
      'excel',
      'xlookup',
      'vlookup',
      'pivot tables',
      'data mining',
      'data storytelling',
      'machine learning',
      'deep learning',
      'eda',
      'automation',
      'agentic',
      'generative',
      'مهارات',
      'مهاراتها',
      'تقنيه',
      'تقنية',
      'ادوات',
      'أدوات',
      'برمجه',
      'بايثون',
      'بتعرف',
      'خبرات تقنيه',
    ],
    synonyms: [
      'what are fatmas technical skills',
      'what are her technical skills',
      'what tools does she use',
      'technical stack',
      'programming languages and tools',
      'what are her soft skills',
      'ما هي مهاراتها التقنية',
      'ايه مهاراتها',
      'بتشتغل بادوات ايه',
      'مهارات فاطمة',
    ],
    urls: [
      {
        label: { EN: 'View Skills & Technical Stack', AR: 'استعراض قسم المهارات التقنية' },
        url: '#skills',
        isInternalAnchor: true,
      },
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
    ],
    sourceSection: 'Skills & Technical Stack & Official CV',
    followUpQuestions: [
      { EN: 'What Microsoft certifications does she have?', AR: 'معاها شهادات إيه؟' },
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
    ],
    highlightBadges: {
      EN: ['Python & SQL', 'Power BI & Tableau', 'Excel & Power Query', 'AI, ML & Automation'],
      AR: ['Python & SQL', 'Power BI & Tableau', 'Excel & Power Query', 'AI, ML & Automation'],
    },
  },

  // 12. CERTIFICATIONS — MICROSOFT FEATURED & COMPLETE INVENTORY
  {
    id: 'certs-microsoft',
    category: 'Certifications',
    title: {
      EN: 'Microsoft & Verified Professional Certifications',
      AR: 'شهادات مايكروسوفت والشهادات المهنية الموثقة',
    },
    response: {
      EN: `Fatma holds **two featured official Microsoft certifications** along with specialized credentials from Microsoft, Google, and IBM:

**Featured Microsoft Certifications**:
1. **Microsoft Certified: Power BI Data Analyst Associate (PL-300)** — *Microsoft*
   - Covers Power BI, Data Analysis, Data Modeling, DAX, Data Visualization, and Business Intelligence.
   - Verify: https://learn.microsoft.com/en-us/users/fatmaabdelfattah-9828/credentials/6fc6aa0ffc90ee0a
2. **Microsoft Azure Data Fundamentals** — *Microsoft*
   - Covers Microsoft Azure, Cloud Data Concepts, Relational & Non-Relational Data Services, and Data Workloads.
   - Verify: https://learn.microsoft.com/api/credentials/share/en-us/FatmaAbdelFattah-9828/8E33365767914AB6?sharingId=D3F9F9710F3516AA
3. **Microsoft AI Agents: From Foundations to Applications Professional Certificate** — *Microsoft*

**Additional Verified Credentials**:
- **Google Data Analytics Track (Coursera)**: 8 verified course certificates including the Capstone Case Study, R Programming, Tableau Visualization, SQL Analysis, and Data Cleaning, plus the **DATA ANALYST L1** badge.
- **IBM Machine Learning & Deep Learning (Coursera)**: *Deep Learning with Keras and TensorFlow*, *Introduction to Deep Learning & Neural Networks with Keras*, *Machine Learning with Python*, and *Artificial Intelligence Engineer*.
- **Professional Development**: *Delivering Quality Work with Agility* (IBM / Coursera).`,
      AR: `تمتلك فاطمة **شهادتين رئيسيتين معتمدتين رسمياً من مايكروسوفت (Microsoft)**، بالإضافة إلى مجموعة موثقة من شهادات Google و IBM على Coursera:

**شهادات مايكروسوفت المميزة (Featured Microsoft Certifications)**:
1. **Microsoft Certified: Power BI Data Analyst Associate (PL-300)** — *Microsoft*
   - تغطي تحليل البيانات، ونمذجة البيانات، وDAX، وتصميم لوحات ذكاء الأعمال باستخدام Power BI.
   - رابط التحقق الرسمي: https://learn.microsoft.com/en-us/users/fatmaabdelfattah-9828/credentials/6fc6aa0ffc90ee0a
2. **Microsoft Azure Data Fundamentals** — *Microsoft*
   - تغطي أساسيات البيانات السحابية، وخدمات وحلول البيانات على Microsoft Azure.
   - رابط التحقق الرسمي: https://learn.microsoft.com/api/credentials/share/en-us/FatmaAbdelFattah-9828/8E33365767914AB6?sharingId=D3F9F9710F3516AA
3. **Microsoft AI Agents: From Foundations to Applications Professional Certificate** — *Microsoft*

**شهادات إضافية موثقة**:
- **مسار تحليلات بيانات Google (Coursera)**: 8 شهادات معتمدة تشمل مشروع التخرج (Capstone)، وبرمجة R، والتصور البصري، وتنظيف وتحليل البيانات، بالإضافة إلى شارة **DATA ANALYST L1**.
- **شهادات IBM في التعلم الآلي والعميق (Coursera)**: *Deep Learning with Keras and TensorFlow*، و*Introduction to Deep Learning & Neural Networks with Keras*، و*Machine Learning with Python*، ومسار *Artificial Intelligence Engineer*.
- **التطوير المهني**: شهادة *Delivering Quality Work with Agility* من IBM.`,
    },
    keywords: [
      'certification',
      'certifications',
      'certificate',
      'certificates',
      'credentials',
      'credential',
      'microsoft',
      'pl-300',
      'pl300',
      'azure',
      'dp-900',
      'dp900',
      'google',
      'ibm',
      'coursera',
      'verified',
      'courses',
      'badge',
      'شهاده',
      'شهادة',
      'شهادات',
      'شهاداتها',
      'اعتمادات',
      'مايكروسوفت',
      'جوجل',
      'كورسيرا',
      'معتمده',
      'موثقه',
      'دورات',
      'كورسات',
    ],
    synonyms: [
      'what certifications does she have',
      'what microsoft certifications does she have',
      'tell me about her certifications',
      'does she have power bi certification',
      'pl-300 certification',
      'معاها شهادات ايه',
      'ما هي شهاداتها',
      'الشهادات المعتمدة',
      'شهادات مايكروسوفت',
    ],
    entityTriggers: [
      'pl-300',
      'pl300',
      'azure',
      'certification',
      'certifications',
      'credentials',
      'شهادات',
      'شهاداتها',
      'شهاده',
    ],
    urls: [
      {
        label: { EN: 'Verify Microsoft PL-300', AR: 'التحقق من شهادة Microsoft PL-300' },
        url: 'https://learn.microsoft.com/en-us/users/fatmaabdelfattah-9828/credentials/6fc6aa0ffc90ee0a',
      },
      {
        label: { EN: 'Verify Azure Data Fundamentals', AR: 'التحقق من شهادة Azure Data Fundamentals' },
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/FatmaAbdelFattah-9828/8E33365767914AB6?sharingId=D3F9F9710F3516AA',
      },
      {
        label: { EN: 'Browse All Certifications Section', AR: 'تصفح قسم الشهادات بالكامل' },
        url: '#certifications',
        isInternalAnchor: true,
      },
    ],
    sourceSection: 'Certifications & Credentials',
    followUpQuestions: [
      { EN: 'What are her Google & IBM certificates?', AR: 'ما هي شهاداتها من Google و IBM؟' },
      { EN: 'What are her technical skills?', AR: 'ما هي مهاراتها التقنية؟' },
    ],
    highlightBadges: {
      EN: ['Microsoft PL-300', 'Azure Data Fundamentals', 'Google Data Analytics (8)', 'IBM ML & Deep Learning'],
      AR: ['Microsoft PL-300', 'Azure Data Fundamentals', 'شهادات Google (8)', 'شهادات IBM للذكاء الاصطناعي'],
    },
  },

  // 13. CERTIFICATIONS — GOOGLE & IBM COURSERA DETAILS
  {
    id: 'certs-google-ibm',
    category: 'Certifications',
    title: {
      EN: 'Google Data Analytics & IBM Machine Learning Certifications (Coursera)',
      AR: 'شهادات Google لتحليل البيانات و IBM للتعلم الآلي والعميق (Coursera)',
    },
    response: {
      EN: `In addition to her Microsoft certifications, Fatma has earned verified credentials from **Google** and **IBM** on Coursera:

**Google Data Analytics (8 Verified Certificates + Badge)**:
- *DATA ANALYST L1 Badge*: https://www.coursera.org/account/accomplishments/badge/rpKuaTWySe6Srmk1smnulA
- *Google Data Analytics Capstone: Complete a Case Study*: https://www.coursera.org/account/accomplishments/verify/R50RRQ7BZXP4
- *Data Analysis with R Programming*: https://www.coursera.org/account/accomplishments/verify/DQ4OLECKR0GB
- *Share Data Through the Art of Visualization*: https://www.coursera.org/account/accomplishments/verify/F0IAXN0RKGOL
- *Analyze Data to Answer Questions*: https://www.coursera.org/account/accomplishments/verify/E3XGP9I2X5X3
- *Process Data from Dirty to Clean*: https://www.coursera.org/account/accomplishments/verify/GMSJPLG3PLVS
- *Prepare Data for Exploration*: https://www.coursera.org/account/accomplishments/verify/JFMN3LECNCE1
- *Ask Questions to Make Data-Driven Decisions*: https://www.coursera.org/account/accomplishments/verify/TLPORHQ0G3A0
- *Foundations: Data, Data, Everywhere*: https://www.coursera.org/account/accomplishments/verify/U04PDLVKD1IJ

**IBM Machine Learning, Deep Learning & Agile Delivery**:
- *Deep Learning with Keras and TensorFlow*: https://www.coursera.org/account/accomplishments/verify/JPRWFBJMJBRJ
- *Introduction to Deep Learning & Neural Networks with Keras*: https://www.coursera.org/account/accomplishments/verify/7MZ9ECIYYZVW
- *Machine Learning with Python*: https://www.coursera.org/account/accomplishments/verify/7LUY061IJ7B0
- *Delivering Quality Work with Agility*: https://www.coursera.org/account/accomplishments/verify/4ZNLONAML6KV`,
      AR: `إلى جانب شهادات مايكروسوفت، حصلت فاطمة على شهادات موثقة من **Google** و **IBM** عبر منصة Coursera:

**شهادات تحليلات بيانات Google (8 شهادات + شارة DATA ANALYST L1)**:
- *شارة DATA ANALYST L1*: https://www.coursera.org/account/accomplishments/badge/rpKuaTWySe6Srmk1smnulA
- *Google Data Analytics Capstone: Complete a Case Study*: https://www.coursera.org/account/accomplishments/verify/R50RRQ7BZXP4
- *Data Analysis with R Programming*: https://www.coursera.org/account/accomplishments/verify/DQ4OLECKR0GB
- *Share Data Through the Art of Visualization*: https://www.coursera.org/account/accomplishments/verify/F0IAXN0RKGOL
- *Analyze Data to Answer Questions*: https://www.coursera.org/account/accomplishments/verify/E3XGP9I2X5X3
- *Process Data from Dirty to Clean*: https://www.coursera.org/account/accomplishments/verify/GMSJPLG3PLVS
- *Prepare Data for Exploration*: https://www.coursera.org/account/accomplishments/verify/JFMN3LECNCE1
- *Ask Questions to Make Data-Driven Decisions*: https://www.coursera.org/account/accomplishments/verify/TLPORHQ0G3A0
- *Foundations: Data, Data, Everywhere*: https://www.coursera.org/account/accomplishments/verify/U04PDLVKD1IJ

**شهادات IBM في التعلم الآلي والعميق والعمل المرن (Agility)**:
- *Deep Learning with Keras and TensorFlow*: https://www.coursera.org/account/accomplishments/verify/JPRWFBJMJBRJ
- *Introduction to Deep Learning & Neural Networks with Keras*: https://www.coursera.org/account/accomplishments/verify/7MZ9ECIYYZVW
- *Machine Learning with Python*: https://www.coursera.org/account/accomplishments/verify/7LUY061IJ7B0
- *Delivering Quality Work with Agility*: https://www.coursera.org/account/accomplishments/verify/4ZNLONAML6KV`,
    },
    keywords: [
      'google',
      'ibm',
      'coursera',
      'keras',
      'tensorflow',
      'r programming',
      'capstone',
      'agility',
      'data analyst l1',
      'جوجل',
      'كورسيرا',
    ],
    synonyms: [
      'what are her google and ibm certificates',
      'google data analytics certificates',
      'ibm machine learning certificates',
      'ما هي شهاداتها من google و ibm',
      'شهادات جوجل وكورسيرا',
    ],
    entityTriggers: ['google', 'ibm', 'coursera', 'keras', 'tensorflow', 'data analyst l1'],
    urls: [
      {
        label: { EN: 'Google Capstone Certificate', AR: 'شهادة مشروع تخرج Google' },
        url: 'https://www.coursera.org/account/accomplishments/verify/R50RRQ7BZXP4',
      },
      {
        label: { EN: 'IBM Deep Learning Certificate', AR: 'شهادة التعلم العميق من IBM' },
        url: 'https://www.coursera.org/account/accomplishments/verify/JPRWFBJMJBRJ',
      },
    ],
    sourceSection: 'Certifications & Credentials',
    followUpQuestions: [
      { EN: 'What Microsoft certifications does she have?', AR: 'ما هي شهادات مايكروسوفت التي حصلت عليها؟' },
      { EN: 'How can I contact her?', AR: 'أتواصل معاها إزاي؟' },
    ],
    highlightBadges: {
      EN: ['Google Data Analytics', 'IBM Deep Learning', 'DATA ANALYST L1', 'Verified Coursera Links'],
      AR: ['تحليلات بيانات Google', 'التعلم العميق من IBM', 'DATA ANALYST L1', 'روابط Coursera موثقة'],
    },
  },

  // 14. LEADERSHIP & VOLUNTEERING
  {
    id: 'leadership-overview',
    category: 'Leadership',
    title: {
      EN: 'Leadership & Volunteering Experience',
      AR: 'الأدوار القيادية والعمل التطوعي',
    },
    response: {
      EN: `Fatma has held three key leadership and volunteering roles during her academic and community journey:

1. **Entrepreneurship Team Leader** — *Higher Institute of E-Commerce Systems* (**2021 – 2024 | Sohag**)
   - Led training and development activities aimed at preparing young people for the job market and enhancing their professional skills.
   - Delivered practical training sessions on Microsoft Office applications (Word, Excel, and PowerPoint).
   - Introduced participants to AI tools and their practical applications to improve productivity and support learning.
   - Conducted workshops on leadership skills and personal development, and organized training programs, competitions, and skill-development activities.
2. **Head of IT (Volunteering)** — *Life Makers (صناع الحياة)* (**2022 – 2024 | Sohag University**)
   - Managed and organized organizational data and reports.
   - Created Excel reports to track performance and activities.
   - Improved workflow efficiency using digital tools and supported decision-making with structured data.
3. **HR Director** — *Higher Institute of E-Commerce Systems* (**2022 – 2024 | Sohag**)
   - Maintained employee databases and records.
   - Analyzed HR data and generated reports.
   - Automated administrative tasks using Excel and coordinated data collection and documentation.`,
      AR: `تولت فاطمة ثلاثة أدوار قيادية وتطوعية بارزة صقلت مهاراتها في القيادة وإدارة البيانات والعمل الجماعي:

1. **قائد فريق ريادة الأعمال (Entrepreneurship Team Leader)** — *المعهد العالي لنظم التجارة الإلكترونية* (**2021 – 2024 | سوهاج**)
   - قيادة أنشطة التدريب والتطوير لتأهيل الشباب لسوق العمل وتنمية مهاراتهم المهنية.
   - تقديم تدريبات عملية على تطبيقات Microsoft Office (Word, Excel, PowerPoint).
   - تعريف المشاركين بأدوات الذكاء الاصطناعي وتطبيقاتها العملية لرفع الإنتاجية ودعم التعلم.
   - تقديم ورش عمل في المهارات القيادية والتطوير الشخصي، وتنظيم البرامج التدريبية والمسابقات.
2. **رئيس قسم تكنولوجيا المعلومات (Head of IT - عمل تطوعي)** — *مؤسسة صناع الحياة (Life Makers)* (**2022 – 2024 | جامعة سوهاج**)
   - إدارة وتنظيم بيانات وتقارير المؤسسة.
   - إعداد تقارير Excel لمتابعة الأداء والأنشطة.
   - تحسين كفاءة سير العمل باستخدام الأدوات الرقمية ودعم اتخاذ القرار بالبيانات المنظمة.
3. **مدير الموارد البشرية (HR Director)** — *المعهد العالي لنظم التجارة الإلكترونية* (**2022 – 2024 | سوهاج**)
   - إدارة وحفظ قواعد بيانات وسجلات الأعضاء والعاملين.
   - تحليل بيانات الموارد البشرية وإصدار التقارير.
   - أتمتة المهام الإدارية باستخدام Excel وتنسيق جمع البيانات والتوثيق.`,
    },
    keywords: [
      'leadership',
      'leader',
      'volunteer',
      'volunteering',
      'life makers',
      'lifemakers',
      'head of it',
      'hr director',
      'human resources',
      'entrepreneurship',
      'team leader',
      'community',
      'قياده',
      'قيادية',
      'قياديه',
      'تطوع',
      'تطوعيه',
      'تطوعية',
      'صناع الحياه',
      'صناع الحياة',
      'رياده الاعمال',
      'موارد بشريه',
    ],
    synonyms: [
      'what leadership roles has she held',
      'tell me about her leadership experience',
      'volunteering experience',
      'life makers head of it',
      'ما هي الادوار القيادية والتطوعية التي تولتها',
      'نشاطها التطوعي والقيادي',
    ],
    entityTriggers: ['leadership', 'volunteering', 'life makers', 'hr director', 'head of it', 'صناع الحياه', 'قياديه', 'تطوع'],
    urls: [
      {
        label: { EN: 'View Experience & Education Timeline', AR: 'استعراض المسار المهني والأكاديمي' },
        url: '#experience',
        isInternalAnchor: true,
      },
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
    ],
    sourceSection: 'Experience & Education (Milestones 02, 03, 04) & Official CV',
    followUpQuestions: [
      { EN: 'Tell me about her professional experience.', AR: 'ما هي خبرتها في النيابة العامة المصرية؟' },
      { EN: 'How can I contact her?', AR: 'أتواصل معاها إزاي؟' },
    ],
    highlightBadges: {
      EN: ['Entrepreneurship Team Leader', 'Head of IT — Life Makers', 'HR Director', '2021 – 2024'],
      AR: ['قائد فريق ريادة الأعمال', 'Head of IT — صناع الحياة', 'مدير الموارد البشرية HR', '2021 – 2024'],
    },
  },

  // 15. CONTACT INFORMATION & PROFESSIONAL LINKS
  {
    id: 'contact-info',
    category: 'Contact Information',
    title: {
      EN: 'Contact Fatma Abdel Fattah & Professional Links',
      AR: 'بيانات التواصل مع فاطمة عبد الفتاح والروابط المهنية',
    },
    response: {
      EN: `You can reach Fatma directly through any of her verified contact channels:

- **Location**: Cairo, Egypt
- **Email**: fatm_2002@outlook.com (mailto:fatm_2002@outlook.com)
- **WhatsApp / Phone**: 01096580504 (https://wa.me/201096580504)
- **LinkedIn**: https://www.linkedin.com/in/fatma-abdel-fattah/
- **GitHub**: https://github.com/fm747777-cloud
- **Official CV (PDF)**: /Fatma_Abdel_Fattah_CV.pdf

She is open to Data Analyst roles, Business Intelligence opportunities, Applied AI initiatives, and collaborative projects.`,
      AR: `يمكنك التواصل مع فاطمة عبد الفتاح مباشرة عبر قنوات التواصل الرسمية التالية:

- **الموقع**: القاهرة، مصر
- **البريد الإلكتروني (Email)**: fatm_2002@outlook.com (mailto:fatm_2002@outlook.com)
- **واتساب / الهاتف (WhatsApp)**: 01096580504 (https://wa.me/201096580504)
- **لينكدإن (LinkedIn)**: https://www.linkedin.com/in/fatma-abdel-fattah/
- **جيت هب (GitHub)**: https://github.com/fm747777-cloud
- **السيرة الذاتية الرسمية (CV PDF)**: /Fatma_Abdel_Fattah_CV.pdf

فاطمة متاحة لفرص العمل في تحليل البيانات (Data Analytics)، وذكاء الأعمال (BI)، ومبادرات الذكاء الاصطناعي التطبيقي، والمشاريع المشتركة.`,
    },
    keywords: [
      'contact',
      'reach',
      'email',
      'mail',
      'outlook',
      'whatsapp',
      'phone',
      'number',
      'call',
      'message',
      'linkedin',
      'github',
      'social',
      'links',
      'connect',
      'collaborate',
      'location',
      'where is she based',
      'تواصل',
      'اتواصل',
      'أتواصل',
      'ايميل',
      'بريد',
      'واتساب',
      'واتس',
      'رقم',
      'تليفون',
      'هاتف',
      'لينكدان',
      'لينكدإن',
      'جيت هب',
      'روابط',
    ],
    synonyms: [
      'how can i contact fatma',
      'how can i contact her',
      'how can i hire her',
      'what is her email',
      'what is her whatsapp number',
      'linkedin and github links',
      'اتواصل معاها ازاي',
      'أتواصل معاها إزاي',
      'كيف يمكنني التواصل مع فاطمة',
      'رقم تليفونها او الايميل',
    ],
    entityTriggers: [
      'contact',
      'email',
      'whatsapp',
      'linkedin',
      'github',
      'phone',
      'تواصل',
      'اتواصل',
      'ايميل',
      'واتساب',
      'لينكدان',
    ],
    urls: [
      {
        label: { EN: 'Download CV (PDF)', AR: 'تحميل السيرة الذاتية (PDF)' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
      {
        label: { EN: 'Send Email', AR: 'إرسال بريد إلكتروني' },
        url: 'mailto:fatm_2002@outlook.com',
      },
      {
        label: { EN: 'Message on WhatsApp', AR: 'مراسلة عبر واتساب' },
        url: 'https://wa.me/201096580504',
      },
      {
        label: { EN: 'LinkedIn Profile', AR: 'حساب LinkedIn' },
        url: 'https://www.linkedin.com/in/fatma-abdel-fattah/',
      },
      {
        label: { EN: 'GitHub Profile', AR: 'حساب GitHub' },
        url: 'https://github.com/fm747777-cloud',
      },
    ],
    sourceSection: 'Contact Section & Official CV',
    followUpQuestions: [
      { EN: 'Why might Fatma be a good fit for a Data Analyst role?', AR: 'لماذا تُعد فاطمة مرشحة مميزة لوظيفة محلل بيانات؟' },
      { EN: 'What is the BASIRA project?', AR: 'احكيلي عن مشروع بصيرة.' },
    ],
    highlightBadges: {
      EN: ['Cairo, Egypt', 'fatm_2002@outlook.com', 'WhatsApp: 01096580504', 'LinkedIn & GitHub'],
      AR: ['القاهرة، مصر', 'fatm_2002@outlook.com', 'واتساب: 01096580504', 'LinkedIn & GitHub'],
    },
  },

  // 16. OFFICIAL CV / RESUME DOWNLOAD
  {
    id: 'cv-download',
    category: 'Personal Profile',
    title: {
      EN: "Fatma Abdel Fattah's Official CV / Resume",
      AR: 'السيرة الذاتية الرسمية لفاطمة عبد الفتاح (CV)',
    },
    response: {
      EN: `You can view or download Fatma Abdel Fattah's latest official CV directly as a PDF (**Fatma_Abdel_Fattah_CV.pdf**):

- **Role**: Data Analyst | Applied AI | Business Intelligence
- **Education**: Bachelor's Degree in Management Information Systems (MIS), Higher Institute of Electronic Commerce Systems in Sohag (2021 – 2024)
- **Experience & Training**: Data Entry Specialist at the Egyptian Public Prosecution (10/2024 – 12/2025) & Digilians AI and Data Analytics Diploma at the Egyptian Military Academy (12/2025 – 09/2026)
- **Key Certifications**: Microsoft Certified: Power BI Data Analyst Associate (PL-300), Microsoft Azure Data Fundamentals, DATA ANALYST L1, Artificial Intelligence Engineer, and Microsoft AI Agents Professional Certificate.`,
      AR: `يمكنك عرض أو تحميل السيرة الذاتية الرسمية المحدثة لفاطمة عبد الفتاح بصيغة PDF (**Fatma_Abdel_Fattah_CV.pdf**):

- **المسمى المهني**: Data Analyst | Applied AI | Business Intelligence
- **التعليم**: بكالوريوس نظم المعلومات الإدارية (MIS) — المعهد العالي لنظم التجارة الإلكترونية بسوهاج (2021 – 2024)
- **الخبرة والتدريب**: أخصائي إدخال بيانات بالنيابة العامة المصرية (10/2024 – 12/2025) ودبلومة ديجيليانز لتحليل البيانات والذكاء الاصطناعي بالأكاديمية العسكرية المصرية (12/2025 – 09/2026)
- **أبرز الشهادات**: Microsoft Certified: Power BI Data Analyst Associate (PL-300)، وMicrosoft Azure Data Fundamentals، وDATA ANALYST L1، وArtificial Intelligence Engineer، وشهادة Microsoft AI Agents.`,
    },
    keywords: [
      'cv',
      'resume',
      'curriculum vitae',
      'pdf',
      'download cv',
      'download resume',
      'سيره ذاتيه',
      'سيرة ذاتية',
      'السيره الذاتيه',
      'السيرة الذاتية',
      'سي في',
      'تحميل السيره',
    ],
    synonyms: [
      'download her cv',
      'where can i download her cv',
      'show me her resume',
      'fatma cv pdf',
      'تحميل السيرة الذاتية',
      'فين ال cv',
      'عايز السي في',
    ],
    entityTriggers: ['cv', 'resume', 'curriculum vitae', 'سيره ذاتيه', 'السيره الذاتيه', 'سي في'],
    urls: [
      {
        label: { EN: 'Download Fatma_Abdel_Fattah_CV.pdf', AR: 'تحميل Fatma_Abdel_Fattah_CV.pdf' },
        url: '/Fatma_Abdel_Fattah_CV.pdf',
      },
    ],
    sourceSection: 'Hero Section & Official CV',
    followUpQuestions: [
      { EN: 'What are her technical skills?', AR: 'ما هي مهاراتها التقنية؟' },
      { EN: 'How can I contact her?', AR: 'أتواصل معاها إزاي؟' },
    ],
    highlightBadges: {
      EN: ['Fatma_Abdel_Fattah_CV.pdf', 'Data Analyst | Applied AI | BI', 'Verified Credentials'],
      AR: ['Fatma_Abdel_Fattah_CV.pdf', 'محللة بيانات وذكاء أعمال', 'شهادات معتمدة'],
    },
  },
];

// ============================================================================
// DETERMINISTIC LOCAL TEXT NORMALIZATION & INTENT MATCHING ENGINE
// ============================================================================

export function detectQueryLanguage(query: string, fallbackLang: 'EN' | 'AR' = 'EN'): 'EN' | 'AR' {
  const arabicChars = (query.match(/[\u0600-\u06FF]/g) || []).length;
  const latinChars = (query.match(/[a-zA-Z]/g) || []).length;
  if (arabicChars > 0 && arabicChars >= latinChars * 0.4) {
    return 'AR';
  }
  if (latinChars > 0) {
    return 'EN';
  }
  return fallbackLang;
}

export function normalizeText(raw: string): string {
  return (
    raw
      .toLowerCase()
      // Remove Arabic diacritics (tashkeel) and tatweel
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
      // Normalize Arabic Alef variations
      .replace(/[أإآٱ]/g, 'ا')
      // Normalize Teh Marbuta to Heh
      .replace(/ة/g, 'ه')
      // Normalize Alef Maqsura to Yeh
      .replace(/ى/g, 'ي')
      // Normalize Hamza on Waw/Yeh
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      // Keep alphanumeric, Arabic letters, hyphens (for PL-300), and spaces
      .replace(/[^\w\u0600-\u06FF\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

const STOP_WORDS = new Set([
  'the',
  'a',
  'an',
  'is',
  'are',
  'was',
  'were',
  'what',
  'tell',
  'me',
  'can',
  'you',
  'please',
  'does',
  'do',
  'did',
  'has',
  'have',
  'she',
  'her',
  'hers',
  'of',
  'in',
  'at',
  'to',
  'for',
  'with',
  'on',
  'and',
  'or',
  'how',
  'من',
  'في',
  'على',
  'عن',
  'ما',
  'هي',
  'هل',
  'لي',
  'عنها',
  'معها',
  'لها',
  'الي',
  'التي',
  'الذي',
]);

function tokenize(normalized: string): string[] {
  return normalized
    .split(' ')
    .map((t) => t.trim())
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

// Lightweight Levenshtein edit distance for typo resilience
function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function isFuzzyTokenMatch(token: string, target: string): boolean {
  if (token === target) return true;
  if (token.length >= 4 && target.length >= 4) {
    if (target.includes(token) || token.includes(target)) return true;
    const maxDist = token.length >= 7 ? 2 : 1;
    return editDistance(token, target) <= maxDist;
  }
  return false;
}

// Unsupported / Out-of-Scope Query Detector (Salary, Private Life, Non-existent projects, Unrelated questions)
const UNSUPPORTED_PATTERNS = [
  /\bsalary\b/i,
  /\bpay\b/i,
  /\bcompensation\b/i,
  /\brate\b/i,
  /\bhow much does she make\b/i,
  /\bage\b/i,
  /\bmarried\b/i,
  /\bmarital\b/i,
  /\breligion\b/i,
  /\bpolitics\b/i,
  /\bhome address\b/i,
  /\bdoes not exist\b/i,
  /\bdoesn't exist\b/i,
  /\bnon-existent\b/i,
  /\bfake project\b/i,
  /\bproject x\b/i,
  /\bweather\b/i,
  /\brecipe\b/i,
  /\bbitcoin\b/i,
  /\bcrypto\b/i,
  /راتب/,
  /مرتب/,
  /تتقاضي/,
  /عمرها/,
  /سنها/,
  /متزوجه/,
  /عنوان بيتها/,
  /غير موجود/,
  /لا يوجد/,
];

// Greeting & Thanks Patterns
const GREETING_PATTERNS = [
  /^(hi|hello|hey|good morning|good evening|greetings|welcome|اهلا|مرحبا|السلام عليكم|هاي|صباح الخير|مساء الخير)[\s!?.،]*$/i,
];

const THANKS_PATTERNS = [
  /^(thanks|thank you|thx|great|awesome|شكرا|شكراً|متشكر|تسلم|جزاك الله خيرا)[\s!?.،]*$/i,
];

// Multi-Turn Follow-up Aspect Detectors
const FOLLOW_UP_TECH_PATTERNS = [
  /\b(what|which)\s+(technologies|technology|tech|tools|stack|libraries|models|methods)\b/i,
  /\bhow was it built\b/i,
  /\bwhat did she use\b/i,
  /(التقنيات|الادوات|الأدوات|تكنولوجيا|برمجه|المستخدمه|استخدمت ايه)/,
];

const FOLLOW_UP_ROLE_PATTERNS = [
  /\bwhat was her role\b/i,
  /\bher role\b/i,
  /\bher contribution\b/i,
  /\bwhat did she do in it\b/i,
  /(دورها|عملت ايه فيه|مساهمتها)/,
];

const FOLLOW_UP_LINK_PATTERNS = [
  /\b(what is the|project|live|verify|verification)?\s*(link|url|website|demo)\b/i,
  /\bwhere can i see it\b/i,
  /(الرابط|لينك|موقع المشروع)/,
];

export function queryFatmaKnowledge(
  rawQuery: string,
  context: ConversationContextState
): LocalAnswerResult {
  const detectedLang = detectQueryLanguage(rawQuery, context.preferredLang);
  const normalizedQuery = normalizeText(rawQuery);
  const queryTokens = tokenize(normalizedQuery);

  // 1. Check pure greetings
  if (GREETING_PATTERNS.some((p) => p.test(normalizedQuery))) {
    return {
      entryId: 'greeting',
      category: 'Personal Profile',
      title: detectedLang === 'AR' ? 'مرحباً بك!' : 'Welcome!',
      reply:
        detectedLang === 'AR'
          ? 'أهلاً بك! يسعدني مساعدتك في التعرّف على فاطمة عبد الفتاح، ومشاريعها العشرة (مثل مشروع "بصيرة" BASIRA، ونظام الهوية الرقمية بأكاديمية السادات، وTechUni، وBodyIntel)، وخبرتها في النيابة العامة المصرية، وشهاداتها المعتمدة من Microsoft وGoogle وIBM. ماذا تود أن تعرف؟'
          : "Hello! I'd be happy to help you explore Fatma Abdel Fattah's background—including her 10 Data, AI & Frontend projects (led by BASIRA), her experience at the Egyptian Public Prosecution, her technical skills, or her Microsoft, Google, and IBM certifications. What would you like to know?",
      lang: detectedLang,
      links: [],
      followUpQuestions: [
        detectedLang === 'AR' ? 'من هي فاطمة عبد الفتاح؟' : 'Who is Fatma?',
        detectedLang === 'AR' ? 'احكيلي عن مشروع بصيرة.' : 'What is the BASIRA project?',
        detectedLang === 'AR' ? 'معاها شهادات إيه؟' : 'What Microsoft certifications does she have?',
      ],
      highlightBadges: [],
      isFallback: false,
    };
  }

  // 2. Check thanks / appreciation
  if (THANKS_PATTERNS.some((p) => p.test(normalizedQuery))) {
    return {
      entryId: 'thanks',
      category: 'Personal Profile',
      title: detectedLang === 'AR' ? 'على الرحب والسعة!' : "You're Welcome!",
      reply:
        detectedLang === 'AR'
          ? 'على الرحب والسعة! إذا كان لديك أي سؤال آخر حول مشاريع فاطمة، أو شهاداتها، أو ترغب في التواصل معها مباشرة، فأنا هنا للمساعدة.'
          : "You're very welcome! Feel free to ask if you'd like to explore more about Fatma's projects, certifications, or direct contact channels.",
      lang: detectedLang,
      links: [
        {
          label: { EN: 'Send Email', AR: 'إرسال بريد إلكتروني' },
          url: 'mailto:fatm_2002@outlook.com',
        },
        {
          label: { EN: 'LinkedIn Profile', AR: 'حساب LinkedIn' },
          url: 'https://www.linkedin.com/in/fatma-abdel-fattah/',
        },
      ],
      followUpQuestions: [
        detectedLang === 'AR' ? 'أتواصل معاها إزاي؟' : 'How can I contact her?',
      ],
      highlightBadges: [],
      isFallback: false,
    };
  }

  // 3. Check explicit out-of-scope / unsupported topics (salary, private info, non-existent projects)
  if (UNSUPPORTED_PATTERNS.some((p) => p.test(rawQuery) || p.test(normalizedQuery))) {
    return {
      entryId: null,
      category: null,
      title: detectedLang === 'AR' ? 'معلومة غير مدرجة' : 'Information Unavailable',
      reply: UNSUPPORTED_FALLBACK_MESSAGE[detectedLang],
      lang: detectedLang,
      links: [
        {
          label: { EN: 'Contact Fatma Directly', AR: 'تواصل مع فاطمة مباشرة' },
          url: 'mailto:fatm_2002@outlook.com',
        },
      ],
      followUpQuestions: [
        detectedLang === 'AR' ? 'احكيلي عن مشروع بصيرة.' : 'What is the BASIRA project?',
        detectedLang === 'AR' ? 'ما هي مهاراتها التقنية؟' : 'What are her technical skills?',
        detectedLang === 'AR' ? 'أتواصل معاها إزاي؟' : 'How can I contact her?',
      ],
      highlightBadges: [],
      isFallback: true,
    };
  }

  // 4. Multi-Turn Context Resolution
  if (context.lastEntryId) {
    const previousEntry = FATMA_KNOWLEDGE_BASE.find((e) => e.id === context.lastEntryId);
    if (previousEntry && previousEntry.subTopics) {
      const mentionsOtherEntity = FATMA_KNOWLEDGE_BASE.some(
        (e) =>
          e.id !== previousEntry.id &&
          (e.entityTriggers || []).some((trig) => normalizedQuery.includes(normalizeText(trig)))
      );

      if (!mentionsOtherEntity) {
        if (FOLLOW_UP_TECH_PATTERNS.some((p) => p.test(rawQuery) || p.test(normalizedQuery))) {
          const sub = previousEntry.subTopics.find((s) => s.aspect === 'tech');
          if (sub) {
            return {
              entryId: previousEntry.id,
              category: previousEntry.category,
              title: previousEntry.title[detectedLang],
              reply: sub.response[detectedLang],
              lang: detectedLang,
              links: previousEntry.urls || [],
              followUpQuestions: previousEntry.followUpQuestions.map((q) => q[detectedLang]),
              highlightBadges: previousEntry.highlightBadges?.[detectedLang] || [],
              isFallback: false,
            };
          }
        }
        if (FOLLOW_UP_ROLE_PATTERNS.some((p) => p.test(rawQuery) || p.test(normalizedQuery))) {
          const sub = previousEntry.subTopics.find((s) => s.aspect === 'role');
          if (sub) {
            return {
              entryId: previousEntry.id,
              category: previousEntry.category,
              title: previousEntry.title[detectedLang],
              reply: sub.response[detectedLang],
              lang: detectedLang,
              links: previousEntry.urls || [],
              followUpQuestions: previousEntry.followUpQuestions.map((q) => q[detectedLang]),
              highlightBadges: previousEntry.highlightBadges?.[detectedLang] || [],
              isFallback: false,
            };
          }
        }
        if (FOLLOW_UP_LINK_PATTERNS.some((p) => p.test(rawQuery) || p.test(normalizedQuery))) {
          const sub = previousEntry.subTopics.find((s) => s.aspect === 'link');
          if (sub) {
            return {
              entryId: previousEntry.id,
              category: previousEntry.category,
              title: previousEntry.title[detectedLang],
              reply: sub.response[detectedLang],
              lang: detectedLang,
              links: previousEntry.urls || [],
              followUpQuestions: previousEntry.followUpQuestions.map((q) => q[detectedLang]),
              highlightBadges: previousEntry.highlightBadges?.[detectedLang] || [],
              isFallback: false,
            };
          }
        }
      }
    }
  }

  // 5. Score all knowledge entries deterministically
  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of FATMA_KNOWLEDGE_BASE) {
    let score = 0;

    // A. Exact or near-exact synonym phrase match (Highest weight)
    for (const syn of entry.synonyms) {
      const normSyn = normalizeText(syn);
      if (normalizedQuery === normSyn) {
        score += 120;
      } else if (normalizedQuery.includes(normSyn) || normSyn.includes(normalizedQuery)) {
        if (normalizedQuery.length >= 5) {
          score += 65;
        }
      }
    }

    // B. High-intent Entity Trigger match
    if (entry.entityTriggers) {
      for (const trig of entry.entityTriggers) {
        const normTrig = normalizeText(trig);
        if (normalizedQuery.includes(normTrig)) {
          score += 55;
        } else if (!normTrig.includes(' ')) {
          for (const qTok of queryTokens) {
            if (isFuzzyTokenMatch(qTok, normTrig)) {
              score += 42;
            }
          }
        }
      }
    }

    // C. Weighted Keyword & Fuzzy Token Matching
    for (const kw of entry.keywords) {
      const normKw = normalizeText(kw);
      if (normKw.includes(' ')) {
        if (normalizedQuery.includes(normKw)) {
          score += 38;
        }
      } else {
        for (const qTok of queryTokens) {
          if (qTok === normKw) {
            const weight =
              normKw === 'fatma' || normKw === 'فاطمه' || normKw === 'abdel' || normKw === 'fattah'
                ? 10
                : 24;
            score += weight;
          } else if (isFuzzyTokenMatch(qTok, normKw)) {
            score += 15;
          }
        }
      }
    }

    // D. Slight context continuity boost
    if (
      context.lastCategory &&
      entry.category === context.lastCategory &&
      queryTokens.length <= 3 &&
      score > 0
    ) {
      score += 8;
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  // 6. Special Guardrail for unknown projects
  const asksSpecificUnknownProject =
    /\b(project|company|working at|worked at|built)\s+([a-z0-9_-]{3,})/i.test(rawQuery) &&
    bestScore < 35;

  if (!bestEntry || bestScore < 18 || asksSpecificUnknownProject) {
    return {
      entryId: null,
      category: null,
      title: detectedLang === 'AR' ? 'معلومة غير مدرجة' : 'Information Unavailable',
      reply: UNSUPPORTED_FALLBACK_MESSAGE[detectedLang],
      lang: detectedLang,
      links: [
        {
          label: { EN: 'Contact Fatma Directly', AR: 'تواصل مع فاطمة مباشرة' },
          url: 'mailto:fatm_2002@outlook.com',
        },
      ],
      followUpQuestions: [
        detectedLang === 'AR' ? 'من هي فاطمة عبد الفتاح؟' : 'Who is Fatma?',
        detectedLang === 'AR' ? 'احكيلي عن مشروع بصيرة.' : 'What is the BASIRA project?',
        detectedLang === 'AR' ? 'ما هي مهاراتها التقنية؟' : 'What are her technical skills?',
      ],
      highlightBadges: [],
      isFallback: true,
    };
  }

  return {
    entryId: bestEntry.id,
    category: bestEntry.category,
    title: bestEntry.title[detectedLang],
    reply: bestEntry.response[detectedLang],
    lang: detectedLang,
    links: bestEntry.urls || [],
    followUpQuestions: bestEntry.followUpQuestions.map((q) => q[detectedLang]),
    highlightBadges: bestEntry.highlightBadges?.[detectedLang] || [],
    isFallback: false,
  };
}
