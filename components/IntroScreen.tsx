import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-fade-in px-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          ¿Qué animal lidera <br />
          <span className="text-indigo-600">tu instinto?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre tu perfil DISC a través de este test rápido de 8 preguntas. 
          ¿Eres un <span className="font-bold text-lion">León decidido</span>, 
          una <span className="font-bold text-yellow-600">Nutria carismática</span>, 
          un <span className="font-bold text-golden">Golden leal</span> o 
          un <span className="font-bold text-beaver">Castor perfeccionista</span>?
        </p>
      </div>
      
      <button 
        onClick={onStart}
        className="px-8 py-4 bg-indigo-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transform transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        ¡Iniciar Aventura!
      </button>

      <div className="mt-12 grid grid-cols-4 gap-4 opacity-50 max-w-lg mx-auto">
        <div className="h-2 bg-lion rounded-full"></div>
        <div className="h-2 bg-otter rounded-full"></div>
        <div className="h-2 bg-golden rounded-full"></div>
        <div className="h-2 bg-beaver rounded-full"></div>
      </div>
    </div>
  );
};

export default IntroScreen;