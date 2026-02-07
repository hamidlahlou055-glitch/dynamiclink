
import React from 'react';
import { PreviewData } from '../types';

interface PreviewCardProps {
  data: PreviewData;
  onDelete: (id: string) => void;
  onSelect: (data: PreviewData) => void;
  isActive: boolean;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ data, onDelete, onSelect, isActive }) => {
  const isRtl = data.dir === 'rtl';

  return (
    <div 
      className={`relative flex flex-col bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${isActive ? 'ring-2 ring-indigo-500 border-transparent shadow-lg translate-y-[-2px]' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}
      onClick={() => onSelect(data)}
    >
      <div className="aspect-[1200/630] w-full bg-slate-100 overflow-hidden relative">
        <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {isActive && (
          <div className="absolute top-2 right-2 bg-indigo-500 text-white p-1 rounded-full shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
        )}
      </div>
      <div className="p-4 bg-white flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
            {data.siteName}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(data.id); }}
            className="text-slate-300 hover:text-red-500 p-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
        <h3 className={`font-black text-slate-900 leading-tight line-clamp-2 text-[15px] mb-1 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
          {data.title}
        </h3>
        <p className={`text-slate-500 text-xs line-clamp-2 font-medium ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
          {data.description}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-slate-50 pt-2">
           <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ID: {data.id}</div>
           <div className="text-[9px] font-bold text-slate-300">{(new Date(data.createdAt)).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};
