import React from 'react';

const QuizReview = ({ answers, quizMode, onContinue, onBackToMenu }) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalQuestions = answers.length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              {quizMode === 'study' ? '📚 Study Review' : '📝 Answer Review'}
            </h1>
            <p className="text-gray-400 mb-4">
              {quizMode === 'study' 
                ? 'Review all questions and explanations'
                : `You got ${correctCount} out of ${totalQuestions} correct`
              }
            </p>
            {quizMode === 'quiz' && (
              <div className="inline-block bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold">
                {Math.round((correctCount / totalQuestions) * 100)}% Correct
              </div>
            )}
          </div>
        </div>

        {/* Questions Review */}
        <div className="space-y-6">
          {answers.map((answer, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Question {idx + 1}
                </span>
                {answer.isCorrect ? (
                  <span className="bg-green-900 text-green-300 text-sm font-semibold px-3 py-1 rounded-full">
                    ✓ Correct
                  </span>
                ) : (
                  <span className="bg-red-900 text-red-300 text-sm font-semibold px-3 py-1 rounded-full">
                    ✗ Incorrect
                  </span>
                )}
              </div>

              {/* Question Text */}
              <h3 className="text-lg font-semibold text-white mb-4 whitespace-pre-line">
                {answer.question}
              </h3>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {answer.options.map((option, optIdx) => {
                  let optionClass = "p-3 rounded-lg border-2 ";
                  
                  if (optIdx === answer.correctAnswer) {
                    optionClass += "bg-green-900 border-green-700 text-green-300";
                  } else if (optIdx === answer.selectedAnswer && optIdx !== answer.correctAnswer) {
                    optionClass += "bg-red-900 border-red-700 text-red-300";
                  } else {
                    optionClass += "bg-gray-700 border-gray-600 text-gray-300";
                  }

                  return (
                    <div key={optIdx} className={optionClass}>
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mr-3 text-sm font-bold bg-gray-600">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {optIdx === answer.correctAnswer && (
                          <span className="text-green-300 ml-2 font-bold">✓ Correct Answer</span>
                        )}
                        {optIdx === answer.selectedAnswer && optIdx !== answer.correctAnswer && (
                          <span className="text-red-300 ml-2 font-bold">✗ Your Answer</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💡</span>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">🫏 Donkey Explanation:</h4>
                    <p className="text-gray-300 whitespace-pre-line">{answer.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={onBackToMenu}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            ← Back to Menu
          </button>
          <button
            onClick={onContinue}
            className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            {quizMode === 'study' ? 'Finish Study Session' : 'See Final Results'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizReview;
