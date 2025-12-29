import React from 'react';

const QuizExplanation = ({ explanation, showExplanation }) => {
  if (!showExplanation) return null;

  return (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <span className="text-2xl mr-3">💡</span>
        <div>
          <h3 className="font-semibold text-yellow-400 mb-1">🫏 Donkey Explanation:</h3>
          <p className="text-gray-300 whitespace-pre-line">{explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizExplanation;