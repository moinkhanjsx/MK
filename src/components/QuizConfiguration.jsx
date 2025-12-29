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
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
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
                : 'bg-gray-700 text-gray-300
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
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
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
            className={`px-4 py-3 rounded-lg
