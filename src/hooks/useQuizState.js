import { useState, useEffect } from 'react';

export const useQuizState = () => {
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

  // Timer effect
  const useTimer = (isTimed, timeLeft, setTimeLeft, quizCompleted, selectedAnswer, showExplanation, currentQuestion, quizMode, currentQuestions, answers) => {
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
  };

  const handleAnswerSelect = (answerIndex, quizMode, showExplanation, currentQuestion, currentQuestions, answers, setSelectedAnswer, setAnswers) => {
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

  const handleSubmitAnswer = (selectedAnswer, quizMode, currentQuestion, currentQuestions, score, setShowExplanation, setScore, answers) => {
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

  const handleNextQuestion = (currentQuestion, setCurrentQuestion, setSelectedAnswer, setShowExplanation, currentQuestions, showReview, setQuizCompleted) => {
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

  const handleRestartQuiz = (setCurrentQuestion, setSelectedAnswer, setShowExplanation, setScore, setQuizCompleted, setShowReview, setAnswers, setShuffledQuestions) => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setShowReview(false);
    setAnswers([]);
    setShuffledQuestions([]);
  };

  const handleStartQuiz = (baseQuestions, isTimed, quizMode, setCurrentQuestion, setSelectedAnswer, setShowExplanation, setScore, setQuizCompleted, setAnswers, setShuffledQuestions, difficulty, setTimeLeft) => {
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

  return {
    // State
    difficulty, setDifficulty,
    quizMode, setQuizMode,
    isTimed, setIsTimed,
    timeLeft, setTimeLeft,
    currentQuestion, setCurrentQuestion,
    selectedAnswer, setSelectedAnswer,
    showExplanation, setShowExplanation,
    score, setScore,
    quizCompleted, setQuizCompleted,
    showReview, setShowReview,
    answers, setAnswers,
    shuffledQuestions, setShuffledQuestions,
    
    // Utilities
    shuffleArray,
    getQuestionsByDifficulty,
    useTimer,
    
    // Handlers
    handleAnswerSelect,
    handleSubmitAnswer,
    handleNextQuestion,
    handleRestartQuiz,
    handleStartQuiz
  };
};
