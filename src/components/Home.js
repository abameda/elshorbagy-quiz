import React, { useState, useEffect } from 'react';
import TypewriterBanner from './TypewriterBanner';
import { quizData } from "../data/questions-v2"; // Import quizData

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic
  const [ setBannerComplete] = useState(false);
  const [resetBanner, setResetBanner] = useState(false);
  
  useEffect(() => {
    // Check for user preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode to document if needed
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Check for language preference in localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Reset banner animation when language changes
    setBannerComplete(false);
    setResetBanner(!resetBanner);
  };
  
  const startQuiz = (chapter) => {
    localStorage.setItem('selectedChapter', chapter);
    window.location.href = '/quiz';
  };
  
  // Banner messages
  const bannerMessages = {
    en: "Created by Abdelhmeed Elshorbagy for Computer & AI students for the final exam in Digital Logic & Design.\nI truly hope it helps you and makes things easier.\nFinally, I kindly ask you to keep me and the people of Gaza in your prayers.",
    ar: "تم الإنشاء بواسطة عبد الحميد الشوربجي لطلاب قسم الحاسبات والذكاء الاصطناعي من أجل امتحان نهاية الترم في مادة تصميم المنطق الرقمي.\nأتمنى إنه يفيدكم فعلاً ويساعدكم.\nوفي الختام، أسألكم الدعاء لي ولأهل غزة."
  };
  
  // Translations
  const translations = {
    en: {
      title: 'digital logic & design',
      subtitle: 'Test your knowledge on digital logic & design concepts',
      selectChapter: 'Select a chapter to start the quiz:',
      startQuiz: 'Start Quiz',
      questionsAvailable: 'questions available',
      noQuestions: 'No questions available yet',
      createdBy: 'Created by',
      switchToArabic: 'العربية'
    },
    ar: {
      title: 'digital logic & design',
      subtitle: 'اختبر معرفتك بمفاهيم "تصميم المنطق الرقمي',
      selectChapter: 'اختر فصلاً لبدء الاختبار:',
      startQuiz: 'ابدأ الاختبار',
      questionsAvailable: 'أسئلة متاحة',
      noQuestions: 'لا توجد أسئلة متاحة بعد',
      createdBy: 'تم إنشاؤه بواسطة',
      switchToArabic: 'English'
    }
  };
  
  const t = translations[language];
  
  // Direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" dir={dir}>
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {t.title}
          </h1>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {t.switchToArabic}
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
      
      <div className="bg-primary-50 dark:bg-primary-900/20 py-6 px-4 border-b border-primary-100 dark:border-primary-800">
        <div className="container mx-auto max-w-4xl">
          <TypewriterBanner 
            key={language + resetBanner} // Force re-render when language changes
            text={bannerMessages[language]} 
            speed={30}
            className="text-center text-primary-800 dark:text-primary-200 whitespace-pre-line text-sm md:text-base leading-relaxed"
            onComplete={() => setBannerComplete(true)}
          />
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {t.subtitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.selectChapter}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(quizData).map((chapterKey) => {
              const chapter = quizData[chapterKey];
              const questionCount = chapter.questions.length;
              return (
                <div 
                  key={chapterKey}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col h-full"
                >
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {questionCount > 0 
                        ? `${questionCount} ${t.questionsAvailable}` 
                        : t.noQuestions
                      }
                    </p>
                    <button
                      onClick={() => questionCount > 0 && startQuiz(chapterKey)}
                      disabled={questionCount === 0}
                      className={`w-full py-2 rounded-md font-medium mt-auto ${
                        questionCount > 0
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {t.startQuiz}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                {t.createdBy} <a href="https://abameda.github.io/Elshorbagy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Abdelhmeed Elshorbagy</a>
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

export default Home;


