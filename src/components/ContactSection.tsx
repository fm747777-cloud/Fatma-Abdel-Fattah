import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Mail,
  ArrowUpRight,
  Send,
  User,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Phone,
} from 'lucide-react';

interface ContactSectionProps {
  lang: 'EN' | 'AR';
}

interface ContactCardItem {
  id: 'email' | 'whatsapp' | 'linkedin' | 'github';
  title: string;
  detail: string;
  buttonLabel: string;
  href: string;
  isPrimary?: boolean;
  external?: boolean;
}

function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.75C6.89 2.75 2.75 6.89 2.75 12C2.75 13.64 3.18 15.22 3.99 16.61L2.8 21.2L7.51 20.03C8.86 20.79 10.41 21.25 12 21.25C17.11 21.25 21.25 17.11 21.25 12C21.25 6.89 17.11 2.75 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.45 8.6C9.24 8.14 9.02 8.13 8.82 8.12C8.65 8.11 8.46 8.11 8.27 8.11C8.08 8.11 7.77 8.18 7.51 8.46C7.25 8.75 6.52 9.43 6.52 10.82C6.52 12.21 7.53 13.56 7.67 13.75C7.81 13.94 9.63 16.88 12.5 18.01C14.89 18.95 15.38 18.76 15.9 18.71C16.42 18.66 17.58 18.02 17.82 17.34C18.06 16.66 18.06 16.07 17.99 15.95C17.92 15.83 17.73 15.76 17.44 15.62C17.15 15.48 15.78 14.8 15.52 14.71C15.26 14.61 15.07 14.57 14.88 14.85C14.69 15.13 14.15 15.76 13.98 15.95C13.81 16.14 13.65 16.17 13.36 16.03C13.07 15.89 12.16 15.58 11.07 14.61C10.22 13.85 9.65 12.91 9.48 12.63C9.31 12.35 9.46 12.19 9.61 12.05C9.74 11.92 9.9 11.72 10.04 11.55C10.18 11.38 10.23 11.27 10.32 11.08C10.41 10.89 10.37 10.72 10.3 10.58C10.23 10.44 9.67 9.08 9.45 8.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInMark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3.06C4.14 3.06 3.25 3.96 3.25 5.06C3.25 6.16 4.14 7.06 5.25 7.06C6.35 7.06 7.25 6.16 7.25 5.06C7.25 3.96 6.35 3.06 5.25 3.06ZM20.75 13.38C20.75 9.94 18.91 8.22 16.36 8.22C14.47 8.22 13.52 9.24 13.04 10.02V8.5H9.79C9.83 9.45 9.79 20 9.79 20H13.17V13.68C13.17 13.32 13.2 12.97 13.32 12.71C13.6 12.01 14.23 11.28 15.32 11.28C16.71 11.28 17.37 12.32 17.37 13.86V20H20.75V13.38Z" />
    </svg>
  );
}

function GitHubMark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25C6.61 2.25 2.25 6.61 2.25 12C2.25 16.31 5.04 19.96 8.92 21.25C9.41 21.34 9.59 21.04 9.59 20.78C9.59 20.55 9.58 19.78 9.58 18.97C6.87 19.56 6.3 17.81 6.3 17.81C5.86 16.68 5.22 16.38 5.22 16.38C4.33 15.78 5.29 15.79 5.29 15.79C6.27 15.86 6.79 16.8 6.79 16.8C7.66 18.29 9.07 17.86 9.61 17.61C9.7 16.98 9.95 16.55 10.23 16.31C8.07 16.06 5.79 15.23 5.79 11.49C5.79 10.42 6.17 9.55 6.8 8.87C6.7 8.62 6.36 7.62 6.9 6.27C6.9 6.27 7.72 6.01 9.58 7.27C10.36 7.05 11.18 6.94 12 6.94C12.82 6.94 13.64 7.05 14.42 7.27C16.28 6.01 17.1 6.27 17.1 6.27C17.64 7.62 17.3 8.62 17.2 8.87C17.83 9.55 18.21 10.42 18.21 11.49C18.21 15.24 15.92 16.06 13.75 16.3C14.1 16.6 14.41 17.2 14.41 18.12C14.41 19.44 14.4 20.49 14.4 20.78C14.4 21.04 14.58 21.35 15.08 21.25C18.96 19.96 21.75 16.31 21.75 12C21.75 6.61 17.39 2.25 12 2.25Z"
      />
    </svg>
  );
}

