/**
 * CONSTANTS FILE
 * 
 * Centralized location for all hardcoded values
 * Benefits:
 * - Single source of truth for colors, config values, strings
 * - Easy to update app-wide styling/behavior
 * - Easier to maintain consistent styling across components
 * - Good foundation for future theme support (dark/light mode)
 */

// ============================================
// QUIZ CONFIGURATION
// ============================================

export const QUIZ_CONFIG = {
  // Timer
  SECONDS_PER_QUESTION: 60,
  
  // Difficulty levels and their percentage of questions to show
  DIFFICULTY_PERCENTAGES: {
    easy: 0.4,      // 40% of questions
    medium: 0.7,    // 70% of questions
    hard: 1.0,      // 100% (all questions)
  },

  // Quiz modes
  MODES: {
    QUIZ: 'quiz',      // Show explanation after answer
    STUDY: 'study',    // Show explanation immediately
  },

  // Default values
  DEFAULT_DIFFICULTY: 'medium',
  DEFAULT_MODE: 'quiz',
};

// ============================================
// COLOR GRADIENTS & STYLING
// ============================================

export const COLORS = {
  // Primary gradients
  primary: 'from-purple-600 to-indigo-600',
  primaryHover: 'from-purple-700 hover:to-indigo-700',
  
  success: 'from-green-600 to-emerald-600',
  successHover: 'from-green-700 hover:to-emerald-700',
  
  danger: 'from-red-600 to-pink-600',
  dangerHover: 'from-red-700 hover:to-pink-700',

  warning: 'from-amber-600 to-orange-600',
  warningHover: 'from-amber-700 hover:to-orange-700',

  info: 'from-blue-600 to-cyan-600',
  infoHover: 'from-blue-700 hover:to-cyan-700',

  // Category specific colors
  programming: 'from-purple-600 to-indigo-600',
  programmingHover: 'from-purple-700 hover:to-indigo-700',

  webdev: 'from-green-600 to-teal-600',
  webdevHover: 'from-green-700 hover:to-teal-700',

  history: 'from-amber-600 to-orange-600',
  historyHover: 'from-amber-700 hover:to-orange-700',

  // Difficulty colors
  easy: 'from-green-600 to-emerald-600',
  medium: 'from-yellow-600 to-orange-600',
  hard: 'from-red-600 to-pink-600',

  // Status colors (used in quiz feedback)
  correct: 'bg-green-900 border-green-700 text-green-300',
  incorrect: 'bg-red-900 border-red-700 text-red-300',
  neutral: 'bg-gray-700 border-gray-600 text-gray-300',
  selected: 'bg-blue-900 border-blue-700 text-blue-300',

  // Background gradients
  bgDark: 'from-gray-900 to-black',
  bgDarker: 'from-black to-gray-950',
};

// ============================================
// QUIZ CATEGORY STRUCTURE
// ============================================

export const QUIZ_CATEGORIES_CONFIG = {
  programming: {
    title: 'Programming Languages',
    color: COLORS.programming,
    hoverColor: COLORS.programmingHover,
    icon: 'faCode', // Will be imported as icon in component
    order: 1,
  },
  webdev: {
    title: 'Web Development',
    color: COLORS.webdev,
    hoverColor: COLORS.webdevHover,
    icon: 'faServer',
    order: 2,
  },
  history: {
    title: 'History',
    color: COLORS.history,
    hoverColor: COLORS.historyHover,
    icon: 'faCode', // Can be changed to more appropriate icon
    order: 3,
  },
};

// ============================================
// HISTORY PARTS & PERIODS
// ============================================

export const HISTORY_PERIODS = {
  'early-medieval': {
    title: 'Early Medieval India (750-1200)',
    shortTitle: 'Part I: Early Medieval',
    description: 'FOUNDATIONAL SECTION',
    color: 'from-amber-900 to-orange-900',
    borderColor: 'border-amber-700',
    icon: '🏛️',
    period: '750-1200 AD',
  },
  'delhi-sultanate': {
    title: 'The Delhi Sultanate (1206-1526)',
    shortTitle: 'Part II: Delhi Sultanate',
    description: 'CORE SECTION',
    color: 'from-purple-900 to-indigo-900',
    borderColor: 'border-purple-700',
    icon: '👑',
    period: '1206-1526 AD',
  },
  'mughal': {
    title: 'The Mughal Empire (1526-1857)',
    shortTitle: 'Part III: Mughal Empire',
    description: 'MOST IMPORTANT SECTION',
    color: 'from-red-900 to-pink-900',
    borderColor: 'border-red-700',
    icon: '👑',
    period: '1526-1857 AD',
  },
  'maratha': {
    title: 'The Maratha Empire (1640s-1818)',
    shortTitle: 'Part IV: Maratha Empire',
    description: 'ABSOLUTELY VITAL FOR MPSC',
    color: 'from-orange-900 to-red-900',
    borderColor: 'border-orange-700',
    icon: '⚔️',
    period: '1640s-1818 AD',
  },
};

