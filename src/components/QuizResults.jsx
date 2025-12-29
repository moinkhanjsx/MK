import React from 'react';

const QuizResults = ({ score, totalQuestions, onRestart, onBackToMenu, quizType }) => {
  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    
    const quizName = quizType === 'java' ? 'Java' :
                     quizType === 'js' ? 'JavaScript' :
                     quizType === 'react' ? 'React' :
                     quizType === 'nextjs' ? 'Next.js' :
                     quizType === 'nodejs' ? 'Node.js' :
                     quizType === 'express' ? 'Express.js' :
                     quizType === 'mongodb' ? 'MongoDB' :
                     quizType === 'typescript' ? 'TypeScript' :
                     'SQL';
    
    if (percentage === 100) return `Perfect! You're a ${quizName} Master! 🎉`;
    if (percentage >= 80) return `Excellent! You really know ${quizName}! 🌟`;
    if (percentage >= 60) return `Good job! Keep practicing ${quizName}! 👍`;
    if (percentage >= 40) return `Not bad! Room for improvement in ${quizName}! 📚`;
    return `Keep learning ${quizName}! Practice makes perfect! 💪`;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h1>
            <p className="text-xl text-gray-300 mb-4">{getScoreMessage()}</p>
          </div>

          <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 mb-6">
            <div className="text-4xl font-bold mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-lg">
              {Math.round((score / totalQuestions) * 100)}% Correct
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-900 border border-green-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">{score}</div>
              <div className="text-sm text-green-300">Correct Answers</div>
            </div>
            <div className="bg-red-900 border border-red-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-400">{totalQuestions - score}</div>
              <div className="text-sm text-red-300">Wrong Answers</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={onBackToMenu}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Choose Different Quiz
            </button>
            <button
              onClick={onRestart}
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;