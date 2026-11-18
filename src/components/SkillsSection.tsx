import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ChevronRight,
  ChevronDown,
  Database,
  Layers,
  BarChart3,
  Target,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

interface SkillsSectionProps {
  lang: 'EN' | 'AR';
}

interface StageCardData {
  number: string;
  stageLabel: string;
  title: string;
  illustration: 'laptop' | 'database' | 'chart' | 'chip';
  skills: string[];
}

function StageIllustration({
  type,
  prefersReducedMotion,
}: {
  type: 'laptop' | 'database' | 'chart' | 'chip';
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div className="relative w-full h-[112px] flex items-center justify-center my-2 select-none overflow-hidden">
      {/* Subtle Internal Flowing Wave Line Across Card Illustration Zone */}
      <svg
        aria-hidden="true"
        viewBox="0 0 280 90"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-1 w-full h-[64px]"
      >
        <defs>
          <linearGradient id={`cardWaveFill-${type}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#373E57" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#1E2332" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id={`cardWaveStroke-${type}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#6F7398" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#D1C7D7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6F7398" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d="M -10 54 C 45 52, 85 18, 142 36 C 195 52, 232 14, 290 24 L 290 90 L -10 90 Z"
          fill={`url(#cardWaveFill-${type})`}
        />
        <path
          d="M -10 54 C 45 52, 85 18, 142 36 C 195 52, 232 14, 290 24"
          stroke={`url(#cardWaveStroke-${type})`}
          strokeWidth="1.25"
        />
      </svg>

      {/* Soft Ambient Radial Glow Behind Illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-28 h-20 rounded-full bg-[#D1C7D7]/12 blur-2xl"
      />

      {type === 'laptop' && (
        <svg
          viewBox="0 0 140 100"
          fill="none"
          className="relative z-10 w-[124px] h-[90px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A314A" />
              <stop offset="100%" stopColor="#151926" />
            </linearGradient>
            <linearGradient id="laptopBaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6F7398" />
              <stop offset="50%" stopColor="#D1C7D7" />
              <stop offset="100%" stopColor="#6F7398" />
            </linearGradient>
          </defs>
          {/* Outer Screen Bezel */}
          <rect
            x="24"
            y="14"
            width="92"
            height="58"
            rx="6"
            fill="url(#laptopScreenGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.8"
          />
          {/* Inner Screen Frame */}
          <rect
            x="29"
            y="19"
            width="82"
            height="48"
            rx="3.5"
            fill="#121622"
            stroke="#6F7398"
            strokeWidth="0.9"
            strokeOpacity="0.6"
          />
          {/* Code Symbol </> */}
          <motion.g
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0.78 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.78, 1, 0.78] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M 59 36 L 50 43 L 59 50"
              stroke="#D1C7D7"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 81 36 L 90 43 L 81 50"
              stroke="#D1C7D7"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 73 34 L 67 52"
              stroke="#D1C7D7"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </motion.g>
          {/* Laptop Base Deck */}
          <path
            d="M 14 73 L 126 73 L 132 80 C 132 82.2, 129.5 84, 126 84 L 14 84 C 10.5 84, 8 82.2, 8 80 L 14 73 Z"
            fill="#242A3E"
            stroke="url(#laptopBaseGrad)"
            strokeWidth="1.5"
          />
          {/* Trackpad Notch */}
          <rect x="61" y="74.5" width="18" height="2.2" rx="1.1" fill="#D1C7D7" fillOpacity="0.75" />
        </svg>
      )}

      {type === 'database' && (
        <svg
          viewBox="0 0 130 100"
          fill="none"
          className="relative z-10 w-[116px] h-[90px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dbBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D2233" />
              <stop offset="45%" stopColor="#353C57" />
              <stop offset="100%" stopColor="#1A1E2E" />
            </linearGradient>
            <linearGradient id="dbTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#464E6D" />
              <stop offset="100%" stopColor="#23283B" />
            </linearGradient>
          </defs>

          {/* Bottom Cylinder Tier */}
          <path
            d="M 32 58 L 32 74 C 32 80.5, 46.8 85.5, 65 85.5 C 83.2 85.5, 98 80.5, 98 74 L 98 58"
            fill="url(#dbBodyGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
          {/* Middle Cylinder Tier */}
          <path
            d="M 32 39 L 32 55 C 32 61.5, 46.8 66.5, 65 66.5 C 83.2 66.5, 98 61.5, 98 55 L 98 39"
            fill="url(#dbBodyGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
          {/* Top Cylinder Tier */}
          <path
            d="M 32 21 L 32 37 C 32 43.5, 46.8 48.5, 65 48.5 C 83.2 48.5, 98 43.5, 98 37 L 98 21"
            fill="url(#dbBodyGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.5"
          />
          {/* Top Elliptical Cap */}
          <ellipse
            cx="65"
            cy="21"
            rx="33"
            ry="10.5"
            fill="url(#dbTopGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.6"
          />
          {/* Status Indicator Nodes on Each Tier */}
          <circle cx="84" cy="36" r="2.1" fill="#F2F0F4" />
          <circle cx="84" cy="54" r="2.1" fill="#D1C7D7" />
          <circle cx="84" cy="73" r="2.1" fill="#D1C7D7" fillOpacity="0.85" />
        </svg>
      )}

      {type === 'chart' && (
        <svg
          viewBox="0 0 140 100"
          fill="none"
          className="relative z-10 w-[124px] h-[90px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D1C7D7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#373E57" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* 4 Ascending 3D-Styled Bars */}
          <rect
            x="28"
            y="61"
            width="14"
            height="19"
            rx="2.5"
            fill="url(#barGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.1"
          />
          <rect
            x="49"
            y="50"
            width="14"
            height="30"
            rx="2.5"
            fill="url(#barGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.1"
          />
          <rect
            x="70"
            y="38"
            width="14"
            height="42"
            rx="2.5"
            fill="url(#barGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.1"
          />
          <rect
            x="91"
            y="25"
            width="14"
            height="55"
            rx="2.5"
            fill="url(#barGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.2"
          />

          {/* Sweeping Upward Trend Curve + Arrowhead */}
          <motion.path
            d="M 28 49 C 48 44, 72 31, 98 13"
            stroke="#F2F0F4"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
          <path
            d="M 91 12 L 99.5 11.5 L 97.5 19.5"
            stroke="#F2F0F4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === 'chip' && (
        <svg
          viewBox="0 0 130 100"
          fill="none"
          className="relative z-10 w-[116px] h-[90px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="chipCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E354E" />
              <stop offset="100%" stopColor="#161A28" />
            </linearGradient>
          </defs>

          {/* Top Pins */}
          {[47, 59, 71, 83].map((x) => (
            <g key={`t-${x}`}>
              <line x1={x} y1="12" x2={x} y2="22" stroke="#D1C7D7" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx={x} cy="11" r="1.7" fill="#D1C7D7" />
            </g>
          ))}
          {/* Bottom Pins */}
          {[47, 59, 71, 83].map((x) => (
            <g key={`b-${x}`}>
              <line x1={x} y1="76" x2={x} y2="86" stroke="#D1C7D7" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx={x} cy="87" r="1.7" fill="#D1C7D7" />
            </g>
          ))}
          {/* Left Pins */}
          {[33, 44, 55, 66].map((y) => (
            <g key={`l-${y}`}>
              <line x1="25" y1={y} x2="36" y2={y} stroke="#D1C7D7" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="24" cy={y} r="1.7" fill="#D1C7D7" />
            </g>
          ))}
          {/* Right Pins */}
          {[33, 44, 55, 66].map((y) => (
            <g key={`r-${y}`}>
              <line x1="94" y1={y} x2="105" y2={y} stroke="#D1C7D7" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="106" cy={y} r="1.7" fill="#D1C7D7" />
            </g>
          ))}

          {/* Outer Chip Body */}
          <rect
            x="36"
            y="22"
            width="58"
            height="54"
            rx="9"
            fill="url(#chipCoreGrad)"
            stroke="#D1C7D7"
            strokeWidth="1.8"
          />
          {/* Inner Die Frame */}
          <rect
            x="43"
            y="29"
            width="44"
            height="40"
            rx="6"
            fill="#141826"
            stroke="#6F7398"
            strokeWidth="1.1"
          />
          {/* AI Monogram */}
          <text
            x="65"
            y="55"
            textAnchor="middle"
            fill="#F2F0F4"
            fontSize="17"
            fontWeight="700"
            fontFamily="Inter, Manrope, sans-serif"
            letterSpacing="0.06em"
          >
            AI
          </text>
        </svg>
      )}
    </div>
  );
}

