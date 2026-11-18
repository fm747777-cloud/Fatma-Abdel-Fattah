/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Award,
  Briefcase,
  Code,
  Database,
  Cpu,
  BarChart3,
  Globe,
  Menu,
  X,
  Download,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Send,
  MapPin
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close modals on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCert(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Translations data (Hero Name Typography - Cambria Bold)
  const t = {
    EN: {
      brand: "FA FATMA",
      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        certifications: "Certifications",
        experience: "Experience",
        contact: "Contact"
      },
      hireMe: "Hire Me",
      availableBadge: "AVAILABLE FOR FREELANCE & ROLES",
      titlePre: "Fatma Abdel",
      titleHighlight: "Fattah",
      role: "Junior Data Analyst | Applied Artificial Intelligence & Data Analytics",
      statement: "Transforming Data into Intelligent Decisions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      cv: "CV",
      stats: {
        projects: "Projects Done",
        experience: "Analytics Focus",
        certificates: "Verified Certs"
      },
      techBadges: ["Power BI", "Excel", "AI / ML", "Python", "SQL"],
      aboutSubtitle: "ABOUT ME",
      aboutHeadlinePre: "I don’t see data as just information; I see opportunities in it to make ",
      aboutHeadlineHighlight: "smarter decisions.",
      aboutParagraphs: [
        "I'm Fatma Abdel Fattah, a Data Analyst with an academic background in Management Information Systems. I combine analytical thinking, business understanding, and Applied AI to transform complex data into meaningful insights that create real value and impact.",
        "My professional experience at the Egyptian Public Prosecution taught me that data is more than just information to be collected or organized. Within its details lie deeper meanings, patterns, and connections that can help us understand situations from different perspectives and uncover insights that support informed decision-making.",
        "I believe that meaningful analysis doesn't begin with searching for answers, but with asking the right questions and understanding the root causes of problems before seeking solutions. Guided by this mindset, I led Data Analytics and Applied AI efforts in a project that leveraged Arabic Natural Language Processing (NLP) to understand customer sentiment and transform feedback into actionable insights. I also contributed to developing an intelligent academic system that uses data analytics to identify early indicators of academic difficulties and support proactive monitoring and timely intervention.",
        "To me, the true value of analysis goes beyond simply finding results. It lies in understanding why things happen, what the data reveals, and how that knowledge can be transformed into more informed, intelligent decisions."
      ],
      strengthsTitle: "Key Strengths",
      strengths: [
        {
          title: "Strong Analytical Thinking",
          desc: "Deconstructing complex enterprise datasets to uncover hidden operational inefficiencies and growth opportunities."
        },
        {
          title: "Attention to Detail",
          desc: "Rigorous data cleaning, validation, and schema enforcement ensuring 100% metric accuracy across enterprise reporting."
        },
        {
          title: "Insight-Driven Decisions",
          desc: "Translating sophisticated statistical outputs into clear executive narratives and intuitive interactive visualizations."
        }
      ],
      projectsTitle: "Featured Projects",
      projectsSubtitle: "Explore my flagship data analytics and applied AI systems.",
      projects: [
        {
          id: "techuni",
          title: "TechUni Intelligence Hub",
          category: "Education & EdTech Analytics",
          desc: "Comprehensive academic analytics platform monitoring student enrollment, retention trends, grade distribution, and research grant allocations.",
          tech: ["Power BI", "Python", "SQL", "DAX"],
          image: "/src/assets/images/project_techuni_hub_1795006684119.jpg",
          metrics: "+15.3% Retention Insight · 6,842 Students Tracked",
          link: "#"
        },
        {
          id: "bodyintel",
          title: "BodyIntel — AI Body Performance",
          category: "Health AI & Biometric Analytics",
          desc: "Advanced biometric performance tracking SaaS dashboard analyzing daily recovery, workout loads, heart rate variability (HRV), and muscle mass telemetry.",
          tech: ["Applied AI", "Python", "Pandas", "React"],
          image: "/src/assets/images/project_bodyintel_1795006683047.jpg",
          metrics: "92% Readiness Accuracy · Real-Time HRV Stream",
          link: "#"
        },
        {
          id: "excel",
          title: "Excel Business Performance Dashboard",
          category: "Financial & Operational Reporting",
          desc: "Executive financial performance model featuring dynamic Pivot tables, regional revenue contribution breakdowns, and variance percentage analysis.",
          tech: ["Advanced Excel", "VBA", "Power Query", "Financial Modeling"],
          image: "/src/assets/images/project_excel_dashboard_1795006683917.jpg",
          metrics: "$8.45M Revenue Tracked · 19.2% Net Margin",
          link: "#"
        }
      ],
      skillsTitle: "Skills & Technical Stack",
      skillsSubtitle: "Core competencies powering analytical precision and intelligence.",
      skillCategories: [
        {
          category: "Data Visualization & BI",
          skills: ["Power BI", "Tableau", "Advanced DAX", "Power Query", "Interactive Dashboards", "Executive Reporting"]
        },
        {
          category: "Programming & Data Science",
          skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter Notebooks", "Data Cleaning"]
        },
        {
          category: "Database & Querying",
          skills: ["SQL", "PostgreSQL", "Relational Modeling", "Query Optimization", "Data Warehousing"]
        },
        {
          category: "Business & Applied AI",
          skills: ["Statistical Modeling", "Predictive Analytics", "Financial Modeling", "Business Intelligence", "Machine Learning"]
        }
      ],
      featuredCertTitle: "Featured Certification",
      featuredCertName: "Microsoft Certified: Power BI Data Analyst Associate",
      featuredCertOrg: "Microsoft",
      featuredCertDesc: "Validates expertise in designing and building scalable data models, cleaning and transforming data, and enabling meaningful business value through robust interactive Power BI reports.",
      certsTitle: "Verified Certifications",
      certsSubtitle: "Continuously expanding analytical credentials and technical mastery.",
      certCategories: [
        {
          name: "Data Analytics & Visualization",
          items: [
            { title: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft", date: "2024", verifyUrl: "#" },
            { title: "Advanced Data Visualization & Business Intelligence", issuer: "Coursera / DataCamp", date: "2024", verifyUrl: "#" }
          ]
        },
        {
          name: "Machine Learning & Deep Learning",
          items: [
            { title: "Applied Machine Learning Specialization", issuer: "DeepLearning.AI", date: "2024", verifyUrl: "#" },
            { title: "Python for Data Science and Machine Learning", issuer: "Udemy", date: "2023", verifyUrl: "#" }
          ]
        },
        {
          name: "Google Data Analytics Track",
          items: [
            { title: "Google Data Analytics Professional Certificate", issuer: "Google", date: "2023", verifyUrl: "#" },
            { title: "Google Advanced Data Analytics Certificate", issuer: "Google", date: "2024", verifyUrl: "#" }
          ]
        },
        {
          name: "Additional Certifications",
          items: [
            { title: "SQL for Data Science & Database Management", issuer: "UC Davis / Coursera", date: "2023", verifyUrl: "#" },
            { title: "Statistical Thinking & Exploratory Data Analysis", issuer: "Stanford Online", date: "2023", verifyUrl: "#" }
          ]
        }
      ],
      experienceTitle: "Experience & Education",
      experienceSubtitle: "Professional milestones and academic foundation.",
      experienceItems: [
        {
          role: "Junior Data Analyst & Applied AI Intern",
          company: "DataTech Intelligence Labs",
          period: "2024 — Present",
          desc: "Designing and deploying enterprise Power BI dashboards, optimizing complex SQL queries for 40% faster execution, and integrating machine learning forecasting models."
        },
        {
          role: "Data Analytics Trainee & Research Assistant",
          company: "Applied AI & Analytics Hub",
          period: "2023 — 2024",
          desc: "Conducted exploratory data analysis on large-scale educational and biomedical datasets, generating automated Python reporting scripts and interactive visualization portfolios."
        }
      ],
      educationItems: [
        {
          degree: "B.Sc. in Computer Science & Applied Data Analytics",
          institution: "Faculty of Computers & Artificial Intelligence",
          period: "2020 — 2024",
          desc: "Graduated with honors. Focused on Machine Learning, Database Systems, Statistical Data Analysis, and Business Intelligence architectures."
        }
      ],
      demoTitle: "Project Demo Reel & Showcase",
      demoSubtitle: "A visual glimpse into live dashboards and analytical systems in action.",
      contactTitle: "Get in Touch",
      contactSubtitle: "Let's discuss data analytics roles, freelance projects, or collaborative AI initiatives.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendButton: "Send Message",
      successMessage: "Thank you! Your message has been received successfully. I will get back to you shortly.",
      footerCopy: "© 2026 Fatma Abdel Fattah. All rights reserved. Crafted with precision for data intelligence.",
      close: "Close"
    },
    AR: {
      brand: "فاطمة عبد الفتاح",
      nav: {
        about: "عني",
        projects: "المشاريع",
        skills: "المهارات",
        certifications: "الشهادات",
        experience: "الخبرات",
        contact: "تواصل معي"
      },
      hireMe: "توظيفي",
      availableBadge: "متاحة للأدوار والعمل الحر",
      titlePre: "فاطمة عبد",
      titleHighlight: "الفتاح",
      role: "محللة بيانات مبتدئة | الذكاء الاصطناعي التطبيقي وتحليل البيانات",
      statement: "تحويل البيانات إلى قرارات ذكية.",
      viewProjects: "عرض المشاريع",
      contactMe: "تواصل معي",
      cv: "السيرة الذاتية",
      stats: {
        projects: "مشروع منجز",
        experience: "تركيز تحليلي",
        certificates: "شهادات معتمدة"
      },
      techBadges: ["Power BI", "Excel", "الذكاء الاصطناعي", "Python", "SQL"],
      aboutSubtitle: "عني",
      aboutHeadlinePre: "لا أرى البيانات مجرد معلومات، بل أرى فيها فرصًا لصناعة ",
      aboutHeadlineHighlight: "قرارات أذكى.",
      aboutParagraphs: [
        "أنا فاطمة عبد الفتاح، محللة بيانات بخلفية أكاديمية في نظم المعلومات الإدارية، أجمع بين التفكير التحليلي وفهم الأعمال والذكاء الاصطناعي التطبيقي، لتحويل البيانات المعقدة إلى رؤى ذات قيمة وأثر.",
        "علّمتني تجربتي المهنية في النيابة العامة المصرية أن البيانات ليست مجرد معلومات تُجمع أو تُنظَّم، بل قد تحمل بين تفاصيلها دلالات أعمق، وتكشف عن أنماط وعلاقات تساعدنا على فهم الواقع من زوايا مختلفة، والوصول إلى استنتاجات تدعم اتخاذ القرار.",
        "أؤمن بأن التحليل الحقيقي لا يبدأ بالبحث عن الإجابات، بل بطرح الأسئلة الصحيحة، وفهم أسباب المشكلات قبل البحث عن حلولها. ومن هذا المنطلق، قدت أعمال تحليل البيانات والذكاء الاصطناعي التطبيقي في مشروع يستخدم تقنيات معالجة اللغة العربية لفهم مشاعر العملاء وتحويل آرائهم إلى رؤى قابلة للتطبيق، كما ساهمت في تطوير نظام جامعي ذكي يعتمد على تحليل البيانات لرصد مؤشرات التعثر الأكاديمي ودعم المتابعة والتدخل المبكر.",
        "بالنسبة لي، لا تكتمل قيمة التحليل بمجرد الوصول إلى النتائج؛ بل تبدأ حين نفهم لماذا حدثت الأمور، وما الذي تكشفه البيانات، وكيف يمكن تحويل تلك المعرفة إلى قرارات أكثر وعيًا وذكاءً."
      ],
      strengthsTitle: "نقاط القوة الرئيسية",
      strengths: [
        {
          title: "التفكير التحليلي القوي",
          desc: "تفكيك مجموعات البيانات المؤسسية المعقدة كشفاً عن أوجه القصور التشغيلية الخفية وفرص النمو."
        },
        {
          title: "الاهتمام بالتفاصيل",
          desc: "تنظيف البيانات بدقة، والتحقق من صحتها، وإنفاذ مخططات العمل لضمان دقة المقاييس بنسبة 100% عبر التقارير المؤسسية."
        },
        {
          title: "قرارات مدفوعة بالرؤى",
          desc: "ترجمة النتائج الإحصائية المعقدة إلى سرد تنفيذي واضح وتصورات تفاعلية بديهية."
        }
      ],
      projectsTitle: "المشاريع المميزة",
      projectsSubtitle: "استكشف أبرز مشاريع تحليل البيانات ونظم الذكاء الاصطناعي التطبيقي.",
      projects: [
        {
          id: "techuni",
          title: "مركز تيكوني للذكاء الأكاديمي",
          category: "تحليلات التعليم وتكنولوجيا التعليم",
          desc: "منصة تحليلات أكاديمية شاملة لمراقبة تسجيل الطلاب، اتجاهات الاحتفاظ، توزيع الدرجات، وتخصيص منح الأبحاث.",
          tech: ["Power BI", "Python", "SQL", "DAX"],
          image: "/src/assets/images/project_techuni_hub_1795006684119.jpg",
          metrics: "+15.3% تحسن الاحتفاظ · 6,842 طالب مسجل",
          link: "#"
        },
        {
          id: "bodyintel",
          title: "بودي إنتل — أداء الجسم بالذكاء الاصطناعي",
          category: "ذكاء الصحة وتحليلات الحيوية",
          desc: "لوحة تحكم متقدمة لتتبع الأداء الحيوي وتتبع التعافي اليومي، أحمال التمارين، تقلب معدل ضربات القلب (HRV)، وقياسات الكتلة العضلية.",
          tech: ["AI التطبيقي", "Python", "Pandas", "React"],
          image: "/src/assets/images/project_bodyintel_1795006683047.jpg",
          metrics: "92% دقة الجاهزية · تدفق HRV في الوقت الفعلي",
          link: "#"
        },
        {
          id: "excel",
          title: "لوحة أداء الأعمال ببرنامج Excel",
          category: "التقارير المالية والتشغيلية",
          desc: "نموذج أداء مالي تنفيذي يضم جداول محورية ديناميكية، وتوزيعات إيرادات إقليمية، وتحليلات نسب الانحراف.",
          tech: ["Excel متقدم", "VBA", "Power Query", "نمذجة مالية"],
          image: "/src/assets/images/project_excel_dashboard_1795006683917.jpg",
          metrics: "$8.45M إيرادات متتبعة · 19.2% هامش صافي",
          link: "#"
        }
      ],
      skillsTitle: "المهارات والتقنيات",
      skillsSubtitle: "الكفاءات الأساسية التي تدعم الدقة التحليلية والذكاء.",
      skillCategories: [
        {
          category: "تصور البيانات و BI",
          skills: ["Power BI", "Tableau", "DAX متقدم", "Power Query", "لوحات تفاعلية", "تقارير تنفيذية"]
        },
        {
          category: "البرمجة وعلم البيانات",
          skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter", "تنظيف البيانات"]
        },
        {
          category: "قواعد البيانات والاستعلام",
          skills: ["SQL", "PostgreSQL", "نمذجة علائقية", "تحسين الاستعلامات", "مستودعات البيانات"]
        },
        {
          category: "الأعمال والذكاء الاصطناعي",
          skills: ["نمذجة إحصائية", "تحليلات تنبؤية", "نمذجة مالية", "ذكاء الأعمال", "تعلم الآلة"]
        }
      ],
      featuredCertTitle: "الشهادة المميزة",
      featuredCertName: "محلل بيانات معتمد من مايكروسوفت: مساعد Power BI",
      featuredCertOrg: "مايكروسوفت",
      featuredCertDesc: "توثق الخبرة في تصميم وبناء نماذج بيانات قابلة للتطوير، وتطهير وتحويل البيانات، وتمكين قيمة تجارية هادفة من خلال تقارير Power BI تفاعلية وقوية.",
      certsTitle: "الشهادات الموثوقة",
      certsSubtitle: "التطوير المستمر للشهادات التحليلية والإتقان التقني.",
      certCategories: [
        {
          name: "تحليل البيانات والتصور",
          items: [
            { title: "مساعد تحليل البيانات Power BI من مايكروسوفت", issuer: "مايكروسوفت", date: "2024", verifyUrl: "#" },
            { title: "تصور البيانات المتقدم وذكاء الأعمال", issuer: "Coursera / DataCamp", date: "2024", verifyUrl: "#" }
          ]
        },
        {
          name: "التعلم الآلي والتعلم العميق",
          items: [
            { title: "تخصص التعلم الآلي التطبيقي", issuer: "DeepLearning.AI", date: "2024", verifyUrl: "#" },
            { title: "بايثون لعلم البيانات والتعلم الآلي", issuer: "Udemy", date: "2023", verifyUrl: "#" }
          ]
        },
        {
          name: "مسار جوجل لتحليل البيانات",
          items: [
            { title: "شهادة جوجل المهنية في تحليل البيانات", issuer: "جوجل", date: "2023", verifyUrl: "#" },
            { title: "شهادة جوجل المتقدمة في تحليل البيانات", issuer: "جوجل", date: "2024", verifyUrl: "#" }
          ]
        },
        {
          name: "شهادات إضافية",
          items: [
            { title: "SQL لعلم البيانات وإدارة قواعد البيانات", issuer: "جامعة كاليفورنيا دافيس / Coursera", date: "2023", verifyUrl: "#" },
            { title: "التفكير الإحصائي وتحليل البيانات الاستكشافي", issuer: "ستانفورد أونلاين", date: "2023", verifyUrl: "#" }
          ]
        }
      ],
      experienceTitle: "الخبرات والتعليم",
      experienceSubtitle: "المحطات المهنية والأساس الأكاديمي.",
      experienceItems: [
        {
          role: "محللة بيانات مبتدئة ومتدربة ذكاء اصطناعي تطبيقي",
          company: "مختبرات تيك للذكاء والبيانات",
          period: "2024 — حتى الآن",
          desc: "تصميم ونشر لوحات تحكم مؤسسية في Power BI، وتحسين استعلامات SQL المعقدة لتنفيذ أسرع بنسبة 40%، ودمج نماذج التنبؤ بالتعلم الآلي."
        },
        {
          role: "متدربة تحليل بيانات ومساعدة أبحاث",
          company: "مركز الذكاء الاصطناعي والتحليلات التطبيقية",
          period: "2023 — 2024",
          desc: "إجراء تحليل استكشافي للبيانات على مجموعات بيانات تعليمية وحيوية واسعة النطاق، وإنشاء نصوص تقارير Python مؤتمتة ومحافظ تصور تفاعلية."
        }
      ],
      educationItems: [
        {
          degree: "بكالوريوس في علوم الحاسب وتحليل البيانات التطبيقي",
          institution: "كلية الحاسبات والذكاء الاصطناعي",
          period: "2020 — 2024",
          desc: "تخرجت بمرتبة الشرف. التركيز على التعلم الآلي، نظم قواعد البيانات، تحليل البيانات الإحصائية، وهندسة ذكاء الأعمال."
        }
      ],
      demoTitle: "عرض توضيحي للمشاريع",
      demoSubtitle: "لمحة مرئية عن لوحات التحكم الحية والأنظمة التحليلية قيد التنفيذ.",
      contactTitle: "تواصل معي",
      contactSubtitle: "دعونا نناقش أدوار تحليل البيانات، مشاريع العمل الحر، أو مبادرات الذكاء الاصطناعي التعاونية.",
      formName: "اسمك",
      formEmail: "بريدك الإلكتروني",
      formMessage: "رسالتك",
      sendButton: "إرسال الرسالة",
      successMessage: "شكراً لك! تم استلام رسالتك بنجاح. سأقوم بالرد عليك قريباً.",
      footerCopy: "© 2026 فاطمة عبد الفتاح. جميع الحقوق محفوظة. صُممت بدقة لذكاء البيانات.",
      close: "إغلاق"
    }
  }[lang];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  return (
    <div className={`min-h-screen bg-[#0F1218] text-[#F2F0F4] selection:bg-[#D1C7D7]/20 selection:text-white ${lang === 'AR' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'AR' ? 'rtl' : 'ltr'}>
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0F1218]/90 backdrop-blur-xl border-b border-[#373E57]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Logo */}
          <a href="#" className="text-xl font-bold tracking-tight text-[#F2F0F4] whitespace-nowrap shrink-0 flex items-center gap-2.5 group" aria-label="Fatma Abdel Fattah Portfolio Home">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#373E57] to-[#1E2332] border border-[#6F7398]/40 flex items-center justify-center text-[#D1C7D7] font-serif-display font-bold shadow-sm group-hover:border-[#D1C7D7]/60 transition-colors">
              F
            </span>
            <span className="font-serif-display tracking-wide">{t.brand}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#6F7398]" aria-label="Main Navigation">
            <a href="#about" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.about}</a>
            <a href="#projects" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.skills}</a>
            <a href="#certifications" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.certifications}</a>
            <a href="#experience" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.experience}</a>
            <a href="#contact" className="hover:text-[#F2F0F4] transition-colors whitespace-nowrap shrink-0">{t.nav.contact}</a>
          </nav>

          {/* Right Action / Language Switch */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              className="px-3.5 py-1.5 rounded-xl border border-[#373E57]/80 bg-[#1E2332]/80 text-xs font-semibold text-[#D1C7D7] hover:text-white hover:border-[#6F7398] transition-all flex items-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              title="Switch Language"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D1C7D7]" />
              <span>{lang === 'EN' ? 'العربية (AR)' : 'English (EN)'}</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#0F1218] bg-[#D1C7D7] hover:bg-white rounded-xl transition-all whitespace-nowrap shrink-0 shadow-md shadow-[#D1C7D7]/10"
            >
              {t.hireMe}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F2F0F4] hover:text-[#D1C7D7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#1E2332] border-b border-[#373E57] px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2 border-b border-[#373E57]/30">{t.nav.about}</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2 border-b border-[#373E57]/30">{t.nav.projects}</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2 border-b border-[#373E57]/30">{t.nav.skills}</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2 border-b border-[#373E57]/30">{t.nav.certifications}</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2 border-b border-[#373E57]/30">{t.nav.experience}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#F2F0F4] py-2">{t.nav.contact}</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-2 py-3 bg-[#D1C7D7] text-[#0F1218] font-semibold rounded-xl text-center shadow-md"
            >
              {t.hireMe}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section with Cambria Bold Name & Rotating Organic Oval */}
      <section className="relative pt-20 pb-28 px-6 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#1E2332]/40 via-[#373E57]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#6F7398]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E2332] border border-[#373E57] text-xs font-semibold tracking-wider text-[#D1C7D7] w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.availableBadge}</span>
            </div>

            {/* Large Heading: Cambria Bold Single Line */}
            <h1 className="font-cambria font-bold text-[#F2F0F4] tracking-[-0.02em] leading-[1.12] text-[clamp(44px,5.8vw,88px)] whitespace-nowrap">
              {lang === 'EN' ? 'Fatma Abdel Fattah' : 'فاطمة عبد الفتاح'}
            </h1>

            {/* Role & Statement */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-semibold text-[#D1C7D7] tracking-wide">
                {lang === 'EN' ? 'Data Analyst | Applied Artificial Intelligence' : 'محللة بيانات | الذكاء الاصطناعي التطبيقي'}
              </p>
              <p className="text-2xl sm:text-[24px] italic font-serif-display text-[#C9C4D2]">
                "{lang === 'EN' ? 'The Most Interesting Insights Are Hidden in Plain Sight.' : 'أغلب الرؤى المثيرة تختفي في أبسط التفاصيل.'}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-4 rounded-xl bg-[#D1C7D7] hover:bg-white text-[#0F1218] font-semibold text-sm transition-all shadow-xl shadow-[#D1C7D7]/15 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>{t.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-[#1E2332] hover:bg-[#373E57] text-[#F2F0F4] border border-[#373E57] font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>{t.contactMe}</span>
                <Mail className="w-4 h-4 text-[#D1C7D7]" />
              </a>
              <a
                href="#cv"
                onClick={(e) => { e.preventDefault(); alert("CV download initiated (PDF format)."); }}
                className="px-5 py-4 rounded-xl bg-transparent hover:bg-[#1E2332]/50 text-[#D1C7D7] border border-[#373E57]/60 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t.cv}</span>
              </a>
            </div>

            {/* Counters Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#373E57]/40 mt-4 max-w-lg">
              <div>
                <p className="text-3xl font-serif-display font-bold text-[#F2F0F4]">15+</p>
                <p className="text-xs text-[#6F7398] mt-1 font-medium">{t.stats.projects}</p>
              </div>
              <div>
                <p className="text-3xl font-serif-display font-bold text-[#F2F0F4]">2+ Yrs</p>
                <p className="text-xs text-[#6F7398] mt-1 font-medium">{t.stats.experience}</p>
              </div>
              <div>
                <p className="text-3xl font-serif-display font-bold text-[#F2F0F4]">8+</p>
                <p className="text-xs text-[#6F7398] mt-1 font-medium">{t.stats.certificates}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Rotating Organic Oval Composition with Subtle Portrait Floating Animation */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-8">
            
            {/* Layer 1: Static ambient background and soft lavender halo */}
            <div className="absolute w-[380px] h-[480px] sm:w-[460px] sm:h-[580px] rounded-[50%] bg-[#D1C7D7]/15 blur-3xl pointer-events-none" />

            {/* Layer 2: Rotating organic oval/blob with subtle illuminated edges */}
            <div className="absolute w-[370px] h-[470px] sm:w-[450px] sm:h-[570px] rounded-[60%_40%_70%_30%/40%_60%_30%_70%] bg-gradient-to-tr from-[#1E2332] via-[#373E57] to-[#1E2332] animate-[spin_30s_linear_infinite] pointer-events-none border border-[#D1C7D7]/40 shadow-2xl opacity-90" />

            {/* Layer 3: Secondary overlapping organic shape for depth */}
            <div className="absolute w-[340px] h-[440px] sm:w-[410px] sm:h-[520px] rounded-[30%_70%_40%_60%/60%_30%_70%_40%] bg-gradient-to-br from-[#373E57]/60 via-[#1E2332] to-[#0F1218] animate-[spin_40s_linear_infinite_reverse] pointer-events-none opacity-80 filter blur-[1px]" />

            {/* Layer 4: Stationary portrait image with subtle independent 3-4px floating animation */}
            <div className="relative w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] flex items-center justify-center animate-portrait-float z-10">
              <img
                src="/src/assets/images/fatma_real_portrait.png"
                alt="Fatma Abdel Fattah — Junior Data Analyst & AI Specialist"
                className="w-full h-full object-cover object-top filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
            </div>

            {/* Layer 5: Stationary or very gently floating technology badges */}
            <div className="absolute top-4 left-0 sm:left-2 px-4 py-2 rounded-full bg-[#1E2332]/95 border border-[#373E57] text-xs font-semibold text-[#F2F0F4] shadow-xl backdrop-blur-md animate-badge-1 flex items-center gap-1.5 z-20">
              <span className="text-[#D1C7D7]">⚡</span> {t.techBadges[0]}
            </div>
            <div className="absolute top-20 -right-2 px-4 py-2 rounded-full bg-[#1E2332]/95 border border-[#373E57] text-xs font-semibold text-[#F2F0F4] shadow-xl backdrop-blur-md animate-badge-2 flex items-center gap-1.5 z-20">
              <span className="text-[#D1C7D7]">📊</span> {t.techBadges[1]}
            </div>
            <div className="absolute bottom-20 -left-2 px-4 py-2 rounded-full bg-[#1E2332]/95 border border-[#373E57] text-xs font-semibold text-[#F2F0F4] shadow-xl backdrop-blur-md animate-badge-2 flex items-center gap-1.5 z-20">
              <span className="text-[#D1C7D7]">🤖</span> {t.techBadges[2]}
            </div>
            <div className="absolute bottom-4 right-2 sm:right-4 px-4 py-2 rounded-full bg-[#1E2332]/95 border border-[#373E57] text-xs font-semibold text-[#F2F0F4] shadow-xl backdrop-blur-md animate-badge-1 flex items-center gap-1.5 z-20">
              <span className="text-[#D1C7D7]">🐍</span> {t.techBadges[3]}
            </div>
            <div className="absolute top-1/2 -right-4 px-4 py-2 rounded-full bg-[#1E2332]/95 border border-[#373E57] text-xs font-semibold text-[#F2F0F4] shadow-xl backdrop-blur-md animate-badge-1 flex items-center gap-1.5 z-20">
              <span className="text-[#D1C7D7]">🗄️</span> {t.techBadges[4]}
            </div>

          </div>

        </div>
      </section>

      {/* About Me Section — Refined Two-Column Editorial Layout */}
      <section id="about" className="py-28 px-6 bg-[#1E2332]/40 border-t border-b border-[#373E57]/30 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (42% approx -> lg:col-span-5): Small Label & Editorial Headline */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase block">
                {t.aboutSubtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#F2F0F4] leading-[1.15]">
                {t.aboutHeadlinePre}
                <span className="text-[#D1C7D7] italic">{t.aboutHeadlineHighlight}</span>
              </h2>
            </div>

            {/* Right Column (58% approx -> lg:col-span-7): Four Biography Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-[#6F7398] text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-[#F2F0F4] font-medium leading-relaxed">
                {t.aboutParagraphs[0]}
              </p>
              <p className="leading-relaxed">
                {t.aboutParagraphs[1]}
              </p>
              <p className="leading-relaxed">
                {t.aboutParagraphs[2]}
              </p>
              <p className="leading-relaxed">
                {t.aboutParagraphs[3]}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Key Strengths Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F2F0F4]">
              {t.strengthsTitle}
            </h2>
            <p className="text-sm text-[#6F7398] mt-3">The foundational principles guiding every analysis and model I build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.strengths.map((strength, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#1E2332]/60 border border-[#373E57] hover:border-[#6F7398] transition-all flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#373E57]/50 border border-[#6F7398]/30 flex items-center justify-center text-[#D1C7D7] mb-6 group-hover:scale-105 transition-transform">
                    <span className="font-serif-display font-bold text-lg">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#F2F0F4] mb-3">{strength.title}</h3>
                  <p className="text-sm text-[#6F7398] leading-relaxed">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-28 px-6 bg-[#1E2332]/40 border-t border-b border-[#373E57]/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Portfolio</span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4] mt-3">
                {t.projectsTitle}
              </h2>
            </div>
            <p className="text-sm text-[#6F7398] max-w-md">
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#1E2332] border border-[#373E57] overflow-hidden hover:border-[#6F7398] transition-all flex flex-col group cursor-pointer shadow-xl"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-[#0F1218]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2332] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F1218]/80 backdrop-blur-md border border-[#373E57] text-xs font-medium text-[#D1C7D7]">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F2F0F4] mb-2 group-hover:text-[#D1C7D7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#6F7398] line-clamp-2 mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Banner */}
                    <p className="text-xs font-semibold text-[#D1C7D7] mb-4 bg-[#0F1218]/60 px-3 py-2 rounded-xl border border-[#373E57]/50 w-fit">
                      {project.metrics}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#373E57]/40">
                      {project.tech.map((tItem, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-lg bg-[#373E57]/40 text-[#F2F0F4] font-medium">
                          {tItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills & Technical Stack Section */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4] mt-3">
              {t.skillsTitle}
            </h2>
            <p className="text-sm text-[#6F7398] mt-3">{t.skillsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skillCategories.map((cat, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#1E2332]/60 border border-[#373E57] hover:border-[#6F7398] transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-[#373E57]/50 border border-[#6F7398]/30 flex items-center justify-center text-[#D1C7D7] mb-5">
                  {idx === 0 && <BarChart3 className="w-6 h-6" />}
                  {idx === 1 && <Code className="w-6 h-6" />}
                  {idx === 2 && <Database className="w-6 h-6" />}
                  {idx === 3 && <Cpu className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-semibold text-[#F2F0F4] mb-4">{cat.category}</h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 text-sm text-[#6F7398]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1C7D7]" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Certification Section */}
      <section className="py-16 px-6 bg-[#1E2332]/30 border-t border-b border-[#373E57]/30">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1E2332] border border-[#373E57] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1218] border border-[#373E57] text-xs font-semibold text-[#D1C7D7]">
                <Award className="w-4 h-4 text-[#D1C7D7]" />
                <span>{t.featuredCertTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#F2F0F4]">
                {t.featuredCertName}
              </h3>
              <p className="text-sm sm:text-base text-[#6F7398] leading-relaxed">
                {t.featuredCertDesc}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-semibold text-[#F2F0F4]">Issuer: {t.featuredCertOrg}</span>
                <span className="text-xs text-[#373E57]">·</span>
                <span className="text-xs text-[#6F7398]">Verified Credential</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-lg-end">
              <button
                onClick={() => alert("Redirecting to official Microsoft Credential verification portal.")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#D1C7D7] hover:bg-white text-[#0F1218] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Certifications Section */}
      <section id="certifications" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Accreditation</span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4] mt-3">
              {t.certsTitle}
            </h2>
            <p className="text-sm text-[#6F7398] mt-3">{t.certsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.certCategories.map((cat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#1E2332]/60 border border-[#373E57] hover:border-[#6F7398] transition-all shadow-lg">
                <h3 className="text-xl font-semibold text-[#F2F0F4] mb-6 pb-4 border-b border-[#373E57]/40 flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#D1C7D7]" />
                  <span>{cat.name}</span>
                </h3>
                <div className="space-y-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 group">
                      <div>
                        <h4 className="text-base font-semibold text-[#F2F0F4] group-hover:text-[#D1C7D7] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#6F7398] mt-1 font-medium">
                          {item.issuer} <span aria-hidden="true">·</span> {item.date}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedCert(item)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#373E57]/40 hover:bg-[#373E57] text-xs font-medium text-[#D1C7D7] hover:text-white transition-all whitespace-nowrap shrink-0 shadow-sm"
                      >
                        Verify
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-28 px-6 bg-[#1E2332]/40 border-t border-b border-[#373E57]/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Career & Academic Path</span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4] mt-3">
              {t.experienceTitle}
            </h2>
            <p className="text-sm text-[#6F7398] mt-3">{t.experienceSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Experience Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-[#F2F0F4] flex items-center gap-2.5 mb-6">
                <Briefcase className="w-5 h-5 text-[#D1C7D7]" />
                <span>Professional Experience</span>
              </h3>
              {t.experienceItems.map((exp, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-[#1E2332] border border-[#373E57] relative pl-8 shadow-lg">
                  <div className="absolute top-8 left-3 w-2 h-2 rounded-full bg-[#D1C7D7]" />
                  <span className="text-xs font-semibold text-[#D1C7D7] px-3 py-1 rounded-lg bg-[#0F1218] border border-[#373E57] inline-block mb-3">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-bold text-[#F2F0F4] mb-1">{exp.role}</h4>
                  <p className="text-sm font-medium text-[#6F7398] mb-3">{exp.company}</p>
                  <p className="text-sm text-[#6F7398] leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Education Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-[#F2F0F4] flex items-center gap-2.5 mb-6">
                <GraduationCap className="w-5 h-5 text-[#D1C7D7]" />
                <span>Education</span>
              </h3>
              {t.educationItems.map((edu, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-[#1E2332] border border-[#373E57] relative pl-8 shadow-lg">
                  <div className="absolute top-8 left-3 w-2 h-2 rounded-full bg-[#D1C7D7]" />
                  <span className="text-xs font-semibold text-[#D1C7D7] px-3 py-1 rounded-lg bg-[#0F1218] border border-[#373E57] inline-block mb-3">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-[#F2F0F4] mb-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-[#6F7398] mb-3">{edu.institution}</p>
                  <p className="text-sm text-[#6F7398] leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Project Demo Reel / Showcase Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Visual Reel</span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4] mt-3">
              {t.demoTitle}
            </h2>
            <p className="text-sm text-[#6F7398] mt-3">{t.demoSubtitle}</p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#373E57] bg-[#1E2332] shadow-2xl group">
            <img
              src="/src/assets/images/project_techuni_hub_1795006684119.jpg"
              alt="Demo Reel Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1218] via-[#0F1218]/40 to-transparent flex items-center justify-center">
              <button
                onClick={() => setSelectedProject(t.projects[0])}
                className="w-20 h-20 rounded-full bg-[#D1C7D7]/95 hover:bg-white text-[#0F1218] flex items-center justify-center shadow-2xl transition-all transform hover:scale-110"
                title="Launch Interactive Showcase"
              >
                <Sparkles className="w-8 h-8" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#D1C7D7]">Interactive Intelligence Dashboard</p>
                <h3 className="text-xl font-serif-display font-bold text-[#F2F0F4]">TechUni Intelligence Hub Preview</h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0F1218]/85 backdrop-blur-md border border-[#373E57] text-xs text-[#F2F0F4]">
                Power BI & Python
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-28 px-6 bg-[#1E2332]/60 border-t border-[#373E57]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#D1C7D7] uppercase">Get In Touch</span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F2F0F4]">
              {t.contactTitle}
            </h2>
            <p className="text-sm text-[#6F7398] leading-relaxed">
              {t.contactSubtitle}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm text-[#F2F0F4]">
                <div className="w-11 h-11 rounded-xl bg-[#1E2332] border border-[#373E57] flex items-center justify-center text-[#D1C7D7] shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span>fatma.abdel-fattah@data-analytics.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#F2F0F4]">
                <div className="w-11 h-11 rounded-xl bg-[#1E2332] border border-[#373E57] flex items-center justify-center text-[#D1C7D7] shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Available Worldwide (Remote & On-Site)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#1E2332] border border-[#373E57] flex items-center justify-center text-[#D1C7D7] hover:text-white hover:border-[#6F7398] transition-all shadow-sm" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#1E2332] border border-[#373E57] flex items-center justify-center text-[#D1C7D7] hover:text-white hover:border-[#6F7398] transition-all shadow-sm" aria-label="GitHub Profile">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:fatma@example.com" className="w-11 h-11 rounded-xl bg-[#1E2332] border border-[#373E57] flex items-center justify-center text-[#D1C7D7] hover:text-white hover:border-[#6F7398] transition-all shadow-sm" aria-label="Email Contact">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleContactSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#0F1218] border border-[#373E57] shadow-2xl space-y-6">
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#1E2332] border border-emerald-500/40 text-emerald-300 text-sm text-center">
                  {t.successMessage}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#6F7398] mb-2">{t.formName}</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-[#1E2332] border border-[#373E57] text-[#F2F0F4] text-sm focus:outline-none focus:border-[#D1C7D7] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#6F7398] mb-2">{t.formEmail}</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-[#1E2332] border border-[#373E57] text-[#F2F0F4] text-sm focus:outline-none focus:border-[#D1C7D7] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6F7398] mb-2">{t.formMessage}</label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-[#1E2332] border border-[#373E57] text-[#F2F0F4] text-sm focus:outline-none focus:border-[#D1C7D7] transition-colors"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#D1C7D7] hover:bg-white text-[#0F1218] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D1C7D7]/10"
                  >
                    <span>{t.sendButton}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#373E57]/40 text-center text-xs text-[#6F7398]">
          <p>{t.footerCopy}</p>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-[#1E2332] border border-[#373E57] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0F1218]/80 text-[#F2F0F4] hover:text-[#D1C7D7] focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-[#0F1218] relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#D1C7D7] px-3 py-1 rounded bg-[#0F1218] border border-[#373E57] inline-block mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-serif-display font-bold text-[#F2F0F4]">{selectedProject.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-[#6F7398] leading-relaxed">
                {selectedProject.desc}
              </p>
              <div className="p-4 rounded-xl bg-[#0F1218] border border-[#373E57]">
                <p className="text-xs font-semibold text-[#D1C7D7]">Key Performance Metric</p>
                <p className="text-sm font-bold text-[#F2F0F4] mt-1">{selectedProject.metrics}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tech.map((tItem: string, i: number) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-md bg-[#373E57]/40 text-[#F2F0F4]">
                    {tItem}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#373E57] text-[#F2F0F4] text-sm font-semibold hover:bg-[#373E57]/80 transition-colors"
                >
                  {t.close}
                </button>
                <button
                  onClick={() => alert("Launching live project interactive sandbox.")}
                  className="px-6 py-2.5 rounded-xl bg-[#D1C7D7] text-[#0F1218] text-sm font-semibold flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certification Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-[#1E2332] border border-[#373E57] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200 space-y-6">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0F1218]/80 text-[#F2F0F4] hover:text-[#D1C7D7] focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-[#373E57]/50 border border-[#6F7398]/30 flex items-center justify-center text-[#D1C7D7]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#D1C7D7]">Verified Credential</span>
              <h3 className="text-xl font-serif-display font-bold text-[#F2F0F4] mt-1">{selectedCert.title}</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#0F1218] border border-[#373E57] space-y-2">
              <p className="text-xs text-[#6F7398]">Issuer: <span className="text-[#F2F0F4] font-medium">{selectedCert.issuer}</span></p>
              <p className="text-xs text-[#6F7398]">Issue Date: <span className="text-[#F2F0F4] font-medium">{selectedCert.date}</span></p>
              <p className="text-xs text-emerald-400 font-medium">Status: Verified & Authentic</p>
            </div>
            <div className="pt-2 flex justify-end gap-4">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 rounded-xl bg-[#373E57] text-[#F2F0F4] text-sm font-semibold hover:bg-[#373E57]/80 transition-colors"
              >
                {t.close}
              </button>
              <button
                onClick={() => alert(`Opening verification URL for ${selectedCert.title}`)}
                className="px-6 py-2.5 rounded-xl bg-[#D1C7D7] text-[#0F1218] text-sm font-semibold flex items-center gap-2 hover:bg-white transition-colors"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
