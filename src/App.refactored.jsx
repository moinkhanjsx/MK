import React from 'react';
import './App.css';
import QuizHeader from './components/QuizHeader';
import QuizQuestion from './components/QuizQuestion';
import QuizExplanation from './components/QuizExplanation';
import QuizResults from './components/QuizResults';
import QuizReview from './components/QuizReview';
import CategorySelection from './components/CategorySelection';
import QuizList from './components/QuizList';
import { useQuizNavigation } from './hooks/useQuizNavigation';
import { useQuizState } from './hooks/useQuizState';
import { useQuizQuestions } from './hooks/useQuizQuestions';

function App() {
  const {
    selectedCategory,
    quizType,
    categories,
    handleCategorySelect,
    handleBackToCategories,
    handleQuizSelect,
    handleBackToMenu
  } = useQuizNavigation();

  const {
    difficulty,
    setDifficulty,
    quizMode,
    setQuizMode,
    isTimed,
    setIsTimed,
    timeLeft,
    setTimeLeft,
    currentQuestion,
    setCurrentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    showExplanation,
    setShowExplanation,
    score,
    setScore,
    quizCompleted,
    setQuizCompleted,
    showReview,
    setShowReview,
    answers,
    setAnswers,
    shuffledQuestions,
    setShuffledQuestions,
    useTimer,
    handleAnswerSelect,
    handleSubmitAnswer,
    handleNextQuestion,
    handleRestartQuiz,
    handleStartQuiz
  } = useQuizState();

  const { hasQuestions, questions: baseQuestions } = useQuizQuestions(quizType);

  // Validate questions exist
  if (quizType && !hasQuestions) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4 flex items-center justify-center">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">No Questions Available</h2>
          <p className="text-gray-400 mb-6">This quiz doesn't have any questions yet.</p>
          <button
            onClick={handleBackToMenu}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            ← Back to Menu
          </button>
        </div>
      </div>
    );
  }

  // Main category selection screen
  if (quizType === null && selectedCategory === null) {
    return <CategorySelection 
      categories={categories}
      selectedCategory={selectedCategory}
      handleCategorySelect={handleCategorySelect}
      handleBackToCategories={handleBackToCategories}
    />;
  }

  // Individual quiz list screen
  if (quizType === null && selectedCategory !== null) {
    const category = categories[selectedCategory];
    
    return <QuizList 
      category={category}
      quizzes={category.quizzes}
      handleQuizSelect={handleQuizSelect}
    />;
  }

  // Quiz configuration screen
  if (quizType && currentQuestion === 0 && !quizCompleted && shuffledQuestions.length === 0) {
    const quizName = {
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
    }[quizType] || 'Quiz';

    const totalQuestions = baseQuestions.length;
    const easyQuestions = Math.ceil(baseQuestions.length * 0.4);
    const mediumQuestions = Math.ceil(baseQuestions.length * 0.7);
    const hardQuestions = baseQuestions.length;

    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
        <div className="max-w-2xl mx-auto">
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
                    quizMode === 'quiz'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  📝 Quiz Mode<br />
                  <span className="text-xs">Test knowledge with scoring</span>
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
                  <span className="text-xs">Learn with explanations</span>
                </button>
              </div>
            </div>

            {/* Timer Option */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isTimed}
                  onChange={(e) => setIsTimed(e.target.checked)}
                  disabled={quizMode === 'study'}
                  className="mr-3 w-4 h-4 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className={`text-white font-semibold ${quizMode === 'study' ? 'opacity-50' : ''}`}>
                  Enable Timer (1 minute per question)
                  {quizMode === 'study' && <span className="text-sm text-gray-400 ml-2">(Not available in Study Mode)</span>}
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setQuizType(null)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                ← Back
              </button>
              <button
                onClick={handleStartQuiz}
                className="flex-1 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Start Quiz 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show review screen before final results
  if (quizCompleted && showReview) {
    return (
      <QuizReview
        answers={answers}
        quizMode={quizMode}
        onContinue={() => setShowReview(false)}
        onBackToMenu={handleBackToMenu}
      />
    );
  }

  if (quizCompleted) {
    return <QuizResults score={score} totalQuestions={questions.length} onRestart={handleRestartQuiz} onBackToMenu={handleBackToMenu} quizType={quizType} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <QuizHeader
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          score={score}
          quizType={quizType}
          onBackToMenu={handleBackToMenu}
          isTimed={isTimed}
          timeLeft={timeLeft}
          quizMode={quizMode}
        />

        <QuizQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          correctAnswer={questions[currentQuestion].correctAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        <QuizExplanation
          explanation={questions[currentQuestion].explanation}
          showExplanation={showExplanation}
        />

        {/* Action Buttons */}
        <div className="flex justify-end mb-6">
          {quizMode === 'study' ? (
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          ) : (
            !showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            )
          )}
        </div>

        {/* Tips */}
        <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
          <p className="text-gray-300 text-sm">
            💡 <strong>Tip:</strong> Read each question carefully and think about the simplest explanation!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
