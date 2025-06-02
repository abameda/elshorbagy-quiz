import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LectureCard from './components/LectureCard';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';
import { QuizDataType, Question } from './types';
// @ts-ignore
import quizDataImport from './quiz-data.js';

const quizData = quizDataImport as QuizDataType;

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'results'>('home');
  const [currentLecture, setCurrentLecture] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleStartQuiz = (lectureId: string) => {
    setCurrentLecture(lectureId);
    setCurrentView('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quizData[lectureId].questions.length).fill(null));
    setScore(0);
  };

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentLecture && currentQuestionIndex < quizData[currentLecture].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    if (!currentLecture) return;
    const questions = quizData[currentLecture].questions;
    let newScore = 0;

    questions.forEach((question: Question, index: number) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });

    setScore(newScore);
    setCurrentView('results');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentLecture(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  const renderHome = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Digital Logic & Design MCQ Quiz</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Test your knowledge with multiple-choice questions from 6 Digital Logic & Design lectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(quizData).map(([lectureId, lecture]) => (
            <div
              key={lectureId}
              className="bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow p-4"
            >
              <LectureCard
                lectureId={lectureId}
                title={lecture.title}
                questionCount={lecture.questions.length}
                onStartQuiz={() => handleStartQuiz(lectureId)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!currentLecture) return null;
    const lecture = quizData[currentLecture];
    const question = lecture.questions[currentQuestionIndex];
    const totalQuestions = lecture.questions.length;

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold dark:text-white">{lecture.title}</h2>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full max-w-xs ml-4">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <QuizQuestion
          question={question.question}
          options={question.options}
          selectedOption={userAnswers[currentQuestionIndex]}
          onSelectOption={handleSelectOption}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentQuestionIndex === 0
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            Previous
          </button>

          {currentQuestionIndex === totalQuestions - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={userAnswers.some(answer => answer === null)}
              className={`px-4 py-2 rounded-md ${
                userAnswers.some(answer => answer === null)
                  ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!currentLecture) return null;
    const lecture = quizData[currentLecture];
    const questions = lecture.questions;
    const correctAnswers = questions.map((q: Question) => q.correctAnswer);

    return (
      <div className="container mx-auto px-4 py-8">
        <QuizResults
          score={score}
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          userAnswers={userAnswers}
          questions={questions}
          lectureId={currentLecture}
          lectureTitle={lecture.title}
          onRetryQuiz={() => handleStartQuiz(currentLecture)}
          onBackToHome={handleBackToHome}
        />
      </div>
    );
  };

return (
  <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
    <Header />
    
    <main className="flex-1 py-8">
      {currentView === 'home' && renderHome()}
      {currentView === 'quiz' && renderQuiz()}
      {currentView === 'results' && renderResults()}
    </main>
    
    <Footer />
  </div>
);
};
export default App;