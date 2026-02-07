
import React from 'react';

interface HumanNewsSiteProps {
  brandName?: string;
}

export const HumanNewsSite: React.FC<HumanNewsSiteProps> = ({ brandName = 'HAMID' }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900 shadow-2xl overflow-hidden border-x border-gray-200">
      {/* Newspaper Masthead */}
      <header className="border-b-4 border-black p-6 text-center">
        <h1 className="font-news text-5xl mb-2 tracking-tighter uppercase">THE {brandName} TIMES</h1>
        <div className="flex justify-between items-center text-xs border-y border-gray-300 py-1 font-bold uppercase tracking-widest">
          <span>VOL. CLXVIII ... No. 58,211</span>
          <span>Casablanca, Monday, May 22, 2025</span>
          <span>$2.00</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <article className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="font-news text-4xl leading-tight mb-4 hover:underline cursor-pointer">
              Strategic Breakthrough: Global Cooperation Reaches New Heights as Nations Sign Historic Accord
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="https://picsum.photos/seed/news1/600/400" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="News" />
                <p className="text-[10px] mt-1 text-gray-500 italic">Delegates gathered yesterday at the United Nations summit. Credit: Reuters</p>
              </div>
              <div className="text-sm leading-relaxed space-y-4">
                <p className="first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:font-news">
                  In a sweeping series of negotiations that lasted well into the night, leaders from 192 nations finally reached an agreement that many are calling the most significant diplomatic achievement of the 21st century.
                </p>
                <p>
                  The accord, spanning over four thousand pages, addresses pressing economic concerns and establishes a new framework for international digital standards, effectively stabilizing markets that had been volatile for months.
                </p>
                <button className="text-blue-700 font-bold hover:underline">Read Full Coverage →</button>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <article>
               <h3 className="font-news text-xl mb-2">Local Tech Hub Expands</h3>
               <p className="text-sm text-gray-600 line-clamp-3">
                 Casablanca's tech district is seeing a massive surge in venture capital as new AI startups take root in the heart of the city's modern sector...
               </p>
             </article>
             <article>
               <h3 className="font-news text-xl mb-2">Weather Patterns Shift</h3>
               <p className="text-sm text-gray-600 line-clamp-3">
                 Meteorologists warn of unseasonable winds hitting the Atlantic coast, promising a cooler summer for the region's inhabitants...
               </p>
             </article>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="border-l border-gray-200 pl-6 hidden md:block">
          <div className="mb-6">
            <h4 className="font-bold border-b border-black text-xs pb-1 mb-2">LATEST UPDATES</h4>
            <ul className="space-y-4">
              {[1,2,3,4,5].map(i => (
                <li key={i} className="text-sm border-b border-gray-100 pb-2">
                  <span className="text-xs text-red-600 font-bold block">12:4{i} PM</span>
                  <p className="hover:text-blue-800 cursor-pointer">Market reacts to new fiscal policy announcements.</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-bold text-xs mb-2">OPINION</h4>
            <p className="text-sm italic font-news">"The future of shared links lies in dynamic personalization, or so the experts say."</p>
            <span className="text-[10px] font-bold block mt-2">— H. BENALI</span>
          </div>
        </aside>
      </main>
    </div>
  );
};
