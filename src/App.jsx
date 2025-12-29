import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import { quizQuestions } from './data/quizQuestions';
import { jsQuestions } from './data/jsQuestions';
import { reactQuestions } from './data/reactQuestions';
import { nextjsQuestions } from './data/nextjsQuestions';
import { nodejsQuestions } from './data/nodejsQuestions';
import { expressQuestions } from './data/expressQuestions';
import { mongodbQuestions } from './data/mongodbQuestions';
import { sqlQuestions } from './data/sqlQuestions';
import { typescriptQuestions } from './data/typescriptQuestions';
import QuizHeader from './components/QuizHeader';
import QuizQuestion from './components/QuizQuestion';
import QuizExplanation from './components/QuizExplanation';
import QuizResults from './components/QuizResults';
import QuizReview from './components/QuizReview';

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
  const [showReview, setShowReview] = useState(false);
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
                       quizType === 'sql' ? sqlQuestions :
                       quizType === 'typescript' ? typescriptQuestions :
                       [];

  // Validate questions exist
  if (quizType && (!baseQuestions || baseQuestions.length === 0)) {
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

  const currentQuestions = shuffledQuestions.length > 0 ? shuffledQuestions : getQuestionsByDifficulty(baseQuestions);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimed && timeLeft > 0 && !quizCompleted && quizMode === 'quiz') {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Time's up - auto-submit or move to next
            if (selectedAnswer !== null && !showExplanation) {
              // Submit current answer
              setShowExplanation(true);
              const isCorrect = selectedAnswer === currentQuestions[currentQuestion].correctAnswer;
              if (isCorrect) {
                setScore(prev => prev + 1);
              }
              const newAnswers = [
                ...answers,
                {
                  questionIndex: currentQuestion,
                  selectedAnswer,
                  isCorrect,
                  question: currentQuestions[currentQuestion].question,
                  options: currentQuestions[currentQuestion].options,
                  correctAnswer: currentQuestions[currentQuestion].correctAnswer,
                  explanation: currentQuestions[currentQuestion].explanation
                }
              ];
              setAnswers(newAnswers);
            } else if (currentQuestion < currentQuestions.length - 1) {
              // Move to next question
              setCurrentQuestion(prev => prev + 1);
              setSelectedAnswer(null);
              setShowExplanation(false);
            } else {
              // Complete quiz
              setShowReview(true);
              setQuizCompleted(true);
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimed, timeLeft, quizCompleted, selectedAnswer, showExplanation, currentQuestion, quizMode, currentQuestions, answers]);

  const handleAnswerSelect = (answerIndex) => {
    if (quizMode === 'study' || !showExplanation) {
      setSelectedAnswer(answerIndex);
      if (quizMode === 'study') {
        // In study mode, show explanation immediately and track answer
        setShowExplanation(true);
        const isCorrect = answerIndex === currentQuestions[currentQuestion].correctAnswer;
        
        // Check if answer for this question already exists
        const existingAnswerIndex = answers.findIndex(a => a.questionIndex === currentQuestion);
        
        const newAnswer = {
          questionIndex: currentQuestion,
          selectedAnswer: answerIndex,
          isCorrect,
          question: currentQuestions[currentQuestion].question,
          options: currentQuestions[currentQuestion].options,
          correctAnswer: currentQuestions[currentQuestion].correctAnswer,
          explanation: currentQuestions[currentQuestion].explanation
        };
        
        let newAnswers;
        if (existingAnswerIndex !== -1) {
          // Update existing answer
          newAnswers = [...answers];
          newAnswers[existingAnswerIndex] = newAnswer;
        } else {
          // Add new answer
          newAnswers = [...answers, newAnswer];
        }
        
        setAnswers(newAnswers);
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
          question: currentQuestions[currentQuestion].question,
          options: currentQuestions[currentQuestion].options,
          correctAnswer: currentQuestions[currentQuestion].correctAnswer,
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
      setShowExplanation(false); // Always hide explanation when moving to next question
    } else {
      // Show review screen before final results
      setShowReview(true);
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setShowReview(false);
    setAnswers([]);
    setShuffledQuestions([]);
  };

  const handleQuizSelect = (type) => {
    setQuizType(type);
  };

  const handleStartQuiz = () => {
    const questions = getQuestionsByDifficulty(baseQuestions);
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);

    // Set timer if timed mode (not available in study mode)
    if (isTimed && quizMode !== 'study') {
      setTimeLeft(shuffled.length * 60); // 60 seconds per question
    } else {
      setTimeLeft(0);
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
    setShowReview(false);
    setAnswers([]);
    setShuffledQuestions([]);
  };

  if (quizType === null) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Choose Your Quiz! 🎯</h1>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => handleQuizSelect('java')}
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faJava} className="mr-2" />
              Java
            </button>
            <button
              onClick={() => handleQuizSelect('js')}
              className="bg-linear-to-r from-yellow-600 to-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faJs} className="mr-2" />
              JavaScript
            </button>
            <button
              onClick={() => handleQuizSelect('react')}
              className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faReact} className="mr-2" />
              React
            </button>
            <button
              onClick={() => handleQuizSelect('nextjs')}
              className="bg-linear-to-r from-gray-700 to-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:from-gray-800 hover:to-black transition-all transform hover:scale-105"
            >
              ▲ Next.js
            </button>
            <button
              onClick={() => handleQuizSelect('nodejs')}
              className="bg-linear-to-r from-green-600 to-green-800 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-900 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faNode} className="mr-2" />
              Node.js
            </button>
            <button
              onClick={() => handleQuizSelect('express')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faServer} className="mr-2" />
              Express
            </button>
            <button
              onClick={() => handleQuizSelect('mongodb')}
              className="bg-linear-to-r from-green-500 to-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faDatabase} className="mr-2" />
              MongoDB
            </button>
            <button
              onClick={() => handleQuizSelect('sql')}
              className="bg-linear-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faDatabase} className="mr-2" />
              SQL
            </button>
            <button
              onClick={() => handleQuizSelect('typescript')}
              className="bg-linear-to-r from-blue-500 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              TypeScript
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
                    quizType === 'typescript' ? 'TypeScript Expert' :
                    'SQL Database';

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
    return <QuizResults score={score} totalQuestions={currentQuestions.length} onRestart={handleRestartQuiz} onBackToMenu={handleBackToMenu} quizType={quizType} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
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
              className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
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
