import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Send,
  Trash2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  User,
  Code,
  Layers,
  Briefcase,
  Award,
  Cpu,
  GraduationCap,
  Users,
  Mail,
  Zap,
  Database,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import {
  INITIAL_WELCOME_MESSAGE,
  SUGGESTED_QUESTIONS,
  TOPIC_SHORTCUTS,
  SuggestedQuestionItem,
  ConversationContextState,
  KnowledgeLink,
  queryFatmaKnowledge,
} from '../data/fatmaKnowledge';

interface FloatingAIAssistantProps {
  lang: 'EN' | 'AR';
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  title?: string;
  text: string;
  timestamp: string;
  links?: KnowledgeLink[];
  followUpQuestions?: string[];
  highlightBadges?: string[];
}

// Helper to detect if a string is predominantly Arabic
function isArabicText(text: string): boolean {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text);
}

// Format current time e.g. "10:28 AM"
function formatCurrentTime(): string {
  try {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

// ============================================================================
// CUSTOM SVG ILLUSTRATIONS (Friendly Premium AI Robot from Reference Image)
// ============================================================================
const RobotButtonIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    {/* Antenna */}
    <line x1="24" y1="5" x2="24" y2="11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="24" cy="4.5" r="2.5" fill="currentColor" />
    {/* Side headphone ears */}
    <rect x="4" y="19" width="4.5" height="11" rx="2.2" fill="currentColor" />
    <rect x="39.5" y="19" width="4.5" height="11" rx="2.2" fill="currentColor" />
    {/* Head outer shell */}
    <rect x="9" y="11" width="30" height="26" rx="12" fill="currentColor" />
    {/* Inner dark visor */}
    <rect x="13" y="16.5" width="22" height="14.5" rx="7" fill="#D1C7D7" />
    {/* Friendly happy curved eyes ^ ^ */}
    <path
      d="M17.2 24.5 C18 22, 20.5 22, 21.3 24.5"
      stroke="#0F1218"
      strokeWidth="2.3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M26.7 24.5 C27.5 22, 30 22, 30.8 24.5"
      stroke="#0F1218"
      strokeWidth="2.3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const RobotAvatarSmall: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div
    className={`relative rounded-full flex items-center justify-center shrink-0 select-none ${className}`}
    style={{
      background: 'radial-gradient(circle at 30% 25%, #373E57 0%, #171B2A 100%)',
      border: '1.5px solid rgba(209, 199, 215, 0.7)',
      boxShadow: '0 0 14px rgba(209, 199, 215, 0.28)',
    }}
  >
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" aria-hidden="true">
      <line x1="24" y1="6" x2="24" y2="12" stroke="#D1C7D7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="5" r="2.3" fill="#F2F0F4" />
      <rect x="5" y="20" width="4" height="10" rx="2" fill="#9A8AC4" />
      <rect x="39" y="20" width="4" height="10" rx="2" fill="#9A8AC4" />
      <rect x="9.5" y="12" width="29" height="24" rx="11" fill="#E9E4F0" />
      <rect x="13.5" y="17" width="21" height="13.5" rx="6.5" fill="#171A2B" />
      <path
        d="M17.5 24.2 C18.2 21.8, 20.6 21.8, 21.3 24.2"
        stroke="#F2F0F4"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M26.7 24.2 C27.4 21.8, 29.8 21.8, 30.5 24.2"
        stroke="#F2F0F4"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const RobotHeroIllustration: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div
    className={`relative mx-auto select-none flex items-center justify-center ${
      compact ? 'w-20 h-20' : 'w-40 h-40'
    }`}
  >
    {/* Outer glowing lavender circular portal */}
    <div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(circle, rgba(169, 138, 224, 0.32) 0%, rgba(30, 35, 50, 0.55) 68%, transparent 100%)',
        border: '1.5px solid rgba(209, 199, 215, 0.65)',
        boxShadow:
          '0 0 32px rgba(209, 199, 215, 0.28), inset 0 0 22px rgba(209, 199, 215, 0.18)',
      }}
    />

    <svg
      viewBox="0 0 180 180"
      className="relative z-10 w-full h-full drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="robotShellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#DDD5E8" />
          <stop offset="100%" stopColor="#A99BBE" />
        </linearGradient>
        <linearGradient id="robotVisorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E2238" />
          <stop offset="100%" stopColor="#0D0F1A" />
        </linearGradient>
        <linearGradient id="robotEarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4B5D9" />
          <stop offset="100%" stopColor="#6F638C" />
        </linearGradient>
      </defs>

      {/* Subtle 4-point star sparkles around robot */}
      <path
        d="M32 46 L34 51 L39 53 L34 55 L32 60 L30 55 L25 53 L30 51 Z"
        fill="#F2F0F4"
        fillOpacity="0.85"
      />
      <path
        d="M148 40 L149.5 44 L153.5 45.5 L149.5 47 L148 51 L146.5 47 L142.5 45.5 L146.5 44 Z"
        fill="#D1C7D7"
        fillOpacity="0.8"
      />
      <circle cx="28" cy="118" r="2" fill="#D1C7D7" fillOpacity="0.7" />
      <circle cx="152" cy="110" r="2.2" fill="#F2F0F4" fillOpacity="0.7" />

      {/* Antenna stem & glowing orb */}
      <line x1="90" y1="22" x2="90" y2="38" stroke="#D1C7D7" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="90" cy="19" r="6.5" fill="#F2F0F4" />
      <circle cx="90" cy="19" r="10" fill="#D1C7D7" fillOpacity="0.35" />

      {/* Floating arms */}
      <ellipse
        cx="43"
        cy="128"
        rx="10"
        ry="15"
        transform="rotate(18 43 128)"
        fill="url(#robotShellGrad)"
      />
      <ellipse
        cx="137"
        cy="128"
        rx="10"
        ry="15"
        transform="rotate(-18 137 128)"
        fill="url(#robotShellGrad)"
      />

      {/* Torso body */}
      <rect
        x="57"
        y="108"
        width="66"
        height="46"
        rx="22"
        fill="url(#robotShellGrad)"
        stroke="#FFFFFF"
        strokeOpacity="0.5"
        strokeWidth="1"
      />

      {/* Chest analytics screen with 3 ascending bars */}
      <rect
        x="73"
        y="120"
        width="34"
        height="22"
        rx="6"
        fill="url(#robotVisorGrad)"
        stroke="#B8A9C9"
        strokeWidth="1.4"
      />
      <rect x="80" y="132" width="4" height="6" rx="1" fill="#D1C7D7" />
      <rect x="88" y="128" width="4" height="10" rx="1" fill="#D1C7D7" />
      <rect x="96" y="124" width="4" height="14" rx="1" fill="#F2F0F4" />

      {/* Side ear pods */}
      <rect x="30" y="58" width="12" height="28" rx="6" fill="url(#robotEarGrad)" />
      <rect x="138" y="58" width="12" height="28" rx="6" fill="url(#robotEarGrad)" />

      {/* Main Head */}
      <rect
        x="38"
        y="36"
        width="104"
        height="74"
        rx="35"
        fill="url(#robotShellGrad)"
        stroke="#FFFFFF"
        strokeOpacity="0.65"
        strokeWidth="1.5"
      />

      {/* Visor Screen */}
      <rect
        x="49"
        y="49"
        width="82"
        height="48"
        rx="22"
        fill="url(#robotVisorGrad)"
        stroke="#6F7398"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />

      {/* Happy Glowing Eyes ^ ^ */}
      <path
        d="M64 75 C67 65, 79 65, 82 75"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M98 75 C101 65, 113 65, 116 75"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Subtle rosy lavender cheek glow */}
      <ellipse cx="63" cy="83" rx="5" ry="2.5" fill="#D1C7D7" fillOpacity="0.45" />
      <ellipse cx="117" cy="83" rx="5" ry="2.5" fill="#D1C7D7" fillOpacity="0.45" />
    </svg>
  </div>
);

