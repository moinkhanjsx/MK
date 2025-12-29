import React from 'react';

const QuizQuestion = ({ question, options, currentQuestion, selectedAnswer, showExplanation, correctAnswer, onAnswerSelect }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 mb-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Question {currentQuestion + 1}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-white mb-6 whitespace-pre-line">
          {question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3">
          {options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";

            if (showExplanation) {
              if (index === correctAnswer) {
                buttonClass += "bg-green-900 border-green-700 text-green-300";
              } else if (index === selectedAnswer && index !== correctAnswer) {
                buttonClass += "bg-red-900 border-red-700 text-red-300";
              } else {
                buttonClass += "bg-gray-700 border-gray-600 text-gray-300";
              }
            } else {
              if (selectedAnswer === index) {
                buttonClass += "bg-blue-900 border-blue-700 text-blue-300";
              } else {
                buttonClass += "bg-gray-800 border-gray-600 hover:border-blue-500 hover:bg-gray-700 text-white";
              }
            }

            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                disabled={showExplanation}
                className={buttonClass}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mr-3 text-sm font-bold bg-gray-600">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-white font-medium">{option}</span>
                  {showExplanation && index === correctAnswer && (
                    <span className="text-green-300 ml-2">✓</span>
                  )}
                  {showExplanation && index === selectedAnswer && index !== correctAnswer && (
                    <span className="text-red-300 ml-2">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;