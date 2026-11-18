export type ProjectRowCategory = 'data-ai' | 'frontend';

export type ProjectIconKey =
  | 'basira'
  | 'student-identity'
  | 'techuni'
  | 'bodyintel'
  | 'dashboard-viz'
  | 'pold-menu'
  | 'alpha-website'
  | 'sanad-plus'
  | 'ziad-portfolio'
  | 'lms-platform';

export interface CanonicalProjectRecord {
  id: string;
  number: string;
  rowCategory: ProjectRowCategory;
  isFeaturedFlagship?: boolean;
  iconKey: ProjectIconKey;
  cardTitle: {
    EN: string;
    AR: string;
  };
  cardSubtitle: {
    EN: string;
    AR: string;
  };
  fullTitle: {
    EN: string;
    AR: string;
  };
  categoryLabel: {
    EN: string;
    AR: string;
  };
  overview: {
    EN: string;
    AR: string;
  };
  purpose: {
    EN: string;
    AR: string;
  };
  contributions?: {
    EN: string[];
    AR: string[];
  };
  technologies: {
    EN: string[];
    AR: string[];
  };
  liveUrl?: string;
  ctaLabel?: {
    EN: string;
    AR: string;
  };
  isExternalShowcase?: boolean;
  imageAsset?: string;
  previewDomainLabel?: string;
}

export const CANONICAL_PROJECTS: CanonicalProjectRecord[] = [
  // ==========================================================================
  // ROW 01 — DATA & AI PROJECTS (Moves RIGHT TO LEFT)
  // ==========================================================================
  {
    id: 'basira',
    number: '01',
    rowCategory: 'data-ai',
    isFeaturedFlagship: true,
    iconKey: 'basira',
    cardTitle: {
      EN: 'BASIRA',
      AR: 'BASIRA',
    },
    cardSubtitle: {
      EN: 'Arabic NLP & Business Intelligence',
      AR: 'معالجة اللغة العربية وذكاء الأعمال',
    },
    fullTitle: {
      EN: 'BASIRA — AI-Powered Arabic Customer Intelligence',
      AR: 'بصيرة (BASIRA) — ذكاء العملاء باللغة العربية المدعوم بالذكاء الاصطناعي',
    },
    categoryLabel: {
      EN: 'Featured Flagship Project · Data Analytics & Applied AI',
      AR: 'المشروع الرئيسي المميز · تحليل البيانات والذكاء الاصطناعي التطبيقي',
    },
    overview: {
      EN: 'BASIRA transforms Arabic customer reviews into actionable business insights through Natural Language Processing and Aspect-Based Sentiment Analysis. The project works with 8,150 real restaurant customer reviews and helps businesses understand feedback about food, service, and overall atmosphere.',
      AR: 'بصيرة منصة ذكية لتحويل آراء العملاء المكتوبة باللغة العربية إلى رؤى تساعد أصحاب الأعمال على اتخاذ قرارات أفضل. يعتمد المشروع على 8,150 مراجعة حقيقية، ويستخدم معالجة اللغة الطبيعية وتحليل المشاعر لفهم تقييمات الطعام والخدمة والأجواء، وعرض النتائج في لوحات معلومات تفاعلية.',
    },
    purpose: {
      EN: 'Enables restaurant and hospitality decision-makers to evaluate thousands of unstructured Arabic customer reviews across specific operational aspects—food, service, and atmosphere—through interactive dashboards.',
      AR: 'تمكين أصحاب الأعمال والمطاعم من فهم وتحليل آلاف المراجعات العربية غير المهيكلة عبر جوانب محددة تشمل جودة الطعام، والخدمة، والأجواء العامة من خلال لوحات معلومات تفاعلية.',
    },
    contributions: {
      EN: [
        'Served as Team Leader.',
        'Collected real customer reviews using web scraping.',
        'Cleaned, prepared, and analyzed the dataset.',
        'Evaluated available AI models and selected the most suitable model.',
        'Developed the complete frontend and backend.',
        'Integrated the analytical system into an interactive demo.',
        'Teammates handled model training collaboratively.',
      ],
      AR: [
        'قيادة الفريق (Team Leader).',
        'جمع مراجعات العملاء الحقيقية باستخدام تقنيات Web Scraping.',
        'تنظيف وتجهيز وتحليل قاعدة البيانات (8,150 مراجعة).',
        'تقييم نماذج الذكاء الاصطناعي المتاحة واختيار النموذج الأنسب.',
        'تطوير واجهتي الـ Frontend والـ Backend بالكامل.',
        'دمج النظام التحليلي في منصة تفاعلية حية.',
        'تولى زملاء الفريق تدريب النموذج بشكل تعاوني.',
      ],
    },
    technologies: {
      EN: [
        'Python',
        'Web Scraping',
        'Data Analysis',
        'Arabic NLP',
        'ABSA',
        'XLM-T',
        'Frontend Development',
        'Backend Development',
      ],
      AR: [
        'Python',
        'Web Scraping',
        'تحليل البيانات',
        'Arabic NLP',
        'ABSA',
        'XLM-T',
        'Frontend Development',
        'Backend Development',
      ],
    },
    liveUrl: 'https://eldahan.lovable.app/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'عرض المشروع المباشر',
    },
    previewDomainLabel: 'eldahan.lovable.app',
  },

  {
    id: 'digital-student-identity',
    number: '02',
    rowCategory: 'data-ai',
    iconKey: 'student-identity',
    cardTitle: {
      EN: 'Digital Student Identity',
      AR: 'Digital Student Identity',
    },
    cardSubtitle: {
      EN: 'Early Warning System',
      AR: 'نظام الإنذار المبكر الأكاديمي',
    },
    fullTitle: {
      EN: 'Digital Student Identity & Early Warning System — Sadat Academy',
      AR: 'نظام الهوية الرقمية للطلاب والإنذار المبكر الأكاديمي — أكاديمية السادات',
    },
    categoryLabel: {
      EN: 'AI & Academic Analytics Project · Sadat Academy',
      AR: 'مشروع تحليلات أكاديمية وذكاء اصطناعي · أكاديمية السادات',
    },
    overview: {
      EN: 'An AI-assisted academic platform for digital student identity management, academic performance monitoring, and early detection of students at risk of academic difficulties.',
      AR: 'منصة أكاديمية ذكية لإدارة الهوية الرقمية للطلاب، ومتابعة أدائهم الدراسي، والكشف المبكر عن مؤشرات التعثر الأكاديمي.',
    },
    purpose: {
      EN: 'Uses student data and performance indicators to support timely alerts, proactive academic follow-up, and informed institutional intervention.',
      AR: 'توظيف بيانات الطلاب ومؤشرات الأداء الدراسي لتوفير تنبيهات مبكرة ودعم المتابعة الأكاديمية والتدخل في الوقت المناسب.',
    },
    contributions: {
      EN: [
        'Prepared and cleaned student data.',
        'Analyzed academic records.',
        'Helped define early-warning indicators.',
        'Developed dashboards and visualizations.',
        'Developed the frontend interface.',
      ],
      AR: [
        'تجهيز وتنظيف بيانات الطلاب.',
        'تحليل السجلات والبيانات الأكاديمية.',
        'المساهمة في تحديد مؤشرات الإنذار المبكر.',
        'تطوير لوحات المعلومات والتصورات البصرية التفاعلية.',
        'بناء وتطوير واجهة المستخدم الأمامية (Frontend).',
      ],
    },
    technologies: {
      EN: [
        'Data Analysis',
        'Data Cleaning',
        'Data Visualization',
        'AI Tools',
        'Frontend Development',
      ],
      AR: [
        'تحليل البيانات',
        'تنظيف البيانات',
        'تصوير البيانات',
        'أدوات الذكاء الاصطناعي',
        'تطوير الواجهات Frontend',
      ],
    },
    // No liveUrl invented per strict instructions
  },

  {
    id: 'techuni-intelligence-hub',
    number: '03',
    rowCategory: 'data-ai',
    iconKey: 'techuni',
    cardTitle: {
      EN: 'TechUni Intelligence Hub',
      AR: 'TechUni Intelligence Hub',
    },
    cardSubtitle: {
      EN: 'Predictive Analytics',
      AR: 'التحليلات التنبؤية',
    },
    fullTitle: {
      EN: 'TechUni Intelligence Hub',
      AR: 'منصة TechUni Intelligence Hub — الذكاء التعليمي والتحليلات التنبؤية',
    },
    categoryLabel: {
      EN: 'Data Analytics · Predictive Modeling · Business Intelligence',
      AR: 'تحليل البيانات · النمذجة التنبؤية · ذكاء الأعمال',
    },
    overview: {
      EN: 'A student enrollment analytics system that tracks student populations, analyzes trends, predicts future enrollment growth, and produces reports supporting better academic planning and resource decisions.',
      AR: 'منصة تحليلية ذكية لمتابعة أعداد الطلاب، ودراسة تغيرها عبر الوقت، واستخدام النماذج التنبؤية لتقدير معدلات نمو أعداد الطلاب مستقبلًا، وإنتاج تقارير تدعم التخطيط الأكاديمي واتخاذ القرارات المتعلقة بالموارد.',
    },
    purpose: {
      EN: 'Turns historical student enrollment data into clear analytical reports and growth projections that support institutional planning and resource allocation.',
      AR: 'تحويل بيانات أعداد الطلاب التاريخية إلى تقارير تحليلية وتوقعات نمو تساعد في التخطيط المؤسسي وتوزيع الموارد الأكاديمية.',
    },
    technologies: {
      EN: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence', 'Trend Analysis'],
      AR: ['تحليل البيانات', 'النمذجة التنبؤية', 'ذكاء الأعمال BI', 'تحليل الاتجاهات'],
    },
    liveUrl: 'https://meek-tanuki-9331e0.netlify.app/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'عرض المشروع المباشر',
    },
    imageAsset: '/src/assets/images/project_techuni_hub_1795006684119.jpg',
    previewDomainLabel: 'meek-tanuki-9331e0.netlify.app',
  },

  {
    id: 'bodyintel',
    number: '04',
    rowCategory: 'data-ai',
    iconKey: 'bodyintel',
    cardTitle: {
      EN: 'BodyIntel',
      AR: 'BodyIntel',
    },
    cardSubtitle: {
      EN: 'AI Body Performance',
      AR: 'تحليل الأداء البدني بالذكاء الاصطناعي',
    },
    fullTitle: {
      EN: 'BodyIntel — AI Body Performance',
      AR: 'BodyIntel — تحليل الأداء البدني بالذكاء الاصطناعي',
    },
    categoryLabel: {
      EN: 'Machine Learning · Classification · Personalized Recommendations',
      AR: 'تعلم الآلة · التصنيف · التوصيات الشخصية',
    },
    overview: {
      EN: 'An AI-powered platform that analyzes body measurements and physical performance metrics, classifies users, and provides personalized fitness recommendations.',
      AR: 'نظام يعتمد على الذكاء الاصطناعي لتحليل القياسات البدنية ومؤشرات الأداء، وتصنيف المستخدمين وفق خصائصهم، ثم تقديم توصيات لياقة بدنية تناسب كل حالة.',
    },
    purpose: {
      EN: 'Demonstrates how machine learning classification models can transform individual physical measurements into tailored, practical fitness guidance.',
      AR: 'توضيح كيفية الاستفادة من نماذج التصنيف في تعلم الآلة لتحويل القياسات الفردية إلى إرشادات لياقة بدنية عملية ومخصصة.',
    },
    technologies: {
      EN: ['Machine Learning', 'Classification', 'Personalized Recommendations', 'Data Analysis'],
      AR: ['تعلم الآلة ML', 'نماذج التصنيف', 'توصيات مخصصة', 'تحليل البيانات'],
    },
    liveUrl: 'https://magical-youtiao-23446d.netlify.app/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'عرض المشروع المباشر',
    },
    imageAsset: '/src/assets/images/project_bodyintel_1795006683047.jpg',
    previewDomainLabel: 'magical-youtiao-23446d.netlify.app',
  },

  {
    id: 'dashboard-visualization',
    number: '05',
    rowCategory: 'data-ai',
    iconKey: 'dashboard-viz',
    cardTitle: {
      EN: 'Dashboard Visualization',
      AR: 'Dashboard Visualization',
    },
    cardSubtitle: {
      EN: 'Sales & Business Intelligence',
      AR: 'تحليلات المبيعات وذكاء الأعمال',
    },
    fullTitle: {
      EN: 'Dashboard Visualization — Business Performance Analysis',
      AR: 'تصور لوحات المعلومات (Dashboard Visualization) — تحليل أداء الأعمال',
    },
    categoryLabel: {
      EN: 'Sales Analytics & Business Intelligence',
      AR: 'تحليلات المبيعات وذكاء الأعمال',
    },
    overview: {
      EN: 'An interactive business performance dashboard that transforms sales data into visual insights about revenue, profitability, customer segments, regional performance, and sales trends.',
      AR: 'لوحة معلومات تفاعلية لتحويل بيانات المبيعات إلى مؤشرات ورؤى بصرية واضحة حول الإيرادات، والربحية، وشرائح العملاء، والأداء الإقليمي، واتجاهات المبيعات.',
    },
    purpose: {
      EN: 'Provides structured KPIs and interactive filtering so stakeholders can explore sales and profitability performance across regions and customer segments.',
      AR: 'توفير مؤشرات أداء رئيسية (KPIs) وفلاتر تفاعلية تتيح استكشاف وتحليل أداء المبيعات والربحية عبر مختلف المناطق وشرائح العملاء.',
    },
    contributions: {
      EN: [
        'Built the interactive dashboard.',
        'Used Excel and Power Query for data preparation.',
        'Developed KPIs and visualizations.',
        'Supported analysis of sales and business performance.',
      ],
      AR: [
        'بناء وتطوير لوحة المعلومات التفاعلية.',
        'استخدام Excel و Power Query لتجهيز وتنظيف وتحويل البيانات.',
        'تصميم مؤشرات الأداء الرئيسية (KPIs) والتصورات البصرية.',
        'دعم تحليل المبيعات والربحية وأداء الأعمال.',
      ],
    },
    technologies: {
      EN: ['Excel', 'Power Query', 'Data Visualization', 'KPI Analysis', 'Business Intelligence'],
      AR: ['Excel', 'Power Query', 'تصوير البيانات', 'تحليل مؤشرات الأداء KPIs', 'ذكاء الأعمال BI'],
    },
    liveUrl:
      'https://www.linkedin.com/posts/fatma-abdel-fattah_dataanalytics-excel-powerquery-activity-7433202548833959936-EJzv',
    ctaLabel: {
      EN: 'View Dashboard',
      AR: 'عرض لوحة المعلومات',
    },
    isExternalShowcase: true,
    imageAsset: '/src/assets/images/project_excel_dashboard_1795006683917.jpg',
    previewDomainLabel: 'linkedin.com · Dashboard Showcase',
  },

  // ==========================================================================
  // ROW 02 — FRONTEND & DIGITAL EXPERIENCES (Moves LEFT TO RIGHT)
  // ==========================================================================
  {
    id: 'pold-menu',
    number: '06',
    rowCategory: 'frontend',
    iconKey: 'pold-menu',
    cardTitle: {
      EN: 'POLD Menu',
      AR: 'POLD Menu',
    },
    cardSubtitle: {
      EN: 'Interactive Digital Menu',
      AR: 'منيو رقمي تفاعلي',
    },
    fullTitle: {
      EN: 'POLD — Interactive Restaurant Digital Menu',
      AR: 'POLD — منيو رقمي تفاعلي للمطاعم',
    },
    categoryLabel: {
      EN: 'Restaurant Technology & Frontend Development',
      AR: 'تكنولوجيا المطاعم وتطوير الواجهات الأمامية',
    },
    overview: {
      EN: 'A real interactive digital menu developed for a burger restaurant, allowing customers to browse menu items through an intuitive, responsive website.',
      AR: 'منيو رقمي تفاعلي حقيقي لمطعم برجر، يتيح للعملاء استعراض أصناف المطعم من خلال واجهة إلكترونية منظمة وسهلة الاستخدام.',
    },
    purpose: {
      EN: 'Delivers a fast, mobile-friendly digital ordering and menu browsing experience tailored for restaurant guests.',
      AR: 'تقديم تجربة تصفح رقمية سريعة ومتجاوبة مع الهواتف المحمولة ومختلف الشاشات لعرض قائمة الطعام بوضوح.',
    },
    contributions: {
      EN: [
        'Developed the complete frontend interface, including menu presentation, responsive layouts, and user-friendly navigation.',
      ],
      AR: [
        'تطوير واجهة الـ Frontend بالكامل، بما يشمل عرض الأصناف، والتصميم المتجاوب، وسهولة التنقل عبر مختلف أحجام الشاشات.',
      ],
    },
    technologies: {
      EN: ['Frontend Development', 'Responsive Web Design', 'Interactive UI', 'Menu Architecture'],
      AR: ['Frontend Development', 'تصميم متجاوب', 'واجهة تفاعلية', 'تجربة المستخدم UI/UX'],
    },
    liveUrl: 'https://pold-iota.vercel.app/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'عرض المشروع المباشر',
    },
    previewDomainLabel: 'pold-iota.vercel.app',
  },

  {
    id: 'alpha-website',
    number: '07',
    rowCategory: 'frontend',
    iconKey: 'alpha-website',
    cardTitle: {
      EN: 'ALPHA Website',
      AR: 'ALPHA Website',
    },
    cardSubtitle: {
      EN: 'Technology Company Website',
      AR: 'موقع شركة تكنولوجيا',
    },
    fullTitle: {
      EN: 'ALPHA — Technology Company Website',
      AR: 'ALPHA — موقع شركة تكنولوجيا وحلول رقمية',
    },
    categoryLabel: {
      EN: 'Corporate Website & Frontend Development',
      AR: 'المواقع المؤسسية وتطوير الواجهات الأمامية',
    },
    overview: {
      EN: "A corporate website showcasing a technology company's services, digital solutions, projects, and communication channels.",
      AR: 'موقع احترافي لشركة متخصصة في التكنولوجيا والحلول الرقمية، يعرض خدمات الشركة ومنتجاتها ومشاريعها وقنوات التواصل معها.',
    },
    purpose: {
      EN: 'Organizes corporate service offerings, digital product portfolios, and client contact pathways into a cohesive web presence.',
      AR: 'تنظيم خدمات الشركة ومنتجاتها الرقمية وسابقة أعمالها في تجربة ويب احترافية متكاملة.',
    },
    contributions: {
      EN: [
        'Developed the responsive frontend and organized the user-facing website experience.',
      ],
      AR: [
        'تطوير الواجهة الأمامية المتجاوبة للموقع وتنظيم تجربة المستخدم وعرض المحتوى والخدمات.',
      ],
    },
    technologies: {
      EN: ['Frontend Development', 'Corporate Web UI', 'Responsive Layouts', 'Component Design'],
      AR: ['Frontend Development', 'واجهات مواقع الشركات', 'تصميم متجاوب', 'تنظيم المحتوى'],
    },
    liveUrl: 'https://alphaa-tech.com/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'زيارة الموقع المباشر',
    },
    previewDomainLabel: 'alphaa-tech.com',
  },

  {
    id: 'sanad-a-plus',
    number: '08',
    rowCategory: 'frontend',
    iconKey: 'sanad-plus',
    cardTitle: {
      EN: 'Sanad A+',
      AR: 'Sanad A+',
    },
    cardSubtitle: {
      EN: 'Healthcare Platform',
      AR: 'منصة رعاية صحية',
    },
    fullTitle: {
      EN: 'Sanad A+ — Healthcare Platform',
      AR: 'سند (Sanad A+) — منصة الرعاية الصحية الرقمية',
    },
    categoryLabel: {
      EN: 'Healthcare Technology & Frontend Development',
      AR: 'تكنولوجيا الرعاية الصحية وتطوير الواجهات الأمامية',
    },
    overview: {
      EN: 'A healthcare-oriented digital platform supporting care-related services and user-friendly access to relevant information.',
      AR: 'منصة رقمية في مجال الرعاية الصحية، تهدف إلى دعم الخدمات والحلول المرتبطة بالرعاية، بما يشمل احتياجات كبار السن والأشخاص المصابين بألزهايمر.',
    },
    purpose: {
      EN: "Supports families and caregivers with clear, accessible healthcare service navigation, including care solutions relevant to older adults and individuals living with Alzheimer's disease.",
      AR: 'دعم خدمات الرعاية الصحية وتوفير واجهة واضحة وسهلة الوصول للمعلومات والخدمات الموجهة لكبار السن والمصابين بألزهايمر.',
    },
    contributions: {
      EN: [
        'Built frontend interfaces focused on clear presentation, responsive layouts, and intuitive navigation.',
      ],
      AR: [
        'تطوير واجهات المستخدم الأمامية مع التركيز على وضوح عرض المعلومات، والتصميم المتجاوب، وسهولة التنقل.',
      ],
    },
    technologies: {
      EN: ['Frontend Development', 'Healthcare UI/UX', 'Accessible Design', 'Arabic RTL Support'],
      AR: ['Frontend Development', 'واجهات المنصات الصحية', 'سهولة الوصول', 'دعم اللغة العربية RTL'],
    },
    liveUrl: 'https://sanadaplus.com/ar',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'زيارة المنصة المباشرة',
    },
    previewDomainLabel: 'sanadaplus.com/ar',
  },

  {
    id: 'ziad-zakaria-portfolio',
    number: '09',
    rowCategory: 'frontend',
    iconKey: 'ziad-portfolio',
    cardTitle: {
      EN: 'Ziad Zakaria Portfolio',
      AR: 'Ziad Zakaria Portfolio',
    },
    cardSubtitle: {
      EN: 'Professional Portfolio',
      AR: 'موقع بورتفوليو احترافي',
    },
    fullTitle: {
      EN: 'Ziad Zakaria — Professional Portfolio',
      AR: 'زياد زكريا (Ziad Zakaria) — موقع بورتفوليو احترافي',
    },
    categoryLabel: {
      EN: 'Personal Branding & Web Development',
      AR: 'الهوية المهنية وتطوير الويب',
    },
    overview: {
      EN: "A professional portfolio website presenting the owner's profile, experience, and professional work.",
      AR: 'موقع بورتفوليو احترافي لعرض الهوية المهنية والخبرات والأعمال بطريقة منظمة تعكس شخصية صاحب الموقع.',
    },
    purpose: {
      EN: 'Establishes a cohesive digital identity with structured sections for professional achievements, biography, and work showcase.',
      AR: 'بناء هوية رقمية متناسقة تعرض السيرة المهنية والخبرات والأعمال بتسلسل بصري واضح.',
    },
    contributions: {
      EN: [
        'Developed the frontend, including layout, responsive presentation, and visual organization.',
      ],
      AR: [
        'تطوير الـ Frontend بالكامل، بما يشمل تخطيط الصفحات، والتصميم المتجاوب، والتنظيم البصري للمحتوى.',
      ],
    },
    technologies: {
      EN: ['Frontend Development', 'Personal Branding UI', 'Visual Hierarchy', 'Responsive Layout'],
      AR: ['Frontend Development', 'واجهات الهوية المهنية', 'التسلسل البصري', 'تصميم متجاوب'],
    },
    liveUrl: 'https://mr-ziad-zakaria.lovable.app/',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'زيارة الموقع المباشر',
    },
    previewDomainLabel: 'mr-ziad-zakaria.lovable.app',
  },

  {
    id: 'lms-platform',
    number: '10',
    rowCategory: 'frontend',
    iconKey: 'lms-platform',
    cardTitle: {
      EN: 'LMS Platform',
      AR: 'LMS Platform',
    },
    cardSubtitle: {
      EN: 'Learning Management System',
      AR: 'منصة إدارة التعلم',
    },
    fullTitle: {
      EN: 'LMS Platform — Learning Management System',
      AR: 'منصة إدارة التعلم الإلكتروني (Learning Management System)',
    },
    categoryLabel: {
      EN: 'Educational Technology & Frontend Development',
      AR: 'تكنولوجيا التعليم وتطوير الواجهات الأمامية',
    },
    overview: {
      EN: 'A digital learning platform with structured interfaces for accessing educational content and learning-related workflows.',
      AR: 'منصة إلكترونية لإدارة التعلم وتنظيم المحتوى التعليمي، وتوفير واجهة تساعد المستخدمين على الوصول إلى الأنشطة والمحتويات المرتبطة بالدورات التعليمية.',
    },
    purpose: {
      EN: 'Streamlines digital course delivery, learner authentication, and structured access to educational modules.',
      AR: 'تنظيم تجربة التعلم الرقمي وتسهيل وصول المتعلمين إلى الدورات والمحتوى التعليمي عبر واجهة منظمة.',
    },
    contributions: {
      EN: [
        'Developed frontend interface components, responsive layouts, and navigation experiences.',
      ],
      AR: [
        'تطوير مكونات الواجهة الأمامية للمنصة، والتصميم المتجاوب، وتجربة التنقل عبر الصفحات.',
      ],
    },
    technologies: {
      EN: ['Frontend Development', 'EdTech & LMS UI', 'Component Architecture', 'Responsive Web'],
      AR: ['Frontend Development', 'واجهات منصات التعليم LMS', 'مكونات الواجهة', 'تصميم متجاوب'],
    },
    liveUrl: 'https://lms-course.alphaa-tech.com/login',
    ctaLabel: {
      EN: 'View Live Project',
      AR: 'عرض المنصة المباشرة',
    },
    previewDomainLabel: 'lms-course.alphaa-tech.com',
  },
];

export const DATA_AI_PROJECTS = CANONICAL_PROJECTS.filter((p) => p.rowCategory === 'data-ai');
export const FRONTEND_PROJECTS = CANONICAL_PROJECTS.filter((p) => p.rowCategory === 'frontend');
