import React from 'react';
import { AnimalProfile } from '../types';

interface ResultScreenProps {
  profile: AnimalProfile;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ profile, onRestart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header Banner */}
        <div className={`${profile.color} p-8 text-center text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <h2 className="text-xl font-medium opacity-90 tracking-wide uppercase">Tu resultado es</h2>
            <h1 className="text-5xl md:text-6xl font-black mt-2 mb-2 tracking-tight">{profile.name}</h1>
            <p className="text-xl font-semibold bg-white/20 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
              {profile.archetype}
            </p>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          
          {/* Main Description */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
               <div className="rounded-xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 relative group flex items-center justify-center p-8">
                  <img 
                    src={profile.imageUrl} 
                    alt={profile.name} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
               </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Quién eres?</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {profile.description}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                ✨ Características Clave
              </h4>
              <p className="text-gray-700">{profile.keyTraits}</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                🚀 Tu Motivación
              </h4>
              <p className="text-gray-700">{profile.motivation}</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                😱 Tu Miedo
              </h4>
              <p className="text-gray-700">{profile.fear}</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                🤝 Aportas al equipo
              </h4>
              <p className="text-gray-700">{profile.teamRole}</p>
            </div>
          </div>

          {/* Advice Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h4 className="font-bold text-blue-900 mb-2">💡 Consejo de crecimiento</h4>
            <p className="text-blue-800 italic text-lg">"{profile.advice}"</p>
          </div>

          {/* Restart Button */}
          <div className="text-center pt-4">
            <button
              onClick={onRestart}
              className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Reiniciar Test
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResultScreen;