import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Resource() {
  const resources = [
    { title: 'Disability Rights & Legislation Guide', type: 'PDF Document', size: '2.4 MB' },
    { title: 'Educational Accessibility Guidelines', type: 'Interactive Link', size: 'Web' },
    { title: 'Workplace Accommodation Checklist', type: 'Template', size: '1.1 MB' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Learning Resources</h2>
      <div className="grid gap-4">
        {resources.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                <span className="text-xs text-slate-400">{item.type} • {item.size}</span>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-purple-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}