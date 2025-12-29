import React, { useState, useEffect } from 'react';
import './App.css';
import { quizQuestions } from './data/quizQuestions';
import { jsQuestions } from './data/jsQuestions';
import { reactQuestions } from './data/reactQuestions';
import { nextjsQuestions } from './data/nextjsQuestions';
import { nodejsQuestions } from './data/nodejsQuestions';
import { expressQuestions } from './data/expressQuestions';
import { mongodbQuestions } from './data/mongodbQuestions';
import { sqlQuestions } from './data/sqlQuestions';
import QuizHeader from './components/QuizHeader';
import QuizQuestion from './components/QuizQuestion';
import QuizExplanation from './components/QuizExplanation';
import QuizResults from './components/QuizResults';

function App() {
  const [quizType, setQuizType] = useState(null);
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [quizMode, setQuizMode] = useState('quiz'); // 'quiz', 'study'
  const [isTimed, setIsTimed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle array utility
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get questions based on type and difficulty
  const getQuestionsByDifficulty = (questions) => {
    if (difficulty === 'easy') {
      return questions.slice(0, Math.ceil(questions.length * 0.4)); // 40% of questions
    } else if (difficulty === 'medium') {
      return questions.slice(0, Math.ceil(questions.length * 0.7)); // 70% of questions
    }
    return questions; // Hard = all questions
  };

  const baseQuestions = quizType === 'java' ? quizQuestions :
                       quizType === 'js' ? jsQuestions :
                       quizType === 'react' ? reactQuestions :
                       quizType === 'nextjs' ? nextjsQuestions :
                       quizType === 'nodejs' ? nodejsQuestions :
                       quizType === 'express' ? expressQuestions :
                       quizType === 'mongodb' ? mongodbQuestions :
                       sqlQuestions;

  const currentQuestions = shuffledQuestions.length > 0 ? shuffledQuestions : getQuestionsByDifficulty(baseQuestions);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimed && timeLeft > 0 && !quizCompleted) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Time's up - auto-submit current answer or move to next
            if (selectedAnswer !== null && !showExplanation) {
              handleSubmitAnswer();
            } else if (currentQuestion < currentQuestions.length - 1) {
              handleNextQuestion();
            } else {
              setQuizCompleted(true);
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimed, timeLeft, quizCompleted, selectedAnswer, showExplanation, currentQuestion]);

  const handleAnswerSelect = (answerIndex) => {
    if (quizMode === 'study' || !showExplanation) {
      setSelectedAnswer(answerIndex);
      if (quizMode === 'study') {
        // In study mode, show explanation immediately
        setShowExplanation(true);
      }
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null && quizMode === 'quiz') {
      setShowExplanation(true);
      const isCorrect = selectedAnswer === currentQuestions[currentQuestion].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }

      const newAnswers = [
        ...answers,
        {
          questionIndex: currentQuestion,
          selectedAnswer,
          isCorrect,
          explanation: currentQuestions[currentQuestion].explanation
        }
      ];
      setAnswers(newAnswers);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(quizMode === 'study'); // Keep explanations visible in study mode
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const handleQuizSelect = (type) => {
    setQuizType(type);
  };

  const handleStartQuiz = () => {
    const questions = getQuestionsByDifficulty(baseQuestions);
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);

    // Set timer if timed mode
    if (isTimed) {
      setTimeLeft(shuffled.length * 30); // 30 seconds per question
    }

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(quizMode === 'study'); // Show explanations immediately in study mode
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const handleBackToMenu = () => {
    setQuizType(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  if (quizType === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Choose Your Quiz! 🎯</h1>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => handleQuizSelect('java')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              ☕ Java
            </button>
            <button
              onClick={() => handleQuizSelect('js')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105"
            >
              🟨 JavaScript
            </button>
            <button
              onClick={() => handleQuizSelect('react')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
            >
              ⚛️ React
            </button>
            <button
              onClick={() => handleQuizSelect('nextjs')}
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:from-gray-800 hover:to-black transition-all transform hover:scale-105"
            >
              ▲ Next.js
            </button>
            <button
              onClick={() => handleQuizSelect('nodejs')}
              className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-900 transition-all transform hover:scale-105"
            >
              🟢 Node.js
            </button>
            <button
              onClick={() => handleQuizSelect('express')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105"
            >
              🚀 Express
            </button>
            <button
              onClick={() => handleQuizSelect('mongodb')}
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105"
            >
              🍃 MongoDB
            </button>
            <button
              onClick={() => handleQuizSelect('sql')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
            >
              🗄️ SQL
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz configuration screen
  if (quizType && currentQuestion === 0 && !quizCompleted && shuffledQuestions.length === 0) {
    const quizName = quizType === 'java' ? 'Java Programming' :
                    quizType === 'js' ? 'JavaScript Weirdness' :
                    quizType === 'react' ? 'ReactJS Mastery' :
                    quizType === 'nextjs' ? 'Next.js Pro' :
                    quizType === 'nodejs' ? 'Node.js Backend' :
                    quizType === 'express' ? 'Express.js API' :
                    quizType === 'mongodb' ? 'MongoDB Database' :
                    'SQL Database';

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{quizName} Quiz</h1>
              <p className="text-gray-400">Configure your quiz experience</p>
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
                  🟢 Easy
                </button>
                <button
                  onClick={() => setDifficulty('medium')}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    difficulty === 'medium'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  🟡 Medium
                </button>
                <button
                  onClick={() => setDifficulty('hard')}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    difficulty === 'hard'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  🔴 Hard
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
                  📝 Quiz Mode
                </button>
                <button
                  onClick={() => setQuizMode('study')}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    quizMode === 'study'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  📚 Study Mode
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
                  className="mr-3 w-4 h-4"
                />
                <span className="text-white font-semibold">Enable Timer (30s per question)</span>
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
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Start Quiz 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return <QuizResults score={score} totalQuestions={currentQuestions.length} onRestart={handleRestartQuiz} onBackToMenu={handleBackToMenu} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <QuizHeader
          currentQuestion={currentQuestion}
          totalQuestions={currentQuestions.length}
          score={score}
          quizType={quizType}
          onBackToMenu={handleBackToMenu}
          isTimed={isTimed}
          timeLeft={timeLeft}
          quizMode={quizMode}
        />

        <QuizQuestion
          question={currentQuestions[currentQuestion].question}
          options={currentQuestions[currentQuestion].options}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          correctAnswer={currentQuestions[currentQuestion].correctAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        <QuizExplanation
          explanation={currentQuestions[currentQuestion].explanation}
          showExplanation={showExplanation}
        />

        {/* Action Buttons */}
        <div className="flex justify-end mb-6">
          {quizMode === 'study' ? (
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          ) : (
            !showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                {currentQuestion < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
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
