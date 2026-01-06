// Central export point for all quiz questions
// Organized by technology type and era for easier maintenance

// Programming Languages
export { javaQuestions } from './javaQuestions';
export { default as jsQuestions } from '../jsQuestions';
export { default as typescriptQuestions } from '../typescriptQuestions';
export { default as reactQuestions } from '../reactQuestions';
export { default as nextjsQuestions } from '../nextjsQuestions';

// Backend & Databases
export { default as nodejsQuestions } from '../nodejsQuestions';
export { default as expressQuestions } from '../expressQuestions';
export { default as mongodbQuestions } from '../mongodbQuestions';
export { default as sqlQuestions } from '../sqlQuestions';

// Infrastructure & Networks
export { default as computerNetworksQuestions } from '../computerNetworksQuestions';

// History (organized by era)
export { default as ancientHistoryQuestions } from '../ancientHistoryQuestions';
export { default as medievalHistoryQuestions } from '../medievalHistoryQuestions';
export { default as modernHistoryQuestions } from '../modernHistoryQuestions';

/**
 * Usage:
 * -----
 * OLD WAY (still works):
 *   import { javaQuestions } from './data/questions';
 * 
 * NEW WAY (organized):
 *   import { javaQuestions } from './data/questions/javaQuestions';
 *   import { reactQuestions } from './data/questions'; // via re-export
 */
