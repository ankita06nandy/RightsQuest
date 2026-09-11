import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Rights() {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-3 text-emerald-600">
        <ShieldCheck className="w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-900">Your Fundamental Rights</h2>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        Every individual is entitled to equal access, non-discrimination, and reasonable workplace or educational accommodations under international legal frameworks and local disability laws.
      </p>
    </div>
  );
}
