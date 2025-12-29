import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizList = ({ category, quizzes, handleQuizSelect }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <button
            className="text-gray-400 hover:text-white mb-4 transition-colors"
            onClick={() => window.history.back()}
          >
            ← Back to Categories
          </button>
          <h1 className="text-3xl font-bold text-white mb-2">
            <FontAwesomeIcon icon={category.icon} className="mr-3" />
            {category.title}
          </h1>
          <p className="text-gray-400">Choose a technology to test your knowledge</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => handleQuizSelect(quiz.id)}
              className={`bg-linear-to-r ${quiz.color} text-white px-6 py-4 rounded-lg font-semibold hover:${quiz.hoverColor} transition-all transform hover:scale-105 shadow-lg`}
            >
              {quiz.icon && <FontAwesomeIcon icon={quiz.icon} className="mr-2" />}
              {!quiz.icon && quiz.id === 'nextjs' && <span className="mr-2">▲</span>}
              {quiz.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
