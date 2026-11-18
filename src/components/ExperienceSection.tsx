import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  GraduationCap,
  Users,
  HandHeart,
  Briefcase,
  Monitor,
  Landmark,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'EN' | 'AR';
}

interface CareerMilestone {
  number: string;
  category: string;
  iconType: 'education' | 'leadership' | 'volunteering' | 'experience' | 'training';
  title: string;
  organization: string;
  fullOrganization?: string;
  dates: string;
  location?: string;
  description: string;
}

function MilestoneIcon({
  type,
  className = 'w-5 h-5',
}: {
  type: CareerMilestone['iconType'];
  className?: string;
}) {
  if (type === 'education') return <GraduationCap className={className} strokeWidth={1.65} />;
  if (type === 'leadership') return <Users className={className} strokeWidth={1.65} />;
  if (type === 'volunteering') return <HandHeart className={className} strokeWidth={1.65} />;
  if (type === 'experience') return <Briefcase className={className} strokeWidth={1.65} />;
  return <Monitor className={className} strokeWidth={1.65} />;
}

export default function ExperienceSection({ lang }: ExperienceSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isArabic = lang === 'AR';

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<CareerMilestone | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Close detail modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMilestone(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const content = {
    EN: {
      eyebrow: 'CAREER & ACADEMIC PATH',
      title: 'Experience & Education',
      subtitle:
        'My academic foundation, leadership journey, and professional experience in data and AI.',
      closeLabel: 'Close',
      detailsHeading: 'Key Contribution & Overview',
      scrollPrevLabel: 'Scroll timeline left',
      scrollNextLabel: 'Scroll timeline right',
      milestones: [
        {
          number: '01',
          category: 'Education',
          iconType: 'education',
          title: "Bachelor's Degree in Management Information Systems (MIS)",
          organization: 'Higher Institute of Electronic Commerce Systems in Sohag',
          dates: '2021 – 2024',
          location: 'Sohag',
          description:
            "Earned a Bachelor's Degree in Management Information Systems (MIS) at the Higher Institute of Electronic Commerce Systems in Sohag, Egypt, building a strong academic foundation combining information systems, business analysis, and data management.",
        },
        {
          number: '02',
          category: 'Leadership',
          iconType: 'leadership',
          title: 'Entrepreneurship Team Leader',
          organization: 'Higher Institute of E-Commerce Systems',
          dates: '2021 – 2024',
          location: 'Sohag',
          description:
            'Led career-development activities, delivered Microsoft Office and AI tools training, and organized leadership and professional-development workshops.',
        },
        {
          number: '03',
          category: 'Volunteering',
          iconType: 'volunteering',
          title: 'Head of IT',
          organization: 'Life Makers',
          dates: '2022 – 2024',
          location: 'Sohag University',
          description:
            'Managed organizational data, created Excel reports, improved digital workflows, and supported structured reporting.',
        },
        {
          number: '04',
          category: 'Leadership',
          iconType: 'leadership',
          title: 'HR Director',
          organization: 'Higher Institute of E-Commerce Systems',
          dates: '2022 – 2024',
          location: 'Sohag',
          description:
            'Managed employee records, analyzed HR data, prepared reports, and automated administrative activities using Excel.',
        },
        {
          number: '05',
          category: 'Professional Experience',
          iconType: 'experience',
          title: 'Data Entry Specialist',
          organization: 'Egyptian Public Prosecution',
          dates: '10/2024 – 12/2025',
          location: 'Assiut',
          description:
            'Prepared structured analytical reports summarizing legal cases, tracked case progression and court referrals, and supported decision-making within the investigation office.',
        },
        {
          number: '06',
          category: 'Professional Training',
          iconType: 'training',
          title: 'Digilians AI & Data Analytics Diploma',
          organization: 'Egyptian Military Academy',
          dates: '12/2025 – 09/2026',
          description:
            'A nine-month program supported by the Egyptian Ministry of Communications and Information Technology in collaboration with the Egyptian Military Academy and the Military Technical College.',
        },
      ] as CareerMilestone[],
    },
    AR: {
      eyebrow: 'المسار المهني والأكاديمي',
      title: 'الخبرات والتعليم',
      subtitle:
        'أساسي الأكاديمي، رحلتي القيادية، وخبرتي المهنية في مجال البيانات والذكاء الاصطناعي.',
      closeLabel: 'إغلاق',
      detailsHeading: 'أبرز الإسهامات والتفاصيل',
      scrollPrevLabel: 'تمرير المسار الزمني',
      scrollNextLabel: 'تمرير المسار الزمني',
      milestones: [
        {
          number: '01',
          category: 'التعليم',
          iconType: 'education',
          title: 'بكالوريوس نظم المعلومات الإدارية (MIS)',
          organization: 'المعهد العالي لنظم التجارة الإلكترونية بسوهاج',
          dates: '2021 – 2024',
          location: 'سوهاج',
          description:
            'درجة البكالوريوس في نظم المعلومات الإدارية (MIS) من المعهد العالي لنظم التجارة الإلكترونية بسوهاج، مصر، مع بناء أساس أكاديمي يجمع بين نظم المعلومات، تحليل الأعمال، وإدارة البيانات.',
        },
        {
          number: '02',
          category: 'القيادة',
          iconType: 'leadership',
          title: 'قائدة فريق ريادة الأعمال',
          organization: 'المعهد العالي لنظم التجارة الإلكترونية',
          dates: '2021 – 2024',
          location: 'سوهاج',
          description:
            'قيادة أنشطة التطوير المهني، وتقديم تدريبات على برامج Microsoft Office وأدوات الذكاء الاصطناعي، وتنظيم ورش عمل في القيادة والتطوير المهني.',
        },
        {
          number: '03',
          category: 'العمل التطوعي',
          iconType: 'volunteering',
          title: 'رئيسة قسم تكنولوجيا المعلومات (Head of IT)',
          organization: 'صناع الحياة (Life Makers)',
          dates: '2022 – 2024',
          location: 'جامعة سوهاج',
          description:
            'إدارة البيانات التنظيمية، وإعداد تقارير Excel، وتحسين مسارات العمل الرقمية، ودعم التقارير المنظمة.',
        },
        {
          number: '04',
          category: 'القيادة',
          iconType: 'leadership',
          title: 'مديرة الموارد البشرية (HR Director)',
          organization: 'المعهد العالي لنظم التجارة الإلكترونية',
          dates: '2022 – 2024',
          location: 'سوهاج',
          description:
            'إدارة سجلات الأعضاء، وتحليل بيانات الموارد البشرية، وإعداد التقارير، وأتمتة الأنشطة الإدارية باستخدام برنامج Excel.',
        },
        {
          number: '05',
          category: 'الخبرة المهنية',
          iconType: 'experience',
          title: 'أخصائية إدخال بيانات (Data Entry Specialist)',
          organization: 'النيابة العامة المصرية',
          dates: '10/2024 – 12/2025',
          location: 'أسيوط',
          description:
            'إعداد تقارير تحليلية منظمة تلخص القضايا القانونية، ومتابعة مسار القضايا والإحالات للمحاكم، ودعم اتخاذ القرار داخل المكتب الفني للتحقيقات.',
        },
        {
          number: '06',
          category: 'التدريب المهني',
          iconType: 'training',
          title: 'دبلومة الذكاء الاصطناعي وتحليل البيانات (Digilians)',
          organization: 'الأكاديمية العسكرية المصرية',
          dates: '12/2025 – 09/2026',
          description:
            'برنامج تدريبي متخصص لمدة تسعة أشهر بدعم من وزارة الاتصالات وتكنولوجيا المعلومات المصرية بالتعاون مع الأكاديمية العسكرية المصرية والكلية الفنية العسكرية.',
        },
      ] as CareerMilestone[],
    },
  }[lang];

  const handleHorizontalScroll = (direction: 'prev' | 'next') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = 340;
    const delta =
      direction === 'next'
        ? isArabic
          ? -step
          : step
        : isArabic
        ? step
        : -step;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

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
      id="experience"
      className="relative overflow-hidden bg-[#0F1218] pt-24 pb-32 lg:pt-28 lg:pb-36 border-t border-b border-[#373E57]/30"
    >
      {/* Subtle Ambient Background Lighting */}
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
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[215px] sm:h-[245px] opacity-85 select-none z-0"
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
            <linearGradient id="expWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
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
              stroke="url(#expWaveGrad)"
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

      {/* Main Centered Container */}
      <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-14"
        >
          {/* Eyebrow Label: CAREER & ACADEMIC PATH with Thin Lavender Horizontal Lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span
              aria-hidden="true"
              className="w-14 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#D1C7D7]/55 to-[#D1C7D7]/85"
            />
            <span
              className={`text-[12.5px] sm:text-[13.5px] font-semibold uppercase text-[#D1C7D7] ${
                isArabic ? 'font-arabic tracking-normal' : 'font-manrope tracking-[0.2em]'
              }`}
            >
              {content.eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="w-14 sm:w-20 h-px bg-gradient-to-l from-transparent via-[#D1C7D7]/55 to-[#D1C7D7]/85"
            />
          </div>

          {/* Main Heading: Experience & Education */}
          <h2
            className={`${
              isArabic
                ? 'font-arabic text-3xl sm:text-5xl lg:text-[52px] leading-[1.25]'
                : 'font-cambria text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em]'
            } font-bold text-[#F2F0F4]`}
          >
            {content.title}
          </h2>

          {/* Subtitle */}
          <p
            className={`${
              isArabic ? 'font-arabic' : 'font-inter'
            } text-[16px] sm:text-[18px] font-normal text-[#CDD0D9] mt-3.5 leading-relaxed`}
          >
            {content.subtitle}
          </p>

          {/* Short Subtly Glowing Lavender Underline Beneath Subtitle */}
          <div
            aria-hidden="true"
            className="flex justify-center mt-5"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-36 sm:w-44 h-[2.5px] rounded-full bg-gradient-to-r from-[#D1C7D7]/30 via-[#D1C7D7] to-[#D1C7D7]/30 shadow-[0_0_16px_rgba(209,199,215,0.65)]" />
              <div className="absolute w-12 h-1 rounded-full bg-[#F2F0F4]" />
            </div>
          </div>
        </motion.div>

        {/* Intermediate Screen Carousel Controls (visible on md/lg when horizontal track scrolls) */}
        <div className="hidden md:flex 2xl:hidden items-center justify-end gap-2.5 mb-3">
          <button
            type="button"
            onClick={() => handleHorizontalScroll('prev')}
            aria-label={content.scrollPrevLabel}
            className="w-9 h-9 rounded-full bg-[#171C2B] border border-[#373E57] hover:border-[#D1C7D7]/70 text-[#D1C7D7] hover:text-[#F2F0F4] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
          >
            <ChevronLeft className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
          </button>
          <button
            type="button"
            onClick={() => handleHorizontalScroll('next')}
            aria-label={content.scrollNextLabel}
            className="w-9 h-9 rounded-full bg-[#171C2B] border border-[#373E57] hover:border-[#D1C7D7]/70 text-[#D1C7D7] hover:text-[#F2F0F4] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
          >
            <ChevronRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* 2. DESKTOP & TABLET HORIZONTAL SIX-MILESTONE CONNECTED TIMELINE */}
        <div
          ref={scrollContainerRef}
          className="hidden md:block overflow-x-auto 2xl:overflow-visible pb-4 -mx-2 px-2 scrollbar-thin"
        >
          <div className="min-w-[1340px] xl:min-w-[1400px] 2xl:min-w-0 relative pt-2">
            
            {/* Continuous Lavender Timeline + Curved Outer Endings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[31px] left-[4.2%] right-[4.2%] h-[36px] z-0"
            >
              {/* Curved Left Hook Ending Leading Down Toward Card 01 */}
              <div
                className={`absolute top-0 ${
                  isArabic ? 'right-0 border-r-[1.8px] rounded-tr-[24px]' : 'left-0 border-l-[1.8px] rounded-tl-[24px]'
                } w-[4.8%] h-full border-t-[1.8px] border-[#D1C7D7]/55`}
              />

              {/* Curved Right Hook Ending Leading Down Toward Card 06 */}
              <div
                className={`absolute top-0 ${
                  isArabic ? 'left-0 border-l-[1.8px] rounded-tl-[24px]' : 'right-0 border-r-[1.8px] rounded-tr-[24px]'
                } w-[4.8%] h-full border-t-[1.8px] border-[#D1C7D7]/55`}
              />

              {/* Main Horizontal Glowing Lavender Timeline Between Node 01 and Node 06 */}
              <div className="absolute top-0 left-[4.6%] right-[4.6%] h-[2px] overflow-hidden rounded-full">
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? { scaleX: 1, opacity: 1 }
                      : { scaleX: 0, opacity: 0.45 }
                  }
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: isArabic ? 'right center' : 'left center' }}
                  className="w-full h-full bg-gradient-to-r from-[#D1C7D7]/80 via-[#F2F0F4]/95 to-[#D1C7D7]/80 shadow-[0_0_12px_rgba(209,199,215,0.55)]"
                />

                {/* Subtle Soft Lavender Light Pulse Traveling Slowly Along the Timeline */}
                {!prefersReducedMotion && (
                  <motion.div
                    initial={{ x: isArabic ? '100%' : '-20%' }}
                    animate={{ x: isArabic ? '-20%' : '100%' }}
                    transition={{
                      duration: 7.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute top-0 w-28 h-full bg-gradient-to-r from-transparent via-[#F2F0F4] to-transparent opacity-80"
                  />
                )}
              </div>
            </div>

            {/* Six Connected Columns (Each Column Contains Node 01-06 + Connector + Card) */}
            <div className="grid grid-cols-6 gap-3.5 xl:gap-4 items-stretch relative z-10">
              {content.milestones.map((milestone, idx) => {
                const isHovered = hoveredIndex === idx;
                return (
                  <div
                    key={milestone.number}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Circular Numbered Node (01 - 06) */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? false
                          : { opacity: 0, scale: 0.72 }
                      }
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.45,
                        delay: prefersReducedMotion ? 0 : 0.1 + idx * 0.14,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`relative flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#171C2B] border-[1.6px] transition-all duration-250 ${
                        isHovered
                          ? 'border-[#F2F0F4] shadow-[0_0_26px_rgba(209,199,215,0.6),inset_0_0_12px_rgba(209,199,215,0.25)] scale-105'
                          : 'border-[#D1C7D7]/85 shadow-[0_0_18px_rgba(209,199,215,0.3),inset_0_0_8px_rgba(209,199,215,0.12)]'
                      }`}
                    >
                      <span className="font-inter text-[15px] font-bold tracking-tight text-[#F2F0F4]">
                        {milestone.number}
                      </span>
                    </motion.div>

                    {/* Short Vertical Connector With Luminous Contact Dot */}
                    <div
                      aria-hidden="true"
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-[1.5px] h-3.5 transition-colors duration-250 ${
                          isHovered
                            ? 'bg-[#F2F0F4]'
                            : 'bg-gradient-to-b from-[#D1C7D7]/85 to-[#D1C7D7]/45'
                        }`}
                      />
                      <div
                        className={`w-2 h-2 -mt-0.5 rounded-full transition-all duration-250 ${
                          isHovered
                            ? 'bg-[#F2F0F4] shadow-[0_0_12px_#F2F0F4]'
                            : 'bg-[#D1C7D7] shadow-[0_0_8px_rgba(209,199,215,0.75)]'
                        }`}
                      />
                    </div>

                    {/* Milestone Card */}
                    <motion.article
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: prefersReducedMotion ? 0 : 0.14 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onClick={() => setSelectedMilestone(milestone)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedMilestone(milestone);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${milestone.title} - ${milestone.organization}`}
                      className={`group w-full flex-1 relative overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1E2332]/95 via-[#181D2B]/95 to-[#141824]/95 border transition-all duration-250 p-5 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D1C7D7] ${
                        isHovered
                          ? 'border-[#D1C7D7]/75 -translate-y-[3px] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.7),0_0_24px_-6px_rgba(209,199,215,0.2)]'
                          : 'border-[#6F7398]/45 shadow-[0_14px_32px_-10px_rgba(0,0,0,0.55)]'
                      } ${isArabic ? 'font-arabic' : 'font-inter'}`}
                    >
                      {/* Top Edge Luminous Punto Highlight */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D1C7D7]/75 to-transparent"
                      />

                      {/* Subtle Decorative Right-Corner Wave Curve Inside Card */}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 140 100"
                        fill="none"
                        className="pointer-events-none absolute top-3 right-0 w-28 h-20 opacity-30"
                      >
                        <defs>
                          <linearGradient id={`expCardWave-${milestone.number}`} x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1E2332" stopOpacity="0" />
                            <stop offset="100%" stopColor="#6F7398" stopOpacity="0.45" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 10 92 C 55 72, 85 20, 140 15 L 140 100 L 10 100 Z"
                          fill={`url(#expCardWave-${milestone.number})`}
                        />
                        <path
                          d="M 10 92 C 55 72, 85 20, 140 15"
                          stroke="#D1C7D7"
                          strokeOpacity="0.28"
                          strokeWidth="1"
                        />
                      </svg>

                      <div>
                        {/* TOP: Category Icon Box + Rounded Category Pill */}
                        <div className="relative z-10 flex items-center gap-2.5 mb-4">
                          <div
                            className={`w-[42px] h-[42px] rounded-[12px] bg-gradient-to-b from-[#2A3148] to-[#171C2B] border transition-colors duration-250 flex items-center justify-center text-[#D1C7D7] shrink-0 shadow-inner ${
                              isHovered ? 'border-[#D1C7D7]/75' : 'border-[#6F7398]/50'
                            }`}
                          >
                            <MilestoneIcon type={milestone.iconType} className="w-5 h-5" />
                          </div>

                          <span
                            className={`px-3 py-1 rounded-full bg-[#22283B]/90 border border-[#6F7398]/45 text-[11.5px] font-medium text-[#F2F0F4] leading-tight ${
                              isArabic ? 'font-arabic' : 'font-manrope'
                            }`}
                          >
                            {milestone.category}
                          </span>
                        </div>

                        {/* MIDDLE: Role/Qualification Title */}
                        <h3
                          className={`${
                            isArabic
                              ? 'font-arabic text-[16.5px] leading-[1.35]'
                              : 'font-manrope text-[16.5px] xl:text-[17px] leading-[1.28] tracking-[-0.015em]'
                          } relative z-10 font-bold text-[#F2F0F4] mb-3`}
                        >
                          {milestone.title}
                        </h3>

                        {/* Organization with Small Building Icon */}
                        <div className="relative z-10 flex items-start gap-2 text-[13px] leading-[1.42] text-[#CDD0D9] mb-5">
                          <Landmark
                            aria-hidden="true"
                            className="w-4 h-4 text-[#D1C7D7]/80 shrink-0 mt-0.5"
                            strokeWidth={1.6}
                          />
                          <span className="font-medium">{milestone.organization}</span>
                        </div>
                      </div>

                      {/* BOTTOM: Thin Divider + Date Range + Optional Location */}
                      <div className="relative z-10 pt-3.5 border-t border-[#373E57]/80 flex items-center justify-between gap-2 text-[12px] text-[#E2E4EC]">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Calendar
                            aria-hidden="true"
                            className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0"
                            strokeWidth={1.7}
                          />
                          <span dir="ltr" className="font-inter font-medium whitespace-nowrap">
                            {milestone.dates}
                          </span>
                        </div>

                        {milestone.location && (
                          <>
                            <span
                              aria-hidden="true"
                              className="w-px h-3.5 bg-[#373E57] shrink-0"
                            />
                            <div className="flex items-center gap-1 min-w-0">
                              <MapPin
                                aria-hidden="true"
                                className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0"
                                strokeWidth={1.7}
                              />
                              <span className="font-medium leading-tight">
                                {milestone.location}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* 3. MOBILE VERTICAL CAREER TIMELINE (<768px) */}
        <div className="md:hidden relative ps-8 space-y-6">
          {/* Thin Vertical Lavender Timeline Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-3 bottom-3 start-[17px] w-[1.5px] bg-gradient-to-b from-[#D1C7D7]/80 via-[#D1C7D7]/55 to-[#D1C7D7]/20"
          />

          {content.milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : idx * 0.08,
              }}
              className="relative"
            >
              {/* Circular Numbered Node on Vertical Line */}
              <div className="absolute -start-8 top-4 w-9 h-9 rounded-full bg-[#171C2B] border border-[#D1C7D7]/80 shadow-[0_0_14px_rgba(209,199,215,0.28)] flex items-center justify-center z-10">
                <span className="font-inter text-xs font-bold text-[#F2F0F4]">
                  {milestone.number}
                </span>
              </div>

              {/* Mobile Milestone Card */}
              <article
                onClick={() => setSelectedMilestone(milestone)}
                className={`rounded-[18px] bg-gradient-to-b from-[#1E2332]/95 to-[#141824]/95 border border-[#6F7398]/45 p-5 shadow-lg cursor-pointer ${
                  isArabic ? 'font-arabic' : 'font-inter'
                }`}
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-[11px] bg-[#242B40] border border-[#6F7398]/50 flex items-center justify-center text-[#D1C7D7] shrink-0">
                    <MilestoneIcon type={milestone.iconType} className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#22283B] border border-[#6F7398]/45 text-xs font-medium text-[#F2F0F4]">
                    {milestone.category}
                  </span>
                </div>

                <h3
                  className={`${
                    isArabic ? 'font-arabic text-lg' : 'font-manrope text-[17px]'
                  } font-bold text-[#F2F0F4] mb-2 leading-snug`}
                >
                  {milestone.title}
                </h3>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-[#CDD0D9] mb-3">
                  <Landmark className="w-4 h-4 text-[#D1C7D7]/80 shrink-0 mt-0.5" />
                  <span>{milestone.organization}</span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#CDD0D9]/90 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="pt-3 border-t border-[#373E57]/75 flex items-center justify-between gap-3 text-xs text-[#E2E4EC] flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D1C7D7]" />
                    <span dir="ltr" className="font-inter font-medium">
                      {milestone.dates}
                    </span>
                  </div>

                  {milestone.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D1C7D7]" />
                      <span>{milestone.location}</span>
                    </div>
                  )}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Accessible Expandable Milestone Detail Modal */}
      {selectedMilestone && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedMilestone(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-[#1E2332] border border-[#6F7398]/60 rounded-[22px] max-w-lg w-full p-7 sm:p-8 shadow-2xl relative space-y-5 ${
              isArabic ? 'font-arabic' : 'font-inter'
            }`}
          >
            <button
              type="button"
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-4 end-4 p-2 rounded-full bg-[#0F1218]/80 text-[#F2F0F4] hover:text-[#D1C7D7] focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label={content.closeLabel}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#272E45] border border-[#D1C7D7]/45 flex items-center justify-center text-[#D1C7D7]">
                <MilestoneIcon type={selectedMilestone.iconType} className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#141824] border border-[#D1C7D7]/55 text-xs font-bold text-[#D1C7D7]">
                  {selectedMilestone.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#242B3E] border border-[#6F7398]/45 text-xs font-semibold text-[#F2F0F4]">
                  {selectedMilestone.category}
                </span>
              </div>
            </div>

            <div>
              <h3
                className={`${
                  isArabic ? 'font-arabic text-xl' : 'font-manrope text-xl'
                } font-bold text-[#F2F0F4] leading-snug`}
              >
                {selectedMilestone.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#CDD0D9] mt-2">
                <Landmark className="w-4 h-4 text-[#D1C7D7] shrink-0" />
                <span>{selectedMilestone.organization}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141824] border border-[#373E57] space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D1C7D7]">
                {content.detailsHeading}
              </p>
              <p className="text-sm text-[#E5E6EE] leading-relaxed">
                {selectedMilestone.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[#373E57]/75 flex items-center justify-between gap-4 text-xs sm:text-sm text-[#CDD0D9] flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D1C7D7]" />
                <span dir="ltr" className="font-inter font-medium text-[#F2F0F4]">
                  {selectedMilestone.dates}
                </span>
              </div>
              {selectedMilestone.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D1C7D7]" />
                  <span className="font-medium text-[#F2F0F4]">
                    {selectedMilestone.location}
                  </span>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="px-5 py-2.5 rounded-xl bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] text-xs sm:text-sm font-semibold transition-colors"
              >
                {content.closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
