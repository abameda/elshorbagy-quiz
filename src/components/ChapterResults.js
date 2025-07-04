import React from 'react';

const ChapterResults = ({ 
  userAnswers, 
  chapterName, 
  score, 
  totalQuestions, 
  language, 
  darkMode, 
  toggleDarkMode, 
  toggleLanguage, 
  continueToNextChapter, 
  goToHome, 
  translations, 
  dir 
}) => {
  const [showReview, setShowReview] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" dir={dir}>
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {translations.title}
          </h1>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={goToHome}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {translations.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {translations.switchToArabic}
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          {!showReview ? (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {translations.chapterCompleted}
              </h2>
              <h3 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-6">
                {chapterName}
              </h3>
              
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-48 h-48 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200 dark:text-gray-700 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-primary-600 dark:text-primary-400 progress-ring stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / totalQuestions)}`}
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800 dark:text-white">{Math.round((score / totalQuestions) * 100)}%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{translations.score}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {translations.answered} <span className="font-semibold">{score}</span> {translations.outOf} <span className="font-semibold">{totalQuestions}</span> {translations.questionsCorrectly}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {score / totalQuestions >= 0.8
                      ? translations.excellent
                      : score / totalQuestions >= 0.6
                      ? translations.good
                      : translations.keepStudying}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => setShowReview(true)}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg focus:outline-none"
                >
                  {translations.reviewAnswers}
                </button>
                <button
                  onClick={continueToNextChapter}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                >
                  {translations.continueToNextChapter}
                </button>
                <button
                  onClick={goToHome}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                >
                  {translations.backToHome}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {translations.reviewAnswers}
                </h2>
                <button
                  onClick={() => setShowReview(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                >
                  {translations.backToChapters}
                </button>
              </div>
              
              <div className="space-y-8">
                {userAnswers.map((answer, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      answer.isCorrect 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    }`}
                  >
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                      {index + 1}. {answer.question}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      {answer.options.map((option, optIndex) => (
                        <div 
                          key={optIndex}
                          className={`p-3 rounded-md ${
                            optIndex === answer.userAnswer && optIndex === answer.correctAnswer
                              ? 'bg-green-100 dark:bg-green-900/30 border border-green-500'
                              : optIndex === answer.userAnswer
                                ? 'bg-red-100 dark:bg-red-900/30 border border-red-500'
                                : optIndex === answer.correctAnswer
                                  ? 'bg-green-100 dark:bg-green-900/30 border border-green-500'
                                  : 'bg-gray-100 dark:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0 ${
                              optIndex === answer.userAnswer && optIndex === answer.correctAnswer
                                ? 'bg-green-500 text-white'
                                : optIndex === answer.userAnswer
                                  ? 'bg-red-500 text-white'
                                  : optIndex === answer.correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                            }`}>
                              {String.fromCharCode(65 + optIndex)}
                            </div>
                            <span className="text-gray-800 dark:text-white">
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                      <div className="mb-2 sm:mb-0 sm:mr-4 rtl:ml-4 rtl:mr-0">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{translations.yourAnswer}: </span>
                        <span className={answer.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                          {String.fromCharCode(65 + answer.userAnswer)}
                        </span>
                      </div>
                      
                      {!answer.isCorrect && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{translations.correctAnswer}: </span>
                          <span className="text-green-600 dark:text-green-400">
                            {String.fromCharCode(65 + answer.correctAnswer)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm border-t border-gray-200 dark:border-gray-700 pt-3">
                      {answer.explanation}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6 space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => setShowReview(false)}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                >
                  {translations.backToChapters}
                </button>
                <button
                  onClick={continueToNextChapter}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg focus:outline-none"
                >
                  {translations.continueToNextChapter}
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                {translations.createdBy} <a href="https://abameda.github.io/Elshorbagy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Abdelhmeed Elshorbagy</a>
              </p>
            </div>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://wa.me/96893637398" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/abameda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/abamedax/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChapterResults;
