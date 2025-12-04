import React from 'react';
import { Question, AnimalType } from '../types';

interface QuizScreenProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (type: AnimalType) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  onAnswer 
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto min-h-[60vh] flex flex-col justify-center animate-fade-in px-4">
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
        <div className="text-right text-xs text-gray-500 mt-2 font-medium">
          Pregunta {currentQuestionIndex + 1} de {totalQuestions}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(option.type)}
              className="group relative flex items-center p-4 text-left bg-gray-50 border-2 border-transparent rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 active:scale-[0.99]"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-lg text-gray-700 font-medium group-hover:text-indigo-900">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;