// Render question icon by type
const QuestionChipIcon: React.FC<{ type: SuggestedQuestionItem['iconType'] }> = ({ type }) => {
  const cls = 'w-3.5 h-3.5 text-[#D1C7D7] shrink-0';
  switch (type) {
    case 'user':
      return <User className={cls} />;
    case 'code':
      return <Code className={cls} />;
    case 'layers':
      return <Layers className={cls} />;
    case 'briefcase':
      return <Briefcase className={cls} />;
    case 'award':
      return <Award className={cls} />;
    case 'chip':
      return <Cpu className={cls} />;
    case 'graduation':
      return <GraduationCap className={cls} />;
    case 'users':
      return <Users className={cls} />;
    case 'sparkles':
      return <Sparkles className={cls} />;
    case 'mail':
      return <Mail className={cls} />;
  }
};

// Render rich formatted text with clickable URLs and clean bullet lists
const FormattedMessageContent: React.FC<{ text: string; isAR: boolean }> = ({ text, isAR }) => {
  const urlRegex = /(https?:\/\/[^\s)]+|mailto:[^\s)]+)/g;

  const renderLineWithLinks = (line: string, keyPrefix: string) => {
    const parts = line.split(urlRegex);
    return parts.map((part, idx) => {
      if (part.match(urlRegex)) {
        const cleanUrl = part.replace(/[.,;!?]+$/, '');
        const trailingPunct = part.slice(cleanUrl.length);
        const displayLabel = cleanUrl.startsWith('mailto:')
          ? cleanUrl.replace('mailto:', '')
          : cleanUrl.replace(/^https?:\/\/(www\.)?/, '');
        return (
          <React.Fragment key={`${keyPrefix}-${idx}`}>
            <a
              href={cleanUrl}
              target={cleanUrl.startsWith('mailto:') ? undefined : '_blank'}
              rel={cleanUrl.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1 text-[#D1C7D7] hover:text-white underline underline-offset-4 font-medium break-all transition-colors"
            >
              <span>{displayLabel}</span>
              <ExternalLink className="w-3 h-3 shrink-0 inline" />
            </a>
            {trailingPunct}
          </React.Fragment>
        );
      }
      // Handle bold **text** segments
      const boldSegments = part.split(/(\*\*[^*]+\*\*)/g);
      return boldSegments.map((seg, bIdx) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return (
            <strong key={`${keyPrefix}-${idx}-${bIdx}`} className="font-bold text-[#F2F0F4]">
              {seg.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={`${keyPrefix}-${idx}-${bIdx}`}>{seg}</React.Fragment>;
      });
    });
  };

  const lines = text.split('\n');

  return (
    <div
      dir={isAR ? 'rtl' : 'ltr'}
      className={`space-y-2 text-[13.5px] sm:text-[14px] leading-[1.65] text-[#E6E4EC] ${
        isAR ? 'font-arabic text-right' : 'font-inter text-left'
      }`}
    >
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();
        if (!line) {
          return <div key={idx} className="h-1" />;
        }
        if (line.startsWith('- ') || line.startsWith('• ') || line.startsWith('* ')) {
          const content = line.slice(2).trim();
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D1C7D7] mt-2 shrink-0" />
              <div className="flex-1">{renderLineWithLinks(content, `li-${idx}`)}</div>
            </div>
          );
        }
        return <p key={idx}>{renderLineWithLinks(line, `p-${idx}`)}</p>;
      })}
    </div>
  );
};

