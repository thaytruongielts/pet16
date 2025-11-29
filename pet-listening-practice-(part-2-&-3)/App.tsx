import React, { useState } from 'react';
import { ExamPart } from './types';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import { Headphones, ArrowRight, Home } from 'lucide-react';

const App: React.FC = () => {
  const [currentPart, setCurrentPart] = useState<ExamPart>('HOME');

  const renderContent = () => {
    switch (currentPart) {
      case 'PART2':
        return <Part2 />;
      case 'PART3':
        return <Part3 />;
      default:
        return (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
                PET Listening Practice
              </h1>
              <p className="text-xl text-slate-500">
                Cambridge English B1 Preliminary (PET)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card Part 2 */}
              <div 
                onClick={() => setCurrentPart('PART2')}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    Listening Part 2
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Six multiple choice questions. Listen to short conversations and choose the correct answer (A, B, or C).
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Start Test <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>

              {/* Card Part 3 */}
              <div 
                onClick={() => setCurrentPart('PART3')}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    Listening Part 3
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Six gap-fill questions. Listen to an announcement and fill in the missing information.
                  </p>
                  <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Start Test <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-slate-100 rounded-xl p-6 text-center text-slate-500 text-sm">
              <Headphones className="inline-block mb-2" size={24} />
              <p>Make sure your audio is turned on before starting.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setCurrentPart('HOME')}
          >
            <div className="bg-blue-600 text-white p-1.5 rounded-md">
              <Headphones size={20} />
            </div>
            <span className="font-bold text-slate-800 tracking-tight hidden sm:block">PET Practice</span>
          </div>

          {currentPart !== 'HOME' && (
            <button 
              onClick={() => setCurrentPart('HOME')}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg"
            >
              <Home size={16} />
              Back to Menu
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="animate-fade-in">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;