function CardPlatformIcon({
  id,
  size = 'large',
}: {
  id: ContactCardItem['id'];
  size?: 'large' | 'small';
}) {
  const cls = size === 'large' ? 'w-7 h-7' : 'w-4 h-4';
  if (id === 'email') return <Mail className={cls} strokeWidth={1.75} />;
  if (id === 'whatsapp') return <WhatsAppIcon className={cls} />;
  if (id === 'linkedin') return <LinkedInMark className={cls} />;
  return <GitHubMark className={cls} />;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isArabic = lang === 'AR';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [draftOpened, setDraftOpened] = useState(false);

  const content = {
    EN: {
      eyebrow: 'GET IN TOUCH',
      title: 'Let’s Connect',
      subtitle:
        'I’m always open to data analytics opportunities, collaborative projects, and applied AI initiatives.',
      cards: [
        {
          id: 'email',
          title: 'Email',
          detail: 'fatm_2002@outlook.com',
          buttonLabel: 'Send Email',
          href: 'mailto:fatm_2002@outlook.com',
          isPrimary: true,
          external: false,
        },
        {
          id: 'whatsapp',
          title: 'WhatsApp',
          detail: '01096580504',
          buttonLabel: 'Message on WhatsApp',
          href: 'https://wa.me/201096580504',
          isPrimary: false,
          external: true,
        },
        {
          id: 'linkedin',
          title: 'LinkedIn',
          detail: 'fatma-abdel-fattah',
          buttonLabel: 'View Profile',
          href: 'https://www.linkedin.com/in/fatma-abdel-fattah/',
          isPrimary: false,
          external: true,
        },
        {
          id: 'github',
          title: 'GitHub',
          detail: 'fm747777-cloud',
          buttonLabel: 'Visit GitHub',
          href: 'https://github.com/fm747777-cloud',
          isPrimary: false,
          external: true,
        },
      ] as ContactCardItem[],
      formTitle: 'Send a Message',
      formSubtitle: 'Have a project, idea, or opportunity? I’d love to hear from you.',
      nameLabel: 'Your Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Your Email',
      emailPlaceholder: 'Your Email',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Your Message...',
      submitButton: 'Send Message',
      validationError: 'Please enter your name, a valid email address, and your message.',
      draftNotice:
        'Your email client has been opened with a pre-filled draft addressed to fatm_2002@outlook.com. Please click Send in your mail app to complete delivery.',
      footerCopy: '© 2026 Fatma Abdel Fattah. All rights reserved.',
      directCallLabel: 'Direct Call',
    },
    AR: {
      eyebrow: 'تواصل معي',
      title: 'لنبقَ على تواصل',
      subtitle:
        'يسعدني التواصل بشأن فرص العمل في تحليل البيانات، والمشاريع التعاونية، وتطبيقات الذكاء الاصطناعي.',
      cards: [
        {
          id: 'email',
          title: 'البريد الإلكتروني',
          detail: 'fatm_2002@outlook.com',
          buttonLabel: 'إرسال بريد إلكتروني',
          href: 'mailto:fatm_2002@outlook.com',
          isPrimary: true,
          external: false,
        },
        {
          id: 'whatsapp',
          title: 'واتساب',
          detail: '01096580504',
          buttonLabel: 'مراسلتي عبر واتساب',
          href: 'https://wa.me/201096580504',
          isPrimary: false,
          external: true,
        },
        {
          id: 'linkedin',
          title: 'لينكدإن',
          detail: 'fatma-abdel-fattah',
          buttonLabel: 'عرض الملف الشخصي',
          href: 'https://www.linkedin.com/in/fatma-abdel-fattah/',
          isPrimary: false,
          external: true,
        },
        {
          id: 'github',
          title: 'جيت هب',
          detail: 'fm747777-cloud',
          buttonLabel: 'زيارة جيت هب',
          href: 'https://github.com/fm747777-cloud',
          isPrimary: false,
          external: true,
        },
      ] as ContactCardItem[],
      formTitle: 'أرسل رسالة',
      formSubtitle: 'هل لديك مشروع أو فكرة أو فرصة عمل؟ يسعدني الاستماع إليك.',
      nameLabel: 'الاسم',
      namePlaceholder: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'البريد الإلكتروني',
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      submitButton: 'إرسال الرسالة',
      validationError: 'يرجى إدخال الاسم، وبريد إلكتروني صحيح، ونص الرسالة.',
      draftNotice:
        'تم فتح تطبيق البريد الإلكتروني لديك مع مسودة رسالة جاهزة إلى fatm_2002@outlook.com. يرجى الضغط على إرسال داخل تطبيق البريد لإتمام الإرسال.',
      footerCopy: '© 2026 Fatma Abdel Fattah. All rights reserved.',
      directCallLabel: 'اتصال مباشر',
    },
  }[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedName || !emailRegex.test(trimmedEmail) || !trimmedMessage) {
      setErrorMessage(content.validationError);
      setDraftOpened(false);
      return;
    }

    setErrorMessage(null);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
    );
    const mailtoUrl = `mailto:fatm_2002@outlook.com?subject=${subject}&body=${body}`;

    // Trigger native mail client honestly via anchor click
    const anchor = document.createElement('a');
    anchor.href = mailtoUrl;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setDraftOpened(true);
  };

  // Bottom dotted lavender wave mesh paths & particles
  const wavePaths = Array.from({ length: 16 }, (_, i) => {
    const offset = i * 6;
    const y0 = 195 + offset * 0.4;
    const c1y = 44 + offset * 0.85;
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
      id="contact"
      className="relative overflow-hidden bg-[#0F1218] pt-24 pb-16 lg:pt-28 lg:pb-20 border-t border-[#373E57]/40"
    >
      {/* Subtle Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 w-[640px] h-[220px] rounded-full bg-[#373E57]/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-[980px] h-[240px] rounded-full bg-[#1E2332]/45 blur-3xl"
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
            <linearGradient id="contactWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
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
              stroke="url(#contactWaveGrad)"
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
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          {/* Small Eyebrow Label: GET IN TOUCH with Thin Lavender Horizontal Lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span
              aria-hidden="true"
              className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#D1C7D7]/55 to-[#D1C7D7]/85"
            />
            <span
              className={`text-[13px] sm:text-[14px] font-semibold uppercase text-[#D1C7D7] ${
                isArabic ? 'font-arabic tracking-normal' : 'font-manrope tracking-[0.18em]'
              }`}
            >
              {content.eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="w-16 sm:w-20 h-px bg-gradient-to-l from-transparent via-[#D1C7D7]/55 to-[#D1C7D7]/85"
            />
          </div>

          {/* Main Heading: Let's Connect */}
          <h2
            className={`${
              isArabic
                ? 'font-arabic text-4xl sm:text-5xl lg:text-[56px] leading-[1.24]'
                : 'font-cambria text-4xl sm:text-6xl lg:text-[62px] leading-[1.08] tracking-[-0.02em]'
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

          {/* Thin Glowing Lavender Pill Underline Beneath Subtitle */}
          <div
            aria-hidden="true"
            className="flex justify-center mt-5"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-36 sm:w-44 h-[3.5px] rounded-full bg-[#D1C7D7] shadow-[0_0_18px_rgba(209,199,215,0.65)]" />
              <div className="absolute w-48 h-3 rounded-full bg-[#D1C7D7]/25 blur-md" />
            </div>
          </div>
        </motion.div>

        {/* 2. FOUR PREMIUM GLASSMORPHIC CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {content.cards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.52,
                delay: prefersReducedMotion ? 0 : 0.08 + idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-[22px] bg-gradient-to-b from-[#1E2332]/95 via-[#181D2B]/95 to-[#141824]/95 border border-[#6F7398]/45 hover:border-[#D1C7D7]/65 hover:-translate-y-[3.5px] hover:shadow-[0_18px_38px_-12px_rgba(0,0,0,0.65),0_0_26px_-6px_rgba(209,199,215,0.18)] transition-all duration-200 px-6 py-7 flex flex-col items-center text-center shadow-[0_14px_34px_-10px_rgba(0,0,0,0.55)]"
            >
              {/* Top Edge Subtle Lavender Rim Highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#D1C7D7]/70 to-transparent"
              />

              {/* Subtle Decorative Right-Side Wave Curve Inside Card */}
              <svg
                aria-hidden="true"
                viewBox="0 0 180 120"
                fill="none"
                className="pointer-events-none absolute top-6 right-0 w-36 h-24 opacity-30"
              >
                <defs>
                  <linearGradient id={`contactCardWave-${card.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E2332" stopOpacity="0" />
                    <stop offset="100%" stopColor="#6F7398" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 110 C 65 85, 110 22, 180 18 L 180 120 L 10 120 Z"
                  fill={`url(#contactCardWave-${card.id})`}
                />
                <path
                  d="M 10 110 C 65 85, 110 22, 180 18"
                  stroke="#D1C7D7"
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />
              </svg>

              {/* Rounded-Square Icon Container */}
              <div className="relative z-10 w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#2E354E] to-[#1A1E2E] border border-[#D1C7D7]/45 group-hover:border-[#D1C7D7]/80 shadow-[0_0_20px_rgba(209,199,215,0.18),inset_0_1px_1px_rgba(242,240,244,0.2)] flex items-center justify-center text-[#D1C7D7] group-hover:scale-[1.03] transition-all duration-200 mb-4">
                <CardPlatformIcon id={card.id} size="large" />
              </div>

              {/* Platform Name */}
              <h3
                className={`${
                  isArabic
                    ? 'font-arabic text-[20px]'
                    : 'font-cambria text-[23px] tracking-[-0.01em]'
                } relative z-10 font-bold text-[#F2F0F4] leading-snug`}
              >
                {card.title}
              </h3>

              {/* Contact Detail (kept LTR for email, phone, and handles) */}
              <p
                dir="ltr"
                className="relative z-10 font-inter text-[14px] sm:text-[14.5px] text-[#CDD0D9] mt-1 mb-6 break-all"
              >
                {card.detail}
              </p>

              {/* Functional Action Button */}
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className={`relative z-10 mt-auto w-full py-2.5 px-4 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-[#D1C7D7] ${
                  isArabic ? 'font-arabic' : 'font-inter'
                } ${
                  card.isPrimary
                    ? 'bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] shadow-[0_6px_18px_rgba(209,199,215,0.22)] hover:-translate-y-0.5'
                    : 'bg-[#171B28]/90 hover:bg-[#23293D] text-[#F2F0F4] border border-[#D1C7D7]/45 hover:border-[#D1C7D7]/80 hover:-translate-y-0.5'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <CardPlatformIcon id={card.id} size="small" />
                  <span className="truncate">{card.buttonLabel}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* 3. WIDE HORIZONTAL "SEND A MESSAGE" FORM PANEL */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.35 }}
          className="mt-7 rounded-[22px] bg-gradient-to-b from-[#1B2030]/95 to-[#141824]/95 border border-[#6F7398]/45 p-6 sm:p-8 shadow-[0_18px_42px_-12px_rgba(0,0,0,0.65)]"
        >
          {/* Form Header: [Paper Plane Box] | [Title + Supporting Text] */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[48px] h-[48px] rounded-[13px] bg-gradient-to-b from-[#2A3148] to-[#181C2B] border border-[#6F7398]/50 flex items-center justify-center text-[#D1C7D7] shrink-0 shadow-inner">
              <Send className="w-5 h-5" strokeWidth={1.75} />
            </div>

            <div
              aria-hidden="true"
              className="w-px h-10 bg-[#6F7398]/50 shrink-0"
            />

            <div>
              <h3
                className={`${
                  isArabic
                    ? 'font-arabic text-lg sm:text-xl'
                    : 'font-manrope text-[19px] sm:text-[21px] tracking-[-0.01em]'
                } font-bold text-[#F2F0F4] leading-snug`}
              >
                {content.formTitle}
              </h3>
              <p
                className={`${
                  isArabic ? 'font-arabic' : 'font-inter'
                } text-[13.5px] sm:text-[14.5px] text-[#CDD0D9] mt-0.5`}
              >
                {content.formSubtitle}
              </p>
            </div>
          </div>

          {/* Horizontal Form Fields Row */}
          <form onSubmit={handleFormSubmit} noValidate>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch ${
                isArabic ? 'font-arabic' : 'font-inter'
              }`}
            >
              {/* Field 1: Your Name */}
              <div className="lg:col-span-3 flex">
                <label htmlFor="contact-name" className="sr-only">
                  {content.nameLabel}
                </label>
                <div className="relative w-full flex items-center">
                  <User
                    aria-hidden="true"
                    className="w-4 h-4 text-[#D1C7D7]/70 absolute start-4 pointer-events-none"
                    strokeWidth={1.75}
                  />
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder={content.namePlaceholder}
                    className="w-full h-[54px] lg:h-full ps-11 pe-4 rounded-[13px] bg-[#1D2233]/90 border border-[#373E57] text-[#F2F0F4] placeholder:text-[#CDD0D9]/65 text-[14px] focus:outline-none focus:border-[#D1C7D7] focus:ring-1 focus:ring-[#D1C7D7] transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Your Email */}
              <div className="lg:col-span-3 flex">
                <label htmlFor="contact-email" className="sr-only">
                  {content.emailLabel}
                </label>
                <div className="relative w-full flex items-center">
                  <Mail
                    aria-hidden="true"
                    className="w-4 h-4 text-[#D1C7D7]/70 absolute start-4 pointer-events-none"
                    strokeWidth={1.75}
                  />
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder={content.emailPlaceholder}
                    className="w-full h-[54px] lg:h-full ps-11 pe-4 rounded-[13px] bg-[#1D2233]/90 border border-[#373E57] text-[#F2F0F4] placeholder:text-[#CDD0D9]/65 text-[14px] focus:outline-none focus:border-[#D1C7D7] focus:ring-1 focus:ring-[#D1C7D7] transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Your Message */}
              <div className="md:col-span-2 lg:col-span-4 flex">
                <label htmlFor="contact-message" className="sr-only">
                  {content.messageLabel}
                </label>
                <div className="relative w-full flex">
                  <MessageCircle
                    aria-hidden="true"
                    className="w-4 h-4 text-[#D1C7D7]/70 absolute start-4 top-4 pointer-events-none"
                    strokeWidth={1.75}
                  />
                  <textarea
                    id="contact-message"
                    required
                    rows={2}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder={content.messagePlaceholder}
                    className="w-full min-h-[72px] ps-11 pe-4 py-3.5 rounded-[13px] bg-[#1D2233]/90 border border-[#373E57] text-[#F2F0F4] placeholder:text-[#CDD0D9]/65 text-[14px] leading-relaxed focus:outline-none focus:border-[#D1C7D7] focus:ring-1 focus:ring-[#D1C7D7] transition-all resize-y"
                  />
                </div>
              </div>

              {/* Submit Button: Send Message */}
              <div className="md:col-span-2 lg:col-span-2 flex items-center">
                <button
                  type="submit"
                  className="w-full h-[54px] px-5 rounded-[14px] bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] font-semibold text-[14px] sm:text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_8px_22px_rgba(209,199,215,0.22)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F2F0F4]"
                >
                  <span className="whitespace-nowrap">{content.submitButton}</span>
                  <Send className="w-4 h-4 shrink-0" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Honest Validation & Email Draft Feedback */}
            {errorMessage && (
              <div
                role="alert"
                className="mt-4 px-4 py-3 rounded-xl bg-[#1E2332] border border-[#D1C7D7]/45 text-xs sm:text-sm text-[#F2F0F4] flex items-center gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-[#D1C7D7] shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {draftOpened && !errorMessage && (
              <div
                role="status"
                className="mt-4 px-4 py-3 rounded-xl bg-[#1E2332] border border-[#D1C7D7]/55 text-xs sm:text-sm text-[#F2F0F4] flex items-center justify-between gap-4 flex-wrap"
              >
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D1C7D7] shrink-0" />
                  <span>{content.draftNotice}</span>
                </span>
              </div>
            )}
          </form>
        </motion.div>

        {/* 4. REFINED FOOTER */}
        <footer className="mt-20 pt-8 border-t border-[#373E57]/45 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CDD0D9]">
          <p className="font-inter">{content.footerCopy}</p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:fatm_2002@outlook.com"
              className="w-9 h-9 rounded-lg bg-[#1E2332]/85 border border-[#373E57] hover:border-[#D1C7D7]/70 flex items-center justify-center text-[#D1C7D7] hover:text-[#F2F0F4] transition-all focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="Email fatm_2002@outlook.com"
              title="fatm_2002@outlook.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/201096580504"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E2332]/85 border border-[#373E57] hover:border-[#D1C7D7]/70 flex items-center justify-center text-[#D1C7D7] hover:text-[#F2F0F4] transition-all focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="WhatsApp +201096580504"
              title="WhatsApp: 01096580504"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:+201096580504"
              className="w-9 h-9 rounded-lg bg-[#1E2332]/85 border border-[#373E57] hover:border-[#D1C7D7]/70 flex items-center justify-center text-[#D1C7D7] hover:text-[#F2F0F4] transition-all focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label={`${content.directCallLabel}: +201096580504`}
              title="+201096580504"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/fatma-abdel-fattah/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E2332]/85 border border-[#373E57] hover:border-[#D1C7D7]/70 flex items-center justify-center text-[#D1C7D7] hover:text-[#F2F0F4] transition-all focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="LinkedIn Profile"
              title="LinkedIn: fatma-abdel-fattah"
            >
              <LinkedInMark className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/fm747777-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E2332]/85 border border-[#373E57] hover:border-[#D1C7D7]/70 flex items-center justify-center text-[#D1C7D7] hover:text-[#F2F0F4] transition-all focus:outline-none focus:ring-2 focus:ring-[#D1C7D7]"
              aria-label="GitHub Profile"
              title="GitHub: fm747777-cloud"
            >
              <GitHubMark className="w-4 h-4" />
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
}
