import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  CheckCircle2,
  Sparkles,
  Globe,
  BarChart3,
  Layers,
} from 'lucide-react';
import {
  CANONICAL_PROJECTS,
  DATA_AI_PROJECTS,
  FRONTEND_PROJECTS,
  CanonicalProjectRecord,
  ProjectIconKey,
} from '../data/projectsData';

interface ProjectsSectionProps {
  lang: 'EN' | 'AR';
}

// ============================================================================
// 1. BESPOKE SOFT LAVENDER LINE ICONS (MATCHING UPLOADED SCREENSHOT EXACTLY)
// ============================================================================
export const ProjectCustomSvgIcon: React.FC<{
  iconKey: ProjectIconKey;
  className?: string;
}> = ({ iconKey, className = 'w-11 h-11' }) => {
  switch (iconKey) {
    case 'basira':
      // 3 ascending bar chart columns + magnifying glass overlapping the bars
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          {/* Base line */}
          <path
            d="M6 38H28"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Bar 1 */}
          <rect
            x="9"
            y="25"
            width="4.5"
            height="13"
            rx="1"
            fill="#D1C7D7"
            fillOpacity="0.85"
          />
          {/* Bar 2 */}
          <rect
            x="16.5"
            y="18"
            width="4.5"
            height="20"
            rx="1"
            fill="#D1C7D7"
            fillOpacity="0.9"
          />
          {/* Bar 3 */}
          <rect
            x="24"
            y="12"
            width="4.5"
            height="15"
            rx="1"
            fill="#D1C7D7"
          />
          {/* Magnifying glass circle */}
          <circle
            cx="30"
            cy="28"
            r="7.5"
            fill="#1D1A2B"
            stroke="#D1C7D7"
            strokeWidth="2.4"
          />
          {/* Magnifying glass inner reflection arc */}
          <path
            d="M27.2 25.5C28.3 24.4 30 24.2 31.4 24.8"
            stroke="#D1C7D7"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Magnifying glass handle */}
          <path
            d="M35.5 33.5L41.5 39.5"
            stroke="#D1C7D7"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'student-identity':
      // Academic graduation cap outline
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M24 11L6 19.5L24 28L42 19.5L24 11Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          <path
            d="M13 23.2V32.5C13 35.5 18 38.5 24 38.5C30 38.5 35 35.5 35 32.5V23.2"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 20.5V31.5"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <circle cx="40" cy="33" r="1.8" fill="#D1C7D7" />
        </svg>
      );

    case 'techuni':
      // Rising bar chart with upward arrow & two small people silhouettes on top-left
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          {/* Small person 1 */}
          <circle cx="13" cy="12.5" r="2.2" stroke="#D1C7D7" strokeWidth="1.8" />
          <path
            d="M9.5 18.5C9.5 16.7 11 15.5 13 15.5C15 15.5 16.5 16.7 16.5 18.5"
            stroke="#D1C7D7"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Small person 2 */}
          <circle cx="21" cy="11" r="2.2" stroke="#D1C7D7" strokeWidth="1.8" />
          <path
            d="M17.5 17C17.5 15.2 19 14 21 14C23 14 24.5 15.2 24.5 17"
            stroke="#D1C7D7"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Rising Trend Arrow */}
          <path
            d="M10 26L21 20L37 11"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 10.5H37.5V17"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ascending Bars */}
          <rect x="9" y="30" width="5" height="9" rx="1" fill="#D1C7D7" fillOpacity="0.85" />
          <rect x="17.5" y="26" width="5" height="13" rx="1" fill="#D1C7D7" fillOpacity="0.9" />
          <rect x="26" y="22" width="5" height="17" rx="1" fill="#D1C7D7" fillOpacity="0.95" />
          <rect x="34.5" y="17.5" width="5" height="21.5" rx="1" fill="#D1C7D7" />
        </svg>
      );

    case 'bodyintel':
      // Heart outline with ECG pulse waveform inside
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M24 39.5C24 39.5 8 29.2 8 17.8C8 12.6 12.1 8.5 17.1 8.5C20.1 8.5 22.7 10 24 12.3C25.3 10 27.9 8.5 30.9 8.5C35.9 8.5 40 12.6 40 17.8C40 29.2 24 39.5 24 39.5Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 22.5H18L20.8 17L24.5 27.5L27.5 20.5L29.5 22.5H35.5"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'dashboard-viz':
      // Monitor outline containing 4 vertical chart bars inside
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="7"
            y="10"
            width="34"
            height="24"
            rx="3.5"
            stroke="#D1C7D7"
            strokeWidth="2.3"
          />
          {/* Bars inside monitor */}
          <path
            d="M14.5 28V23"
            stroke="#D1C7D7"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M20.8 28V19"
            stroke="#D1C7D7"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M27.2 28V21"
            stroke="#D1C7D7"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M33.5 28V16"
            stroke="#D1C7D7"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Stand */}
          <path
            d="M20 34L18.5 39M28 34L29.5 39"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15 39H33"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'pold-menu':
      // Burger outline icon matching Row 02 Card 01 in reference screenshot
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          {/* Top Dome Bun */}
          <path
            d="M10 21C10 13.8 16.2 9.5 24 9.5C31.8 9.5 38 13.8 38 21H10Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          {/* Sesame Seeds */}
          <circle cx="19" cy="14.5" r="1.1" fill="#D1C7D7" />
          <circle cx="24" cy="13.2" r="1.1" fill="#D1C7D7" />
          <circle cx="29" cy="14.8" r="1.1" fill="#D1C7D7" />
          {/* Wavy lettuce/cheese middle */}
          <path
            d="M8.5 25.5C11 24 13.5 27 16 25.5C18.5 24 21.5 27 24 25.5C26.5 24 29.5 27 32 25.5C34.5 24 37 27 39.5 25.5"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Patty line */}
          <rect
            x="9.5"
            y="29"
            width="29"
            height="4"
            rx="2"
            stroke="#D1C7D7"
            strokeWidth="2.1"
          />
          {/* Bottom Bun */}
          <path
            d="M10.5 33H37.5V35.5C37.5 37.7 35.7 39.5 33.5 39.5H14.5C12.3 39.5 10.5 37.7 10.5 35.5V33Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'alpha-website':
      // Desktop monitor outline with </> code brackets inside
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="7"
            y="10"
            width="34"
            height="23.5"
            rx="3.5"
            stroke="#D1C7D7"
            strokeWidth="2.3"
          />
          {/* Code brackets </> */}
          <path
            d="M19 18.5L15 22L19 25.5"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 18.5L33 22L29 25.5"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.5 17L22.5 27"
            stroke="#D1C7D7"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          {/* Stand */}
          <path
            d="M20 33.5L18.5 39M28 33.5L29.5 39"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15 39H33"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'sanad-plus':
      // Heart outline with a centered medical plus (+) symbol inside
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M24 39.5C24 39.5 8 29.2 8 17.8C8 12.6 12.1 8.5 17.1 8.5C20.1 8.5 22.7 10 24 12.3C25.3 10 27.9 8.5 30.9 8.5C35.9 8.5 40 12.6 40 17.8C40 29.2 24 39.5 24 39.5Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.5V26.5M19.5 22H28.5"
            stroke="#D1C7D7"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'ziad-portfolio':
      // Clean user profile outline icon
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="16.5"
            r="6.5"
            stroke="#D1C7D7"
            strokeWidth="2.3"
          />
          <path
            d="M11 38.5C11 31.6 16.8 27 24 27C31.2 27 37 31.6 37 38.5"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <path
            d="M11 38.5H37"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'lms-platform':
      // Open book outline icon
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M24 14.5C20.5 12 14.5 11.2 8.5 12.5V35C14.5 33.7 20.5 34.5 24 37C27.5 34.5 33.5 33.7 39.5 35V12.5C33.5 11.2 27.5 12 24 14.5Z"
            stroke="#D1C7D7"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 14.5V37"
            stroke="#D1C7D7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

// ============================================================================
// 2. COMPACT PROJECT CARD (EXACT VISUAL REPLICA OF SCREENSHOT CARDS)
// ============================================================================
interface CompactProjectCardProps {
  project: CanonicalProjectRecord;
  lang: 'EN' | 'AR';
  isDuplicate: boolean;
  onSelect: (project: CanonicalProjectRecord, triggerEl: HTMLButtonElement | null) => void;
}

export const CompactProjectCard: React.FC<CompactProjectCardProps> = ({
  project,
  lang,
  isDuplicate,
  onSelect,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isFlagship = Boolean(project.isFeaturedFlagship);
  const titleText = project.cardTitle[lang];
  const subtitleText = project.cardSubtitle[lang];

  return (
    <button
      ref={buttonRef}
      type="button"
      tabIndex={isDuplicate ? -1 : 0}
      aria-hidden={isDuplicate ? 'true' : undefined}
      aria-label={`${titleText} — ${subtitleText}`}
      onClick={() => onSelect(project, buttonRef.current)}
      className={`group/card relative shrink-0 w-[248px] sm:w-[276px] lg:w-[282px] h-[150px] sm:h-[156px] rounded-[20px] px-5 pt-4 pb-3.5 text-left select-none transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1C7D7] ${
        isFlagship
          ? 'hover:-translate-y-1.5'
          : 'hover:-translate-y-1'
      }`}
      style={{
        background: isFlagship
          ? 'linear-gradient(155deg, rgba(48, 39, 71, 0.92) 0%, rgba(26, 23, 41, 0.96) 55%, rgba(20, 18, 33, 0.98) 100%)'
          : 'linear-gradient(155deg, rgba(35, 36, 56, 0.86) 0%, rgba(22, 24, 38, 0.94) 60%, rgba(17, 19, 31, 0.98) 100%)',
        border: isFlagship
          ? '1.6px solid rgba(224, 211, 238, 0.92)'
          : '1px solid rgba(209, 199, 215, 0.28)',
        boxShadow: isFlagship
          ? '0 0 26px rgba(209, 199, 215, 0.42), 0 12px 30px rgba(0, 0, 0, 0.65), inset 0 0 22px rgba(209, 199, 215, 0.16)'
          : '0 10px 28px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.07)',
      }}
    >
      {/* Hover Border & Ambient Glow Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-[20px] transition-opacity duration-300 ${
          isFlagship ? 'opacity-100' : 'opacity-0 group-hover/card:opacity-100'
        }`}
        style={{
          boxShadow: isFlagship
            ? 'inset 0 0 24px rgba(209, 199, 215, 0.22)'
            : 'inset 0 0 18px rgba(209, 199, 215, 0.14), 0 0 18px rgba(209, 199, 215, 0.22)',
          border: isFlagship
            ? '1px solid rgba(242, 240, 244, 0.45)'
            : '1px solid rgba(209, 199, 215, 0.58)',
        }}
      />

      {/* Top glow flare for Flagship BASIRA card */}
      {isFlagship && (
        <>
          <div
            className="pointer-events-none absolute -top-[1px] left-8 right-8 h-[2px]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #F2F0F4 50%, transparent 100%)',
              boxShadow: '0 0 14px rgba(209, 199, 215, 0.95)',
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-[1px] left-10 right-10 h-[2px]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #D1C7D7 50%, transparent 100%)',
              boxShadow: '0 0 12px rgba(209, 199, 215, 0.85)',
            }}
          />
        </>
      )}

      {/* Subtle Bottom Wave Decoration inside card (Matches reference screenshot) */}
      <svg
        viewBox="0 0 280 56"
        fill="none"
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-14 opacity-40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 44 C 65 44, 95 26, 155 34 C 205 40, 238 14, 280 22 L 280 56 L 0 56 Z"
          fill="url(#cardWaveGrad)"
        />
        <path
          d="M0 44 C 65 44, 95 26, 155 34 C 205 40, 238 14, 280 22"
          stroke="#D1C7D7"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="cardWaveGrad" x1="0" y1="0" x2="280" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6F7398" stopOpacity="0.12" />
            <stop offset="55%" stopColor="#D1C7D7" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#373E57" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top-Right Corner External Box-Arrow Icon */}
      <div className="absolute top-3.5 right-3.5 text-[#D1C7D7]/80 group-hover/card:text-[#F2F0F4] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path
            d="M11 3.5H16.5V9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2 3.8L9.5 10.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14.5 11.5V15.2C14.5 15.9 13.9 16.5 13.2 16.5H4.8C4.1 16.5 3.5 15.9 3.5 15.2V6.8C3.5 6.1 4.1 5.5 4.8 5.5H8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Content Layout: Icon + Vertical Divider + Title, and Subtitle Below */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-2">
        {/* Middle Row: Custom Icon | Vertical Line | Project Title */}
        <div className="flex items-center gap-3.5 pr-5 my-auto">
          <div className="shrink-0 transition-transform duration-300 group-hover/card:scale-105">
            <ProjectCustomSvgIcon
              iconKey={project.iconKey}
              className="w-11 h-11"
            />
          </div>

          {/* Vertical Divider Line */}
          <div className="h-10 w-[1px] bg-[#D1C7D7]/25 shrink-0" />

          {/* Project Title */}
          <div className="min-w-0 flex-1">
            <h4 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#F2F0F4] group-hover/card:text-white leading-[1.22] tracking-[-0.01em] line-clamp-3">
              {titleText}
            </h4>
          </div>
        </div>

        {/* Bottom Subtitle */}
        <div className="pt-1.5 text-center">
          <p
            className={`text-[11.5px] sm:text-[12px] text-[#CDD0D9]/95 font-medium truncate ${
              lang === 'AR' ? 'font-arabic' : 'font-inter'
            }`}
          >
            {subtitleText}
          </p>
        </div>
      </div>
    </button>
  );
};

