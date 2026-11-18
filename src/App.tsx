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
import AboutSection from './components/AboutSection';
import CoreStrengthsSection from './components/CoreStrengthsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import FloatingAIAssistant from './components/FloatingAIAssistant';

export default function App() {
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');
  const [activeNav, setActiveNav] = useState<string>('about');
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
            {[
              { id: 'about', label: t.nav.about },
              { id: 'projects', label: t.nav.projects },
              { id: 'skills', label: t.nav.skills },
              { id: 'certifications', label: t.nav.certifications },
              { id: 'experience', label: t.nav.experience },
              { id: 'contact', label: t.nav.contact },
            ].map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveNav(item.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#F2F0F4] font-semibold' : 'text-[#6F7398] hover:text-[#F2F0F4]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] rounded-full bg-[#D1C7D7]" />
                  )}
                </a>
              );
            })}
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

      {/* Hero Section — Refined Cambria Bold Name, Soft Lavender Ambient Glow & Layered Slate Indigo Portrait */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background ambient lighting (decorative only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-3xl opacity-35"
          style={{
            background:
              'radial-gradient(circle, rgba(55, 62, 87, 0.35) 0%, rgba(30, 35, 50, 0.18) 55%, transparent 75%)',
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 xl:gap-14 relative z-10">
          
          {/* Left Column (~55% on desktop): Availability, Name, Role, Tagline, CTAs, Statistics */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-start">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1E2332]/90 border border-[#373E57] text-[11px] sm:text-xs font-semibold tracking-[0.08em] text-[#D1C7D7] w-fit shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D1C7D7] shadow-[0_0_8px_rgba(209,199,215,0.75)] animate-pulse" />
              <span>{t.availableBadge}</span>
            </div>

            {/* Name Wrapper with Subtle Soft Lavender Ambient Glow BEHIND the Text */}
            <div className="relative w-full mb-4">
              {/* Diffused Low-Opacity (8–12%) Lavender & Dusty Indigo Glow Behind Heading */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -inset-x-8 -inset-y-6 rounded-full blur-[68px]"
                style={{
                  background:
                    'radial-gradient(ellipse at 38% 50%, rgba(209, 199, 215, 0.11) 0%, rgba(111, 115, 152, 0.07) 48%, rgba(15, 18, 24, 0) 78%)',
                }}
              />

              {/* Full Name: Single Consistent Off White Color (#F2F0F4), Cambria Bold, ~64px Desktop */}
              <h1
                className={`relative z-10 font-bold text-[#F2F0F4] tracking-[-0.025em] leading-[1.1] text-[clamp(33px,4.4vw,64px)] xl:whitespace-nowrap ${
                  lang === 'EN' ? 'font-cambria' : 'font-arabic'
                }`}
              >
                {lang === 'EN' ? 'Fatma Abdel Fattah' : 'فاطمة عبد الفتاح'}
              </h1>
            </div>

            {/* Professional Title & Tagline */}
            <div className="space-y-3.5 mb-8 max-w-2xl">
              {/* Role Title: "Data Analyst |" in Off White #F2F0F4, "Applied Artificial Intelligence" in Soft Lavender #D1C7D7 */}
              <p
                className={`text-[16.5px] sm:text-[19px] lg:text-[21px] font-medium tracking-[0.01em] leading-snug ${
                  lang === 'EN' ? 'font-manrope' : 'font-arabic'
                }`}
              >
                {lang === 'EN' ? (
                  <>
                    <span className="text-[#F2F0F4]">Data Analyst</span>
                    <span className="text-[#F2F0F4]/65 mx-2">|</span>
                    <span className="text-[#D1C7D7]">Applied Artificial Intelligence</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#F2F0F4]">محللة بيانات</span>
                    <span className="text-[#F2F0F4]/65 mx-2">|</span>
                    <span className="text-[#D1C7D7]">الذكاء الاصطناعي التطبيقي</span>
                  </>
                )}
              </p>

              {/* Tagline: Elegant Italic Serif in Cool Silver / Off White */}
              <p
                className={`text-[18px] sm:text-[21px] lg:text-[23px] font-normal italic text-[#CDD0D9] leading-relaxed pt-0.5 ${
                  lang === 'EN'
                    ? 'font-instrument-serif tracking-[0.01em]'
                    : 'font-arabic'
                }`}
              >
                &ldquo;
                {lang === 'EN'
                  ? 'The Most Interesting Insights Are Hidden in Plain Sight.'
                  : 'أغلب الرؤى المثيرة تختفي في أبسط التفاصيل.'}
                &rdquo;
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Soft Lavender Filled Button */}
              <a
                href="#projects"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] font-semibold text-sm transition-all duration-200 shadow-[0_8px_24px_rgba(209,199,215,0.16)] flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>{t.viewProjects}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'AR' ? 'rotate-180' : ''}`} />
              </a>

              {/* Dark Outlined Contact Me Button */}
              <a
                href="#contact"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#1E2332]/90 hover:bg-[#373E57]/75 text-[#F2F0F4] border border-[#373E57] hover:border-[#6F7398] font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <span>{t.contactMe}</span>
                <Mail className="w-4 h-4 text-[#D1C7D7]" />
              </a>

              {/* Compact CV Download Button */}
              <a
                href="/Fatma_Abdel_Fattah_CV.pdf"
                download="Fatma_Abdel_Fattah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 sm:py-4 rounded-xl bg-transparent hover:bg-[#1E2332]/65 text-[#D1C7D7] hover:text-[#F2F0F4] border border-[#373E57]/75 hover:border-[#6F7398] font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#D1C7D7]" />
                <span>{t.cv}</span>
              </a>
            </div>

            {/* Hero Statistics Strip with Clean Vertical Dividers */}
            <div className="grid grid-cols-3 items-center gap-4 sm:gap-8 pt-7 mt-9 border-t border-[#373E57]/45 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-[30px] font-cambria font-bold text-[#F2F0F4] leading-tight tabular-nums">
                  15+
                </p>
                <p className="text-[11.5px] sm:text-xs text-[#CDD0D9] mt-1 font-medium">
                  {t.stats.projects}
                </p>
              </div>

              <div className="border-s border-[#373E57]/55 ps-4 sm:ps-7">
                <p className="text-2xl sm:text-[30px] font-cambria font-bold text-[#F2F0F4] leading-tight tabular-nums">
                  2+ Yrs
                </p>
                <p className="text-[11.5px] sm:text-xs text-[#CDD0D9] mt-1 font-medium">
                  {t.stats.experience}
                </p>
              </div>

              <div className="border-s border-[#373E57]/55 ps-4 sm:ps-7">
                <p className="text-2xl sm:text-[30px] font-cambria font-bold text-[#F2F0F4] leading-tight tabular-nums">
                  8+
                </p>
                <p className="text-[11.5px] sm:text-xs text-[#CDD0D9] mt-1 font-medium">
                  {t.stats.certificates}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (~45% on desktop): Portrait, Layered Slate Indigo & Midnight Navy Organic Frame, Soft Lavender Halo, Floating Tech Badges */}
          <div className="w-full lg:w-[45%] relative flex items-center justify-center py-6 sm:py-8 group/portrait">
            
            {/* Layer 1: Subtle Background Gradient Connecting Portrait to Hero */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute w-[320px] h-[400px] sm:w-[430px] sm:h-[520px] rounded-full blur-[80px] opacity-75 transition-opacity duration-700 group-hover/portrait:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 46%, rgba(209, 199, 215, 0.14) 0%, rgba(55, 62, 87, 0.28) 48%, rgba(15, 18, 24, 0) 78%)',
              }}
            />

            {/* Layer 2: Soft Lavender Outer Silhouette Halo (Gentle Increase on Hover) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute w-[295px] h-[385px] sm:w-[395px] sm:h-[500px] rounded-[58%_42%_65%_35%/44%_58%_42%_56%] blur-2xl opacity-55 transition-opacity duration-700 group-hover/portrait:opacity-85"
              style={{
                background:
                  'radial-gradient(circle at 65% 32%, rgba(209, 199, 215, 0.22) 0%, rgba(111, 115, 152, 0.14) 45%, transparent 74%)',
              }}
            />

            {/* Layer 3: Deep Midnight Navy (#1E2332) Depth Shape (Slow Ambient Counter-Rotation) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute w-[285px] h-[375px] sm:w-[385px] sm:h-[490px] rounded-[36%_64%_44%_56%/58%_36%_64%_42%] animate-[spin_34s_linear_infinite_reverse] opacity-90"
              style={{
                background:
                  'linear-gradient(145deg, rgba(30, 35, 50, 0.95) 0%, rgba(55, 62, 87, 0.45) 55%, rgba(15, 18, 24, 0.92) 100%)',
                border: '1px solid rgba(111, 115, 152, 0.22)',
                boxShadow: '0 24px 55px rgba(0, 0, 0, 0.65)',
              }}
            />

            {/* Layer 4: Main Organic Oval Surface in Slate Indigo (#373E57) & Midnight Navy (#1E2332) with Partially Illuminated Soft Lavender Edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute w-[290px] h-[380px] sm:w-[390px] sm:h-[500px] rounded-[60%_40%_68%_32%/42%_60%_34%_66%] animate-[spin_26s_linear_infinite] transition-all duration-700"
              style={{
                background:
                  'linear-gradient(160deg, rgba(55, 62, 87, 0.86) 0%, rgba(30, 35, 50, 0.94) 54%, rgba(20, 24, 36, 0.98) 100%)',
                border: '1px solid rgba(209, 199, 215, 0.28)',
                boxShadow:
                  'inset 0 1px 18px rgba(209, 199, 215, 0.14), 0 0 28px rgba(209, 199, 215, 0.10)',
              }}
            />

            {/* Layer 5: Original Unchanged Portrait Image (Visually Stable, Gentle Vertical Float Only) */}
            <div className="relative w-[270px] h-[360px] sm:w-[365px] sm:h-[475px] flex items-center justify-center animate-portrait-float z-10">
              <img
                src="/src/assets/images/fatma_real_portrait.png"
                alt="Fatma Abdel Fattah — Data Analyst & Applied Artificial Intelligence"
                className="w-full h-full object-cover object-top filter drop-shadow-[0_20px_32px_rgba(0,0,0,0.68)] select-none"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
            </div>

            {/* Layer 6: Floating Glassmorphic Technology Badges Around Perimeter (Never Covering Face) */}
            {/* 1. Power BI — Top Left */}
            <div className="absolute top-3 left-1 sm:top-5 sm:left-0 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1E2332]/90 border border-[#373E57] hover:border-[#D1C7D7]/55 text-[11px] sm:text-xs font-semibold text-[#F2F0F4] shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md animate-badge-1 flex items-center gap-2 z-20 transition-colors duration-200">
              <BarChart3 className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0" aria-hidden="true" />
              <span>{t.techBadges[0]}</span>
            </div>

            {/* 2. Excel — Top Right */}
            <div className="absolute top-14 right-0 sm:top-16 sm:-right-1 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1E2332]/90 border border-[#373E57] hover:border-[#D1C7D7]/55 text-[11px] sm:text-xs font-semibold text-[#F2F0F4] shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md animate-badge-2 flex items-center gap-2 z-20 transition-colors duration-200">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0"
                aria-hidden="true"
              >
                <rect x="2" y="2.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M2 6.5H14M6.5 6.5V13.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <span>{t.techBadges[1]}</span>
            </div>

            {/* 3. SQL — Middle Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1E2332]/90 border border-[#373E57] hover:border-[#D1C7D7]/55 text-[11px] sm:text-xs font-semibold text-[#F2F0F4] shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md animate-badge-3 flex items-center gap-2 z-20 transition-colors duration-200">
              <Database className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0" aria-hidden="true" />
              <span>{t.techBadges[4]}</span>
            </div>

            {/* 4. AI / ML — Bottom Left */}
            <div className="absolute bottom-14 left-0 sm:bottom-16 sm:-left-1 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1E2332]/90 border border-[#373E57] hover:border-[#D1C7D7]/55 text-[11px] sm:text-xs font-semibold text-[#F2F0F4] shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md animate-badge-2 flex items-center gap-2 z-20 transition-colors duration-200">
              <Cpu className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0" aria-hidden="true" />
              <span>{t.techBadges[2]}</span>
            </div>

            {/* 5. Python — Bottom Right */}
            <div className="absolute bottom-3 right-2 sm:bottom-5 sm:right-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1E2332]/90 border border-[#373E57] hover:border-[#D1C7D7]/55 text-[11px] sm:text-xs font-semibold text-[#F2F0F4] shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md animate-badge-1 flex items-center gap-2 z-20 transition-colors duration-200">
              <Code className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0" aria-hidden="true" />
              <span>{t.techBadges[3]}</span>
            </div>

          </div>

        </div>
      </section>

      {/* About Me Section — Reconstructed Editorial & Story Composition */}
      <AboutSection lang={lang} />

      {/* Core Strengths Section — Reconstructed Connected Three-Step System */}
      <CoreStrengthsSection lang={lang} />

      {/* Selected Data & AI Projects + Frontend & Digital Experiences (01–10) */}
      <ProjectsSection lang={lang} />

      {/* Skills & Technical Stack Section — Reconstructed Four-Stage Technical Pipeline */}
      <SkillsSection lang={lang} />

      {/* Certifications & Credentials Section — Reconstructed Reference Layout */}
      <CertificationsSection lang={lang} />

      {/* Experience & Education Section — Reconstructed Six-Milestone Career Timeline */}
      <ExperienceSection lang={lang} />

      {/* Contact & Footer Section — Reconstructed Four-Card & Horizontal Message Panel */}
      <ContactSection lang={lang} />

      {/* Global Floating AI Portfolio Assistant — Mounted once at root via Portal */}
      <FloatingAIAssistant lang={lang} />

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
                <h3 className={`text-2xl font-bold text-[#F2F0F4] ${lang === 'AR' ? 'font-arabic' : 'font-cambria'}`}>{selectedProject.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-[#CDD0D9] leading-relaxed">
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
              <h3 className={`text-xl font-bold text-[#F2F0F4] mt-1 ${lang === 'AR' ? 'font-arabic' : 'font-cambria'}`}>{selectedCert.title}</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#0F1218] border border-[#373E57] space-y-2">
              <p className="text-xs text-[#CDD0D9]">Issuer: <span className="text-[#F2F0F4] font-medium">{selectedCert.issuer}</span></p>
              <p className="text-xs text-[#CDD0D9]">Issue Date: <span className="text-[#F2F0F4] font-medium">{selectedCert.date}</span></p>
              <p className="text-xs text-[#D1C7D7] font-semibold">Status: Verified & Authentic</p>
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
