import React from 'react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div 
            key={index}
            className={`p-3 border rounded-md cursor-pointer transition-colors duration-200 flex items-start
              ${selectedOption === index 
                ? 'bg-blue-100 border-blue-500' 
                : 'hover:bg-gray-50 border-gray-300'}`}
            onClick={() => onSelectOption(index)}
          >
            <div className={`w-6 h-6 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center
              ${selectedOption === index 
                ? 'border-blue-500 bg-blue-500' 
                : 'border-gray-400'}`}
            >
              {selectedOption === index && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
