import React from 'react';
import { PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function Quest() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-purple-700">
          <PlayCircle className="w-8 h-8" />
          <h2 className="text-xl font-bold text-slate-900">Active Scenario: Inaccessible Classroom</h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          You are attending a university lecture hall that lacks wheelchair ramps or accessible desk spaces. 
          What immediate rights and policy steps can you take to request reasonable accommodation?
        </p>

        <div className="space-y-3 pt-4">
          <button className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between">
            <span>A. Request immediate temporary desk relocation through student services</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
          <button className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between">
            <span>B. File a formal accommodation request under institutional compliance guidelines</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}