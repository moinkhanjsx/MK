import { useState } from 'react';

/**
 * Custom Hook: useNotesNavigation
 * 
 * Consolidates all notes visibility state into single object
 * Replaces 18 separate useState calls with 1
 * 
 * Before:
 * const [showNotes, setShowNotes] = useState(false);
 * const [showKhiljiNotes, setShowKhiljiNotes] = useState(false);
 * const [showTughlaqNotes, setShowTughlaqNotes] = useState(false);
 * // ... 15 more
 * 
 * After:
 * const { openNotes, toggleNotes, closeNotes, openNotesByType } = useNotesNavigation();
 */

export const useNotesNavigation = () => {
  // Single state object instead of 18 separate booleans
  const [openNotes, setOpenNotes] = useState(null);

  /**
   * Toggle a specific notes type
   * If already open, closes it. If closed, opens it.
   */
  const toggleNotes = (notesType) => {
    setOpenNotes(prev => (prev === notesType ? null : notesType));
  };

  /**
   * Open a specific notes type (always opens, doesn't toggle)
   */
  const openNotesByType = (notesType) => {
    setOpenNotes(notesType);
  };

  /**
   * Close all notes
   */
  const closeNotes = () => {
    setOpenNotes(null);
  };

  /**
   * Check if a specific notes type is open
   */
  const isNotesOpen = (notesType) => {
    return openNotes === notesType;
  };

  /**
   * Check if any notes are open
   */
  const hasOpenNotes = () => {
    return openNotes !== null;
  };

  return {
    openNotes,
    toggleNotes,
    openNotesByType,
    closeNotes,
    isNotesOpen,
    hasOpenNotes,
  };
};

/**
 * Custom Hook: useQuizConfiguration
 * 
 * Consolidates all quiz configuration state
 * Makes it easier to reset, persist, or share config across components
 */

export const useQuizConfiguration = () => {
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [quizMode, setQuizMode] = useState('quiz'); // 'quiz', 'study'
  const [isTimed, setIsTimed] = useState(false);

  const resetConfiguration = () => {
    setDifficulty('medium');
    setQuizMode('quiz');
    setIsTimed(false);
  };

  return {
    difficulty,
    setDifficulty,
    quizMode,
    setQuizMode,
    isTimed,
    setIsTimed,
    resetConfiguration,
  };
};

/**
 * Custom Hook: useQuizState
 * 
 * Consolidates all quiz-related state
 * Easier to track quiz progress and manage quiz flow
 */

export const useQuizState = () => {
  const [quizType, setQuizType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const resetQuizState = () => {
    setQuizType(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setShowReview(false);
    setAnswers([]);
    setShuffledQuestions([]);
  };

  const resetForNewQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setShowReview(false);
    setAnswers([]);
    setShuffledQuestions([]);
  };

  return {
    quizType,
    setQuizType,
    currentQuestion,
    setCurrentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    showExplanation,
    setShowExplanation,
    score,
    setScore,
    quizCompleted,
    setQuizCompleted,
    showReview,
    setShowReview,
    answers,
    setAnswers,
    shuffledQuestions,
    setShuffledQuestions,
    resetQuizState,
    resetForNewQuiz,
  };
};

/**
 * Custom Hook: useCategoryNavigation
 * 
 * Manages quiz category selection state
 */

export const useCategoryNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const backToCategories = () => {
    setSelectedCategory(null);
  };

  return {
    selectedCategory,
    selectCategory,
    backToCategories,
  };
};
