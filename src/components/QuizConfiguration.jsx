import React from 'react';

const QuizConfiguration = ({ 
  quizName, 
  totalQuestions, 
  easyQuestions, 
  mediumQuestions, 
  hardQuestions, 
  difficulty, 
  setDifficulty, 
  quizMode, 
  setQuizMode, 
  isTimed, 
  setIsTimed, 
  onStartQuiz, 
  onBack 
}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4 flex items-center justify-center">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{quizName} Quiz</h1>
          <p className="text-gray-400">Total Questions: {totalQuestions} | Configure your quiz experience</p>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Difficulty Level</h3>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setDifficulty('easy')}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                difficulty === 'easy'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🟢 Easy<br />
              <span className="text-xs">{easyQuestions} questions</span>
            </button>
            <button
              onClick={() => setDifficulty('medium')}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                difficulty === 'medium'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🟡 Medium<br />
              <span className="text-xs">{mediumQuestions} questions</span>
            </button>
            <button
              onClick={() => setDifficulty('hard')}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                difficulty === 'hard'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🔴 Hard<br />
              <span className="text-xs">{hardQuestions} questions</span>
            </button>
          </div>
        </div>

        {/* Quiz Mode Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Quiz Mode</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setQuizMode('quiz')}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                quizMode === 'quiz'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🎯 Quiz Mode<br />
              <span className="text-xs">Test yourself</span>
            </button>
            <button
              onClick={() => setQuizMode('study')}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                quizMode === 'study'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              📚 Study Mode<br />
              <span className="text-xs">Learn at your pace</span>
            </button>
          </div>
        </div>

        {/* Timed Mode */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Timed Mode</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsTimed(!isTimed)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                isTimed
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              ⏱️ {isTimed ? 'Timed On' : 'Timed Off'}
            </button>
            {isTimed && (
              <p className="text-gray-400">Time limit per question will be applied</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            ← Back
          </button>
          <button
            onClick={onStartQuiz}
            className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Start Quiz 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizConfiguration;
