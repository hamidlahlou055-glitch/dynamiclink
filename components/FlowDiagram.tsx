
import React from 'react';

interface FlowDiagramProps {
  domain?: string;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({ domain = 'hamid.com' }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
      <div className="flex items-center justify-between min-w-[700px] relative">
        {/* Connection Line Background */}
        <div className="absolute top-[44px] left-12 right-12 h-1 bg-slate-100 -z-10"></div>

        {/* User Share */}
        <div className="flex flex-col items-center gap-2 group">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </div>
          <div className="text-[9px] font-bold uppercase text-slate-400">User Share</div>
          <div className="px-2 py-1 bg-white border border-slate-200 rounded shadow-sm text-[10px] font-mono">{domain}</div>
        </div>

        {/* Server Detector */}
        <div className="flex flex-col items-center gap-2 group">
          <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center font-bold shadow-lg transition-transform group-hover:scale-110">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <div className="text-[9px] font-bold uppercase text-slate-400">Server Inspector</div>
          <div className="px-2 py-1 bg-slate-900 border border-slate-700 rounded shadow-sm text-[10px] font-mono text-green-400">Detect User-Agent</div>
        </div>

        {/* Branching Logic */}
        <div className="flex flex-col gap-10">
           {/* Human Path */}
           <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-green-200"></div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-green-100 transition-transform group-hover:scale-110">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="text-[9px] font-bold uppercase text-green-600">👤 Human</div>
                <div className="px-2 py-1 bg-green-50 border border-green-100 rounded text-[10px]">Normal Site</div>
              </div>
           </div>

           {/* Bot Path */}
           <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-orange-200"></div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-orange-100 transition-transform group-hover:scale-110">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="text-[9px] font-bold uppercase text-orange-600">🤖 Bot</div>
                <div className="px-2 py-1 bg-orange-50 border border-orange-100 rounded text-[10px]">302 /?v=RAND</div>
              </div>
           </div>
        </div>

        {/* OG Generator */}
        <div className="flex flex-col items-center gap-2 group">
          <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-pink-100 transition-transform group-hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <div className="text-[9px] font-bold uppercase text-slate-400">OG Generator</div>
          <div className="px-2 py-1 bg-pink-50 border border-pink-100 rounded text-[10px] font-bold">META TAGS</div>
        </div>
      </div>
    </div>
  );
};
