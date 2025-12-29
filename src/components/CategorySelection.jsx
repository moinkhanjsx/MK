import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons';

const CategorySelection = ({ categories, selectedCategory, handleCategorySelect, handleBackToCategories }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Quiz Category! 🎯</h1>
        <p className="text-gray-400 mb-8">Select a category to explore available quizzes</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategorySelect(key)}
              className={`bg-linear-to-r ${category.color} text-white px-8 py-6 rounded-lg font-semibold hover:${category.hoverColor} transition-all transform hover:scale-105 shadow-lg`}
            >
              <FontAwesomeIcon icon={category.icon} className="text-3xl mb-3" />
              <div className="text-xl">{category.title}</div>
              <div className="text-sm opacity-75 mt-2">{category.quizzes.length} quizzes available</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