export default function SkillsSection({ lang }: SkillsSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isArabic = lang === 'AR';

  const content = {
    EN: {
      eyebrow: 'EXPERTISE',
      title: 'Skills & Technical Stack',
      subtitlePrefix:
        'A connected capability pipeline that turns data into insights, decisions, and ',
      subtitleHighlight: 'real business impact.',
      stages: [
        {
          number: '01',
          stageLabel: 'Tools & Data Handling',
          title: 'Programming & Data Science',
          illustration: 'laptop',
          skills: [
            'Python',
            'Pandas',
            'NumPy',
            'Scikit-Learn',
            'Jupyter Notebooks',
            'Data Cleaning',
          ],
        },
        {
          number: '02',
          stageLabel: 'Databases & Data Management',
          title: 'Database & Querying',
          illustration: 'database',
          skills: [
            'SQL',
            'PostgreSQL',
            'Relational Modeling',
            'Query Optimization',
            'Data Warehousing',
          ],
        },
        {
          number: '03',
          stageLabel: 'Analysis & Business Intelligence',
          title: 'Data Visualization & BI',
          illustration: 'chart',
          skills: [
            'Power BI',
            'Tableau',
            'Advanced DAX',
            'Power Query',
            'Interactive Dashboards',
            'Executive Reporting',
          ],
        },
        {
          number: '04',
          stageLabel: 'Applied AI & Business Impact',
          title: 'Business & Applied AI',
          illustration: 'chip',
          skills: [
            'Statistical Modeling',
            'Predictive Analytics',
            'Financial Modeling',
            'Business Intelligence',
            'Machine Learning',
          ],
        },
      ] as StageCardData[],
      timelineTitle: 'How The Stack Works Together',
      timelineSteps: [
        {
          num: '1.',
          line1: 'Prepare & transform',
          line2: 'data with the right tools',
          icon: 'db',
        },
        {
          num: '2.',
          line1: 'Organize and query',
          line2: 'data for analysis',
          icon: 'layers',
        },
        {
          num: '3.',
          line1: 'Visualize and interpret',
          line2: 'insights for decisions',
          icon: 'chart',
        },
        {
          num: '4.',
          line1: 'Apply AI and analytics',
          line2: 'to drive business impact',
          icon: 'target',
        },
      ],
      outcomesLabel: 'OUTCOMES',
      outcomes: [
        {
          first: 'Actionable',
          second: 'insights',
          italicFirst: true,
          lavenderFirst: true,
          lavenderSecond: false,
          icon: 'bars',
        },
        {
          first: 'Reliable',
          second: 'analysis',
          italicFirst: false,
          lavenderFirst: true,
          lavenderSecond: false,
          icon: 'shield',
        },
        {
          first: 'Business',
          second: 'clarity',
          italicFirst: false,
          lavenderFirst: false,
          lavenderSecond: true,
          icon: 'layers',
        },
        {
          first: 'Real',
          second: 'impact',
          italicFirst: false,
          lavenderFirst: true,
          lavenderSecond: true,
          icon: 'rocket',
        },
      ],
    },
    AR: {
      eyebrow: 'الخبرات التقنية',
      title: 'المهارات والتقنيات',
      subtitlePrefix:
        'منظومة قدرات مترابطة تحوّل البيانات إلى رؤى وقرارات و',
      subtitleHighlight: 'أثر حقيقي للأعمال.',
      stages: [
        {
          number: '01',
          stageLabel: 'الأدوات ومعالجة البيانات',
          title: 'البرمجة وعلم البيانات',
          illustration: 'laptop',
          skills: [
            'Python',
            'Pandas',
            'NumPy',
            'Scikit-Learn',
            'Jupyter Notebooks',
            'تنظيف البيانات (Data Cleaning)',
          ],
        },
        {
          number: '02',
          stageLabel: 'قواعد البيانات وإدارتها',
          title: 'قواعد البيانات والاستعلام',
          illustration: 'database',
          skills: [
            'SQL',
            'PostgreSQL',
            'النمذجة العلائقية (Relational Modeling)',
            'تحسين الاستعلامات (Query Optimization)',
            'مستودعات البيانات (Data Warehousing)',
          ],
        },
        {
          number: '03',
          stageLabel: 'التحليل وذكاء الأعمال',
          title: 'تصور البيانات و BI',
          illustration: 'chart',
          skills: [
            'Power BI',
            'Tableau',
            'Advanced DAX',
            'Power Query',
            'لوحات التحكم التفاعلية',
            'التقارير التنفيذية',
          ],
        },
        {
          number: '04',
          stageLabel: 'الذكاء الاصطناعي التطبيقي وأثر الأعمال',
          title: 'الأعمال والذكاء الاصطناعي التطبيقي',
          illustration: 'chip',
          skills: [
            'النمذجة الإحصائية',
            'التحليلات التنبؤية',
            'النمذجة المالية',
            'ذكاء الأعمال (Business Intelligence)',
            'تعلم الآلة (Machine Learning)',
          ],
        },
      ] as StageCardData[],
      timelineTitle: 'كيف تعمل هذه المنظومة معًا',
      timelineSteps: [
        {
          num: '1.',
          line1: 'تجهيز وتحويل البيانات',
          line2: 'باستخدام الأدوات المناسبة',
          icon: 'db',
        },
        {
          num: '2.',
          line1: 'تنظيم واستعلام البيانات',
          line2: 'لإجراء التحليلات',
          icon: 'layers',
        },
        {
          num: '3.',
          line1: 'تصور وتفسير الرؤى',
          line2: 'لدعم اتخاذ القرارات',
          icon: 'chart',
        },
        {
          num: '4.',
          line1: 'تطبيق الذكاء الاصطناعي والتحليلات',
          line2: 'لتحقيق أثر ملموس للأعمال',
          icon: 'target',
        },
      ],
      outcomesLabel: 'النتائج',
      outcomes: [
        {
          first: 'رؤى',
          second: 'قابلة للتنفيذ',
          italicFirst: false,
          lavenderFirst: true,
          lavenderSecond: false,
          icon: 'bars',
        },
        {
          first: 'تحليلات',
          second: 'موثوقة',
          italicFirst: false,
          lavenderFirst: true,
          lavenderSecond: false,
          icon: 'shield',
        },
        {
          first: 'وضوح',
          second: 'للأعمال',
          italicFirst: false,
          lavenderFirst: false,
          lavenderSecond: true,
          icon: 'layers',
        },
        {
          first: 'أثر',
          second: 'حقيقي',
          italicFirst: false,
          lavenderFirst: true,
          lavenderSecond: true,
          icon: 'rocket',
        },
      ],
    },
  }[lang];

  // Bottom dotted lavender wave mesh paths & particles
  const wavePaths = Array.from({ length: 16 }, (_, i) => {
    const offset = i * 6;
    const y0 = 195 + offset * 0.4;
    const c1y = 42 + offset * 0.85;
    const c2y = 228 - offset * 0.35;
    const yMid = 148 + offset * 0.5;
    const c3y = 58 + offset * 0.85;
    const c4y = 222 - offset * 0.4;
    const yEnd = 178 + offset * 0.5;
    return `M -40 ${y0} C 230 ${c1y}, 470 ${c2y}, 720 ${yMid} C 970 ${c3y}, 1210 ${c4y}, 1480 ${yEnd}`;
  });

  const waveDots = Array.from({ length: 150 }, (_, i) => {
    const row = i % 3;
    const col = Math.floor(i / 3);
    const t = col / 49;
    const x = 14 + t * 1412 + row * 5;
    const y =
      154 +
      row * 9 +
      Math.sin(t * Math.PI * 3.1 + row * 0.3) * 42 +
      Math.cos(t * Math.PI * 5.8) * 14;
    const r = col % 4 === 0 ? 1.45 : 0.95;
    const edgeFade = Math.sin(t * Math.PI);
    const opacity = Math.max(0.08, edgeFade * (row === 0 ? 0.56 : row === 1 ? 0.36 : 0.2));
    return { x, y, r, opacity };
  });

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0F1218] pt-24 pb-32 lg:pt-28 lg:pb-36 border-b border-[#373E57]/30"
    >
      {/* Subtle Top & Bottom Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 w-[680px] h-[240px] rounded-full bg-[#373E57]/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1080px] h-[250px] rounded-full bg-[#1E2332]/45 blur-3xl"
      />

      {/* Lower Dotted Lavender Data Wave Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[210px] sm:h-[240px] opacity-85 select-none z-0"
        style={{
          maskImage:
            'linear-gradient(to top, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.55) 65%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.55) 65%, transparent 100%)',
        }}
      >
        <svg
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="skillsWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#373E57" stopOpacity="0.05" />
              <stop offset="22%" stopColor="#D1C7D7" stopOpacity="0.42" />
              <stop offset="50%" stopColor="#6F7398" stopOpacity="0.28" />
              <stop offset="78%" stopColor="#D1C7D7" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#373E57" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {wavePaths.map((d, idx) => (
            <path
              key={idx}
              d={d}
              stroke="url(#skillsWaveGrad)"
              strokeWidth={idx % 4 === 0 ? '1.15' : '0.7'}
              strokeOpacity={Math.max(0.12, 0.56 - idx * 0.028)}
            />
          ))}
          {waveDots.map((dot, idx) => (
            <circle
              key={idx}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="#D1C7D7"
              fillOpacity={dot.opacity}
            />
          ))}
        </svg>
      </div>

      {/* Main Centered Container (up to 1460px) */}
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 relative z-10">
        
        {/* 1. HEADER DESIGN */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-16"
        >
          {/* Small Centered Label: EXPERTISE with Thin Lavender Horizontal Lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span
              aria-hidden="true"
              className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#D1C7D7]/50 to-[#D1C7D7]/85"
            />
            <span
              className={`text-xs font-semibold uppercase text-[#F2F0F4] ${
                isArabic ? 'font-arabic tracking-normal' : 'font-inter tracking-[0.22em]'
              }`}
            >
              {content.eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-[#D1C7D7]/50 to-[#D1C7D7]/85"
            />
          </div>

          {/* Main Heading: Skills & Technical Stack */}
          <h2
            className={`${
              isArabic
                ? 'font-arabic text-3xl sm:text-5xl lg:text-[52px] leading-[1.25]'
                : 'font-cambria text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em]'
            } font-bold text-[#F2F0F4]`}
          >
            {content.title}
          </h2>

          {/* Subtitle with Highlighted Italic "real business impact." */}
          <p
            className={`${
              isArabic ? 'font-arabic' : 'font-inter'
            } text-[16px] sm:text-[18px] font-normal text-[#CDD0D9] mt-3.5 leading-relaxed`}
          >
            <span>{content.subtitlePrefix}</span>
            <span
              className={`text-[#D1C7D7] font-semibold ${
                isArabic ? '' : 'italic'
              }`}
            >
              {content.subtitleHighlight}
            </span>
          </p>

          {/* Short Subtle Luminous Lavender Divider Beneath Subtitle */}
          <div
            aria-hidden="true"
            className="relative flex items-center justify-center mt-5"
          >
            <div className="w-[260px] sm:w-[340px] h-px bg-gradient-to-r from-transparent via-[#D1C7D7]/85 to-transparent" />
            <div className="absolute w-24 h-[3px] rounded-full bg-[#D1C7D7]/60 blur-[3px]" />
            <div className="absolute w-3 h-1 rounded-full bg-[#F2F0F4]" />
          </div>
        </motion.div>

        {/* 2. MAIN FOUR-STAGE TECHNICAL PIPELINE */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
            {content.stages.map((stage, idx) => (
              <React.Fragment key={stage.number}>
                <motion.article
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.52,
                    delay: prefersReducedMotion ? 0 : 0.08 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative rounded-[20px] bg-gradient-to-b from-[#1E2332]/95 via-[#181D2C]/95 to-[#141824]/95 border border-[#6F7398]/45 hover:border-[#D1C7D7]/65 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_-12px_rgba(0,0,0,0.65),0_0_24px_-6px_rgba(209,199,215,0.18)] transition-all duration-200 p-6 xl:p-7 flex flex-col shadow-[0_14px_34px_-10px_rgba(0,0,0,0.55)] ${
                    isArabic ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  {/* Desktop Circular Arrow Connector Between This Card and Next Card */}
                  {idx < content.stages.length - 1 && (
                    <div
                      aria-hidden="true"
                      className={`hidden lg:flex items-center justify-center absolute top-[43%] -translate-y-1/2 ${
                        isArabic
                          ? '-left-[19px] xl:-left-[21px]'
                          : '-right-[19px] xl:-right-[21px]'
                      } w-[34px] h-[34px] rounded-full bg-[#171C2B] border border-[#D1C7D7]/70 shadow-[0_0_16px_rgba(209,199,215,0.28)] z-20 pointer-events-none`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 text-[#D1C7D7] ${
                          isArabic ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                  )}

                  {/* Tablet (md) Horizontal Connector Between Col 1 & Col 2 */}
                  {idx % 2 === 0 && (
                    <div
                      aria-hidden="true"
                      className={`hidden md:flex lg:hidden items-center justify-center absolute top-[43%] -translate-y-1/2 ${
                        isArabic ? '-left-[18px]' : '-right-[18px]'
                      } w-[32px] h-[32px] rounded-full bg-[#171C2B] border border-[#D1C7D7]/65 shadow-[0_0_14px_rgba(209,199,215,0.22)] z-20 pointer-events-none`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 text-[#D1C7D7] ${
                          isArabic ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                  )}

                  {/* Top Row: Numbered Stage Pill + Small Stage Description */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#252B3F] border border-[#D1C7D7]/50 text-[12.5px] font-semibold text-[#F2F0F4] shadow-[0_0_10px_rgba(209,199,215,0.15)] shrink-0">
                      {stage.number}
                    </span>
                    <span className="text-[12.5px] xl:text-[13px] font-medium text-[#E2E4EC] truncate">
                      {stage.stageLabel}
                    </span>
                  </div>

                  {/* Technical Illustration */}
                  <StageIllustration
                    type={stage.illustration}
                    prefersReducedMotion={prefersReducedMotion}
                  />

                  {/* Main Skill-Category Heading */}
                  <h3
                    className={`${
                      isArabic
                        ? 'font-arabic text-[18.5px] xl:text-[20px]'
                        : 'font-manrope text-[18.5px] xl:text-[20px] tracking-[-0.015em]'
                    } font-bold text-[#F2F0F4] mt-1 mb-4 leading-snug`}
                  >
                    {stage.title}
                  </h3>

                  {/* Full Skill List */}
                  <ul className="space-y-2.5 mt-auto">
                    {stage.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-[14.5px] xl:text-[15px] leading-[1.5] text-[#E5E6EE]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D1C7D7] shadow-[0_0_6px_rgba(209,199,215,0.5)] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>

                {/* Mobile Vertical Arrow Connector Between Stacked Cards */}
                {idx < content.stages.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="flex md:hidden items-center justify-center -my-2.5 z-10"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#171C2B] border border-[#D1C7D7]/65 flex items-center justify-center text-[#D1C7D7] shadow-[0_0_12px_rgba(209,199,215,0.22)]">
                      <ChevronDown className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. HOW THE STACK WORKS TOGETHER TIMELINE */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.2 }}
          className="mt-14 lg:mt-16"
        >
          {/* Centered Outlined Capsule Title with Horizontal Lines */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div
              aria-hidden="true"
              className="hidden sm:block flex-1 max-w-[300px] lg:max-w-[380px] h-px bg-gradient-to-r from-transparent via-[#6F7398]/50 to-[#D1C7D7]/65"
            />
            <div className="px-6 py-2 rounded-full bg-[#181D2C]/95 border border-[#6F7398]/60 shadow-[0_0_20px_rgba(209,199,215,0.12)]">
              <h3
                className={`${
                  isArabic
                    ? 'font-arabic text-base sm:text-lg'
                    : 'font-cambria text-[17px] sm:text-[19px] tracking-[-0.01em]'
                } font-bold text-[#F2F0F4] text-center whitespace-nowrap`}
              >
                {content.timelineTitle}
              </h3>
            </div>
            <div
              aria-hidden="true"
              className="hidden sm:block flex-1 max-w-[300px] lg:max-w-[380px] h-px bg-gradient-to-l from-transparent via-[#6F7398]/50 to-[#D1C7D7]/65"
            />
          </div>

          {/* 4 Connected Process Milestones */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line Behind the 4 Milestone Circles */}
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute top-[26px] left-[12.5%] right-[12.5%] h-px z-0"
            >
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0, opacity: 0.4 }
                }
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: isArabic ? 'right center' : 'left center' }}
                className="w-full h-full bg-gradient-to-r from-[#D1C7D7]/65 via-[#D1C7D7]/80 to-[#D1C7D7]/65"
              />
              {/* 3 Luminous Midpoint Dots Between the 4 Milestone Nodes */}
              {[16.666, 50, 83.333].map((pos, i) => (
                <span
                  key={i}
                  style={{ left: `${pos}%` }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2F0F4] shadow-[0_0_10px_#D1C7D7]"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {content.timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReducedMotion ? 0 : 0.15 + idx * 0.14,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circular Milestone Icon Node */}
                  <div className="w-[52px] h-[52px] rounded-full bg-[#171C2B] border-[1.5px] border-[#D1C7D7]/75 shadow-[0_0_20px_rgba(209,199,215,0.22),inset_0_0_10px_rgba(209,199,215,0.1)] flex items-center justify-center text-[#D1C7D7] mb-3.5">
                    {step.icon === 'db' && <Database className="w-5 h-5" strokeWidth={1.65} />}
                    {step.icon === 'layers' && <Layers className="w-5 h-5" strokeWidth={1.65} />}
                    {step.icon === 'chart' && <BarChart3 className="w-5 h-5" strokeWidth={1.65} />}
                    {step.icon === 'target' && <Target className="w-5 h-5" strokeWidth={1.65} />}
                  </div>

                  {/* Milestone Caption */}
                  <p
                    className={`${
                      isArabic ? 'font-arabic' : 'font-inter'
                    } text-[13.5px] sm:text-[14px] leading-[1.48] text-[#F2F0F4]/90 max-w-[230px]`}
                  >
                    <span className="font-semibold text-[#F2F0F4]">{step.num} </span>
                    <span>{step.line1}</span>
                    <span className="block">{step.line2}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4. BOTTOM OUTCOMES STRIP */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.3 }}
          className="mt-12 lg:mt-14 relative rounded-[24px] bg-gradient-to-r from-[#171C2B]/95 via-[#1E2332]/95 to-[#171C2B]/95 border border-[#6F7398]/55 px-6 py-5 sm:px-8 sm:py-6 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6),0_0_24px_-8px_rgba(209,199,215,0.16)]"
        >
          {/* Subtle Center Bottom Rim Highlight matching reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-56 h-[2px] bg-gradient-to-r from-transparent via-[#D1C7D7]/80 to-transparent"
          />

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-0 items-center ${
              isArabic ? 'font-arabic' : 'font-inter'
            }`}
          >
            {/* Column 1: OUTCOMES Header */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:pe-5 lg:border-e lg:border-[#373E57]/80">
              <div className="w-9 h-9 rounded-full bg-[#23293D] border border-[#D1C7D7]/45 flex items-center justify-center text-[#D1C7D7] shrink-0">
                <Target className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <span
                className={`text-[14px] sm:text-[15px] font-bold uppercase text-[#D1C7D7] ${
                  isArabic ? 'tracking-normal' : 'tracking-[0.14em]'
                }`}
              >
                {content.outcomesLabel}
              </span>
            </div>

            {/* Columns 2-5: Four Outcome Items */}
            {content.outcomes.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center gap-3 px-3 ${
                  idx < content.outcomes.length - 1
                    ? 'lg:border-e lg:border-[#373E57]/80'
                    : ''
                }`}
              >
                <span className="text-[#D1C7D7] shrink-0">
                  {item.icon === 'bars' && <BarChart3 className="w-5 h-5" strokeWidth={1.8} />}
                  {item.icon === 'shield' && <ShieldCheck className="w-5 h-5" strokeWidth={1.8} />}
                  {item.icon === 'layers' && <Layers className="w-5 h-5" strokeWidth={1.8} />}
                  {item.icon === 'rocket' && <Rocket className="w-5 h-5" strokeWidth={1.8} />}
                </span>
                <p className="text-[15px] sm:text-[15.5px] font-semibold leading-snug whitespace-nowrap">
                  <span
                    className={`${item.italicFirst && !isArabic ? 'italic ' : ''}${
                      item.lavenderFirst ? 'text-[#D1C7D7]' : 'text-[#F2F0F4]'
                    }`}
                  >
                    {item.first}{' '}
                  </span>
                  <span
                    className={
                      item.lavenderSecond ? 'text-[#D1C7D7]' : 'text-[#F2F0F4]'
                    }
                  >
                    {item.second}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
