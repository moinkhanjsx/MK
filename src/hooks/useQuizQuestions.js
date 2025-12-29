import { 
  quizQuestions, 
  jsQuestions, 
  reactQuestions, 
  nextjsQuestions, 
  nodejsQuestions, 
  expressQuestions, 
  mongodbQuestions, 
  sqlQuestions, 
  typescriptQuestions, 
  computerNetworksQuestions 
} from '../data';

export const useQuizQuestions = (quizType) => {
  const baseQuestions = quizType === 'java' ? quizQuestions :
                       quizType === 'js' ? jsQuestions :
                       quizType === 'react' ? reactQuestions :
                       quizType === 'nextjs' ? nextjsQuestions :
                       quizType === 'nodejs' ? nodejsQuestions :
                       quizType === 'express' ? expressQuestions :
                       quizType === 'mongodb' ? mongodbQuestions :
                       quizType === 'sql' ? sqlQuestions :
                       quizType === 'typescript' ? typescriptQuestions :
                       quizType === 'computernetworks' ? computerNetworksQuestions :
                       [];

  // Validate questions exist
  if (quizType && (!baseQuestions || baseQuestions.length === 0)) {
    return { hasQuestions: false, questions: [] };
  }

  return { hasQuestions: true, questions: baseQuestions };
};

export const getQuizName = (quizType) => {
  const quizNames = {
    'java': 'Java Programming',
    'js': 'JavaScript Weirdness',
    'react': 'ReactJS Mastery',
    'nextjs': 'Next.js Pro',
    'nodejs': 'Node.js Backend',
    'express': 'Express.js API',
    'mongodb': 'MongoDB Database',
    'sql': 'SQL Database',
    'typescript': 'TypeScript Expert',
    'computernetworks': 'Computer Networks Fundamentals'
  };

  return quizNames[quizType] || 'Quiz';
};
