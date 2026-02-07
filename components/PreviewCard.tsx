
import React from 'react';
import { PreviewData } from '../types';

interface PreviewCardProps {
  data: PreviewData;
  onDelete: (id: string) => void;
  onSelect: (data: PreviewData) => void;
  isActive: boolean;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ data, onDelete, onSelect, isActive }) => {
  return (
    <div 
      className={`relative flex flex-col bg-white border rounded-xl overflow-hidden transition-all cursor-pointer hover:shadow-md ${isActive ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-200'}`}
      onClick={() => onSelect(data)}
    >
      <div className="aspect-video w-full bg-gray-100 overflow-hidden">
        <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            {data.siteName}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(data.id); }}
            className="text-gray-400 hover:text-red-500 p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
        <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 text-sm mb-1">{data.title}</h3>
        <p className="text-gray-500 text-xs line-clamp-2">{data.description}</p>
        <div className="mt-2 text-[9px] text-gray-400">ID: {data.id}</div>
      </div>
    </div>
  );
};
