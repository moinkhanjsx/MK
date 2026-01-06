// Quiz Questions Centralized Mapping
// Instead of: quizType === 'java' ? quizQuestions : quizType === 'js' ? jsQuestions : ...
// Use: QUIZ_QUESTIONS_MAP[quizType]

import { quizQuestions } from '../data/quizQuestions';
import { jsQuestions } from '../data/jsQuestions';
import { reactQuestions } from '../data/reactQuestions';
import { nextjsQuestions } from '../data/nextjsQuestions';
import { nodejsQuestions } from '../data/nodejsQuestions';
import { expressQuestions } from '../data/expressQuestions';
import { mongodbQuestions } from '../data/mongodbQuestions';
import { sqlQuestions } from '../data/sqlQuestions';
import { typescriptQuestions } from '../data/typescriptQuestions';
import { computerNetworksQuestions } from '../data/computerNetworksQuestions';
import { ancientHistoryQuestions } from '../data/ancientHistoryQuestions';
import { medievalHistoryQuestions } from '../data/medievalHistoryQuestions';
import { modernHistoryQuestions } from '../data/modernHistoryQuestions';

/**
 * Centralized mapping of quiz types to their question data
 * Benefits:
 * - Single source of truth for all quizzes
 * - Easy to add new quizzes without touching App.jsx
 * - Cleaner conditional logic
 * - Can iterate over this object to build UI dynamically
 */
export const QUIZ_QUESTIONS_MAP = {
  // Programming Languages
  java: quizQuestions,
  js: jsQuestions,
  typescript: typescriptQuestions,

  // Web Development
  react: reactQuestions,
  nextjs: nextjsQuestions,
  nodejs: nodejsQuestions,
  express: expressQuestions,
  mongodb: mongodbQuestions,
  sql: sqlQuestions,
  computernetworks: computerNetworksQuestions,

  // History
  ancienthistory: ancientHistoryQuestions,
  medievalhistory: medievalHistoryQuestions,
  modernhistory: modernHistoryQuestions,
};

/**
 * Quiz Metadata - Information about each quiz type
 * Useful for displaying quiz cards, descriptions, difficulty hints
 */
export const QUIZ_METADATA = {
  java: {
    name: 'Java Programming',
    description: 'Core Java concepts, OOP, collections, concurrency',
    category: 'programming',
    difficulty: 'Intermediate to Advanced',
  },
  js: {
    name: 'JavaScript Weirdness',
    description: 'JS quirks, type coercion, scope, closures, async',
    category: 'programming',
    difficulty: 'Intermediate',
  },
  typescript: {
    name: 'TypeScript Expert',
    description: 'Type system, generics, decorators, advanced types',
    category: 'programming',
    difficulty: 'Advanced',
  },
  react: {
    name: 'ReactJS Mastery',
    description: 'Components, hooks, state management, performance',
    category: 'webdev',
    difficulty: 'Intermediate to Advanced',
  },
  nextjs: {
    name: 'Next.js Pro',
    description: 'App router, SSR, ISR, middleware, API routes',
    category: 'webdev',
    difficulty: 'Advanced',
  },
  nodejs: {
    name: 'Node.js Backend',
    description: 'Event loop, modules, streams, clustering, performance',
    category: 'webdev',
    difficulty: 'Intermediate to Advanced',
  },
  express: {
    name: 'Express.js API',
    description: 'Routing, middleware, error handling, best practices',
    category: 'webdev',
    difficulty: 'Intermediate',
  },
  mongodb: {
    name: 'MongoDB Database',
    description: 'Document model, queries, indexing, aggregation',
    category: 'webdev',
    difficulty: 'Intermediate',
  },
  sql: {
    name: 'SQL Database',
    description: 'Queries, joins, indexes, optimization, transactions',
    category: 'webdev',
    difficulty: 'Intermediate',
  },
  computernetworks: {
    name: 'Computer Networks Fundamentals',
    description: 'OSI model, TCP/IP, protocols, performance',
    category: 'webdev',
    difficulty: 'Intermediate',
  },
  ancienthistory: {
    name: 'Ancient History',
    description: 'Indian history from early civilizations to medieval period',
    category: 'history',
    difficulty: 'MPSC Prelims',
  },
  medievalhistory: {
    name: 'Medieval History',
    description: 'Delhi Sultanate, Mughal Empire, regional kingdoms',
    category: 'history',
    difficulty: 'MPSC Mains',
  },
  modernhistory: {
    name: 'Modern History',
    description: 'British Raj, independence, partition, modern India',
    category: 'history',
    difficulty: 'MPSC Mains',
  },
};

/**
 * Get questions for a specific quiz type
 * @param {string} quizType - The quiz type key
 * @returns {Array} Array of questions, or empty array if not found
 */
export const getQuestionsByType = (quizType) => {
  return QUIZ_QUESTIONS_MAP[quizType] || [];
};

/**
 * Get metadata for a specific quiz type
 * @param {string} quizType - The quiz type key
 * @returns {Object} Quiz metadata with name, description, etc.
 */
export const getQuizMetadata = (quizType) => {
  return QUIZ_METADATA[quizType] || { name: 'Unknown Quiz', description: '' };
};

/**
 * Get all quiz types in a specific category
 * @param {string} category - The category ('programming', 'webdev', 'history')
 * @returns {Array} Array of quiz type keys in that category
 */
export const getQuizzesByCategory = (category) => {
  return Object.entries(QUIZ_METADATA)
    .filter(([, metadata]) => metadata.category === category)
    .map(([quizType]) => quizType);
};
