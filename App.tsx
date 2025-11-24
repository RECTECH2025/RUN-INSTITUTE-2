import React, { useState } from 'react';
import { COURSE_DATA } from './constants';
import { MarketingPlanResponse } from './types';
import { generateMarketingPlan } from './services/geminiService';
import CourseInfo from './components/CourseInfo';
import PlanDisplay from './components/PlanDisplay';
import { Sparkles, Calendar, ArrowRight, AlertTriangle } from 'lucide-react';

function App() {
  const [plan, setPlan] = useState<MarketingPlanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [targetDate] = useState('February 2026');

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const generatedPlan = await generateMarketingPlan(COURSE_DATA, targetDate);
      setPlan(generatedPlan);
    } catch (err: any) {
      setError(err.message || "Failed to generate plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="bg-run-dark text-white shadow-lg z-20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             {/* Logo Placeholder */}
             <div className="w-8 h-8 bg-run-gold rounded-br-lg rounded-tl-lg flex items-center justify-center font-bold text-run-dark italic">
                R
             </div>
             <div>
               <h1 className="font-bold text-lg leading-tight">Run Institute</h1>
               <p className="text-xs text-slate-400">AI Marketing Generator</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center text-sm text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-4 h-4 mr-2 text-run-pink" />
                Target Launch: <span className="text-white font-bold ml-1">{targetDate}</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Context & Controls */}
        <div className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${plan ? 'lg:w-1/3' : 'lg:w-1/2 lg:mx-auto'}`}>
           
           {/* Action Card */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-run-pink/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-run-pink/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              
              <h2 className="text-xl font-bold text-run-dark mb-2">Generar Estrategia</h2>
              <p className="text-slate-600 mb-6 text-sm">
                Utiliza Gemini AI para crear un calendario de contenidos de 4 semanas para Instagram y Facebook basado en el PDF de "Liderazgo Femenino".
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-4 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                  {error}
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white shadow-md flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 ${
                  loading 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-run-pink to-purple-600 hover:shadow-lg'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analizando PDF y Generando...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generar Plan Marketing
                  </>
                )}
              </button>
           </div>

           {/* Static Course Info */}
           <div className="flex-1 min-h-0">
              <CourseInfo data={COURSE_DATA} />
           </div>
        </div>

        {/* Right Column: Results */}
        {plan && (
           <div className="lg:w-2/3 animate-fadeIn h-[800px] lg:h-auto">
              <PlanDisplay plan={plan} />
           </div>
        )}

        {/* Empty State / Placeholder for Right Column */}
        {!plan && !loading && (
          <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-300 rounded-xl p-12 bg-slate-50/50">
             <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
               <Calendar className="w-8 h-8" />
             </div>
             <p className="text-lg font-medium">El plan generado aparecerá aquí</p>
             <p className="text-sm">Haz clic en "Generar Plan Marketing" para comenzar</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;