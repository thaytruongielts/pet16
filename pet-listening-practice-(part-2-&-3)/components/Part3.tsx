import React, { useState } from 'react';
import { PART3_AUDIO_SRC, PART3_DATA } from '../constants';
import AudioPlayer from './AudioPlayer';
import ScoreBanner from './ScoreBanner';
import { Check, X } from 'lucide-react';

const Part3: React.FC = () => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (id: number, value: string) => {
    if (isSubmitted) return;
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const checkAnswer = (id: number, input: string) => {
    const question = PART3_DATA.find(q => q.id === id);
    if (!question) return false;
    const normalizedInput = input.trim().toLowerCase();
    return question.correctAnswers.some(ans => ans.toLowerCase() === normalizedInput);
  };

  const calculateScore = () => {
    let correct = 0;
    PART3_DATA.forEach(q => {
      if (checkAnswer(q.id, inputs[q.id] || "")) correct++;
    });
    return (correct / PART3_DATA.length) * 10;
  };

  const correctCount = PART3_DATA.filter(q => checkAnswer(q.id, inputs[q.id] || "")).length;
  const score = calculateScore();

  const handleReset = () => {
    setInputs({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Part 3: Gap Fill</h1>
      <p className="text-slate-600 mb-6">You will hear an announcement in a supermarket. For each question, fill in the missing information.</p>

      <AudioPlayer src={PART3_AUDIO_SRC} />

      {isSubmitted && (
        <ScoreBanner 
          score={score} 
          correctCount={correctCount} 
          totalQuestions={PART3_DATA.length} 
          onReset={handleReset} 
        />
      )}

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Milburn’s Stores</h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-slate-700">
          {PART3_DATA.map((item) => {
            const isCorrect = isSubmitted ? checkAnswer(item.id, inputs[item.id] || "") : null;
            
            return (
              <div key={item.id} className="flex flex-wrap items-baseline gap-2">
                <span className="whitespace-pre-wrap">{item.preText}</span>
                <div className="relative inline-block min-w-[160px] flex-grow md:flex-grow-0">
                  <div className="absolute -top-3 -left-2 text-xs font-bold text-slate-400 bg-white px-1 rounded-full border border-slate-200">
                    {item.id}
                  </div>
                  <input
                    type="text"
                    value={inputs[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    disabled={isSubmitted}
                    autoComplete="off"
                    className={`
                      w-full px-3 py-1 bg-transparent border-b-2 outline-none font-medium transition-colors text-center
                      ${!isSubmitted 
                        ? 'border-slate-300 focus:border-blue-500 text-slate-800' 
                        : isCorrect
                          ? 'border-green-500 text-green-700 bg-green-50'
                          : 'border-red-500 text-red-700 bg-red-50'
                      }
                    `}
                  />
                  {isSubmitted && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6">
                      {isCorrect ? (
                        <Check className="text-green-500" size={20} />
                      ) : (
                        <X className="text-red-500" size={20} />
                      )}
                    </div>
                  )}
                </div>
                <span>{item.postText}</span>
              </div>
            );
          })}
        </div>
      </div>

      {!isSubmitted && (
        <div className="mt-12 flex justify-center pb-12">
           <button
            onClick={() => setIsSubmitted(true)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Submit Part 3
          </button>
        </div>
      )}
    </div>
  );
};

export default Part3;