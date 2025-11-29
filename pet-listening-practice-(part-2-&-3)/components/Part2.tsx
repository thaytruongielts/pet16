import React, { useState } from 'react';
import { PART2_AUDIO_SRC, PART2_DATA } from '../constants';
import AudioPlayer from './AudioPlayer';
import ScoreBanner from './ScoreBanner';
import { CheckCircle, XCircle } from 'lucide-react';

const Part2: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let correct = 0;
    PART2_DATA.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return (correct / PART2_DATA.length) * 10;
  };

  const correctCount = PART2_DATA.filter(q => answers[q.id] === q.correctAnswer).length;
  const score = calculateScore();

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Part 2: Multiple Choice</h1>
      <p className="text-slate-600 mb-6">You will hear six short conversations. For each question, choose the correct answer.</p>
      
      <AudioPlayer src={PART2_AUDIO_SRC} />

      {isSubmitted && (
        <ScoreBanner 
          score={score} 
          correctCount={correctCount} 
          totalQuestions={PART2_DATA.length} 
          onReset={handleReset} 
        />
      )}

      <div className="space-y-8">
        {PART2_DATA.map((q) => {
          const isCorrect = answers[q.id] === q.correctAnswer;
          const userSelected = answers[q.id];
          
          return (
            <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-700">Question {q.id}</span>
                {isSubmitted && userSelected && (
                   <span className={`flex items-center gap-2 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                     {isCorrect ? (
                       <><CheckCircle size={16} /> Correct</>
                     ) : (
                       <><XCircle size={16} /> Incorrect</>
                     )}
                   </span>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">{q.context}</p>
                <p className="text-lg font-medium text-slate-800 mb-6">{q.questionText}</p>
                
                <div className="space-y-3">
                  {q.options.map((option) => {
                    // Logic: Only indicate correctness of the USER selected item.
                    // Do NOT highlight the correct answer if the user didn't pick it.
                    let statusClass = "border-slate-200 hover:bg-slate-50"; // Default
                    
                    if (isSubmitted) {
                      if (userSelected === option.id) {
                         if (isCorrect) {
                           statusClass = "bg-green-100 border-green-500 text-green-800";
                         } else {
                           statusClass = "bg-red-100 border-red-500 text-red-800";
                         }
                      } else {
                        statusClass = "opacity-50 border-slate-200";
                      }
                    } else if (userSelected === option.id) {
                      statusClass = "bg-blue-50 border-blue-500 text-blue-800 shadow-md";
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(q.id, option.id)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3 ${statusClass}`}
                      >
                        <span className={`
                          flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm
                          ${isSubmitted && userSelected === option.id 
                              ? (isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') 
                              : userSelected === option.id ? 'bg-blue-200 text-blue-800' : 'bg-slate-100 text-slate-600'
                          }
                        `}>
                          {option.id}
                        </span>
                        <span className="mt-1">{option.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!isSubmitted && (
        <div className="mt-12 flex justify-center pb-12">
          <button
            onClick={() => setIsSubmitted(true)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Submit Part 2
          </button>
        </div>
      )}
    </div>
  );
};

export default Part2;