// ============================================
// DIFFICULTY LEVEL CONFIG
// ============================================

export const DIFFICULTY_LEVELS = {
  easy: {
    label: 'Easy',
    emoji: '🟢',
    color: COLORS.easy,
    description: '40% of questions',
  },
  medium: {
    label: 'Medium',
    emoji: '🟡',
    color: COLORS.medium,
    description: '70% of questions',
  },
  hard: {
    label: 'Hard',
    emoji: '🔴',
    color: COLORS.hard,
    description: '100% of questions',
  },
};

// ============================================
// QUIZ MODE CONFIG
// ============================================

export const QUIZ_MODES = {
  quiz: {
    label: 'Quiz Mode',
    emoji: '📝',
    description: 'Test knowledge with scoring',
    showExplanationImmediately: false,
    timerEnabled: true,
  },
  study: {
    label: 'Study Mode',
    emoji: '📚',
    description: 'Learn with explanations',
    showExplanationImmediately: true,
    timerEnabled: false,
  },
};

// ============================================
// UI TEXT & MESSAGES
// ============================================

export const UI_TEXT = {
  // Navigation
  back: '← Back',
  backToCategories: '← Back to Categories',
  backToMenu: '← Back to Menu',
  
  // Quiz buttons
  startQuiz: 'Start Quiz 🚀',
  nextQuestion: 'Next Question',
  seeResults: 'See Results',
  submitAnswer: 'Submit Answer',
  
  // Results
  finalScore: 'Your Score',
  correctAnswer: 'Correct!',
  incorrectAnswer: 'Incorrect',
  
  // Headers
  chooseCategory: 'Choose Your Quiz Category! 🎯',
  selectTechnology: 'Choose a technology to test your knowledge',
  configureQuiz: 'Configure your quiz experience',
  totalQuestions: 'Total Questions:',
};

// ============================================
// ANIMATION & TRANSITION SPEEDS
// ============================================

export const ANIMATIONS = {
  fast: 'duration-100',
  normal: 'duration-200',
  slow: 'duration-300',
  slower: 'duration-500',
};

// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

export const BREAKPOINTS = {
  mobile: 'max-w-sm',
  tablet: 'max-w-md',
  desktop: 'max-w-3xl',
  wide: 'max-w-5xl',
};

// ============================================
// COMMON GRADIENT BACKGROUNDS
// ============================================

export const GRADIENTS = {
  // Page backgrounds
  pageBg: `bg-linear-to-br ${COLORS.bgDark}`,
  pageContainerBg: `bg-linear-to-br ${COLORS.bgDarker}`,

  // Card backgrounds
  cardBg: 'bg-gray-800 border border-gray-700',
  cardBgDark: 'bg-gray-900 border border-gray-800',

  // Hover effects
  hoverBright: 'hover:bg-gray-700',
  hoverDark: 'hover:bg-gray-900',
};

// ============================================
// TYPOGRAPHY
// ============================================

export const TYPOGRAPHY = {
  // Headings
  h1: 'text-4xl font-bold text-white',
  h2: 'text-3xl font-bold text-white',
  h3: 'text-xl font-semibold text-white',
  h4: 'text-lg font-semibold text-white',

  // Body text
  body: 'text-gray-300',
  bodySmall: 'text-sm text-gray-400',
  bodyXSmall: 'text-xs text-gray-500',

  // Emphasis
  textMuted: 'text-gray-400',
  textMutedSmall: 'text-sm text-gray-400',
};

// ============================================
// EXPORT ALL CONSTANTS
// ============================================

export default {
  QUIZ_CONFIG,
  COLORS,
  QUIZ_CATEGORIES_CONFIG,
  HISTORY_PERIODS,
  DIFFICULTY_LEVELS,
  QUIZ_MODES,
  UI_TEXT,
  ANIMATIONS,
  BREAKPOINTS,
  GRADIENTS,
  TYPOGRAPHY,
};
