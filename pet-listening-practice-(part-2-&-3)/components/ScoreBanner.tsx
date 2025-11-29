import React from 'react';
import { Award, RefreshCcw } from 'lucide-react';

interface ScoreBannerProps {
  score: number;
  totalQuestions: number;
  correctCount: number;
  onReset: () => void;
}

const ScoreBanner: React.FC<ScoreBannerProps> = ({ score, totalQuestions, correctCount, onReset }) => {
  let colorClass = "bg-blue-100 text-blue-800 border-blue-200";
  if (score >= 8) colorClass = "bg-green-100 text-green-800 border-green-200";
  else if (score < 5) colorClass = "bg-red-100 text-red-800 border-red-200";

  return (
    <div className={`mb-8 p-6 rounded-xl border ${colorClass} flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white bg-opacity-50 rounded-full">
          <Award size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Your Score: {score.toFixed(1)} / 10</h2>
          <p className="opacity-90 font-medium">You got {correctCount} out of {totalQuestions} correct.</p>
        </div>
      </div>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-80 hover:bg-opacity-100 text-current font-bold rounded-lg transition-all shadow-sm"
      >
        <RefreshCcw size={18} />
        Try Again
      </button>
    </div>
  );
};

export default ScoreBanner;