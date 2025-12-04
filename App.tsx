import React, { useState, useCallback } from 'react';
import { ScreenState, AnimalType, AnimalProfile } from './types';
import { QUESTIONS, PROFILES } from './constants';
import IntroScreen from './components/IntroScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('INTRO');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<AnimalType, number>>({
    [AnimalType.LION]: 0,
    [AnimalType.OTTER]: 0,
    [AnimalType.GOLDEN]: 0,
    [AnimalType.BEAVER]: 0,
  });
  const [result, setResult] = useState<AnimalProfile | null>(null);

  const handleStart = () => {
    setScreen('QUIZ');
  };

  const calculateResult = (finalScores: Record<AnimalType, number>): AnimalProfile => {
    // Find the type with the highest score
    let maxScore = -1;
    let winningType: AnimalType = AnimalType.LION; // Default fallback

    // Order of precedence in case of tie: Lion > Otter > Golden > Beaver (matches D-I-S-C standard priority)
    const precedence = [AnimalType.LION, AnimalType.OTTER, AnimalType.GOLDEN, AnimalType.BEAVER];

    for (const type of precedence) {
      if (finalScores[type] > maxScore) {
        maxScore = finalScores[type];
        winningType = type;
      }
    }

    return PROFILES[winningType];
  };

  const handleAnswer = useCallback((type: AnimalType) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      // Small delay for better UX
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 200);
    } else {
      // Quiz finished
      const finalProfile = calculateResult(newScores);
      setResult(finalProfile);
      setScreen('RESULTS');
    }
  }, [scores, currentQuestionIndex]);

  const handleRestart = () => {
    setScores({
      [AnimalType.LION]: 0,
      [AnimalType.OTTER]: 0,
      [AnimalType.GOLDEN]: 0,
      [AnimalType.BEAVER]: 0,
    });
    setCurrentQuestionIndex(0);
    setResult(null);
    setScreen('INTRO');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <main className="flex-grow flex flex-col justify-center py-8">
        {screen === 'INTRO' && (
          <IntroScreen onStart={handleStart} />
        )}

        {screen === 'QUIZ' && (
          <QuizScreen 
            question={QUESTIONS[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {screen === 'RESULTS' && result && (
          <ResultScreen 
            profile={result} 
            onRestart={handleRestart} 
          />
        )}
      </main>
      
      <footer className="py-4 text-center text-gray-400 text-sm">
        <p>© 2024 Test DISC Animal. Diseño para fines demostrativos.</p>
      </footer>
    </div>
  );
}