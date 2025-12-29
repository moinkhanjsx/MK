import React from 'react';

const QuizHeader = ({ currentQuestion, totalQuestions, score, quizType, onBackToMenu, isTimed, timeLeft, quizMode }) => {
  const title = quizType === 'java' ? '☕ Java Programming Quiz' :
               quizType === 'js' ? '🟨 JavaScript Weirdness Quiz' :
               quizType === 'react' ? '⚛️ ReactJS Mastery Quiz' :
               quizType === 'nextjs' ? '▲ Next.js Pro Quiz' :
               quizType === 'nodejs' ? '🟢 Node.js Backend Quiz' :
               quizType === 'express' ? '🚀 Express.js API Quiz' :
               quizType === 'mongodb' ? '🍃 MongoDB Database Quiz' :
               '🗄️ SQL Database Quiz';
  const subtitle = quizType === 'java' ? 'Test your Java knowledge with simple explanations!' :
                  quizType === 'js' ? 'Test your JavaScript knowledge with weird behaviors!' :
                  quizType === 'react' ? 'Master React concepts and hooks!' :
                  quizType === 'nextjs' ? 'Master Next.js full-stack development!' :
                  quizType === 'nodejs' ? 'Master Node.js backend development!' :
                  quizType === 'express' ? 'Master Express.js API development!' :
                  quizType === 'mongodb' ? 'Master MongoDB NoSQL database!' :
                  'Master SQL relational database!';

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={onBackToMenu}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          ← Back to Menu
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400 mb-4">{subtitle}</p>

        {/* Mode and Timer Info */}
        <div className="flex justify-center items-center gap-4 text-sm">
          <span className={`px-3 py-1 rounded-full font-semibold ${
            quizMode === 'study' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
          }`}>
            {quizMode === 'study' ? '📚 Study Mode' : '📝 Quiz Mode'}
          </span>
          {isTimed && (
            <span className={`px-3 py-1 rounded-full font-semibold ${
              timeLeft < 60 ? 'bg-red-600 text-white animate-pulse' : 'bg-green-600 text-white'
            }`}>
              ⏱️ {formatTime(timeLeft)}
            </span>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default QuizHeader;