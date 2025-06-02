import React, { useState } from 'react';
import { Question } from '../types';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number[];
  userAnswers: (number | null)[];
  questions: Question[];
  lectureId: string;
  lectureTitle: string;
  onRetryQuiz: () => void;
  onBackToHome: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  userAnswers,
  questions,
  lectureTitle,
  onRetryQuiz,
  onBackToHome
}) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 75) return "Great job!";
    if (percentage >= 60) return "Good effort!";
    if (percentage >= 40) return "Keep practicing!";
    return "More study needed!";
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6">{lectureTitle} - Quiz Results</h2>

      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-blue-600 mb-2">{percentage}%</div>
        <p className="text-xl font-medium">{getScoreMessage()}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          You answered {score} out of {totalQuestions} questions correctly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          {showAnswers ? 'Hide Answers' : 'Review Answers'}
        </button>

        <button
          onClick={onRetryQuiz}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Retry Quiz
        </button>

        <button
          onClick={onBackToHome}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Back to Lectures
        </button>
      </div>

      {showAnswers && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Answer Review</h3>
          {questions.map((q, index) => (
            <div key={index} className="mb-6 p-4 border rounded-lg border-gray-200 dark:border-gray-700">
              <p className="font-medium mb-2">
                {index + 1}. {q.question}
              </p>
              <div className="ml-4">
                {q.options.map((option, optIndex) => (
                  <div
                    key={optIndex}
                    className={`p-2 mb-1 rounded text-black dark:text-white ${
                      optIndex === correctAnswers[index] && optIndex === userAnswers[index]
                        ? 'bg-green-100 dark:bg-green-800 border-l-4 border-green-500'
                        : optIndex === correctAnswers[index]
                        ? 'bg-green-50 dark:bg-green-900 border-l-4 border-green-500'
                        : optIndex === userAnswers[index]
                        ? 'bg-red-100 dark:bg-red-800 border-l-4 border-red-500'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    {option}
                    {optIndex === correctAnswers[index] && (
                      <span className="ml-2 text-green-600 dark:text-green-300 font-medium">(Correct)</span>
                    )}
                    {optIndex === userAnswers[index] && optIndex !== correctAnswers[index] && (
                      <span className="ml-2 text-red-600 dark:text-red-400 font-medium">(Your answer)</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizResults;
