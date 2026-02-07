
import React from 'react';
import { PreviewData, Platform } from '../types';

interface SocialSimulatorProps {
  data: PreviewData | null;
  platform: Platform;
  domain?: string;
  isSimulating?: boolean;
}

export const SocialSimulator: React.FC<SocialSimulatorProps> = ({ data, platform, domain = 'hamid.com', isSimulating }) => {
  if (!data || isSimulating) return (
    <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 text-gray-400 gap-3">
      {isSimulating ? (
        <>
          <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-medium animate-pulse">Platform building preview...</span>
        </>
      ) : (
        <>
          <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          <span className="text-xs uppercase font-bold tracking-widest">Share to Preview</span>
        </>
      )}
    </div>
  );

  if (platform === Platform.WHATSAPP) {
    return (
      <div className="w-full max-w-sm mx-auto p-4 whatsapp-bg rounded-xl shadow-inner min-h-[300px] flex flex-col justify-end">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-[280px] ml-auto relative">
          {/* Arrow */}
          <div className="absolute top-0 -right-2 w-3 h-3 bg-white rotate-45 transform origin-top-left"></div>
          
          <div className="p-2 border-b border-gray-100">
             <span className="text-blue-500 text-xs">https://{domain}</span>
          </div>
          <div className="p-3 bg-gray-50 flex flex-col gap-2">
            <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden shadow-inner">
               <img src={data.imageUrl} className="w-full h-full object-cover" alt="Thumb" />
            </div>
            <div>
               <h4 className="text-[#075e54] font-bold text-sm leading-tight line-clamp-2">
                 {data.title}
               </h4>
               <p className="text-gray-500 text-[11px] leading-snug line-clamp-2 mt-1">
                 {data.description}
               </p>
               <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 block tracking-tighter">{data.siteName}</span>
            </div>
          </div>
          <div className="px-2 py-1 flex items-center justify-end">
             <span className="text-[10px] text-gray-400 flex items-center gap-1">
               12:45 PM
               <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
             </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="flex items-center p-3 gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">H</div>
        <div>
          <div className="font-bold text-sm">{data.siteName}</div>
          <div className="text-[10px] text-gray-500 flex items-center gap-1">
             Just now · <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3 text-sm">
        Mira esto! Es increíble lo que está pasando...
        <div className="text-blue-600 mt-1">{domain}</div>
      </div>
      <div className="aspect-video bg-gray-100 border-y border-gray-200">
        <img src={data.imageUrl} className="w-full h-full object-cover" alt="Facebook Feed" />
      </div>
      <div className="p-3 bg-gray-50">
        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{domain.toUpperCase()}</div>
        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{data.title}</h4>
        <p className="text-gray-500 text-xs line-clamp-1">{data.description}</p>
      </div>
      <div className="p-3 flex items-center border-t border-gray-100 text-gray-500 text-xs gap-6 font-bold">
        <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">Like</span>
        <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">Comment</span>
        <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">Share</span>
      </div>
    </div>
  );
};
