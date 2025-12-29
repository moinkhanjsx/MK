import { useState } from 'react';

export const useQuizNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizType, setQuizType] = useState(null);

  const categories = {
    'programming': {
      title: 'Programming Languages',
      icon: 'faCode',
      color: 'from-purple-600 to-indigo-600',
      hoverColor: 'from-purple-700 hover:to-indigo-700',
      quizzes: [
        { id: 'java', name: 'Java', icon: 'faJava', color: 'from-red-600 to-orange-600', hoverColor: 'from-red-700 hover:to-orange-700' },
        { id: 'js', name: 'JavaScript', icon: 'faJs', color: 'from-yellow-600 to-orange-600', hoverColor: 'from-yellow-700 hover:to-orange-700' },
        { id: 'typescript', name: 'TypeScript', icon: 'faCode', color: 'from-blue-500 to-blue-700', hoverColor: 'from-blue-600 hover:to-blue-800' }
      ]
    },
    'webdev': {
      title: 'Web Development',
      icon: 'faServer',
      color: 'from-green-600 to-teal-600',
      hoverColor: 'from-green-700 hover:to-teal-700',
      quizzes: [
        { id: 'react', name: 'React', icon: 'faReact', color: 'from-blue-600 to-cyan-600', hoverColor: 'from-blue-700 hover:to-cyan-700' },
        { id: 'nextjs', name: 'Next.js', icon: null, color: 'from-gray-700 to-gray-900', hoverColor: 'from-gray-800 hover:to-black' },
        { id: 'nodejs', name: 'Node.js', icon: 'faNode', color: 'from-green-600 to-green-800', hoverColor: 'from-green-700 hover:to-green-900' },
        { id: 'express', name: 'Express', icon: 'faServer', color: 'from-blue-500 to-indigo-600', hoverColor: 'from-blue-600 hover:to-indigo-700' },
        { id: 'mongodb', name: 'MongoDB', icon: 'faDatabase', color: 'from-green-500 to-teal-600', hoverColor: 'from-green-600 hover:to-teal-700' },
        { id: 'sql', name: 'SQL', icon: 'faDatabase', color: 'from-orange-500 to-red-600', hoverColor: 'from-orange-600 hover:to-red-700' },
        { id: 'computernetworks', name: 'Computer Networks', icon: 'faServer', color: 'from-cyan-500 to-blue-600', hoverColor: 'from-cyan-600 hover:to-blue-700' }
      ]
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleQuizSelect = (type) => {
    setQuizType(type);
  };

  const handleBackToMenu = () => {
    setQuizType(null);
    setSelectedCategory(null);
  };

  return {
    selectedCategory,
    quizType,
    categories,
    handleCategorySelect,
    handleBackToCategories,
    handleQuizSelect,
    handleBackToMenu,
    setQuizType,
    setSelectedCategory
  };
};