// ============================================================================
// MAIN ROOT FLOATING AI PORTFOLIO ASSISTANT (100% Client-Side & API-Free)
// ============================================================================
export default function FloatingAIAssistant({ lang }: FloatingAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-msg',
      role: 'model',
      text: INITIAL_WELCOME_MESSAGE[lang],
      timestamp: formatCurrentTime() || '10:24 AM',
    },
  ]);
  const [conversationContext, setConversationContext] = useState<ConversationContextState>({
    lastEntryId: null,
    lastCategory: null,
    recentEntryIds: [],
    preferredLang: lang,
  });
  const [inputValue, setInputValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const isAR = lang === 'AR';

  // Sync preferred language and initial welcome message if no user messages yet
  useEffect(() => {
    setConversationContext((prev) => ({ ...prev, preferredLang: lang }));
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome-msg') {
        return [
          {
            ...prev[0],
            text: INITIAL_WELCOME_MESSAGE[lang],
          },
        ];
      }
      return prev;
    });
  }, [lang]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, isOpen, isSearching]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key & focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setIsOpen(false);
        setTimeout(() => launcherRef.current?.focus(), 50);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setConfirmClear(false);
    setTimeout(() => launcherRef.current?.focus(), 50);
  }, []);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  const handleClearChat = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3500);
      return;
    }
    setMessages([
      {
        id: 'welcome-msg',
        role: 'model',
        text: INITIAL_WELCOME_MESSAGE[lang],
        timestamp: formatCurrentTime(),
      },
    ]);
    setConversationContext({
      lastEntryId: null,
      lastCategory: null,
      recentEntryIds: [],
      preferredLang: lang,
    });
    setConfirmClear(false);
    setSelectedCategoryFilter(null);
    inputRef.current?.focus();
  };

  const handleNavigateAnchor = (anchorUrl: string) => {
    handleClose();
    setTimeout(() => {
      const targetEl = document.querySelector(anchorUrl);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  // Local Deterministic Answer Retrieval (Zero external API calls)
  const sendMessage = (rawPrompt: string) => {
    const trimmed = rawPrompt.trim();
    if (!trimmed || isSearching) return;

    const userMsgId = `user-${Date.now()}`;
    const assistantMsgId = `model-${Date.now() + 1}`;
    const timestamp = formatCurrentTime();

    const newUserMessage: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: trimmed,
      timestamp,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsSearching(true);

    // Check prefers-reduced-motion for instant vs brief 120ms feedback
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const delayMs = prefersReducedMotion ? 0 : 120;

    setTimeout(() => {
      const answer = queryFatmaKnowledge(trimmed, conversationContext);

      if (answer.entryId && !answer.isFallback) {
        setConversationContext((prev) => ({
          lastEntryId: answer.entryId,
          lastCategory: answer.category,
          recentEntryIds: [...prev.recentEntryIds.slice(-5), answer.entryId!],
          preferredLang: answer.lang,
        }));
      }

      const assistantMessage: ChatMessage = {
        id: assistantMsgId,
        role: 'model',
        title: answer.title,
        text: answer.reply,
        timestamp: formatCurrentTime(),
        links: answer.links,
        followUpQuestions: answer.followUpQuestions,
        highlightBadges: answer.highlightBadges,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsSearching(false);
    }, delayMs);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  // Filter suggested questions
  const filteredSuggestions = selectedCategoryFilter
    ? SUGGESTED_QUESTIONS.filter((q) => q.category === selectedCategoryFilter)
    : SUGGESTED_QUESTIONS;

  const visibleSuggestions = showAllSuggestions
    ? filteredSuggestions
    : filteredSuggestions.slice(0, 6);

  const portalContent = (
    <>
      {/* ====================================================================
          1. PERSISTENT FLOATING ACTION BUTTON (FAB)
          ==================================================================== */}
      <div
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0'
        }`}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Subtle Desktop Floating Label Pill */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={isAR ? 'اسأل المساعد الذكي لفاطمة' : "Ask Fatma's AI"}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181C2B]/95 hover:bg-[#1E2332] text-[#F2F0F4] border border-[#D1C7D7]/45 shadow-[0_8px_24px_rgba(0,0,0,0.55)] text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D1C7D7]" />
          <span className={isAR ? 'font-arabic' : 'font-manrope'}>
            {isAR ? 'اسأل المساعد الذكي' : "Ask Fatma's AI"}
          </span>
        </button>

        {/* Circular Soft Lavender Robot Button */}
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={isAR ? 'فتح المساعد الذكي لفاطمة' : "Open Fatma's AI Portfolio Assistant"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          className="group relative w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] rounded-full bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D1C7D7]/60 cursor-pointer"
          style={{
            border: '2px solid rgba(242, 240, 244, 0.75)',
            boxShadow:
              '0 10px 30px rgba(0, 0, 0, 0.65), 0 0 24px rgba(209, 199, 215, 0.45)',
          }}
        >
          {/* Restrained outer halo ring */}
          <span
            className="pointer-events-none absolute -inset-1.5 rounded-full border border-[#D1C7D7]/35 opacity-75 group-hover:scale-105 transition-transform duration-300"
            aria-hidden="true"
          />
          <RobotButtonIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F1218] transition-transform duration-300 group-hover:scale-105" />
        </button>
      </div>

      {/* ====================================================================
          2. FLOATING CONVERSATIONAL MODAL OVERLAY
          ==================================================================== */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fatma-ai-assistant-title"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            dir={isAR ? 'rtl' : 'ltr'}
            className="relative w-full h-full sm:h-[min(720px,90vh)] sm:max-w-[1040px] sm:rounded-[28px] bg-[#0F1218] border-0 sm:border sm:border-[#D1C7D7]/45 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(209,199,215,0.16)] flex flex-col lg:flex-row overflow-hidden"
            style={{
              paddingTop: 'env(safe-area-inset-top, 0px)',
              paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
          >
            {/* Ambient background glow inside modal */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-25"
              style={{ background: 'radial-gradient(circle, #D1C7D7 0%, transparent 70%)' }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[110px] opacity-20"
              style={{ background: 'radial-gradient(circle, #6F7398 0%, transparent 70%)' }}
            />

            {/* ==============================================================
                LEFT BRANDING & SHORTCUTS PANEL (Desktop lg+)
                ============================================================== */}
            <aside
              className="hidden lg:flex lg:w-[320px] xl:w-[335px] shrink-0 flex-col justify-between p-6 m-3.5 mr-0 rounded-[22px] relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(165deg, rgba(34, 39, 62, 0.92) 0%, rgba(20, 23, 37, 0.96) 55%, rgba(15, 18, 28, 0.98) 100%)',
                border: '1px solid rgba(209, 199, 215, 0.35)',
                boxShadow: 'inset 0 0 28px rgba(209, 199, 215, 0.06)',
              }}
            >
              {/* Decorative diagonal wave inside left panel */}
              <svg
                viewBox="0 0 320 260"
                className="pointer-events-none absolute top-28 left-0 w-full opacity-20"
                aria-hidden="true"
              >
                <path
                  d="M-20 170 Q 90 95, 190 150 T 350 110"
                  fill="none"
                  stroke="#D1C7D7"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Top Editorial Heading & Robot Illustration */}
              <div className="relative z-10 text-center">
                {/* Eyebrow */}
                <div className="inline-flex items-center justify-center gap-2.5 mb-2">
                  <span className="h-[1px] w-6 bg-[#D1C7D7]/55" />
                  <span className="text-[10.5px] font-semibold tracking-[0.22em] text-[#D1C7D7] uppercase">
                    {isAR ? 'مساعد ملف الأعمال الذكي' : 'AI PORTFOLIO ASSISTANT'}
                  </span>
                  <span className="h-[1px] w-6 bg-[#D1C7D7]/55" />
                </div>

                {/* Main Title: Ask Fatma's AI */}
                <h2
                  id="fatma-ai-assistant-title"
                  className={`text-[30px] font-bold text-[#F2F0F4] leading-tight ${
                    isAR ? 'font-arabic' : 'font-cambria'
                  }`}
                >
                  {isAR ? (
                    <>
                      اسأل مساعد فاطمة <span className="text-[#D1C7D7]">الذكي</span>
                    </>
                  ) : (
                    <>
                      Ask Fatma’s <span className="text-[#D1C7D7]">AI</span>
                    </>
                  )}
                </h2>

                {/* Subtitle */}
                <p
                  className={`text-[12.5px] text-[#CDD0D9] mt-2 leading-relaxed ${
                    isAR ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  {isAR
                    ? 'دليلك الذكي لاستكشاف رحلة فاطمة المهنية، ومشاريعها، ومهاراتها، وإنجازاتها.'
                    : "Your intelligent guide to Fatma's professional journey, projects, skills, and achievements."}
                </p>

                {/* Centerpiece Friendly AI Robot */}
                <div className="my-3.5">
                  <RobotHeroIllustration />
                </div>

                {/* Assistant Identity Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151928] border border-[#D1C7D7]/45 text-xs font-semibold text-[#F2F0F4] shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#D1C7D7]" aria-hidden="true" />
                  <span className={isAR ? 'font-arabic' : 'font-manrope'}>
                    {isAR ? 'مساعد فاطمة الذكي' : "Fatma's AI Assistant"}
                  </span>
                </div>
              </div>

              {/* Bottom 4 Topic Shortcuts */}
              <div className="relative z-10 space-y-2.5 mt-4">
                {TOPIC_SHORTCUTS.map((item) => {
                  const isSelected = selectedCategoryFilter === item.category;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategoryFilter((prev) =>
                          prev === item.category ? null : item.category
                        );
                        sendMessage(item.prompt[lang]);
                      }}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#262C44] border border-[#D1C7D7]/60'
                          : 'bg-[#151927]/75 hover:bg-[#1E2336] border border-[#373E57]/60 hover:border-[#D1C7D7]/45'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#1F2437] border border-[#6F7398]/45 flex items-center justify-center text-[#D1C7D7] shrink-0">
                        {item.icon === 'zap' && <Zap className="w-4 h-4" />}
                        {item.icon === 'layers' && <Layers className="w-4 h-4" />}
                        {item.icon === 'award' && <Award className="w-4 h-4" />}
                        {item.icon === 'users' && <Users className="w-4 h-4" />}
                      </div>
                      <div className={`min-w-0 flex-1 ${isAR ? 'text-right' : 'text-left'}`}>
                        <p
                          className={`text-[13px] font-bold text-[#F2F0F4] truncate ${
                            isAR ? 'font-arabic' : 'font-manrope'
                          }`}
                        >
                          {item.title[lang]}
                        </p>
                        <p
                          className={`text-[11px] text-[#CDD0D9] truncate ${
                            isAR ? 'font-arabic' : 'font-inter'
                          }`}
                        >
                          {item.subtitle[lang]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* ==============================================================
                RIGHT CONVERSATION PANEL (Full Modal on Mobile, Right Column on Desktop)
                ============================================================== */}
            <div className="flex-1 flex flex-col min-w-0 h-full sm:m-3.5 sm:rounded-[22px] bg-[#131724]/95 border-0 sm:border sm:border-[#373E57]/85 overflow-hidden">
              {/* Top Assistant Header Bar */}
              <header className="px-4 sm:px-6 py-3.5 bg-[#171C2C]/95 border-b border-[#373E57]/75 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <RobotAvatarSmall className="w-10 h-10" />
                  <div className="min-w-0">
                    <h3
                      className={`text-[15px] sm:text-base font-bold text-[#F2F0F4] truncate ${
                        isAR ? 'font-arabic' : 'font-manrope'
                      }`}
                    >
                      {isAR ? 'مساعد فاطمة الذكي' : "Fatma's AI Assistant"}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11.5px] text-[#CDD0D9]">
                      <span className="truncate">
                        {isAR
                          ? 'استكشف مسيرتي المهنية ومشاريعي'
                          : 'Explore my professional journey'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Header Controls: Clear Chat & Close */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleClearChat}
                    title={
                      confirmClear
                        ? isAR
                          ? 'اضغط مرة أخرى لتأكيد مسح المحادثة'
                          : 'Click again to confirm clearing chat'
                        : isAR
                        ? 'مسح المحادثة'
                        : 'Clear Chat'
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      confirmClear
                        ? 'bg-red-950/80 border-red-400/70 text-red-200'
                        : 'bg-[#1D2235] hover:bg-[#272D45] border-[#373E57] text-[#CDD0D9] hover:text-[#F2F0F4]'
                    }`}
                  >
                    <Trash2 className="w-3.5 h-3.5 text-[#D1C7D7]" />
                    <span className="hidden sm:inline">
                      {confirmClear
                        ? isAR
                          ? 'تأكيد المسح؟'
                          : 'Confirm Clear?'
                        : isAR
                        ? 'مسح المحادثة'
                        : 'Clear Chat'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label={isAR ? 'إغلاق المساعد الذكي' : 'Close AI assistant'}
                    className="w-8 h-8 rounded-full bg-[#1D2235] hover:bg-[#D1C7D7] text-[#CDD0D9] hover:text-[#0F1218] border border-[#373E57] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </header>

              {/* Scrollable Messages & Suggestions Area */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-5">
                {/* Mobile Compact Hero Banner + 4 Quick Topic Cards (Visible on <lg screens) */}
                <div className="lg:hidden space-y-3">
                  <div
                    className="p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(35, 40, 64, 0.95) 0%, rgba(20, 24, 38, 0.98) 100%)',
                      border: '1px solid rgba(209, 199, 215, 0.4)',
                    }}
                  >
                    <RobotHeroIllustration compact />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D1C7D7] uppercase block">
                        {isAR ? 'مساعد ملف الأعمال الذكي' : 'AI PORTFOLIO ASSISTANT'}
                      </span>
                      <h4
                        className={`text-xl font-bold text-[#F2F0F4] mt-0.5 ${
                          isAR ? 'font-arabic' : 'font-cambria'
                        }`}
                      >
                        {isAR ? (
                          <>
                            اسأل مساعد فاطمة <span className="text-[#D1C7D7]">الذكي</span>
                          </>
                        ) : (
                          <>
                            Ask Fatma’s <span className="text-[#D1C7D7]">AI</span>
                          </>
                        )}
                      </h4>
                      <p className="text-xs text-[#CDD0D9] mt-1 leading-snug">
                        {isAR
                          ? 'دليلك الذكي لاستكشاف رحلة فاطمة المهنية ومشاريعها ومهاراتها.'
                          : "Your intelligent guide to Fatma's professional journey, projects, skills, and achievements."}
                      </p>
                    </div>
                  </div>

                  {/* 4 Compact Mobile Shortcut Tiles */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      {
                        key: 'projects',
                        label: isAR ? 'المشاريع' : 'Projects',
                        icon: <Zap className="w-4 h-4 text-[#D1C7D7]" />,
                        prompt: TOPIC_SHORTCUTS[0].prompt[lang],
                      },
                      {
                        key: 'skills',
                        label: isAR ? 'المهارات' : 'Skills',
                        icon: <Layers className="w-4 h-4 text-[#D1C7D7]" />,
                        prompt: TOPIC_SHORTCUTS[1].prompt[lang],
                      },
                      {
                        key: 'certifications',
                        label: isAR ? 'الشهادات' : 'Certifications',
                        icon: <Award className="w-4 h-4 text-[#D1C7D7]" />,
                        prompt: TOPIC_SHORTCUTS[2].prompt[lang],
                      },
                      {
                        key: 'opportunities',
                        label: isAR ? 'التواصل' : 'Opportunities',
                        icon: <Users className="w-4 h-4 text-[#D1C7D7]" />,
                        prompt: TOPIC_SHORTCUTS[3].prompt[lang],
                      },
                    ].map((tile) => (
                      <button
                        key={tile.key}
                        type="button"
                        onClick={() => sendMessage(tile.prompt)}
                        className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-1.5 rounded-xl bg-[#1A1F30] hover:bg-[#242B42] border border-[#373E57] hover:border-[#D1C7D7]/55 transition-all cursor-pointer"
                      >
                        {tile.icon}
                        <span className="text-[11px] font-medium text-[#F2F0F4] truncate max-w-full">
                          {tile.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Render Messages */}
                {messages.map((msg, index) => {
                  const msgIsAR = isArabicText(msg.text);

                  if (msg.role === 'user') {
                    return (
                      <div key={msg.id} className="flex items-end justify-end gap-2.5">
                        <span className="text-[10.5px] text-[#CDD0D9]/75 pb-1 select-none tabular-nums">
                          {msg.timestamp} <span aria-hidden="true">✓✓</span>
                        </span>
                        <div
                          dir={msgIsAR ? 'rtl' : 'ltr'}
                          className={`max-w-[82%] sm:max-w-[72%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-[#C8BDD6] text-[#0F1218] font-semibold text-[13.5px] sm:text-sm shadow-md ${
                            msgIsAR ? 'font-arabic text-right' : 'font-inter text-left'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#242A3E] border border-[#D1C7D7]/50 flex items-center justify-center text-[#D1C7D7] shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  }

                  // Assistant Message Bubble
                  return (
                    <React.Fragment key={msg.id}>
                      <div className="flex items-start gap-3">
                        <RobotAvatarSmall className="w-9 h-9 mt-0.5" />
                        <div className="flex-1 max-w-[90%] sm:max-w-[86%] rounded-2xl rounded-tl-sm p-4 sm:p-5 relative transition-all bg-[#1D2235]/95 border border-[#373E57]/90 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                          {/* Top Header Bar for Non-Welcome Assistant Responses */}
                          {msg.id !== 'welcome-msg' && msg.text && (
                            <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#373E57]/50">
                              <div className="flex items-center gap-2 min-w-0">
                                <BarChart3 className="w-4 h-4 text-[#D1C7D7] shrink-0" />
                                <span
                                  className={`text-xs sm:text-[13px] font-bold text-[#F2F0F4] truncate ${
                                    msgIsAR ? 'font-arabic' : 'font-manrope'
                                  }`}
                                >
                                  {msg.title ||
                                    (msgIsAR ? 'إجابة المساعد الذكي' : "Fatma's Portfolio Insight")}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(msg.id, msg.text)}
                                aria-label={isAR ? 'نسخ الإجابة' : 'Copy response'}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131724]/80 hover:bg-[#2A314A] text-[11px] text-[#CDD0D9] hover:text-[#F2F0F4] border border-[#373E57]/70 transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                              >
                                {copiedId === msg.id ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span>{isAR ? 'تم النسخ' : 'Copied'}</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>{isAR ? 'نسخ' : 'Copy'}</span>
                                  </>
                                )}
                              </button>
                            </div>
                          )}

                          {/* Formatted Message Content */}
                          <FormattedMessageContent text={msg.text} isAR={msgIsAR} />

                          {/* Actionable Links Bar (External URLs & Internal Section Jump Buttons) */}
                          {msg.links && msg.links.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-[#373E57]/50">
                              {msg.links.map((lnk, lIdx) =>
                                lnk.isInternalAnchor ? (
                                  <button
                                    key={lIdx}
                                    type="button"
                                    onClick={() => handleNavigateAnchor(lnk.url)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#252B42] hover:bg-[#D1C7D7] text-[#F2F0F4] hover:text-[#0F1218] border border-[#6F7398]/50 text-xs font-semibold transition-colors cursor-pointer"
                                  >
                                    <span>{lnk.label[msgIsAR ? 'AR' : 'EN']}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </button>
                                ) : (
                                  <a
                                    key={lIdx}
                                    href={lnk.url}
                                    download={
                                      lnk.url.toLowerCase().endsWith('.pdf')
                                        ? 'Fatma_Abdel_Fattah_CV.pdf'
                                        : undefined
                                    }
                                    target={lnk.url.startsWith('mailto:') ? undefined : '_blank'}
                                    rel={
                                      lnk.url.startsWith('mailto:')
                                        ? undefined
                                        : 'noopener noreferrer'
                                    }
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] text-xs font-semibold transition-colors"
                                  >
                                    <span>{lnk.label[msgIsAR ? 'AR' : 'EN']}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )
                              )}
                            </div>
                          )}

                          {/* Contextual Highlight Chips (matching the BASIRA badges in reference screenshot) */}
                          {msg.highlightBadges && msg.highlightBadges.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mt-3 pt-2.5 border-t border-[#373E57]/45">
                              {msg.highlightBadges.map((badge) => (
                                <span
                                  key={badge}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131724] border border-[#6F7398]/45 text-[11px] font-medium text-[#F2F0F4]"
                                >
                                  <Database className="w-3 h-3 text-[#D1C7D7]" />
                                  <span>{badge}</span>
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Follow-up Question Suggestions inside/beneath response */}
                          {msg.followUpQuestions &&
                            msg.followUpQuestions.length > 0 &&
                            index === messages.length - 1 && (
                              <div className="mt-3.5 pt-2.5 border-t border-[#373E57]/40">
                                <p className="text-[11px] text-[#CDD0D9] mb-2 font-medium">
                                  {msgIsAR ? 'أسئلة ذات صلة:' : 'Follow-up questions:'}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {msg.followUpQuestions.map((fq, fqIdx) => (
                                    <button
                                      key={fqIdx}
                                      type="button"
                                      onClick={() => sendMessage(fq)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A2A] hover:bg-[#272E47] border border-[#373E57] hover:border-[#D1C7D7]/60 text-[11.5px] text-[#D1C7D7] hover:text-white transition-colors cursor-pointer"
                                    >
                                      <Sparkles className="w-3 h-3 shrink-0" />
                                      <span>{fq}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                          {/* Timestamp */}
                          <div className="mt-2 flex justify-end">
                            <span className="text-[10.5px] text-[#CDD0D9]/70 select-none tabular-nums">
                              {msg.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Render Suggested Questions Block right beneath the initial Welcome message */}
                      {index === 0 && (
                        <div className="pl-2 sm:pl-12 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F2F0F4]">
                              <Sparkles className="w-3.5 h-3.5 text-[#D1C7D7]" />
                              <span className={isAR ? 'font-arabic' : 'font-manrope'}>
                                {isAR ? 'أسئلة مقترحة' : 'Suggested Questions'}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => setShowAllSuggestions((prev) => !prev)}
                              className="inline-flex items-center gap-1 text-[11.5px] font-medium text-[#D1C7D7] hover:text-white transition-colors cursor-pointer"
                            >
                              <span>
                                {showAllSuggestions
                                  ? isAR
                                    ? 'عرض أقل'
                                    : 'Show Less'
                                  : isAR
                                  ? 'عرض الكل'
                                  : 'View All'}
                              </span>
                              <ChevronRight
                                className={`w-3.5 h-3.5 transition-transform ${
                                  showAllSuggestions ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {visibleSuggestions.map((q) => (
                              <button
                                key={q.id}
                                type="button"
                                disabled={isSearching}
                                onClick={() => sendMessage(q.text[lang])}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#171C2D]/90 hover:bg-[#232A42] border border-[#373E57] hover:border-[#D1C7D7]/70 text-xs font-medium text-[#F2F0F4] transition-all duration-200 disabled:opacity-50 cursor-pointer text-left"
                              >
                                <QuestionChipIcon type={q.iconType} />
                                <span className={isAR ? 'font-arabic' : 'font-inter'}>
                                  {q.text[lang]}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Honest Local Portfolio Search Status Indicator */}
                {isSearching && (
                  <div className="flex items-center gap-3">
                    <RobotAvatarSmall className="w-9 h-9" />
                    <div className="px-4 py-2.5 rounded-2xl bg-[#1D2235]/90 border border-[#373E57] inline-flex items-center gap-2 text-xs text-[#CDD0D9]">
                      <Sparkles className="w-3.5 h-3.5 text-[#D1C7D7]" />
                      <span>
                        {isAR ? 'جاري البحث في ملف الأعمال...' : 'Searching portfolio...'}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ============================================================
                  BOTTOM INPUT COMPOSER BAR
                  ============================================================ */}
              <div className="p-3 sm:p-4 bg-[#151927]/95 border-t border-[#373E57]/75 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(inputValue);
                  }}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0F1218] border border-[#6F7398]/55 focus-within:border-[#D1C7D7] focus-within:shadow-[0_0_16px_rgba(209,199,215,0.22)] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#D1C7D7] shrink-0" aria-hidden="true" />
                  <textarea
                    ref={inputRef}
                    rows={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDownInput}
                    placeholder={
                      isAR
                        ? 'اسأل أي شيء عن فاطمة، مشاريعها، أو مهاراتها...'
                        : 'Ask anything about Fatma...'
                    }
                    aria-label={isAR ? 'اكتب سؤالك هنا' : 'Ask anything about Fatma'}
                    className={`flex-1 bg-transparent text-[#F2F0F4] placeholder-[#CDD0D9]/60 text-sm resize-none focus:outline-none max-h-24 py-1 ${
                      isAR ? 'font-arabic text-right' : 'font-inter text-left'
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isSearching}
                    aria-label={isAR ? 'إرسال الرسالة' : 'Send message'}
                    className="w-10 h-9 rounded-xl bg-[#D1C7D7] hover:bg-[#F2F0F4] disabled:opacity-40 disabled:hover:bg-[#D1C7D7] text-[#0F1218] flex items-center justify-center transition-all shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[2.2]" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(portalContent, document.body);
}
