import React from 'react';

interface LectureCardProps {
  lectureId: string;
  title: string;
  questionCount: number;
  onStartQuiz: () => void;
}

const LectureCard: React.FC<LectureCardProps> = ({ title, questionCount, onStartQuiz }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{questionCount} questions</p>
      <button 
        onClick={onStartQuiz}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LectureCard;
