import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, X, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface CertificationsSectionProps {
  lang: 'EN' | 'AR';
}

export type CertCategoryKey =
  | 'all'
  | 'microsoft'
  | 'google'
  | 'ibm'
  | 'data-analytics'
  | 'ml-ai'
  | 'professional';

export interface IndividualCredential {
  id: string;
  title: { EN: string; AR: string };
  issuer: { EN: string; AR: string };
  platform?: string;
  category: CertCategoryKey[];
  skills: string[];
  url?: string;
  verificationNote?: { EN: string; AR: string };
  featuredRank?: 1 | 2;
}

export interface TimelineShowcaseCardData {
  id: string;
  nodeType: 'google' | 'ibm' | 'analytics' | 'ai-engineer' | 'microsoft' | 'professional';
  categories: CertCategoryKey[];
  brandLabel?: string;
  title: { EN: string; AR: string };
  subtitle?: { EN: string; AR: string };
  directUrl?: string;
  credentialIds: string[];
}

// ============================================================================
// COMPLETE VERIFIED CREDENTIAL COLLECTION (Deduplicated, URL-Verified)
// ============================================================================
const ALL_CREDENTIALS: IndividualCredential[] = [
  // Featured 01 — Microsoft PL-300
  {
    id: 'ms-pl300',
    title: {
      EN: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      AR: 'شهادة مايكروسوفت المعتمدة: محلل بيانات Power BI مشارك (PL-300)',
    },
    issuer: { EN: 'Microsoft', AR: 'Microsoft' },
    platform: 'Microsoft Learn',
    category: ['microsoft', 'data-analytics', 'professional'],
    skills: ['Power BI', 'Data Analysis', 'Data Modeling', 'Data Visualization', 'Business Intelligence'],
    url: 'https://learn.microsoft.com/en-us/users/fatmaabdelfattah-9828/credentials/6fc6aa0ffc90ee0a',
    featuredRank: 1,
  },
  // Featured 02 — Microsoft Azure Data Fundamentals
  {
    id: 'ms-dp900',
    title: {
      EN: 'Microsoft Azure Data Fundamentals',
      AR: 'أساسيات بيانات Microsoft Azure',
    },
    issuer: { EN: 'Microsoft', AR: 'Microsoft' },
    platform: 'Microsoft Learn',
    category: ['microsoft', 'data-analytics'],
    skills: ['Microsoft Azure', 'Data Fundamentals', 'Cloud Concepts', 'Data Services', 'Data Storage'],
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/FatmaAbdelFattah-9828/8E33365767914AB6?sharingId=D3F9F9710F3516AA',
    featuredRank: 2,
  },
  // Google Data Analytics Track (8 Verified Coursera Certificates)
  {
    id: 'google-capstone',
    title: {
      EN: 'Google Data Analytics Capstone: Complete a Case Study',
      AR: 'مشروع التخرج لتحليلات بيانات Google: إكمال دراسة حالة',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics', 'professional'],
    skills: ['Case Study', 'Data Analysis', 'Portfolio Project', 'Decision Making'],
    url: 'https://www.coursera.org/account/accomplishments/verify/R50RRQ7BZXP4',
  },
  {
    id: 'google-r-programming',
    title: {
      EN: 'Data Analysis with R Programming',
      AR: 'تحليل البيانات باستخدام برمجة R',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['R Programming', 'Tidyverse', 'ggplot2', 'RMarkdown', 'Data Analysis'],
    url: 'https://www.coursera.org/account/accomplishments/verify/DQ4OLECKR0GB',
  },
  {
    id: 'google-visualization',
    title: {
      EN: 'Share Data Through the Art of Visualization',
      AR: 'مشاركة البيانات من خلال فن التصور البصري',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['Tableau', 'Data Visualization', 'Data Storytelling', 'Presentations'],
    url: 'https://www.coursera.org/account/accomplishments/verify/F0IAXN0RKGOL',
  },
  {
    id: 'google-analyze',
    title: {
      EN: 'Analyze Data to Answer Questions',
      AR: 'تحليل البيانات للإجابة على الأسئلة',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['SQL', 'Data Aggregation', 'Pivot Tables', 'Data Calculations'],
    url: 'https://www.coursera.org/account/accomplishments/verify/E3XGP9I2X5X3',
  },
  {
    id: 'google-process',
    title: {
      EN: 'Process Data from Dirty to Clean',
      AR: 'معالجة البيانات وتنظيفها',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['Data Cleaning', 'SQL', 'Data Integrity', 'Verification'],
    url: 'https://www.coursera.org/account/accomplishments/verify/GMSJPLG3PLVS',
  },
  {
    id: 'google-prepare',
    title: {
      EN: 'Prepare Data for Exploration',
      AR: 'تجهيز البيانات للاستكشاف',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['Data Collection', 'Metadata', 'SQL Queries', 'Data Ethics'],
    url: 'https://www.coursera.org/account/accomplishments/verify/JFMN3LECNCE1',
  },
  {
    id: 'google-ask',
    title: {
      EN: 'Ask Questions to Make Data-Driven Decisions',
      AR: 'طرح الأسئلة لاتخاذ قرارات مبنية على البيانات',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['Problem Solving', 'Stakeholder Alignment', 'Structured Thinking', 'KPIs'],
    url: 'https://www.coursera.org/account/accomplishments/verify/TLPORHQ0G3A0',
  },
  {
    id: 'google-foundations',
    title: {
      EN: 'Foundations: Data, Data, Everywhere',
      AR: 'الأساسيات: البيانات في كل مكان',
    },
    issuer: { EN: 'Google', AR: 'Google' },
    platform: 'Coursera',
    category: ['google', 'data-analytics'],
    skills: ['Data Ecosystem', 'Analytical Thinking', 'Data Lifecycle'],
    url: 'https://www.coursera.org/account/accomplishments/verify/U04PDLVKD1IJ',
  },
  // IBM Machine Learning & Deep Learning (3 Verified Coursera Certificates)
  {
    id: 'ibm-keras-tf',
    title: {
      EN: 'Deep Learning with Keras and TensorFlow',
      AR: 'التعلم العميق باستخدام Keras و TensorFlow',
    },
    issuer: { EN: 'IBM', AR: 'IBM' },
    platform: 'Coursera',
    category: ['ibm', 'ml-ai'],
    skills: ['Deep Learning', 'TensorFlow', 'Keras', 'Neural Architectures'],
    url: 'https://www.coursera.org/account/accomplishments/verify/JPRWFBJMJBRJ',
  },
  {
    id: 'ibm-intro-dl',
    title: {
      EN: 'Introduction to Deep Learning & Neural Networks with Keras',
      AR: 'مقدمة في التعلم العميق والشبكات العصبية باستخدام Keras',
    },
    issuer: { EN: 'IBM', AR: 'IBM' },
    platform: 'Coursera',
    category: ['ibm', 'ml-ai'],
    skills: ['Neural Networks', 'Keras', 'Backpropagation', 'Deep Learning'],
    url: 'https://www.coursera.org/account/accomplishments/verify/7MZ9ECIYYZVW',
  },
  {
    id: 'ibm-ml-python',
    title: {
      EN: 'Machine Learning with Python',
      AR: 'التعلم الآلي باستخدام بايثون',
    },
    issuer: { EN: 'IBM', AR: 'IBM' },
    platform: 'Coursera',
    category: ['ibm', 'ml-ai'],
    skills: ['Machine Learning', 'Python', 'Scikit-Learn', 'Classification', 'Regression'],
    url: 'https://www.coursera.org/account/accomplishments/verify/7LUY061IJ7B0',
  },
  // DATA ANALYST L1 Badge
  {
    id: 'data-analyst-l1',
    title: {
      EN: 'DATA ANALYST L1',
      AR: 'محلل بيانات المستوى الأول (DATA ANALYST L1)',
    },
    issuer: { EN: 'Google / Coursera', AR: 'Google / Coursera' },
    platform: 'Coursera Badge',
    category: ['google', 'data-analytics', 'professional'],
    skills: ['Data Analytics', 'SQL', 'Data Visualization', 'Business Analytics'],
    url: 'https://www.coursera.org/account/accomplishments/badge/rpKuaTWySe6Srmk1smnulA',
  },
  // Artificial Intelligence Engineer
  {
    id: 'ai-engineer',
    title: {
      EN: 'Artificial Intelligence Engineer',
      AR: 'مهندس الذكاء الاصطناعي (Artificial Intelligence Engineer)',
    },
    issuer: { EN: 'IBM / Professional Track', AR: 'IBM / مسار مهني' },
    platform: 'Coursera',
    category: ['ibm', 'ml-ai', 'professional'],
    skills: ['Applied AI', 'Deep Learning', 'Machine Learning', 'Neural Networks'],
    url: 'https://www.coursera.org/account/accomplishments/verify/JPRWFBJMJBRJ',
    verificationNote: {
      EN: 'Includes verified IBM Deep Learning & Machine Learning specialization credentials.',
      AR: 'يتضمن شهادات تخصص التعلم العميق والتعلم الآلي المعتمدة من IBM.',
    },
  },
  // Microsoft AI Agents: From Foundations to Applications Professional Certificate
  {
    id: 'ms-ai-agents',
    title: {
      EN: 'Microsoft AI Agents: From Foundations to Applications Professional Certificate',
      AR: 'شهادة مايكروسوفت المهنية: وكلاء الذكاء الاصطناعي من الأساسيات إلى التطبيقات',
    },
    issuer: { EN: 'Microsoft', AR: 'Microsoft' },
    platform: 'Microsoft',
    category: ['microsoft', 'ml-ai', 'professional'],
    skills: ['AI Agents', 'Generative AI', 'Applied AI', 'Microsoft AI Stack'],
    url: 'https://learn.microsoft.com/en-us/users/fatmaabdelfattah-9828/credentials/6fc6aa0ffc90ee0a',
    verificationNote: {
      EN: 'Verified via official Microsoft Learn Credential Profile.',
      AR: 'موثقة عبر الملف الرسمي لشهادات Microsoft Learn.',
    },
  },
  // Professional Development — Delivering Quality Work with Agility
  {
    id: 'ibm-agility',
    title: {
      EN: 'Delivering Quality Work with Agility',
      AR: 'تقديم عمل عالي الجودة بمرونة (Agility)',
    },
    issuer: { EN: 'IBM', AR: 'IBM' },
    platform: 'Coursera',
    category: ['ibm', 'professional'],
    skills: ['Agile Delivery', 'Quality Management', 'Cross-Functional Collaboration'],
    url: 'https://www.coursera.org/account/accomplishments/verify/4ZNLONAML6KV',
  },
];

// ============================================================================
// 6 CONNECTED TIMELINE SHOWCASE CARDS (Right side of desktop layout)
// ============================================================================
const TIMELINE_CARDS: TimelineShowcaseCardData[] = [
  {
    id: 'track-google-da',
    nodeType: 'google',
    categories: ['google', 'data-analytics'],
    brandLabel: 'Google',
    title: {
      EN: 'Google Data Analytics',
      AR: 'تحليلات بيانات Google',
    },
    subtitle: {
      EN: '(Professional Track)',
      AR: '(المسار المهني المتكامل)',
    },
    credentialIds: [
      'google-capstone',
      'google-r-programming',
      'google-visualization',
      'google-analyze',
      'google-process',
      'google-prepare',
      'google-ask',
      'google-foundations',
    ],
  },
  {
    id: 'track-ibm-ml',
    nodeType: 'ibm',
    categories: ['ibm', 'ml-ai'],
    brandLabel: 'IBM',
    title: {
      EN: 'IBM Machine Learning & Deep Learning',
      AR: 'التعلم الآلي والعميق من IBM',
    },
    subtitle: {
      EN: '(Coursera)',
      AR: '(Coursera)',
    },
    credentialIds: ['ibm-keras-tf', 'ibm-intro-dl', 'ibm-ml-python'],
  },
  {
    id: 'track-data-analyst-l1',
    nodeType: 'analytics',
    categories: ['google', 'data-analytics', 'professional'],
    title: {
      EN: 'DATA ANALYST L1',
      AR: 'DATA ANALYST L1',
    },
    directUrl: 'https://www.coursera.org/account/accomplishments/badge/rpKuaTWySe6Srmk1smnulA',
    credentialIds: ['data-analyst-l1'],
  },
  {
    id: 'track-ai-engineer',
    nodeType: 'ai-engineer',
    categories: ['ibm', 'ml-ai', 'professional'],
    title: {
      EN: 'Artificial Intelligence Engineer',
      AR: 'مهندس الذكاء الاصطناعي',
    },
    credentialIds: ['ai-engineer', 'ibm-keras-tf', 'ibm-intro-dl', 'ibm-ml-python'],
  },
  {
    id: 'track-ms-ai-agents',
    nodeType: 'microsoft',
    categories: ['microsoft', 'ml-ai', 'professional'],
    brandLabel: 'Microsoft',
    title: {
      EN: 'Microsoft AI Agents: From Foundations to Applications',
      AR: 'وكلاء الذكاء الاصطناعي من مايكروسوفت: من الأساسيات للتطبيقات',
    },
    credentialIds: ['ms-ai-agents'],
  },
  {
    id: 'track-professional-cert',
    nodeType: 'professional',
    categories: ['ibm', 'professional'],
    title: {
      EN: 'Professional Certificate',
      AR: 'شهادة التطوير المهني',
    },
    directUrl: 'https://www.coursera.org/account/accomplishments/verify/4ZNLONAML6KV',
    credentialIds: ['ibm-agility'],
  },
];

// ============================================================================
// BRAND & CATEGORY SVG ICONS
// ============================================================================
const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 21 21" className={className} aria-hidden="true">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" rx="0.8" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" rx="0.8" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" rx="0.8" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" rx="0.8" />
  </svg>
);

const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.58-1.14 2.92-2.42 3.82v3.18h3.91c2.29-2.11 3.53-5.22 3.53-9.24z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.91-3.18c-1.08.72-2.45 1.16-4.02 1.16-3.12 0-5.77-2.11-6.72-4.96H1.26v3.28C3.25 21.33 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.11c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.23H1.26C.46 7.83 0 9.65 0 11.81s.46 3.98 1.26 5.58l4.02-3.28z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.67 1.26 6.23l4.02 3.28c.95-2.85 3.6-4.76 6.72-4.76z"
    />
  </svg>
);

const IbmLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-auto' }) => (
  <svg viewBox="0 0 68 26" className={className} aria-hidden="true">
    <g fill="#3B82F6">
      {/* Striped IBM wordmark silhouette */}
      <rect x="2" y="3" width="12" height="2" />
      <rect x="2" y="7" width="12" height="2" />
      <rect x="5" y="11" width="6" height="2" />
      <rect x="5" y="15" width="6" height="2" />
      <rect x="2" y="19" width="12" height="2" />
      <rect x="2" y="23" width="12" height="2" />

      <rect x="18" y="3" width="17" height="2" />
      <rect x="18" y="7" width="19" height="2" />
      <rect x="21" y="11" width="6" height="2" />
      <rect x="31" y="11" width="6" height="2" />
      <rect x="21" y="15" width="15" height="2" />
      <rect x="21" y="19" width="6" height="2" />
      <rect x="31" y="19" width="6" height="2" />
      <rect x="18" y="23" width="18" height="2" />

      <rect x="41" y="3" width="8" height="2" />
      <rect x="57" y="3" width="8" height="2" />
      <rect x="41" y="7" width="10" height="2" />
      <rect x="55" y="7" width="10" height="2" />
      <rect x="43" y="11" width="20" height="2" />
      <rect x="43" y="15" width="7" height="2" />
      <rect x="51" y="15" width="4" height="2" />
      <rect x="57" y="15" width="6" height="2" />
      <rect x="43" y="19" width="6" height="2" />
      <rect x="52" y="19" width="2" height="2" />
      <rect x="57" y="19" width="6" height="2" />
      <rect x="41" y="23" width="8" height="2" />
      <rect x="57" y="23" width="8" height="2" />
    </g>
  </svg>
);

const LayersIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const AnalyticsBarsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="4" y="13" width="3.5" height="7" rx="0.8" />
    <rect x="10.25" y="9" width="3.5" height="11" rx="0.8" />
    <rect x="16.5" y="4" width="3.5" height="16" rx="0.8" />
  </svg>
);

const ChipIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
);

const AiHeadIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 3a7 7 0 0 0-7 7c0 2.3 1.1 4.3 2.8 5.6V19a2 2 0 0 0 2 2h4.4a2 2 0 0 0 2-2v-2.2l1.5-.8a1.5 1.5 0 0 0 .8-1.3v-1.7l1.2-.8c.4-.3.5-.9.2-1.3L18.8 9A7 7 0 0 0 12 3z" />
    <circle cx="10.5" cy="9.5" r="1" fill="currentColor" />
    <circle cx="14" cy="9.5" r="1" fill="currentColor" />
    <path d="M10.5 9.5L12 12.5L14 9.5" />
    <circle cx="12" cy="12.5" r="1" fill="currentColor" />
  </svg>
);

const AwardRibbonIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <circle cx="12" cy="9" r="2.5" />
    <path d="M8.5 14.2L7 22l5-2.6L17 22l-1.5-7.8" />
  </svg>
);

const CrownIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 18h18v2H3v-2zm0-2l2-9 4.5 4L12 4l2.5 7L19 7l2 9H3z" />
  </svg>
);

// ============================================================================
// OFFICIAL-STYLE MICROSOFT CERTIFIED SHIELD SVG BADGE
// ============================================================================
const MicrosoftCertifiedShieldBadge: React.FC<{
  variant: 'pl300' | 'dp900';
}> = ({ variant }) => {
  const isPL300 = variant === 'pl300';
  return (
    <div className="relative w-[178px] h-[178px] mx-auto select-none flex items-center justify-center">
      {/* Ambient blue-lavender halo behind shield */}
      <div
        className="absolute inset-3 rounded-full blur-2xl opacity-55 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56, 139, 253, 0.48) 0%, rgba(169, 138, 224, 0.25) 60%, transparent 100%)',
        }}
      />
      <svg viewBox="0 0 200 205" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]" aria-hidden="true">
        <defs>
          <linearGradient id={`shieldBg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D3B7A" />
            <stop offset="45%" stopColor="#082451" />
            <stop offset="100%" stopColor="#051533" />
          </linearGradient>
          <linearGradient id={`shieldRim-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60B6FF" />
            <stop offset="50%" stopColor="#2B7DE9" />
            <stop offset="100%" stopColor="#92C5FF" />
          </linearGradient>
          <linearGradient id={`shieldInnerGlow-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3898FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0B2D64" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id={`ribbonGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6ECF8" />
            <stop offset="18%" stopColor="#FFFFFF" />
            <stop offset="82%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#DCE5F5" />
          </linearGradient>
        </defs>

        {/* Outer glowing shield frame */}
        <path
          d="M100 10 C128 10 156 18 168 25 C171 58 171 102 156 135 C143 163 121 182 100 193 C79 182 57 163 44 135 C29 102 29 58 32 25 C44 18 72 10 100 10 Z"
          fill={`url(#shieldBg-${variant})`}
          stroke={`url(#shieldRim-${variant})`}
          strokeWidth="3.8"
        />

        {/* Inner shield bevel line */}
        <path
          d="M100 18 C124 18 148 25 159 31 C161 60 161 99 148 129 C136 153 118 170 100 180 C82 170 64 153 52 129 C39 99 39 60 41 31 C52 25 76 18 100 18 Z"
          fill={`url(#shieldInnerGlow-${variant})`}
          stroke="#4BA3FF"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />

        {/* Diagonal subtle sheen inside shield */}
        <path
          d="M42 32 C68 22 102 18 135 24 L78 158 C56 140 42 106 42 32 Z"
          fill="#FFFFFF"
          fillOpacity="0.05"
        />

        {/* Top header inside shield: Microsoft CERTIFIED */}
        {isPL300 ? (
          <g transform="translate(60, 34)">
            <rect x="0" y="1" width="6.2" height="6.2" fill="#F25022" />
            <rect x="7.4" y="1" width="6.2" height="6.2" fill="#7FBA00" />
            <rect x="0" y="8.4" width="6.2" height="6.2" fill="#00A4EF" />
            <rect x="7.4" y="8.4" width="6.2" height="6.2" fill="#FFB900" />
            <text
              x="19"
              y="12"
              fill="#FFFFFF"
              fontSize="13.5"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.2"
            >
              Microsoft
            </text>
            <text
              x="40"
              y="27"
              textAnchor="middle"
              fill="#D2E6FF"
              fontSize="10"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="1.8"
            >
              CERTIFIED
            </text>
          </g>
        ) : (
          <g transform="translate(100, 45)">
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="14.5"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.3"
            >
              Microsoft
            </text>
            <text
              x="0"
              y="15"
              textAnchor="middle"
              fill="#D2E6FF"
              fontSize="10"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="1.8"
            >
              CERTIFIED
            </text>
          </g>
        )}

        {/* White curved banner ribbon across the middle of the shield */}
        <path
          d="M20 79 C55 71 145 71 180 79 L174 126 C142 119 58 119 26 126 Z"
          fill={`url(#ribbonGrad-${variant})`}
          stroke="#64B2FF"
          strokeWidth="1.8"
        />

        {/* Banner title text */}
        {isPL300 ? (
          <>
            <text
              x="100"
              y="98"
              textAnchor="middle"
              fill="#071C3F"
              fontSize="13.2"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.8"
            >
              POWER BI
            </text>
            <text
              x="100"
              y="115"
              textAnchor="middle"
              fill="#071C3F"
              fontSize="13.2"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.6"
            >
              DATA ANALYST
            </text>
          </>
        ) : (
          <>
            <text
              x="100"
              y="91"
              textAnchor="middle"
              fill="#071C3F"
              fontSize="11.8"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.9"
            >
              AZURE
            </text>
            <text
              x="100"
              y="105"
              textAnchor="middle"
              fill="#071C3F"
              fontSize="11.8"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.9"
            >
              DATA
            </text>
            <text
              x="100"
              y="119"
              textAnchor="middle"
              fill="#071C3F"
              fontSize="11.4"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.6"
            >
              FUNDAMENTALS
            </text>
          </>
        )}

        {/* Bottom tier label & stars inside lower shield */}
        {isPL300 ? (
          <g>
            <text
              x="100"
              y="145"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="10.5"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="1.6"
            >
              ASSOCIATE
            </text>
            {/* 2 White Stars */}
            <polygon
              points="88,154 90.3,159 95.8,159.6 91.7,163.3 92.8,168.7 88,166 83.2,168.7 84.3,163.3 80.2,159.6 85.7,159"
              fill="#FFFFFF"
            />
            <polygon
              points="112,154 114.3,159 119.8,159.6 115.7,163.3 116.8,168.7 112,166 107.2,168.7 108.3,163.3 104.2,159.6 109.7,159"
              fill="#FFFFFF"
            />
          </g>
        ) : (
          <g>
            {/* 1 White Star */}
            <polygon
              points="100,143 103.2,150 110.8,150.9 105.1,156 106.7,163.5 100,159.7 93.3,163.5 94.9,156 89.2,150.9 96.8,150"
              fill="#FFFFFF"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

// ============================================================================
// SUBCOMPONENT: CertificationFilters
// ============================================================================
const CertificationFilters: React.FC<{
  activeFilter: CertCategoryKey;
  onSelectFilter: (filter: CertCategoryKey) => void;
  lang: 'EN' | 'AR';
}> = ({ activeFilter, onSelectFilter, lang }) => {
  const filters: {
    key: CertCategoryKey;
    label: { EN: string; AR: string };
    renderIcon: (isActive: boolean) => React.ReactNode;
  }[] = [
    {
      key: 'all',
      label: { EN: 'All Certifications', AR: 'جميع الشهادات' },
      renderIcon: (isActive) => (
        <LayersIcon className={`w-4 h-4 ${isActive ? 'text-[#0F1218]' : 'text-[#D1C7D7]'}`} />
      ),
    },
    {
      key: 'microsoft',
      label: { EN: 'Microsoft', AR: 'Microsoft' },
      renderIcon: () => <MicrosoftLogo className="w-4 h-4" />,
    },
    {
      key: 'google',
      label: { EN: 'Google', AR: 'Google' },
      renderIcon: () => <GoogleLogo className="w-4 h-4" />,
    },
    {
      key: 'ibm',
      label: { EN: '', AR: '' }, // IBM button displays the iconic IBM striped logo centered
      renderIcon: () => <IbmLogo className="h-[15px] w-auto" />,
    },
    {
      key: 'data-analytics',
      label: { EN: 'Data Analytics', AR: 'تحليل البيانات' },
      renderIcon: (isActive) => (
        <AnalyticsBarsIcon className={`w-4 h-4 ${isActive ? 'text-[#0F1218]' : 'text-[#D1C7D7]'}`} />
      ),
    },
    {
      key: 'ml-ai',
      label: { EN: 'Machine Learning & AI', AR: 'التعلم الآلي والذكاء الاصطناعي' },
      renderIcon: (isActive) => (
        <ChipIcon className={`w-4 h-4 ${isActive ? 'text-[#0F1218]' : 'text-[#D1C7D7]'}`} />
      ),
    },
    {
      key: 'professional',
      label: { EN: 'Professional', AR: 'التطوير المهني' },
      renderIcon: (isActive) => (
        <AwardRibbonIcon className={`w-4 h-4 ${isActive ? 'text-[#0F1218]' : 'text-[#D1C7D7]'}`} />
      ),
    },
  ];

  return (
    <div
      role="tablist"
      aria-label={lang === 'AR' ? 'تصفية الشهادات حسب الفئة' : 'Filter certifications by category'}
      className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-14"
    >
      {filters.map((f) => {
        const isActive = activeFilter === f.key;
        const labelText = f.label[lang];
        return (
          <button
            key={f.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectFilter(f.key)}
            className={`group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1C7D7] cursor-pointer ${
              isActive
                ? 'bg-[#D1C7D7] text-[#0F1218] border border-[#F2F0F4]/60 shadow-[0_0_22px_rgba(209,199,215,0.42)]'
                : 'bg-[#171B29]/90 text-[#F2F0F4] border border-[#373E57]/85 hover:border-[#D1C7D7]/55 hover:bg-[#1E2332]'
            }`}
          >
            {f.renderIcon(isActive)}
            {labelText ? (
              <span className={lang === 'AR' ? 'font-arabic' : 'font-inter'}>{labelText}</span>
            ) : (
              <span className="sr-only">IBM</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

// ============================================================================
// SUBCOMPONENT: FeaturedCredentialCard
// ============================================================================
const FeaturedCredentialCard: React.FC<{
  credential: IndividualCredential;
  variant: 'pl300' | 'dp900';
  lang: 'EN' | 'AR';
  isDimmed: boolean;
}> = ({ credential, variant, lang, isDimmed }) => {
  const isAR = lang === 'AR';
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-[24px] p-5 sm:p-6 pt-8 transition-all duration-300 ${
        isDimmed ? 'opacity-35 scale-[0.98]' : 'opacity-100 hover:-translate-y-1.5'
      }`}
      style={{
        background:
          'linear-gradient(165deg, rgba(35, 39, 62, 0.92) 0%, rgba(22, 25, 39, 0.96) 55%, rgba(16, 19, 30, 0.98) 100%)',
        border: '1.5px solid rgba(209, 199, 215, 0.58)',
        boxShadow:
          '0 0 28px rgba(182, 149, 235, 0.25), inset 0 0 24px rgba(209, 199, 215, 0.08)',
      }}
    >
      {/* Top Floating Pill on Card Border: Featured Certification */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
        <div
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11.5px] font-semibold text-[#F2F0F4] whitespace-nowrap"
          style={{
            background: 'linear-gradient(180deg, #272B42 0%, #191D2E 100%)',
            border: '1px solid rgba(209, 199, 215, 0.55)',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.45)',
          }}
        >
          <CrownIcon className="w-3.5 h-3.5 text-[#D1C7D7]" />
          <span className={isAR ? 'font-arabic' : 'font-inter'}>
            {isAR ? 'شهادة مميزة' : 'Featured Certification'}
          </span>
        </div>
      </div>

      {/* Subtle internal decorative wave arc behind badge */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] overflow-hidden">
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-25 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(209,199,215,0.45) 0%, transparent 70%)',
          }}
        />
        <svg
          viewBox="0 0 260 200"
          className="absolute top-12 left-0 w-full h-auto opacity-20"
          aria-hidden="true"
        >
          <path
            d="M-20 120 Q 70 65, 160 110 T 280 85"
            fill="none"
            stroke="#D1C7D7"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Upper Content: Official Shield Graphic + Brand + Title */}
      <div className="relative z-10 flex flex-col">
        <div className="my-1">
          <MicrosoftCertifiedShieldBadge variant={variant} />
        </div>

        {/* Issuer line */}
        <div className="flex items-center gap-2 mt-2.5 mb-2">
          <MicrosoftLogo className="w-4 h-4 shrink-0" />
          <span className="text-[13.5px] font-semibold text-[#F2F0F4] tracking-tight">
            {credential.issuer[lang]}
          </span>
        </div>

        {/* Certificate Title */}
        <h3
          className={`text-[17px] sm:text-[18px] font-bold text-[#F2F0F4] leading-[1.32] mb-3 ${
            isAR ? 'font-arabic' : 'font-manrope'
          }`}
        >
          {variant === 'pl300' && !isAR ? (
            <>
              <span className="block">Microsoft Certified:</span>
              <span className="block">Power BI Data Analyst</span>
              <span className="block">Associate (PL-300)</span>
            </>
          ) : variant === 'dp900' && !isAR ? (
            <>
              <span className="block">Microsoft Azure</span>
              <span className="block">Data Fundamentals</span>
            </>
          ) : (
            credential.title[lang]
          )}
        </h3>

        {/* Hover/Always-accessible subtle skill pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {credential.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[10.5px] px-2 py-0.5 rounded-md bg-[#0F1218]/65 border border-[#373E57]/70 text-[#CDD0D9]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA: Soft Lavender Pill Button */}
      <div className="relative z-10 pt-1">
        <a
          href={credential.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${isAR ? 'عرض الشهادة' : 'View Credential'}: ${credential.title[lang]}`}
          className="w-full py-2.5 px-4 rounded-full bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] font-semibold text-[13px] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(209,199,215,0.28)] cursor-pointer"
        >
          <span className={isAR ? 'font-arabic' : 'font-inter'}>
            {isAR ? 'عرض الشهادة' : 'View Credential'}
          </span>
          <ExternalLink className="w-3.5 h-3.5 stroke-[2.2]" />
        </a>
      </div>
    </article>
  );
};

// ============================================================================
// SUBCOMPONENT: CertificationCategoryCard (Right-Side Connected Timeline Cards)
// ============================================================================
const CertificationCategoryCard: React.FC<{
  card: TimelineShowcaseCardData;
  lang: 'EN' | 'AR';
  isDimmed: boolean;
  onOpenTrackModal: (card: TimelineShowcaseCardData) => void;
}> = ({ card, lang, isDimmed, onOpenTrackModal }) => {
  const isAR = lang === 'AR';

  const renderNodeIcon = () => {
    switch (card.nodeType) {
      case 'google':
        return <GoogleLogo className="w-5 h-5" />;
      case 'ibm':
        return <IbmLogo className="h-3.5 w-auto" />;
      case 'analytics':
        return <AnalyticsBarsIcon className="w-5 h-5 text-[#D1C7D7]" />;
      case 'ai-engineer':
        return <AiHeadIcon className="w-5 h-5 text-[#D1C7D7]" />;
      case 'microsoft':
        return <MicrosoftLogo className="w-4 h-4" />;
      case 'professional':
        return <AwardRibbonIcon className="w-5 h-5 text-[#D1C7D7]" />;
    }
  };

  const renderCardBrandHeader = () => {
    switch (card.nodeType) {
      case 'google':
        return (
          <div className="flex items-center gap-2 mb-3">
            <GoogleLogo className="w-6 h-6 shrink-0" />
            <span className="text-[17px] font-semibold text-[#F2F0F4] tracking-tight">Google</span>
          </div>
        );
      case 'ibm':
        return (
          <div className="flex items-center mb-3 h-6">
            <IbmLogo className="h-5 w-auto" />
          </div>
        );
      case 'analytics':
        return (
          <div className="flex items-center justify-center w-10 h-10 mb-3 text-[#D1C7D7]">
            <AnalyticsBarsIcon className="w-7 h-7 text-[#D1C7D7]" />
          </div>
        );
      case 'ai-engineer':
        return (
          <div className="flex items-center justify-center w-10 h-10 mb-3 text-[#D1C7D7]">
            <AiHeadIcon className="w-7 h-7 text-[#D1C7D7]" />
          </div>
        );
      case 'microsoft':
        return (
          <div className="flex items-center gap-2 mb-3">
            <MicrosoftLogo className="w-5 h-5 shrink-0" />
            <span className="text-[15.5px] font-semibold text-[#F2F0F4] tracking-tight">
              Microsoft
            </span>
          </div>
        );
      case 'professional':
        return (
          <div className="flex items-center justify-center w-10 h-10 mb-3 text-[#D1C7D7]">
            <AwardRibbonIcon className="w-7 h-7 text-[#D1C7D7]" />
          </div>
        );
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center pt-12 transition-all duration-300 ${
        isDimmed ? 'opacity-35 scale-[0.98]' : 'opacity-100'
      }`}
    >
      {/* Circular Node on the Horizontal Timeline */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #262B40 0%, #121521 100%)',
          border: '1.5px solid rgba(209, 199, 215, 0.75)',
          boxShadow: '0 0 16px rgba(209, 199, 215, 0.38)',
        }}
      >
        {renderNodeIcon()}
      </div>

      {/* Short Vertical Stem from Node to Card Top */}
      <div
        className="absolute top-11 left-1/2 -translate-x-1/2 w-[1.5px] h-4 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #D1C7D7 0%, rgba(209, 199, 215, 0.35) 100%)',
        }}
      />
      {/* Glowing Pinhead at Card Top Border */}
      <div
        className="absolute top-[57px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F2F0F4] z-20 pointer-events-none"
        style={{
          boxShadow: '0 0 8px #D1C7D7, 0 0 14px #D1C7D7',
        }}
      />

      {/* Compact Showcase Card */}
      <article
        className="group relative w-full flex-1 flex flex-col justify-between rounded-[20px] p-4 sm:p-[18px] mt-3 transition-all duration-300 hover:-translate-y-1.5"
        style={{
          background:
            'linear-gradient(170deg, rgba(31, 36, 54, 0.88) 0%, rgba(19, 23, 35, 0.94) 100%)',
          border: '1px solid rgba(111, 115, 152, 0.42)',
          boxShadow: '0 14px 32px rgba(0, 0, 0, 0.45)',
        }}
      >
        {/* Subtle internal diagonal wave highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] opacity-30 group-hover:opacity-55 transition-opacity"
          style={{
            background:
              'radial-gradient(120% 70% at 85% 20%, rgba(209, 199, 215, 0.14) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 flex flex-col">
          {renderCardBrandHeader()}

          <h3
            className={`text-[14.5px] sm:text-[15px] font-bold text-[#F2F0F4] leading-[1.35] ${
              isAR ? 'font-arabic' : 'font-manrope'
            }`}
          >
            {card.title[lang]}
          </h3>

          {card.subtitle && (
            <p className="text-[12.5px] text-[#CDD0D9] mt-1 font-normal leading-snug">
              {card.subtitle[lang]}
            </p>
          )}

          {card.credentialIds.length > 1 && (
            <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-medium text-[#D1C7D7]/90">
              <CheckCircle2 className="w-3 h-3 text-[#D1C7D7]" />
              {isAR
                ? `${card.credentialIds.length} شهادات موثقة`
                : `${card.credentialIds.length} verified certificates`}
            </span>
          )}
        </div>

        {/* Bottom Outlined Pill Action */}
        <div className="relative z-10 pt-4 mt-2">
          {card.directUrl && card.credentialIds.length === 1 ? (
            <a
              href={card.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${isAR ? 'عرض الشهادة' : 'View Credential'}: ${card.title[lang]}`}
              className="w-full py-2 px-3 rounded-full bg-[#131724]/90 hover:bg-[#D1C7D7] text-[#F2F0F4] hover:text-[#0F1218] border border-[#6F7398]/55 hover:border-[#D1C7D7] font-medium text-[12px] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className={isAR ? 'font-arabic' : 'font-inter'}>
                {isAR ? 'عرض الشهادة' : 'View Credential'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenTrackModal(card)}
              aria-label={`${isAR ? 'عرض الشهادات' : 'View Credential'}: ${card.title[lang]}`}
              className="w-full py-2 px-3 rounded-full bg-[#131724]/90 hover:bg-[#D1C7D7] text-[#F2F0F4] hover:text-[#0F1218] border border-[#6F7398]/55 hover:border-[#D1C7D7] font-medium text-[12px] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className={isAR ? 'font-arabic' : 'font-inter'}>
                {isAR ? 'عرض الشهادة' : 'View Credential'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </article>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: CertificationsSection
// ============================================================================
export default function CertificationsSection({ lang }: CertificationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CertCategoryKey>('all');
  const [showDirectory, setShowDirectory] = useState<boolean>(false);
  const [activeTrackModal, setActiveTrackModal] = useState<TimelineShowcaseCardData | null>(null);

  const isAR = lang === 'AR';

  const featuredPL300 = ALL_CREDENTIALS.find((c) => c.id === 'ms-pl300')!;
  const featuredDP900 = ALL_CREDENTIALS.find((c) => c.id === 'ms-dp900')!;

  const isFeaturedMatch = (cred: IndividualCredential) =>
    activeFilter === 'all' || cred.category.includes(activeFilter);

  const isTimelineCardMatch = (card: TimelineShowcaseCardData) =>
    activeFilter === 'all' || card.categories.includes(activeFilter);

  const filteredDirectoryCredentials =
    activeFilter === 'all'
      ? ALL_CREDENTIALS
      : ALL_CREDENTIALS.filter((c) => c.category.includes(activeFilter));

  const handleSelectFilter = (filter: CertCategoryKey) => {
    setActiveFilter(filter);
    if (filter !== 'all') {
      setShowDirectory(true);
    }
  };

  const valueStripItems = [
    {
      title: { EN: 'Verified Credentials', AR: 'شهادات موثقة' },
      desc: {
        EN: 'Authentic and independently verified.',
        AR: 'شهادات أصلية وموثقة بروابط تحقق رسمية.',
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D1C7D7]" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: { EN: 'Diverse Expertise', AR: 'خبرات متنوعة' },
      desc: {
        EN: 'Across data, AI, Microsoft, and analytics.',
        AR: 'تمتد عبر البيانات، الذكاء الاصطناعي، مايكروسوفت، والتحليلات.',
      },
      icon: <LayersIcon className="w-5 h-5 text-[#D1C7D7]" />,
    },
    {
      title: { EN: 'Continuous Learning', AR: 'تعلم مستمر' },
      desc: {
        EN: 'Building on real-world and modern skills.',
        AR: 'تطوير مستمر للمهارات العملية والتقنيات الحديثة.',
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D1C7D7]" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: { EN: 'Career-Ready Skills', AR: 'مهارات جاهزة لسوق العمل' },
      desc: {
        EN: 'Aligned with industry needs in data and AI.',
        AR: 'متوافقة مع متطلبات الصناعة في تحليل البيانات والذكاء الاصطناعي.',
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D1C7D7]" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="certifications"
      dir={isAR ? 'rtl' : 'ltr'}
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-10 bg-[#0F1218] overflow-hidden"
    >
      {/* Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute top-16 left-1/4 w-[520px] h-[520px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #D1C7D7 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-1/4 w-[480px] h-[480px] rounded-full blur-[150px] opacity-15"
        style={{ background: 'radial-gradient(circle, #6F7398 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ================================================================
            1. EDITORIAL SECTION HEADER
            ================================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow with flank lines */}
          <div className="inline-flex items-center justify-center gap-4 mb-3">
            <span
              className="h-[1px] w-10 sm:w-14"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(209,199,215,0.65) 100%)',
              }}
            />
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.26em] text-[#D1C7D7] uppercase">
              {isAR ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS'}
            </span>
            <span
              className="h-[1px] w-10 sm:w-14"
              style={{
                background: 'linear-gradient(90deg, rgba(209,199,215,0.65) 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Main Heading with Lavender Ampersand */}
          <h2
            className={`text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#F2F0F4] leading-[1.12] ${
              isAR ? 'font-arabic' : 'font-cambria tracking-[-0.02em]'
            }`}
          >
            {isAR ? (
              <>
                الشهادات <span className="text-[#D1C7D7]">و</span>الاعتمادات المهنية
              </>
            ) : (
              <>
                Certifications <span className="text-[#D1C7D7] font-normal">&amp;</span> Credentials
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-[15.5px] sm:text-[17.5px] text-[#CDD0D9] mt-3.5 max-w-2xl mx-auto leading-relaxed ${
              isAR ? 'font-arabic' : 'font-inter'
            }`}
          >
            {isAR
              ? 'شهادات موثقة في تحليل البيانات، ذكاء الأعمال، تقنيات مايكروسوفت، والذكاء الاصطناعي التطبيقي.'
              : 'Verified credentials in Data Analytics, Business Intelligence, Microsoft technologies, and Applied AI.'}
          </p>

          {/* Glowing Lavender Divider */}
          <div className="mt-5 flex justify-center">
            <div
              className="h-[2px] w-40 sm:w-48 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, #D1C7D7 50%, transparent 100%)',
                boxShadow: '0 0 14px rgba(209, 199, 215, 0.75)',
              }}
            />
          </div>
        </div>

        {/* ================================================================
            2. HORIZONTAL FILTER PILLS
            ================================================================ */}
        <CertificationFilters
          activeFilter={activeFilter}
          onSelectFilter={handleSelectFilter}
          lang={lang}
        />

        {/* ================================================================
            3. MAIN SHOWCASE: 2 FEATURED MICROSOFT CARDS + 6 CONNECTED TIMELINE CARDS
            ================================================================ */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-5 items-stretch">
          {/* Left 4 columns on XL: Two Large Featured Microsoft Cards */}
          <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FeaturedCredentialCard
              credential={featuredPL300}
              variant="pl300"
              lang={lang}
              isDimmed={!isFeaturedMatch(featuredPL300)}
            />
            <FeaturedCredentialCard
              credential={featuredDP900}
              variant="dp900"
              lang={lang}
              isDimmed={!isFeaturedMatch(featuredDP900)}
            />
          </div>

          {/* Right 8 columns on XL: Connected Certification Journey */}
          <div className="xl:col-span-8 relative flex flex-col justify-end pt-2 xl:pt-6">
            {/* Continuous Horizontal Lavender Connector Line (Desktop XL) */}
            <div
              className="hidden xl:block pointer-events-none absolute top-[46px] -left-5 right-6 h-[2px] z-10"
              style={{
                background:
                  'linear-gradient(90deg, #D1C7D7 0%, rgba(209, 199, 215, 0.85) 85%, rgba(209, 199, 215, 0.35) 100%)',
                boxShadow: '0 0 12px rgba(209, 199, 215, 0.55)',
              }}
            />
            {/* Curved right end-cap of timeline line (matching screenshot right side curve) */}
            <div
              className="hidden xl:block pointer-events-none absolute top-[46px] right-2 w-8 h-12 rounded-tr-2xl border-t-2 border-r-2 border-[#D1C7D7]/45 z-10"
            />

            {/* 6 Connected Category Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 h-full">
              {TIMELINE_CARDS.map((card) => (
                <CertificationCategoryCard
                  key={card.id}
                  card={card}
                  lang={lang}
                  isDimmed={!isTimelineCardMatch(card)}
                  onOpenTrackModal={(selectedCard) => setActiveTrackModal(selectedCard)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================
            4. EXPANDABLE / FILTERABLE COMPLETE CREDENTIAL DIRECTORY (ALL 17 CERTIFICATES)
            ================================================================ */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setShowDirectory((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#171B29]/90 hover:bg-[#1E2332] border border-[#373E57] hover:border-[#D1C7D7]/60 text-xs sm:text-[13px] font-medium text-[#D1C7D7] transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#D1C7D7]" />
            <span>
              {showDirectory
                ? isAR
                  ? 'إخفاء الدليل الكامل للشهادات الموثقة'
                  : 'Hide Complete Verified Credential Directory'
                : isAR
                ? `استعراض جميع الشهادات الموثقة (${filteredDirectoryCredentials.length})`
                : `Browse Complete Verified Credential Directory (${filteredDirectoryCredentials.length} Certificates)`}
            </span>
            {showDirectory ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showDirectory && (
            <div
              className="w-full mt-6 p-6 sm:p-8 rounded-[24px] border border-[#373E57]/90 bg-[#151926]/95 shadow-2xl transition-all"
              aria-live="polite"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#373E57]/70">
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-bold text-[#F2F0F4] ${
                      isAR ? 'font-arabic' : 'font-manrope'
                    }`}
                  >
                    {isAR
                      ? 'الدليل الكامل للشهادات وروابط التحقق الرسمية'
                      : 'Complete Verified Certifications & Official Links'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CDD0D9] mt-1">
                    {isAR
                      ? `عرض ${filteredDirectoryCredentials.length} شهادة معتمدة`
                      : `Showing ${filteredDirectoryCredentials.length} verified credentials matching your selection`}
                  </p>
                </div>
                {activeFilter !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter('all')}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#23293D] hover:bg-[#373E57] text-xs font-medium text-[#D1C7D7] transition-colors cursor-pointer"
                  >
                    {isAR ? 'إظهار الكل' : 'Reset Filter'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDirectoryCredentials.map((cred) => (
                  <div
                    key={cred.id}
                    className="flex flex-col justify-between p-4 rounded-2xl bg-[#1B2030]/90 border border-[#373E57]/80 hover:border-[#D1C7D7]/55 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0F1218] border border-[#373E57] text-[#D1C7D7]">
                          {cred.issuer[lang]}
                        </span>
                        {cred.platform && (
                          <span className="text-[11px] text-[#CDD0D9]">{cred.platform}</span>
                        )}
                      </div>
                      <h4
                        className={`text-sm font-bold text-[#F2F0F4] leading-snug mb-2 ${
                          isAR ? 'font-arabic' : 'font-manrope'
                        }`}
                      >
                        {cred.title[lang]}
                      </h4>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cred.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#0F1218]/60 text-[#CDD0D9] border border-[#373E57]/50"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {cred.verificationNote && (
                        <p className="text-[11px] text-[#D1C7D7]/80 mb-2">
                          {cred.verificationNote[lang]}
                        </p>
                      )}
                    </div>

                    {cred.url && (
                      <a
                        href={cred.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#252B40] hover:bg-[#D1C7D7] text-[#F2F0F4] hover:text-[#0F1218] text-xs font-semibold transition-colors"
                      >
                        <span>{isAR ? 'التحقق من الشهادة' : 'View Credential'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================================================================
            5. BOTTOM VALUE STRIP (4 COLUMNS WITH VERTICAL DIVIDERS)
            ================================================================ */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-[#373E57]/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {valueStripItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 px-2 lg:px-6 ${
                  idx < valueStripItems.length - 1
                    ? 'lg:border-r lg:border-[#373E57]/60'
                    : ''
                }`}
              >
                <div
                  className="w-11 h-11 rounded-[13px] shrink-0 flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(38, 44, 66, 0.9) 0%, rgba(20, 24, 37, 0.95) 100%)',
                    border: '1px solid rgba(209, 199, 215, 0.38)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    className={`text-[15px] font-bold text-[#F2F0F4] leading-snug ${
                      isAR ? 'font-arabic' : 'font-manrope'
                    }`}
                  >
                    {item.title[lang]}
                  </h4>
                  <p
                    className={`text-[12.5px] text-[#CDD0D9] mt-0.5 leading-relaxed ${
                      isAR ? 'font-arabic' : 'font-inter'
                    }`}
                  >
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================
          6. DECORATIVE BOTTOM DOTTED LAVENDER DATA-WAVE MESH
          ================================================================ */}
      <div className="pointer-events-none relative w-full h-24 sm:h-32 mt-8 -mb-20 overflow-hidden select-none">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="certWaveDots"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.15" fill="#D1C7D7" fillOpacity="0.42" />
            </pattern>
            <linearGradient id="certWaveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6F7398" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#D1C7D7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#9A8AC4" stopOpacity="0.45" />
              <stop offset="78%" stopColor="#D1C7D7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#6F7398" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0 110 C 220 25, 420 145, 720 85 C 1020 25, 1220 135, 1440 70 L 1440 160 L 0 160 Z"
            fill="url(#certWaveDots)"
          />
          <path
            d="M0 110 C 220 25, 420 145, 720 85 C 1020 25, 1220 135, 1440 70"
            stroke="url(#certWaveGlow)"
            strokeWidth="2.2"
            fill="none"
          />
          <path
            d="M0 132 C 280 65, 510 155, 820 102 C 1100 50, 1290 135, 1440 98"
            stroke="#D1C7D7"
            strokeOpacity="0.28"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            fill="none"
          />
        </svg>
      </div>

      {/* ================================================================
          7. TRACK CREDENTIALS MODAL (For Multi-Certificate Tracks)
          ================================================================ */}
      {activeTrackModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeTrackModal.title[lang]}
          onClick={() => setActiveTrackModal(null)}
        >
          <div
            className="bg-[#181C2B] border border-[#D1C7D7]/45 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.85)] relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTrackModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#0F1218] text-[#CDD0D9] hover:text-[#F2F0F4] border border-[#373E57] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pr-8 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D1C7D7]">
                {isAR ? 'شهادات المسار الموثقة' : 'VERIFIED CREDENTIAL TRACK'}
              </span>
              <h3
                className={`text-xl sm:text-2xl font-bold text-[#F2F0F4] mt-1 ${
                  isAR ? 'font-arabic' : 'font-cambria'
                }`}
              >
                {activeTrackModal.title[lang]}{' '}
                {activeTrackModal.subtitle ? activeTrackModal.subtitle[lang] : ''}
              </h3>
            </div>

            <div className="space-y-3.5">
              {activeTrackModal.credentialIds
                .map((id) => ALL_CREDENTIALS.find((c) => c.id === id))
                .filter((c): c is IndividualCredential => Boolean(c))
                .map((cred) => (
                  <div
                    key={cred.id}
                    className="p-4 rounded-2xl bg-[#10131D] border border-[#373E57]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#D1C7D7] font-semibold mb-1">
                        <span>{cred.issuer[lang]}</span>
                        {cred.platform && (
                          <>
                            <span>·</span>
                            <span className="text-[#CDD0D9]">{cred.platform}</span>
                          </>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#F2F0F4]">
                        {cred.title[lang]}
                      </h4>
                      {cred.verificationNote && (
                        <p className="text-xs text-[#CDD0D9] mt-1">
                          {cred.verificationNote[lang]}
                        </p>
                      )}
                    </div>

                    {cred.url && (
                      <a
                        href={cred.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#D1C7D7] hover:bg-[#F2F0F4] text-[#0F1218] font-semibold text-xs transition-colors"
                      >
                        <span>{isAR ? 'عرض الشهادة' : 'View Credential'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
