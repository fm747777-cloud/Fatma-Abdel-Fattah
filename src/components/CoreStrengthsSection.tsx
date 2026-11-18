import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Layers, TrendingUp } from 'lucide-react';

interface CoreStrengthsSectionProps {
  lang: 'EN' | 'AR';
}

interface StrengthCardData {
  number: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  focusLabel: string;
  focusValue: string;
  iconType: 'bars' | 'layers' | 'trend';
}

function StrengthIcon({ type }: { type: 'bars' | 'layers' | 'trend' }) {
  if (type === 'bars') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-[22px] h-[22px] text-[#D1C7D7]"
        aria-hidden="true"
      >
        <rect x="5" y="13" width="3.2" height="6" rx="1.2" fill="currentColor" fillOpacity="0.85" />
        <rect x="10.4" y="9.5" width="3.2" height="9.5" rx="1.2" fill="currentColor" fillOpacity="0.92" />
        <rect x="15.8" y="5.5" width="3.2" height="13.5" rx="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (type === 'layers') {
    return <Layers className="w-[22px] h-[22px] text-[#D1C7D7]" strokeWidth={1.75} />;
  }
  return <TrendingUp className="w-[22px] h-[22px] text-[#D1C7D7]" strokeWidth={1.9} />;
}

function FocusCrosshairIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-[20px] h-[20px] text-[#D1C7D7] shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12" y1="2.5" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="18.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2.5" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="18.5" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function CoreStrengthsSection({ lang }: CoreStrengthsSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isArabic = lang === 'AR';

  const content = {
    EN: {
      title: 'Core Strengths',
      subtitle: 'The mindset behind every analysis, decision, and solution I build.',
      cards: [
        {
          number: '01',
          titleLine1: 'Strong',
          titleLine2: 'Analytical Thinking',
          description:
            'Deconstructing complex datasets to uncover patterns, operational inefficiencies, and meaningful opportunities for improvement.',
          focusLabel: 'Focus:',
          focusValue: 'Logic, structure, and depth.',
          iconType: 'bars',
        },
        {
          number: '02',
          titleLine1: 'Attention',
          titleLine2: 'to Detail',
          description:
            'Applying rigorous validation, cleaning, and data quality practices to ensure reliable analysis and trustworthy reporting.',
          focusLabel: 'Focus:',
          focusValue: 'Accuracy, consistency, and discipline.',
          iconType: 'layers',
        },
        {
          number: '03',
          titleLine1: 'Insight-Driven',
          titleLine2: 'Decisions',
          description:
            'Translating technical findings into clear business insights that support smarter decisions and actionable outcomes.',
          focusLabel: 'Focus:',
          focusValue: 'Clarity, impact, and action.',
          iconType: 'trend',
        },
      ] as StrengthCardData[],
    },
    AR: {
      title: 'نقاط القوة الأساسية',
      subtitle: 'المنهج الذي أتبعه في كل تحليل وقرار وحل أعمل على تطويره.',
      cards: [
        {
          number: '01',
          titleLine1: 'التفكير',
          titleLine2: 'التحليلي',
          description:
            'تحليل مجموعات البيانات المعقدة لاكتشاف الأنماط وأوجه القصور التشغيلي والفرص الحقيقية للتحسين.',
          focusLabel: 'التركيز:',
          focusValue: 'المنطق والتنظيم والعمق.',
          iconType: 'bars',
        },
        {
          number: '02',
          titleLine1: 'الاهتمام',
          titleLine2: 'بالتفاصيل',
          description:
            'تطبيق ممارسات دقيقة لتنظيف البيانات والتحقق من جودتها واتساقها، لضمان تحليلات موثوقة وتقارير يمكن الاعتماد عليها.',
          focusLabel: 'التركيز:',
          focusValue: 'الدقة والاتساق والانضباط.',
          iconType: 'layers',
        },
        {
          number: '03',
          titleLine1: 'قرارات مبنية',
          titleLine2: 'على الرؤى',
          description:
            'تحويل النتائج التقنية إلى رؤى واضحة تدعم قرارات أعمال أكثر ذكاءً وخطوات عملية قابلة للتنفيذ.',
          focusLabel: 'التركيز:',
          focusValue: 'الوضوح والأثر والتطبيق.',
          iconType: 'trend',
        },
      ] as StrengthCardData[],
    },
  }[lang];

  // Full-width bottom dotted wave mesh curves & particles matching the reference screenshot
  const wavePaths = Array.from({ length: 16 }, (_, i) => {
    const offset = i * 6.5;
    const y0 = 195 + offset * 0.4;
    const c1y = 48 + offset * 0.9;
    const c2y = 235 - offset * 0.35;
    const yMid = 148 + offset * 0.5;
    const c3y = 65 + offset * 0.85;
    const c4y = 225 - offset * 0.4;
    const yEnd = 175 + offset * 0.55;
    return `M -40 ${y0} C 220 ${c1y}, 460 ${c2y}, 720 ${yMid} C 980 ${c3y}, 1220 ${c4y}, 1480 ${yEnd}`;
  });

  const waveDots = Array.from({ length: 150 }, (_, i) => {
    const row = i % 3;
    const col = Math.floor(i / 3);
    const t = col / 49;
    const x = 16 + t * 1408 + row * 5;
    const y =
      152 +
      row * 9 +
      Math.sin(t * Math.PI * 3.1 + row * 0.3) * 44 +
      Math.cos(t * Math.PI * 5.8) * 14;
    const r = col % 4 === 0 ? 1.45 : 0.95;
    const edgeFade = Math.sin(t * Math.PI);
    const opacity = Math.max(0.08, edgeFade * (row === 0 ? 0.58 : row === 1 ? 0.38 : 0.22));
    return { x, y, r, opacity };
  });

  return (
    <section
      id="strengths"
      className="relative overflow-hidden bg-[#0F1218] pt-24 pb-32 lg:pt-28 lg:pb-36 border-b border-[#373E57]/30"
    >
      {/* Subtle Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[620px] h-[260px] rounded-full bg-[#373E57]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[980px] h-[240px] rounded-full bg-[#1E2332]/45 blur-3xl"
      />

      {/* Lower Dotted Lavender Data Wave Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] sm:h-[250px] opacity-85 select-none z-0"
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
            <linearGradient id="coreStrengthsWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
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
              stroke="url(#coreStrengthsWaveGrad)"
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

      {/* Main Centered Container (1360px - 1400px) */}
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* 1. Section Heading with Top Star Ornament & Lavender Underline */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          {/* Small Four-Point Star Ornament with Thin Horizontal Lines */}
          <div
            aria-hidden="true"
            className="flex items-center justify-center gap-3.5 mb-3"
          >
            <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#D1C7D7]/45 to-[#D1C7D7]/80" />
            <span className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute inset-0 rounded-full bg-[#D1C7D7]/25 blur-[5px]" />
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 relative">
                <path
                  d="M 10 1.5 Q 10.8 9.2 18.5 10 Q 10.8 10.8 10 18.5 Q 9.2 10.8 1.5 10 Q 9.2 9.2 10 1.5 Z"
                  fill="#D1C7D7"
                />
              </svg>
            </span>
            <span className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-[#D1C7D7]/45 to-[#D1C7D7]/80" />
          </div>

          {/* Main Title */}
          <h2
            className={`${
              isArabic
                ? 'font-arabic text-3xl sm:text-5xl lg:text-[50px] leading-[1.25]'
                : 'font-cambria text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-[-0.02em]'
            } font-bold text-[#F2F0F4]`}
          >
            {content.title}
          </h2>

          {/* Refined Decorative Horizontal Lavender Underline */}
          <div
            aria-hidden="true"
            className="flex justify-center mt-2.5 mb-4"
          >
            <svg
              viewBox="0 0 340 12"
              fill="none"
              className="w-[240px] sm:w-[320px] h-3 overflow-visible"
            >
              <path
                d="M 8 8 C 95 4, 245 4, 332 8"
                stroke="#6F7398"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeOpacity="0.55"
              />
              <path
                d="M 105 6.2 C 150 4.5, 195 4.5, 235 6.2"
                stroke="#D1C7D7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.95"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p
            className={`${
              isArabic ? 'font-arabic' : 'font-inter'
            } text-[16px] sm:text-[18px] font-normal text-[#CDD0D9] leading-relaxed`}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* 2. Connected Three-Step Structure (Desktop Horizontal Line + Nodes 01, 02, 03) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-7 xl:gap-8 relative mb-0">
          {/* Continuous Horizontal Connecting Line Between Center of Col 1 (16.666%) and Center of Col 3 (83.333%) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[25px] left-[16.6667%] right-[16.6667%] h-[1.5px] z-0"
          >
            <motion.div
              initial={
                prefersReducedMotion
                  ? { scaleX: 1, opacity: 1 }
                  : { scaleX: 0, opacity: 0.4 }
              }
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: isArabic ? 'right center' : 'left center' }}
              className="w-full h-full bg-gradient-to-r from-[#D1C7D7]/75 via-[#D1C7D7]/85 to-[#D1C7D7]/75 shadow-[0_0_10px_rgba(209,199,215,0.3)]"
            />
          </div>

          {content.cards.map((card, idx) => (
            <div key={card.number} className="flex flex-col items-center relative z-10">
              {/* Circular Node 01 / 02 / 03 */}
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, scale: 0.75 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : 0.15 + idx * 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#171C2B] border-[1.5px] border-[#D1C7D7]/80 shadow-[0_0_22px_rgba(209,199,215,0.25),inset_0_0_10px_rgba(209,199,215,0.12)]"
              >
                <span className="font-inter text-[16px] font-bold tracking-tight text-[#D1C7D7]">
                  {card.number}
                </span>
              </motion.div>

              {/* Short Vertical Connector With Subtle Base Pedestal Leading to Card */}
              <div
                aria-hidden="true"
                className="flex flex-col items-center"
              >
                <div className="w-px h-3.5 bg-gradient-to-b from-[#D1C7D7]/65 to-[#6F7398]/40" />
                <div className="w-2.5 h-1 rounded-t-full bg-[#6F7398]/45" />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Three Equal-Width Strength Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8 items-stretch">
          {content.cards.map((card, idx) => (
            <motion.article
              key={card.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.52,
                delay: prefersReducedMotion ? 0 : 0.12 + idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative rounded-[20px] bg-gradient-to-b from-[#1E2332]/95 via-[#1A1F2E]/95 to-[#161B28]/95 border border-[#373E57]/90 hover:border-[#D1C7D7]/55 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_-12px_rgba(0,0,0,0.65),0_0_24px_-6px_rgba(209,199,215,0.16)] transition-all duration-200 p-7 sm:p-8 flex flex-col justify-between shadow-[0_14px_34px_-10px_rgba(0,0,0,0.55)] ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${isArabic ? 'font-arabic' : 'font-inter'}`}
            >
              {/* Mobile/Tablet Numbered Node Badge */}
              <div className="lg:hidden flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#171C2B] border border-[#D1C7D7]/75 text-xs font-bold text-[#D1C7D7] shadow-[0_0_14px_rgba(209,199,215,0.2)]">
                  {card.number}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#D1C7D7]/40 to-transparent" />
              </div>

              <div>
                {/* Card Top: [Icon Container] | [Card Title] */}
                <div className="flex items-center gap-4 pb-6">
                  <div className="w-[50px] h-[50px] rounded-[13px] bg-gradient-to-b from-[#2A3147]/90 to-[#1B2030]/95 border border-[#6F7398]/45 group-hover:border-[#D1C7D7]/60 transition-colors duration-200 flex items-center justify-center shrink-0 shadow-inner">
                    <StrengthIcon type={card.iconType} />
                  </div>

                  {/* Thin Vertical Lavender Divider */}
                  <div
                    aria-hidden="true"
                    className="w-px h-11 bg-[#6F7398]/55 shrink-0"
                  />

                  <h3
                    className={`${
                      isArabic
                        ? 'font-arabic text-[19px] sm:text-[20px] leading-[1.3]'
                        : 'font-manrope text-[19px] sm:text-[20.5px] leading-[1.24] tracking-[-0.015em]'
                    } font-bold text-[#F2F0F4]`}
                  >
                    <span className="block">{card.titleLine1}</span>
                    <span className="block">{card.titleLine2}</span>
                  </h3>
                </div>

                {/* Card Body Description */}
                <p className="text-[15.5px] sm:text-[16px] leading-[1.62] text-[#E5E6EE] font-normal mb-7">
                  {card.description}
                </p>
              </div>

              {/* Bottom Focus Strip */}
              <div className="rounded-[12px] bg-[#262C3F]/80 border border-[#373E57]/90 px-4 py-3.5 flex items-center gap-3 min-h-[54px]">
                <FocusCrosshairIcon />
                <p className="text-[14px] sm:text-[14.5px] leading-[1.45] text-[#F2F0F4]">
                  <span className="font-semibold text-[#D1C7D7]">{card.focusLabel} </span>
                  <span className="font-normal text-[#F2F0F4]/95">{card.focusValue}</span>
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
