import React, { useState, useEffect } from 'react';
import ChapterResults from './ChapterResults';
import { quizData } from "../data/questions-v2"; // Import quizData

const Quiz = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic
  const [currentChapter, setCurrentChapter] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showChapterResults, setShowChapterResults] = useState(false);
  // NEW: Track which questions have been answered with their selected options
  const [questionAnswers, setQuestionAnswers] = useState({});

  // Set initial chapter when component mounts
  useEffect(() => {
    // Check if there's a selected chapter in localStorage
    const savedChapter = localStorage.getItem('selectedChapter');

    if (savedChapter) {
      setCurrentChapter(savedChapter);
      // Clear the selected chapter from localStorage
      localStorage.removeItem('selectedChapter');
    } else {
      // Default behavior if not coming from home page
      const chapters = Object.keys(quizData);
      if (chapters.length > 0) {
        setCurrentChapter(chapters[0]);
      }
    }
  }, []);

  // Handle language change
  useEffect(() => {
    // No need for chapter mapping as chapter keys are consistent
  }, [language, currentChapter]);

  // NEW: Effect to handle question navigation and restore previous answers
  useEffect(() => {
    const questionKey = `${currentChapter}-${currentQuestionIndex}`;
    if (questionAnswers[questionKey] !== undefined) {
      // This question was already answered, restore the previous selection
      setSelectedOption(questionAnswers[questionKey]);
      setShowExplanation(false); // Reset explanation state
    } else {
      // This is a new question, reset selection
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex, currentChapter, questionAnswers]);

  const chapters = Object.keys(quizData);
  const currentQuestions = currentChapter && quizData[currentChapter] ? quizData[currentChapter].questions : [];
  const currentQuestion = currentQuestions.length > 0 ? currentQuestions[currentQuestionIndex] : null;

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

    // FIXED: Only reset the selected option and explanation state, 
    // but preserve the current question index to stay on the same question
    setSelectedOption(null);
    setShowExplanation(false);
    // Removed: setCurrentQuestionIndex(0); - This was causing the issue
  };

  const handleChapterChange = (chapter) => {
    setCurrentChapter(chapter);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setScore(0);
    setShowChapterResults(false);
    // NEW: Reset question answers when changing chapters
    setQuestionAnswers({});
  };

  const handleOptionSelect = (optionIndex) => {
    const questionKey = `${currentChapter}-${currentQuestionIndex}`;
    
    // NEW: Prevent selecting if this question was already answered
    if (questionAnswers[questionKey] !== undefined || !currentQuestion) return;

    setSelectedOption(optionIndex);

    // NEW: Store the answer for this specific question
    setQuestionAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));

    // Record user's answer
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, {
      question: currentQuestion.question,
      options: currentQuestion.options,
      userAnswer: optionIndex,
      correctAnswer: currentQuestion.correctAnswer,
      explanation: currentQuestion.explanation,
      isCorrect
    }]);

    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (!currentQuestion) return;

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Note: selectedOption and showExplanation will be handled by the useEffect
    } else {
      // Chapter completed - show chapter results
      setShowChapterResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (!currentQuestion) return;

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Note: selectedOption and showExplanation will be handled by the useEffect
    }
  };

  const continueToNextChapter = () => {
    // Find next chapter with questions
    let nextChapterFound = false;
    const currentChapterIndex = chapters.indexOf(currentChapter);

    for (let i = currentChapterIndex + 1; i < chapters.length; i++) {
      if (quizData[chapters[i]] && quizData[chapters[i]].questions.length > 0) {
        setCurrentChapter(chapters[i]);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowExplanation(false);
        setUserAnswers([]);
        setScore(0);
        setShowChapterResults(false);
        // NEW: Reset question answers for new chapter
        setQuestionAnswers({});
        nextChapterFound = true;
        break;
      }
    }

    if (!nextChapterFound) {
      // All chapters completed
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  const restartQuiz = () => {
    // Find first chapter with questions
    let firstChapterWithQuestions = chapters[0];
    for (let i = 0; i < chapters.length; i++) {
      if (quizData[chapters[i]] && quizData[chapters[i]].questions.length > 0) {
        firstChapterWithQuestions = chapters[i];
        break;
      }
    }

    setCurrentChapter(firstChapterWithQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setShowResults(false);
    setAnsweredQuestions(0);
    setUserAnswers([]);
    setShowChapterResults(false);
    // NEW: Reset question answers when restarting
    setQuestionAnswers({});
  };

  const totalQuestions = Object.values(quizData).reduce(
      (total, chapter) => total + (chapter.questions ? chapter.questions.length : 0),
      0
  );

  // NEW: Check if current question was already answered
  const questionKey = `${currentChapter}-${currentQuestionIndex}`;
  const isQuestionAnswered = questionAnswers[questionKey] !== undefined;

  // Translations
  const translations = {
    en: {
      title: 'Digital Logic & Design Quiz',
      question: 'Question',
      of: 'of',
      correct: 'Correct!',
      incorrect: 'Incorrect!',
      showExplanation: 'Show explanation',
      hideExplanation: 'Hide explanation',
      previous: 'Previous',
      next: 'Next Question',
      finish: 'Finish Quiz',
      results: 'Quiz Results',
      score: 'Score',
      answered: 'You answered',
      outOf: 'out of',
      questionsCorrectly: 'questions correctly.',
      excellent: 'Excellent work! You have a strong understanding of digital logic & design.',
      good: 'Good job! You have a solid grasp of digital logic & design concepts.',
      keepStudying: 'Keep studying! Review the chapters to improve your understanding.',
      restart: 'Restart Quiz',
      createdBy: 'Created by',
      switchToArabic: 'العربية',
      emptyChapter: 'This chapter has no questions yet.',
      chapterResults: 'Chapter Results',
      chapterCompleted: 'Chapter Completed!',
      reviewAnswers: 'Review Your Answers',
      continueToNextChapter: 'Continue to Next Chapter',
      backToHome: 'Back to Home',
      yourAnswer: 'Your Answer',
      correctAnswer: 'Correct Answer',
      backToChapters: 'Back to Chapters',
      alreadyAnswered: 'You have already answered this question'
    },
    ar: {
      title: 'اختبار تصميم المنطق الرقمي',
      question: 'سؤال',
      of: 'من',
      correct: 'صحيح!',
      incorrect: 'غير صحيح!',
      showExplanation: 'عرض التفسير',
      hideExplanation: 'إخفاء التفسير',
      previous: 'السابق',
      next: 'السؤال التالي',
      finish: 'إنهاء الاختبار',
      results: 'نتائج الاختبار',
      score: 'النتيجة',
      answered: 'لقد أجبت على',
      outOf: 'من أصل',
      questionsCorrectly: 'أسئلة بشكل صحيح.',
      excellent: 'عمل ممتاز! لديك فهم قوي لتصميم المنطق الرقمي.',
      good: 'عمل جيد! لديك فهم جيد لتصميم المنطق الرقمي.',
      keepStudying: 'واصل الدراسة! راجع الفصول لتحسين فهمك.',
      restart: 'إعادة الاختبار',
      createdBy: 'تم إنشاؤه بواسطة',
      switchToArabic: 'English',
      emptyChapter: 'هذا الفصل لا يحتوي على أسئلة بعد.',
      chapterResults: 'نتائج الفصل',
      chapterCompleted: 'تم إكمال الفصل!',
      reviewAnswers: 'مراجعة إجاباتك',
      continueToNextChapter: 'الاستمرار إلى الفصل التالي',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      yourAnswer: 'إجابتك',
      correctAnswer: 'الإجابة الصحيحة',
      backToChapters: 'العودة إلى الفصول',
      alreadyAnswered: 'لقد أجبت على هذا السؤال بالفعل'
    }
  };

  const t = translations[language];

  // Direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  if (showChapterResults) {
    return (
        <ChapterResults
            userAnswers={userAnswers}
            chapterName={quizData[currentChapter].title}
            score={score}
            totalQuestions={currentQuestions.length}
            language={language}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleLanguage={toggleLanguage}
            continueToNextChapter={continueToNextChapter}
            goToHome={goToHome}
            translations={t}
            dir={dir}
        />
    );
  }

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" dir={dir}>
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {t.title}
            </h1>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                  onClick={goToHome}
                  className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {t.backToHome}
              </button>
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

        <main className="container mx-auto px-4 py-8">
          {!showResults ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {quizData[currentChapter] ? quizData[currentChapter].title : ''}
                  </h2>
                  {currentQuestions.length > 0 && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t.question} {currentQuestionIndex + 1} {t.of} {currentQuestions.length}
                      </div>
                  )}
                </div>

                {currentQuestions.length > 0 && currentQuestion ? (
                    <div>
                      {/* NEW: Show indicator if question was already answered */}
                      {isQuestionAnswered && (
                          <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                              {t.alreadyAnswered}
                            </p>
                          </div>
                      )}

                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                          {currentQuestion.question}
                        </h3>

                        <div className="space-y-3">
                          {currentQuestion.options.map((option, index) => (
<button
    key={index}
    onClick={() => handleOptionSelect(index)}
    className={`w-full text-left p-4 rounded-lg border ${
        selectedOption === null
            ? 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100' // لون النص الافتراضي
            : selectedOption === index
                ? (index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-400 dark:text-green-200' // صحيح
                    : 'bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:border-red-400 dark:text-red-200' // خاطئ
                )
                : (index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-400 dark:text-green-200' // الإجابة الصحيحة غير المختارة
                    : 'border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100' // باقي الاختيارات
                )
    } ${
        isQuestionAnswered ? 'cursor-not-allowed' : ''
    }`}
    disabled={isQuestionAnswered}
>
    {option}
</button>                          ))}
                        </div>
                      </div>

                      {isQuestionAnswered && currentQuestion.explanation && (
                          <div className="mb-8">
                            <button
                                onClick={() => setShowExplanation(!showExplanation)}
                                className="text-primary-600 dark:text-primary-400 hover:underline mb-4"
                            >
                              {showExplanation ? t.hideExplanation : t.showExplanation}
                            </button>
                            {showExplanation && (
                                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-gray-800 dark:text-gray-200">
                                  <h4 className="font-semibold mb-2">Explanation:</h4>
                                  <p>{currentQuestion.explanation}</p>
                                </div>
                            )}
                          </div>
                      )}

                      <div className="flex justify-between">
                        <button
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="px-6 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {t.previous}
                        </button>
                        <button
                            onClick={handleNextQuestion}
                            disabled={!isQuestionAnswered}
                            className="px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {currentQuestionIndex === currentQuestions.length - 1 ? t.finish : t.next}
                        </button>
                      </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      <p>{t.emptyChapter}</p>
                      <button
                          onClick={goToHome}
                          className="mt-4 px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700"
                      >
                        {t.backToHome}
                      </button>
                    </div>
                )}
              </div>
          ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t.results}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {t.answered} {score} {t.outOf} {totalQuestions} {t.questionsCorrectly}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {score / totalQuestions >= 0.8 ? t.excellent : score / totalQuestions >= 0.5 ? t.good : t.keepStudying}
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                      onClick={restartQuiz}
                      className="px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700"
                  >
                    {t.restart}
                  </button>
                  <button
                      onClick={goToHome}
                      className="px-6 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    {t.backToHome}
                  </button>
                </div>
              </div>
          )}
        </main>
      </div>
  );
};

export default Quiz;


