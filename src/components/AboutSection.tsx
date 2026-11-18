import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  BarChart2,
  Lightbulb,
  Target,
  ArrowRight,
  Briefcase,
  Brain,
  Layers,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface AboutSectionProps {
  lang: 'EN' | 'AR';
}

interface StoryCardItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  paragraphs: string[];
}

interface AboutStoryCardProps {
  card: StoryCardItem;
  index: number;
  prefersReducedMotion: boolean | null;
}

function AboutStoryCard({ card, index, prefersReducedMotion }: AboutStoryCardProps) {
  const IconComponent = card.Icon;
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: prefersReducedMotion ? 0 : 0.08 + index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="about-story-card"
    >
      <div className="about-story-identity">
        <div className="about-story-icon">
          <IconComponent className="w-[18px] h-[18px]" strokeWidth={1.7} />
        </div>
        <h3>
          <span className="block">{card.titleLine1}</span>
          <span className="block">{card.titleLine2}</span>
        </h3>
      </div>

      <div className="about-story-description">
        {card.paragraphs.map((p, pIdx) => (
          <p key={pIdx}>{p}</p>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isArabic = lang === 'AR';

  const content = {
    EN: {
      label: 'ABOUT ME',
      headlineLines: {
        prefix: 'I don’t see data as just information; I see opportunities in it to make ',
        highlightFirst: 'smarter ',
        highlightLast: 'decisions.',
      },
      process: [
        { key: 'analyze', label: 'Analyze', Icon: BarChart2 },
        { key: 'discover', label: 'Discover', Icon: Lightbulb },
        { key: 'decide', label: 'Decide', Icon: Target },
      ],
      introParts: [
        { text: "I'm ", bold: false },
        { text: 'Fatma Abdel Fattah', bold: true },
        { text: ', a Data Analyst with an academic background in ', bold: false },
        { text: 'Management Information Systems', bold: true },
        { text: '. I combine analytical thinking, business understanding, and ', bold: false },
        { text: 'Applied AI', bold: true },
        {
          text: ' to transform complex data into meaningful insights that create real value and impact.',
          bold: false,
        },
      ],
      cards: [
        {
          id: 'foundation',
          titleLine1: 'Professional',
          titleLine2: 'Foundation',
          Icon: Briefcase,
          paragraphs: [
            'My professional experience at the Egyptian Public Prosecution taught me that data is more than just information to be collected or organized. Within its details lie deeper meanings, patterns, and connections that can help us understand situations from different perspectives and uncover insights that support informed decision-making.',
          ],
        },
        {
          id: 'mindset',
          titleLine1: 'Analytical',
          titleLine2: 'Mindset',
          Icon: Brain,
          paragraphs: [
            "I believe that meaningful analysis doesn't begin with searching for answers, but with asking the right questions and understanding the root causes of problems before seeking solutions.",
          ],
        },
        {
          id: 'impact',
          titleLine1: 'Applied',
          titleLine2: 'Impact',
          Icon: Layers,
          paragraphs: [
            'Guided by this mindset, I led Data Analytics and Applied AI efforts in a project that leveraged Arabic Natural Language Processing (NLP) to understand customer sentiment and transform feedback into actionable insights. I also contributed to developing an intelligent academic system that uses data analytics to identify early indicators of academic difficulties and support proactive monitoring and timely intervention.',
            'To me, the true value of analysis goes beyond simply finding results. It lies in understanding why things happen, what the data reveals, and how that knowledge can be transformed into more informed, intelligent decisions.',
          ],
        },
      ],
      identityStrip: [
        {
          label: 'BACKGROUND',
          value: 'Management Information Systems',
          Icon: GraduationCap,
        },
        {
          label: 'FOCUS',
          value: 'Data Analytics & Applied AI',
          Icon: Target,
        },
        {
          label: 'GOAL',
          value: 'Turning Data into Real Impact',
          Icon: Sparkles,
        },
      ],
    },
    AR: {
      label: 'عني',
      headlineLines: {
        prefix: 'لا أرى البيانات مجرد معلومات، بل أرى فيها فرصًا لصناعة ',
        highlightFirst: 'قرارات ',
        highlightLast: 'أذكى.',
      },
      process: [
        { key: 'analyze', label: 'تحليل', Icon: BarChart2 },
        { key: 'discover', label: 'اكتشاف', Icon: Lightbulb },
        { key: 'decide', label: 'قرار', Icon: Target },
      ],
      introParts: [
        { text: 'أنا ', bold: false },
        { text: 'فاطمة عبد الفتاح', bold: true },
        { text: '، محللة بيانات بخلفية أكاديمية في ', bold: false },
        { text: 'نظم المعلومات الإدارية', bold: true },
        { text: '، أجمع بين التفكير التحليلي وفهم الأعمال و', bold: false },
        { text: 'الذكاء الاصطناعي التطبيقي', bold: true },
        { text: '، لتحويل البيانات المعقدة إلى رؤى ذات قيمة وأثر.', bold: false },
      ],
      cards: [
        {
          id: 'foundation',
          titleLine1: 'الأساس',
          titleLine2: 'المهني',
          Icon: Briefcase,
          paragraphs: [
            'علّمتني تجربتي المهنية في النيابة العامة المصرية أن البيانات ليست مجرد معلومات تُجمع أو تُنظَّم، بل قد تحمل بين تفاصيلها دلالات أعمق، وتكشف عن أنماط وعلاقات تساعدنا على فهم الواقع من زوايا مختلفة، والوصول إلى استنتاجات تدعم اتخاذ القرار.',
          ],
        },
        {
          id: 'mindset',
          titleLine1: 'العقلية',
          titleLine2: 'التحليلية',
          Icon: Brain,
          paragraphs: [
            'أؤمن بأن التحليل الحقيقي لا يبدأ بالبحث عن الإجابات، بل بطرح الأسئلة الصحيحة، وفهم أسباب المشكلات قبل البحث عن حلولها.',
          ],
        },
        {
          id: 'impact',
          titleLine1: 'الأثر',
          titleLine2: 'التطبيقي',
          Icon: Layers,
          paragraphs: [
            'ومن هذا المنطلق، قدت أعمال تحليل البيانات والذكاء الاصطناعي التطبيقي في مشروع يستخدم تقنيات معالجة اللغة العربية لفهم مشاعر العملاء وتحويل آرائهم إلى رؤى قابلة للتطبيق، كما ساهمت في تطوير نظام جامعي ذكي يعتمد على تحليل البيانات لرصد مؤشرات التعثر الأكاديمي ودعم المتابعة والتدخل المبكر.',
            'بالنسبة لي، لا تكتمل قيمة التحليل بمجرد الوصول إلى النتائج؛ بل تبدأ حين نفهم لماذا حدثت الأمور، وما الذي تكشفه البيانات، وكيف يمكن تحويل تلك المعرفة إلى قرارات أكثر وعيًا وذكاءً.',
          ],
        },
      ],
      identityStrip: [
        {
          label: 'الخلفية الأكاديمية',
          value: 'نظم المعلومات الإدارية',
          Icon: GraduationCap,
        },
        {
          label: 'التركيز',
          value: 'تحليل البيانات والذكاء الاصطناعي التطبيقي',
          Icon: Target,
        },
        {
          label: 'الهدف',
          value: 'تحويل البيانات إلى أثر حقيقي',
          Icon: Sparkles,
        },
      ],
    },
  }[lang];

  // Static subtle data-inspired wave mesh curves & particle dots for bottom-left backdrop
  const waveLines = Array.from({ length: 14 }, (_, i) => {
    const offset = i * 8;
    const yStart = 210 + offset * 0.55;
    const c1y = 55 + offset * 0.85;
    const c2y = 260 - offset * 0.45;
    const yEnd = 165 + offset * 0.7;
    return `M -40 ${yStart} C 160 ${c1y}, 340 ${c2y}, 640 ${yEnd}`;
  });

  const waveDots = Array.from({ length: 96 }, (_, i) => {
    const row = i % 3;
    const col = Math.floor(i / 3);
    const t = col / 31;
    const x = 8 + t * 590 + row * 6;
    const baseY =
      188 +
      row * 11 +
      Math.sin(t * Math.PI * 2.2 + row * 0.35) * 54 +
      Math.cos(t * Math.PI * 4.1) * 12;
    const r = col % 3 === 0 ? 1.35 : 0.9;
    const opacity = (1 - t * 0.72) * (row === 0 ? 0.52 : row === 1 ? 0.36 : 0.22);
    return { x, y: baseY, r, opacity };
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0F1218] py-24 lg:py-28 border-t border-b border-[#373E57]/30"
    >
      {/* Subtle Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[#1E2332]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 start-0 w-[480px] h-[360px] rounded-full bg-[#373E57]/12 blur-3xl"
      />

      {/* Bottom-Left Subtle Static Data-Inspired Wave Mesh */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 ${
          isArabic ? 'right-0 -scale-x-100' : 'left-0'
        } w-[560px] sm:w-[680px] h-[280px] opacity-80 select-none`}
        style={{
          maskImage:
            'radial-gradient(ellipse 85% 90% at 18% 92%, black 25%, transparent 82%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 90% at 18% 92%, black 25%, transparent 82%)',
        }}
      >
        <svg
          viewBox="0 0 640 280"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D1C7D7" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#6F7398" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#373E57" stopOpacity="0" />
            </linearGradient>
          </defs>
          {waveLines.map((d, idx) => (
            <path
              key={idx}
              d={d}
              stroke="url(#aboutWaveGrad)"
              strokeWidth={idx % 3 === 0 ? '1.1' : '0.7'}
              strokeOpacity={0.55 - idx * 0.03}
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

      {/* Main Centered Editorial Container: max-w-[1360px], 48-64px desktop padding, 44% / 56% grid */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] gap-12 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT EDITORIAL COLUMN (~44%) */}
          <div className="relative flex flex-col justify-between pt-1">
            {/* Decorative Sweeping Lavender Curve Safely Behind Headline */}
            <div
              aria-hidden="true"
              className={`pointer-events-none hidden sm:block absolute -top-3 ${
                isArabic ? '-left-4 -scale-x-100' : 'right-0 xl:right-2'
              } w-[360px] xl:w-[410px] h-[390px] z-0`}
            >
              <svg viewBox="0 0 410 390" fill="none" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="headlineArcGrad" x1="0%" y1="15%" x2="95%" y2="85%">
                    <stop offset="0%" stopColor="#D1C7D7" stopOpacity="0.05" />
                    <stop offset="45%" stopColor="#D1C7D7" stopOpacity="0.38" />
                    <stop offset="72%" stopColor="#D1C7D7" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#D1C7D7" stopOpacity="0.04" />
                  </linearGradient>
                  <radialGradient id="starHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F2F0F4" stopOpacity="0.95" />
                    <stop offset="35%" stopColor="#D1C7D7" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#D1C7D7" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <motion.path
                  d="M 42 78 C 175 10, 345 18, 384 134 C 416 232, 314 336, 192 366"
                  stroke="url(#headlineArcGrad)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.3 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Tiny Luminous Point Near Upper Curve */}
                <motion.g
                  transform="translate(332, 53)"
                  initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 1.05 }}
                >
                  <circle cx="0" cy="0" r="13" fill="url(#starHalo)" />
                  <path
                    d="M 0 -7 Q 0.65 -0.65 7 0 Q 0.65 0.65 0 7 Q -0.65 0.65 -7 0 Q -0.65 -0.65 0 -7 Z"
                    fill="#F2F0F4"
                  />
                </motion.g>
              </svg>
            </div>

            {/* Section Label + Editorial Main Heading */}
            <motion.div
              className="relative z-10"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Short Lavender Horizontal Line + ABOUT ME */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className="w-8 h-[1.5px] bg-[#D1C7D7]/85 rounded-full shrink-0" />
                <span
                  className={`text-xs font-semibold uppercase text-[#F2F0F4] ${
                    isArabic ? 'tracking-normal' : 'tracking-[0.22em]'
                  }`}
                >
                  {content.label}
                </span>
              </div>

              {/* Editorial Main Heading */}
              <h2
                className={`${
                  isArabic
                    ? 'font-arabic text-3xl sm:text-4xl lg:text-[44px] leading-[1.32] text-right max-w-[520px]'
                    : 'font-cambria text-[38px] sm:text-[46px] lg:text-[48px] xl:text-[52px] leading-[1.12] tracking-[-0.015em] text-left max-w-[495px]'
                } font-bold text-[#F2F0F4]`}
              >
                <span>{content.headlineLines.prefix}</span>
                <span className={`text-[#D1C7D7] ${isArabic ? '' : 'italic'} font-bold`}>
                  {content.headlineLines.highlightFirst}
                  <span className="relative inline-block">
                    {content.headlineLines.highlightLast}
                    {/* Delicate Hand-Drawn Editorial Lavender Underline */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 220 14"
                      fill="none"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none overflow-visible"
                    >
                      <path
                        d="M 2 9 C 58 2.5, 148 1.5, 218 7.5"
                        stroke="#D1C7D7"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeOpacity="0.88"
                      />
                      <path
                        d="M 16 11.5 C 74 6, 152 5.5, 206 9.5"
                        stroke="#D1C7D7"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                        strokeOpacity="0.45"
                      />
                    </svg>
                  </span>
                </span>
              </h2>
            </motion.div>

            {/* Analytical Process Sequence: Analyze -> Discover -> Decide */}
            <motion.div
              className="relative z-10 mt-14 lg:mt-16 flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.18 }}
            >
              {content.process.map((step, idx) => {
                const IconComponent = step.Icon;
                return (
                  <React.Fragment key={step.key}>
                    <div className="group w-[90px] sm:w-[94px] h-[90px] sm:h-[94px] rounded-2xl bg-[#1E2332]/85 backdrop-blur-md border border-[#373E57] hover:border-[#D1C7D7]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center gap-2.5 px-2 shadow-lg shadow-black/25 shrink-0">
                      <IconComponent
                        className="w-[22px] h-[22px] text-[#D1C7D7] group-hover:scale-105 transition-transform duration-200"
                        strokeWidth={1.65}
                      />
                      <span
                        className={`text-[12.5px] font-medium text-[#F2F0F4] ${
                          isArabic ? 'font-arabic' : 'font-inter'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {idx < content.process.length - 1 && (
                      <ArrowRight
                        aria-hidden="true"
                        className={`w-4 h-4 text-[#D1C7D7]/70 shrink-0 ${
                          isArabic ? 'rotate-180' : ''
                        }`}
                        strokeWidth={1.65}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT STORYTELLING COLUMN (~56%) */}
          <div className={`flex flex-col ${isArabic ? 'font-arabic' : 'font-inter'}`}>
            {/* 1. Introduction Panel (aligned at top edge with editorial column) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[18px] bg-[#1E2332] border border-[#373E57] p-6 sm:p-7 shadow-xl shadow-black/25"
            >
              {/* Subtle internal lavender curve sheen in corner */}
              <svg
                aria-hidden="true"
                viewBox="0 0 220 120"
                fill="none"
                className={`pointer-events-none absolute bottom-0 ${
                  isArabic ? 'left-0 -scale-x-100' : 'right-0'
                } w-44 h-24 opacity-20`}
              >
                <path
                  d="M 30 118 C 90 98, 150 48, 220 12"
                  stroke="#D1C7D7"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
                <path
                  d="M 60 120 C 115 98, 168 58, 220 28"
                  stroke="#D1C7D7"
                  strokeWidth="0.7"
                  strokeOpacity="0.4"
                />
              </svg>

              <div className="relative z-10 flex items-stretch gap-5">
                {/* Thin Vertical Lavender Accent Line */}
                <div className="w-[3px] rounded-full bg-[#D1C7D7]/85 shrink-0" />

                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#E2E2EA] font-normal">
                  {content.introParts.map((part, idx) =>
                    part.bold ? (
                      <strong key={idx} className="font-semibold text-[#F2F0F4]">
                        {part.text}
                      </strong>
                    ) : (
                      <span key={idx}>{part.text}</span>
                    )
                  )}
                </p>
              </div>
            </motion.div>

            {/* 2. Three Compact Horizontal Story Cards */}
            <div className="mt-3.5 flex flex-col gap-3.5">
              {content.cards.map((card, idx) => (
                <AboutStoryCard
                  key={card.id}
                  card={card}
                  index={idx}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>

            {/* 3. Bottom Professional Identity Summary Strip */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.35 }}
              className="mt-6 pt-6 border-t border-[#373E57]/80"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 items-center">
                {content.identityStrip.map((item, idx) => {
                  const IconComponent = item.Icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3.5 min-w-0 ${
                        idx < content.identityStrip.length - 1
                          ? 'sm:border-e sm:border-[#373E57]/80 sm:pe-5'
                          : ''
                      } ${idx > 0 ? 'sm:ps-5' : ''}`}
                    >
                      <IconComponent
                        className="w-6 h-6 text-[#D1C7D7] shrink-0"
                        strokeWidth={1.6}
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-[#6F7398] font-semibold">
                          {item.label}
                        </p>
                        <p className="text-[14px] font-semibold text-[#F2F0F4] mt-0.5 leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