// ============================================================================
// 3. PROJECT NAVIGATION CONTROLS (ARROWS & PAGINATION DOTS)
// ============================================================================
interface RowPaginationDotsProps {
  total: number;
  activeIndex: number;
  rowLabel: string;
  onDotClick: (index: number) => void;
}

export const ProjectNavigationControls: React.FC<RowPaginationDotsProps> = ({
  total,
  activeIndex,
  rowLabel,
  onDotClick,
}) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      <span
        className="h-[1px] w-14 sm:w-20"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(209, 199, 215, 0.42) 100%)',
        }}
      />
      <div
        className="flex items-center gap-2.5"
        role="tablist"
        aria-label={`${rowLabel} pagination`}
      >
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onDotClick(idx)}
              aria-label={`Go to project ${idx + 1} in ${rowLabel}`}
              aria-current={isActive ? 'true' : undefined}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-3 h-3 bg-[#D1C7D7] shadow-[0_0_12px_rgba(209,199,215,0.95)] scale-110'
                  : 'w-2 h-2 bg-[#6F7398]/55 hover:bg-[#D1C7D7]/70'
              }`}
            />
          );
        })}
      </div>
      <span
        className="h-[1px] w-14 sm:w-20"
        style={{
          background:
            'linear-gradient(90deg, rgba(209, 199, 215, 0.42) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

// ============================================================================
// 4. OPPOSITE-DIRECTION INFINITE MARQUEE ROW (GPU-ACCELERATED rAF LOOP)
// ============================================================================
interface ProjectMarqueeRowProps {
  rowId: string;
  pillTitle: string;
  pillIconType: 'database' | 'code';
  projects: CanonicalProjectRecord[];
  /**
   * 'rtl' = moves RIGHT TO LEFT (Row 01: Data & AI Projects)
   * 'ltr' = moves LEFT TO RIGHT (Row 02: Frontend & Digital Experiences)
   */
  direction: 'rtl' | 'ltr';
  speedPxPerSec: number;
  lang: 'EN' | 'AR';
  isModalOpen: boolean;
  isSectionVisible: boolean;
  prefersReducedMotion: boolean;
  onSelectProject: (
    project: CanonicalProjectRecord,
    triggerEl: HTMLButtonElement | null
  ) => void;
}

export const ProjectMarqueeRow: React.FC<ProjectMarqueeRowProps> = ({
  rowId,
  pillTitle,
  pillIconType,
  projects,
  direction,
  speedPxPerSec,
  lang,
  isModalOpen,
  isSectionVisible,
  prefersReducedMotion,
  onSelectProject,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const targetNudgeRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0);
  const initializedRef = useRef<boolean>(false);

  const isHoveredRef = useRef<boolean>(false);
  const isFocusedRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);

  // Measure single set width (1/3 of the 3x duplicated track)
  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth;
    const singleSetWidth = totalWidth / 3;
    if (singleSetWidth > 0) {
      setWidthRef.current = singleSetWidth;
      if (!initializedRef.current) {
        // Start on the middle canonical set [-singleSetWidth, 0)
        offsetRef.current = -singleSetWidth;
        initializedRef.current = true;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
    }
  }, []);

  useEffect(() => {
    measureSetWidth();
    window.addEventListener('resize', measureSetWidth);
    return () => window.removeEventListener('resize', measureSetWidth);
  }, [measureSetWidth, projects.length]);

  // Normalize offset strictly inside [-setWidth, 0) for seamless infinite wrap
  const normalizeOffset = useCallback((rawOffset: number, setWidth: number) => {
    if (setWidth <= 0) return rawOffset;
    let wrapped = rawOffset;
    while (wrapped <= -setWidth * 2) {
      wrapped += setWidth;
    }
    while (wrapped > -setWidth) {
      wrapped -= setWidth;
    }
    return wrapped;
  }, []);

  // Update active pagination dot based on current offset
  const syncActivePaginationDot = useCallback(
    (currentOffset: number, setWidth: number) => {
      if (setWidth <= 0 || projects.length === 0) return;
      const cardStep = setWidth / projects.length;
      // Distance scrolled relative to canonical set start (-setWidth)
      const relativeShift = ((-currentOffset - setWidth) % setWidth + setWidth) % setWidth;
      const computedIndex = Math.round(relativeShift / cardStep) % projects.length;
      if (computedIndex !== activeIndexRef.current) {
        activeIndexRef.current = computedIndex;
        setActiveIndex(computedIndex);
      }
    },
    [projects.length]
  );

  // Continuous 60fps requestAnimationFrame loop
  useEffect(() => {
    let rafId: number;
    let lastTimestamp = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      const setWidth = setWidthRef.current;
      const track = trackRef.current;

      if (track && setWidth > 0) {
        // Apply smooth manual arrow nudge if queued
        if (Math.abs(targetNudgeRef.current) > 0.5) {
          const nudgeDelta = targetNudgeRef.current * Math.min(dt * 12, 0.35);
          offsetRef.current += nudgeDelta;
          targetNudgeRef.current -= nudgeDelta;
        } else if (targetNudgeRef.current !== 0) {
          offsetRef.current += targetNudgeRef.current;
          targetNudgeRef.current = 0;
        }

        const isPaused =
          prefersReducedMotion ||
          isModalOpen ||
          !isSectionVisible ||
          document.visibilityState === 'hidden' ||
          isHoveredRef.current ||
          isFocusedRef.current ||
          isDraggingRef.current;

        if (!isPaused) {
          // direction === 'rtl' => moves RIGHT TO LEFT (negative X translation)
          // direction === 'ltr' => moves LEFT TO RIGHT (positive X translation)
          const velocity = direction === 'rtl' ? -speedPxPerSec : speedPxPerSec;
          offsetRef.current += velocity * dt;
        }

        offsetRef.current = normalizeOffset(offsetRef.current, setWidth);
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        syncActivePaginationDot(offsetRef.current, setWidth);
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [
    direction,
    speedPxPerSec,
    isModalOpen,
    isSectionVisible,
    prefersReducedMotion,
    normalizeOffset,
    syncActivePaginationDot,
  ]);

  // Manual step left / right for this row only
  const handleManualStep = (dir: 'prev' | 'next') => {
    const setWidth = setWidthRef.current;
    if (setWidth <= 0 || projects.length === 0) return;
    const singleCardStep = setWidth / projects.length;
    // Left arrow shifts cards right (+singleCardStep); Right arrow shifts cards left (-singleCardStep)
    targetNudgeRef.current += dir === 'prev' ? singleCardStep : -singleCardStep;
  };

  // Jump smoothly to specific dot index in this row
  const handleDotJump = (targetIdx: number) => {
    const setWidth = setWidthRef.current;
    if (setWidth <= 0 || projects.length === 0) return;
    const singleCardStep = setWidth / projects.length;
    const desiredOffset = -setWidth - targetIdx * singleCardStep;
    const normalizedDesired = normalizeOffset(desiredOffset, setWidth);
    targetNudgeRef.current = normalizedDesired - offsetRef.current;
  };

  // Pointer drag / touch swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }
    const setWidth = setWidthRef.current;
    if (setWidth > 0 && trackRef.current) {
      offsetRef.current = normalizeOffset(
        dragStartOffsetRef.current + deltaX,
        setWidth
      );
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      syncActivePaginationDot(offsetRef.current, setWidth);
    }
  };

  const handlePointerUpOrCancel = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (
    project: CanonicalProjectRecord,
    triggerEl: HTMLButtonElement | null
  ) => {
    // Prevent accidental modal trigger when user was swiping/dragging
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    onSelectProject(project, triggerEl);
  };

  // Render 3 copies [set0, set1 (canonical), set2] for infinite seamless loop
  const copies = [0, 1, 2];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        isDraggingRef.current = false;
      }}
      onFocusCapture={() => {
        isFocusedRef.current = true;
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          isFocusedRef.current = false;
        }
      }}
    >
      {/* ====================================================================
          CATEGORY PILL HEADER FLANKED BY HORIZONTAL LAVENDER LINES
          ==================================================================== */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 px-4">
        <div
          className="h-[1px] flex-1 max-w-[330px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(209, 199, 215, 0.45) 100%)',
          }}
        />

        <div
          className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full"
          style={{
            background:
              'linear-gradient(145deg, rgba(35, 34, 56, 0.92) 0%, rgba(22, 23, 38, 0.96) 100%)',
            border: '1.2px solid rgba(209, 199, 215, 0.65)',
            boxShadow:
              '0 0 20px rgba(209, 199, 215, 0.25), inset 0 0 12px rgba(209, 199, 215, 0.12)',
          }}
        >
          {pillIconType === 'database' ? (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="w-4 h-4 text-[#D1C7D7] shrink-0"
              aria-hidden="true"
            >
              <ellipse
                cx="10"
                cy="4.5"
                rx="6.2"
                ry="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M3.8 4.5V10C3.8 11.4 6.6 12.5 10 12.5C13.4 12.5 16.2 11.4 16.2 10V4.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M3.8 10V15.5C3.8 16.9 6.6 18 10 18C13.4 18 16.2 16.9 16.2 15.5V10"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 22 20"
              fill="none"
              className="w-4 h-4 text-[#D1C7D7] shrink-0"
              aria-hidden="true"
            >
              <path
                d="M7 6L2.5 10L7 14"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 6L19.5 10L15 14"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 4.5L9.5 15.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span className="text-[13.5px] sm:text-[15px] font-bold text-[#F2F0F4] tracking-wide whitespace-nowrap">
            {pillTitle}
          </span>
        </div>

        <div
          className="h-[1px] flex-1 max-w-[330px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(209, 199, 215, 0.45) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ====================================================================
          MARQUEE TRACK WITH LEFT & RIGHT CIRCULAR ARROW CONTROLS
          Force dir="ltr" on physical carousel track so Row 01 is always R->L
          and Row 02 is always L->R regardless of page language.
          ==================================================================== */}
      <div dir="ltr" className="relative flex items-center gap-2 sm:gap-3.5">
        {/* Left Circular Navigation Arrow */}
        <button
          type="button"
          onClick={() => handleManualStep('prev')}
          aria-label={`Scroll ${pillTitle} left`}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#171A28]/90 hover:bg-[#252A3F] border border-[#D1C7D7]/40 hover:border-[#D1C7D7] text-[#D1C7D7] hover:text-white flex items-center justify-center transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-[0_0_16px_rgba(209,199,215,0.4)] cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1C7D7]"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Overflow Viewport Window */}
        <div
          className="relative flex-1 overflow-hidden py-3 px-1 touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrCancel}
          onPointerCancel={handlePointerUpOrCancel}
        >
          {/* Left & Right Soft Edge Vignette Masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 z-10"
            style={{
              background:
                'linear-gradient(90deg, #0F1218 0%, rgba(15, 18, 24, 0) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 z-10"
            style={{
              background:
                'linear-gradient(270deg, #0F1218 0%, rgba(15, 18, 24, 0) 100%)',
            }}
          />

          {/* GPU-Accelerated Infinite Track */}
          <div
            ref={trackRef}
            data-row-id={rowId}
            data-direction={direction}
            className="flex items-center gap-[18px] w-max will-change-transform"
          >
            {copies.map((setIdx) =>
              projects.map((project) => (
                <CompactProjectCard
                  key={`${rowId}-set-${setIdx}-${project.id}`}
                  project={project}
                  lang={lang}
                  isDuplicate={setIdx !== 1}
                  onSelect={handleCardClick}
                />
              ))
            )}
          </div>
        </div>

        {/* Right Circular Navigation Arrow */}
        <button
          type="button"
          onClick={() => handleManualStep('next')}
          aria-label={`Scroll ${pillTitle} right`}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#171A28]/90 hover:bg-[#252A3F] border border-[#D1C7D7]/40 hover:border-[#D1C7D7] text-[#D1C7D7] hover:text-white flex items-center justify-center transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-[0_0_16px_rgba(209,199,215,0.4)] cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1C7D7]"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Pagination Dots */}
      <div dir="ltr">
        <ProjectNavigationControls
          total={projects.length}
          activeIndex={activeIndex}
          rowLabel={pillTitle}
          onDotClick={handleDotJump}
        />
      </div>
    </div>
  );
};

// ============================================================================
// 5. PROJECT SCREENSHOT GALLERY / AUTHENTIC VISUAL PREVIEW IN MODAL
// ============================================================================
export const ProjectScreenshotGallery: React.FC<{
  project: CanonicalProjectRecord;
  lang: 'EN' | 'AR';
}> = ({ project, lang }) => {
  const isAR = lang === 'AR';
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Reset slide index when project changes
  useEffect(() => {
    setActiveSlide(0);
  }, [project.id]);

  // Slide 0: Authentic Project Visual / Screenshot
  // Slide 1: System Architecture & Analytical / Frontend Capabilities Preview
  const totalSlides = 2;

  return (
    <div className="space-y-4">
      <div
        className="relative rounded-2xl overflow-hidden border border-[#D1C7D7]/35 bg-[#121521] shadow-[0_14px_34px_rgba(0,0,0,0.55)]"
        style={{ minHeight: '280px' }}
      >
        {/* Top Browser / System Chrome Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#181C2B] border-b border-[#373E57]/70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D1C7D7]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6F7398]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#373E57]" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0F1218]/80 border border-[#373E57]/80 text-[11px] text-[#CDD0D9] truncate max-w-[230px]">
            <Globe className="w-3 h-3 text-[#D1C7D7] shrink-0" />
            <span className="truncate">
              {project.previewDomainLabel ||
                (isAR ? 'معاينة واجهة المشروع' : 'Project Interface Preview')}
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#D1C7D7] tabular-nums">
            {project.number}
          </span>
        </div>

        {/* Slide Content */}
        {activeSlide === 0 ? (
          project.imageAsset ? (
            <div className="relative aspect-[16/10] bg-[#0F1218] overflow-hidden">
              <img
                src={project.imageAsset}
                alt={project.fullTitle[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121521] via-transparent to-transparent opacity-60" />
            </div>
          ) : (
            /* Authentic Interface Preview Panel without any fabricated KPIs */
            <div
              className="relative aspect-[16/10] p-6 flex flex-col justify-between overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 25% 20%, rgba(111, 115, 152, 0.32) 0%, rgba(18, 21, 33, 0.98) 78%)',
              }}
            >
              {/* Decorative wave grid */}
              <svg
                viewBox="0 0 400 180"
                className="pointer-events-none absolute inset-0 w-full h-full opacity-25"
                aria-hidden="true"
              >
                <path
                  d="M-20 135 Q 100 60, 210 115 T 420 75"
                  fill="none"
                  stroke="#D1C7D7"
                  strokeWidth="1.6"
                />
                <path
                  d="M-20 155 Q 120 90, 240 132 T 420 100"
                  fill="none"
                  stroke="#6F7398"
                  strokeDasharray="4 6"
                  strokeWidth="1.3"
                />
              </svg>

              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0F1218]/85 border border-[#D1C7D7]/45 text-xs font-bold text-[#D1C7D7]">
                  {project.number} — {project.cardTitle[lang]}
                </span>
                {project.isFeaturedFlagship && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D1C7D7] text-[#0F1218] text-[11px] font-bold">
                    <Sparkles className="w-3 h-3" />
                    <span>{isAR ? 'المشروع الرئيسي' : 'Featured Flagship'}</span>
                  </span>
                )}
              </div>

              {/* Center Visual Emblem & Verified Project Highlights */}
              <div className="relative z-10 my-auto flex flex-col items-center text-center px-3">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(46, 43, 74, 0.95) 0%, rgba(22, 25, 40, 0.98) 100%)',
                    border: '1.4px solid rgba(209, 199, 215, 0.65)',
                    boxShadow: '0 0 24px rgba(209, 199, 215, 0.25)',
                  }}
                >
                  <ProjectCustomSvgIcon
                    iconKey={project.iconKey}
                    className="w-10 h-10"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-[#F2F0F4]">
                  {project.fullTitle[lang]}
                </p>
                <p className="text-xs text-[#D1C7D7] mt-1">
                  {project.cardSubtitle[lang]}
                </p>

                {/* For BASIRA, show the verified 8,150 reviews dataset & 3 aspects */}
                {project.id === 'basira' && (
                  <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-sm">
                    <div className="px-2.5 py-2 rounded-xl bg-[#0F1218]/85 border border-[#373E57]">
                      <p className="text-xs font-bold text-[#D1C7D7] tabular-nums">
                        8,150
                      </p>
                      <p className="text-[10.5px] text-[#CDD0D9]">
                        {isAR ? 'مراجعة عربية' : 'Arabic Reviews'}
                      </p>
                    </div>
                    <div className="px-2.5 py-2 rounded-xl bg-[#0F1218]/85 border border-[#373E57]">
                      <p className="text-xs font-bold text-[#D1C7D7]">ABSA</p>
                      <p className="text-[10.5px] text-[#CDD0D9]">
                        {isAR ? 'طعام · خدمة · أجواء' : 'Food · Service · Vibe'}
                      </p>
                    </div>
                    <div className="px-2.5 py-2 rounded-xl bg-[#0F1218]/85 border border-[#373E57]">
                      <p className="text-xs font-bold text-[#D1C7D7]">XLM-T</p>
                      <p className="text-[10.5px] text-[#CDD0D9]">
                        {isAR ? 'معالجة اللغة' : 'Arabic NLP'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-[#CDD0D9]/85 pt-2 border-t border-[#373E57]/50">
                <span>{project.categoryLabel[lang]}</span>
                {project.liveUrl && (
                  <span className="text-[#D1C7D7] font-semibold">
                    {isAR ? 'متاح للمعاينة الحية' : 'Live Interactive Build'}
                  </span>
                )}
              </div>
            </div>
          )
        ) : (
          /* Slide 1: Verified Architecture & Functional Scope Overview */
          <div
            className="relative aspect-[16/10] p-6 flex flex-col justify-between overflow-hidden"
            style={{
              background:
                'linear-gradient(155deg, rgba(29, 34, 54, 0.98) 0%, rgba(16, 19, 30, 0.99) 100%)',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D1C7D7]">
                <Layers className="w-3.5 h-3.5" />
                <span>
                  {isAR ? 'البنية التقنية ونطاق المشروع' : 'Technical Scope & Architecture'}
                </span>
              </span>
              <span className="text-xs text-[#CDD0D9]">{project.number}</span>
            </div>

            <div className="my-auto space-y-3">
              <div className="p-3.5 rounded-xl bg-[#111420]/90 border border-[#373E57]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#D1C7D7] mb-1">
                  {isAR ? 'الهدف الأساسي (Purpose)' : 'Core Purpose & Impact'}
                </p>
                <p className="text-xs sm:text-[13px] text-[#F2F0F4] leading-relaxed">
                  {project.purpose[lang]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {project.technologies[lang].slice(0, 4).map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-[#161B2B] border border-[#D1C7D7]/25 flex items-center gap-2"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-[#D1C7D7] shrink-0" />
                    <span className="text-xs font-medium text-[#F2F0F4] truncate">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#CDD0D9]/80 flex items-center justify-between pt-2 border-t border-[#373E57]/50">
              <span>
                {isAR ? 'بيانات موثقة من ملف أعمال فاطمة' : 'Verified Portfolio Record'}
              </span>
              <span>{project.cardTitle[lang]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Slide Switcher Controls */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-[#CDD0D9]">
          {activeSlide === 0
            ? isAR
              ? 'معاينة المشروع'
              : 'Project Visual Preview'
            : isAR
            ? 'النطاق التقني والغرض'
            : 'Purpose & Architecture'}
        </span>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`View preview slide ${idx + 1}`}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                activeSlide === idx
                  ? 'bg-[#D1C7D7] text-[#0F1218]'
                  : 'bg-[#181C2B] text-[#CDD0D9] border border-[#373E57] hover:border-[#D1C7D7]/50'
              }`}
            >
              {idx === 0
                ? isAR
                  ? 'الواجهة'
                  : 'Preview'
                : isAR
                ? 'البنية التقنية'
                : 'Scope'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 6. PROJECT DETAILS MODAL (OPENS WHEN ANY COMPACT CARD IS CLICKED)
// ============================================================================
interface ProjectDetailsModalProps {
  project: CanonicalProjectRecord | null;
  lang: 'EN' | 'AR';
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  lang,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const isAR = lang === 'AR';

  useEffect(() => {
    if (project) {
      closeButtonRef.current?.focus();
    }
  }, [project]);

  if (!project) return null;

  const contributionsList = project.contributions?.[lang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      dir={isAR ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1040px] max-h-[90vh] overflow-y-auto rounded-[26px] p-6 sm:p-8 lg:p-10 text-[#F2F0F4]"
        style={{
          background:
            'linear-gradient(160deg, rgba(29, 33, 52, 0.98) 0%, rgba(16, 19, 30, 0.99) 100%)',
          border: '1.5px solid rgba(209, 199, 215, 0.55)',
          boxShadow:
            '0 26px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(209, 199, 215, 0.22)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close (X) Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={isAR ? 'إغلاق التفاصيل' : 'Close project details'}
          className={`absolute top-5 ${
            isAR ? 'left-5' : 'right-5'
          } w-10 h-10 rounded-full bg-[#151927] hover:bg-[#252B42] border border-[#D1C7D7]/45 text-[#D1C7D7] hover:text-white flex items-center justify-center transition-all cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1C7D7]`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Two-Column Desktop / Stacked Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT AREA: Screenshot / Visual Preview Gallery */}
          <div className="lg:col-span-5">
            <ProjectScreenshotGallery project={project} lang={lang} />
          </div>

          {/* RIGHT AREA: Canonical Project Information */}
          <div className="lg:col-span-7 space-y-5">
            {/* Project Number + Category Badge */}
            <div className="flex flex-wrap items-center gap-2.5 pr-10">
              <span className="px-3.5 py-1 rounded-full bg-[#D1C7D7] text-[#0F1218] text-xs font-extrabold tabular-nums">
                {project.number}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#151927] border border-[#D1C7D7]/40 text-xs font-semibold text-[#D1C7D7]">
                {project.categoryLabel[lang]}
              </span>
            </div>

            {/* Full Project Title */}
            <h3
              id="project-modal-title"
              className={`text-2xl sm:text-3xl font-bold text-[#F2F0F4] leading-snug ${
                isAR ? 'font-arabic' : 'font-cambria'
              }`}
            >
              {project.fullTitle[lang]}
            </h3>

            {/* Project Overview */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1C7D7]">
                {isAR ? 'نظرة عامة على المشروع' : 'Project Overview'}
              </h4>
              <p className="text-sm sm:text-[15px] text-[#CDD0D9] leading-relaxed">
                {project.overview[lang]}
              </p>
            </div>

            {/* What the Project Does / Purpose */}
            <div className="p-4 rounded-2xl bg-[#131725]/90 border border-[#373E57]/80 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1C7D7]">
                {isAR ? 'ما يقدمه المشروع والهدف منه' : 'What the Project Does & Purpose'}
              </h4>
              <p className="text-xs sm:text-[14px] text-[#F2F0F4]/95 leading-relaxed">
                {project.purpose[lang]}
              </p>
            </div>

            {/* Fatma's Specific Contribution (Only rendered when documented in approved data) */}
            {contributionsList && contributionsList.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#151929] border border-[#D1C7D7]/35 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1C7D7]">
                  {isAR ? 'مساهمتي في المشروع (My Contribution):' : 'My Contribution:'}
                </h4>
                <ul className="space-y-2">
                  {contributionsList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#F2F0F4] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D1C7D7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Tools & Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1C7D7]">
                {isAR ? 'الأدوات والتقنيات المستخدمة' : 'Key Tools & Technologies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies[lang].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1C2135] border border-[#D1C7D7]/35 text-[#F2F0F4] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Buttons (Live Project button ONLY rendered when liveUrl exists) */}
            <div className="pt-3 border-t border-[#373E57]/60 flex flex-wrap items-center justify-between gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] font-bold text-sm transition-all shadow-[0_6px_22px_rgba(209,199,215,0.35)]"
                >
                  <span>
                    {project.ctaLabel
                      ? project.ctaLabel[lang]
                      : isAR
                      ? 'عرض المشروع المباشر'
                      : 'View Live Project'}
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161B2B] border border-[#D1C7D7]/35 text-xs font-semibold text-[#D1C7D7]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {isAR
                      ? 'مشروع أكاديمي تحليلي — أكاديمية السادات'
                      : 'Academic Analytics Platform — Sadat Academy'}
                  </span>
                </span>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#191E2F] hover:bg-[#242B42] text-[#F2F0F4] border border-[#373E57] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                {isAR ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 7. MAIN FEATURED PROJECTS SECTION
// ============================================================================
export function FeaturedProjectsSection({ lang }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<CanonicalProjectRecord | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(false);

  const isAR = lang === 'AR';

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Pause animation when section scrolls out of viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Handle ESC key to close modal and restore focus
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject, handleCloseModal]);

  const handleSelectProject = useCallback(
    (project: CanonicalProjectRecord, triggerEl: HTMLButtonElement | null) => {
      lastTriggerRef.current = triggerEl;
      setSelectedProject(project);
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      dir={isAR ? 'rtl' : 'ltr'}
      className="relative py-24 sm:py-28 px-3 sm:px-6 lg:px-10 bg-[#0F1218] border-b border-[#373E57]/35 overflow-hidden"
    >
      {/* Top-Left Diagonal Lavender Light Streak & Ambient Glow (Matches Reference Screenshot) */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #D1C7D7 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full blur-[180px] opacity-12"
        style={{
          background: 'radial-gradient(circle, #6F7398 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ====================================================================
            SECTION HEADER (MATCHING REFERENCE SCREENSHOT EXACTLY)
            ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow: ─── PORTFOLIO ─── */}
          <div className="inline-flex items-center justify-center gap-3.5 mb-3">
            <span className="h-[1px] w-9 sm:w-12 bg-[#D1C7D7]/60" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.26em] text-[#F2F0F4]/90 uppercase">
              {isAR ? 'معرض الأعمال' : 'PORTFOLIO'}
            </span>
            <span className="h-[1px] w-9 sm:w-12 bg-[#D1C7D7]/60" />
          </div>

          {/* Main Heading: "Featured Projects" with "Projects" highlighted in Soft Lavender #D1C7D7 */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#F2F0F4] leading-[1.12] ${
              isAR ? 'font-arabic' : 'font-cambria tracking-[-0.02em]'
            }`}
          >
            {isAR ? (
              <>
                أبرز <span className="text-[#D1C7D7]">المشاريع</span>
              </>
            ) : (
              <>
                Featured <span className="text-[#D1C7D7]">Projects</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-[15px] sm:text-[17px] text-[#CDD0D9] mt-3.5 leading-relaxed ${
              isAR ? 'font-arabic' : 'font-inter'
            }`}
          >
            {isAR
              ? 'استكشف أعمالي في تحليل البيانات، والذكاء الاصطناعي التطبيقي، وتطوير الواجهات الأمامية.'
              : 'Explore my work across data analytics, applied AI, and frontend development.'}
          </p>
        </div>

        {/* ====================================================================
            DUAL OPPOSITE-DIRECTION ANIMATED PROJECT CAROUSELS
            Row 01: Data & AI Projects -> Moves RIGHT TO LEFT (22 px/sec)
            Row 02: Frontend & Digital Experiences -> Moves LEFT TO RIGHT (19 px/sec)
            ==================================================================== */}
        <div className="space-y-11 sm:space-y-14">
          {/* ROW 01 — Data & AI Projects (Moves RIGHT TO LEFT) */}
          <ProjectMarqueeRow
            rowId="row-01-data-ai"
            pillTitle={
              isAR ? 'مشاريع البيانات والذكاء الاصطناعي' : 'Data & AI Projects'
            }
            pillIconType="database"
            projects={DATA_AI_PROJECTS}
            direction="rtl"
            speedPxPerSec={22}
            lang={lang}
            isModalOpen={Boolean(selectedProject)}
            isSectionVisible={isSectionVisible}
            prefersReducedMotion={prefersReducedMotion}
            onSelectProject={handleSelectProject}
          />

          {/* ROW 02 — Frontend & Digital Experiences (Moves LEFT TO RIGHT) */}
          <ProjectMarqueeRow
            rowId="row-02-frontend"
            pillTitle={
              isAR
                ? 'تطوير الواجهات والتجارب الرقمية'
                : 'Frontend & Digital Experiences'
            }
            pillIconType="code"
            projects={FRONTEND_PROJECTS}
            direction="ltr"
            speedPxPerSec={19}
            lang={lang}
            isModalOpen={Boolean(selectedProject)}
            isSectionVisible={isSectionVisible}
            prefersReducedMotion={prefersReducedMotion}
            onSelectProject={handleSelectProject}
          />
        </div>
      </div>

      {/* Subtle Glowing Dotted Lavender Wave at Bottom of Section (Matches Reference Screenshot) */}
      <div className="pointer-events-none relative w-full h-16 sm:h-20 mt-10 -mb-20 overflow-hidden opacity-75">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 95 C 180 25, 360 115, 580 70 C 790 25, 980 110, 1210 55 C 1320 30, 1395 55, 1440 80 L 1440 120 L 0 120 Z"
            fill="url(#projectsBottomWaveFill)"
          />
          <path
            d="M0 95 C 180 25, 360 115, 580 70 C 790 25, 980 110, 1210 55 C 1320 30, 1395 55, 1440 80"
            stroke="#D1C7D7"
            strokeWidth="1.8"
            strokeOpacity="0.65"
          />
          <path
            d="M0 105 C 200 45, 390 118, 610 80 C 820 40, 1020 115, 1240 68 C 1340 46, 1405 68, 1440 92"
            stroke="#D1C7D7"
            strokeWidth="1.4"
            strokeDasharray="2 6"
            strokeOpacity="0.55"
          />
          <defs>
            <linearGradient
              id="projectsBottomWaveFill"
              x1="720"
              y1="20"
              x2="720"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#D1C7D7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0F1218" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ====================================================================
          PROJECT DETAILS MODAL
          ==================================================================== */}
      <ProjectDetailsModal
        project={selectedProject}
        lang={lang}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export { CANONICAL_PROJECTS };
export default FeaturedProjectsSection;
