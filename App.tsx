
import React, { useState, useEffect } from 'react';
import { PreviewData, Platform, UserType } from './types';
import { generateNewsPreview, generateNewsImage } from './services/geminiService';
import { PreviewCard } from './components/PreviewCard';
import { SocialSimulator } from './components/SocialSimulator';
import { HumanNewsSite } from './components/HumanNewsSite';
import { FlowDiagram } from './components/FlowDiagram';
import { ServerLogs } from './components/ServerLogs';

const App: React.FC = () => {
  const [previews, setPreviews] = useState<PreviewData[]>([]);
  const [selectedPreview, setSelectedPreview] = useState<PreviewData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [topic, setTopic] = useState('Global Breaking News');
  const [domainName, setDomainName] = useState('yournews.com');
  const [simulationPlatform, setSimulationPlatform] = useState<Platform>(Platform.WHATSAPP);
  const [viewMode, setViewMode] = useState<UserType>(UserType.HUMAN);
  const [logs, setLogs] = useState<any[]>([]);
  const [simStep, setSimStep] = useState(0);

  useEffect(() => {
    const samples: PreviewData[] = [
      {
        id: '559201',
        title: 'Breaking: Major shift in local market as new regulations take hold',
        description: 'Industry experts are divided over the latest announcement from the central committee.',
        imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
        siteName: 'Global Pulse',
        createdAt: Date.now()
      }
    ];
    setPreviews(samples);
    setSelectedPreview(samples[0]);
  }, []);

  const addLog = (message: string, level: 'info' | 'warn' | 'success' = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, level, message }].slice(-10));
  };

  const runSimulation = async () => {
    if (isSimulating || !selectedPreview) return;
    setIsSimulating(true);
    setLogs([]);
    setSimStep(1);
    
    addLog(`Platform (${simulationPlatform}) crawler requesting: https://${domainName}`, 'info');
    await new Promise(r => setTimeout(r, 800));
    setSimStep(2);
    
    addLog(`User-Agent detected: "${simulationPlatform} Bot". Triggering logic...`, 'warn');
    await new Promise(r => setTimeout(r, 800));
    setSimStep(3);
    
    const randV = selectedPreview.id;
    addLog(`Redirecting (HTTP 302) to https://${domainName}/?v=${randV}`, 'success');
    await new Promise(r => setTimeout(r, 800));
    setSimStep(4);
    
    addLog(`SSR: Injecting OG Meta Tags for Variant ID ${randV}`, 'success');
    await new Promise(r => setTimeout(r, 1000));
    
    setIsSimulating(false);
    setSimStep(0);
    addLog(`Social Preview built successfully.`, 'success');
  };

  const handleGenerate = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      addLog(`AI: Crafting viral content for topic "${topic}"...`, 'info');
      const metadata = await generateNewsPreview(topic);
      const imageUrl = await generateNewsImage(metadata.title || topic);
      
      const newPreview: PreviewData = {
        id: Math.floor(Math.random() * 999999).toString(),
        title: metadata.title || 'Breaking News',
        description: metadata.description || 'Updates available now.',
        siteName: metadata.siteName || domainName.split('.')[0],
        imageUrl: imageUrl,
        createdAt: Date.now()
      };

      setPreviews(prev => [newPreview, ...prev]);
      setSelectedPreview(newPreview);
      addLog(`Variant ${newPreview.id} created and added to library.`, 'success');
    } catch (err) {
      addLog(`Error: Could not reach content engine.`, 'warn');
    } finally {
      setIsGenerating(false);
    }
  };

  if (viewMode === UserType.HUMAN) {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="fixed top-6 right-6 z-50">
          <button 
            onClick={() => setViewMode(UserType.BOT)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Open Dashboard
          </button>
        </div>
        <HumanNewsSite brandName={domainName.split('.')[0]} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">P</div>
          <h1 className="font-black text-xl tracking-tighter">PreviewArchitect <span className="text-slate-400 font-medium">Pro</span></h1>
        </div>
        <button 
          onClick={() => setViewMode(UserType.HUMAN)}
          className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
        >
          View Live Site
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-black text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
              1. Setup Target Website
            </h2>
            <div className="space-y-4">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Main Share Domain</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">https://</span>
                <input 
                  type="text" 
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                  className="w-full pl-20 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-lg focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                  placeholder="example.com"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-black text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
              2. Content Generation
            </h2>
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                placeholder="Topic for viral headlines..."
              />
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
              >
                {isGenerating ? 'AI is thinking...' : 'Generate New Viral Variant'}
              </button>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-black text-xl">Variant Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previews.map(p => (
                <PreviewCard key={p.id} data={p} onDelete={() => {}} onSelect={setSelectedPreview} isActive={selectedPreview?.id === p.id} />
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <section className="bg-slate-900 rounded-3xl p-8 text-white sticky top-28 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-black text-xl">Simulation Engine</h2>
              <div className="flex bg-slate-800 p-1 rounded-lg">
                {[Platform.WHATSAPP, Platform.FACEBOOK].map(p => (
                  <button key={p} onClick={() => setSimulationPlatform(p)} className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${simulationPlatform === p ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>{p}</button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Public Share Link</p>
                <p className="font-mono text-indigo-400">https://{domainName}</p>
              </div>

              <button 
                onClick={runSimulation}
                disabled={isSimulating || !selectedPreview}
                className="w-full py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-slate-100 transition-all uppercase tracking-widest text-xs"
              >
                {isSimulating ? 'Simulation in Progress...' : 'Simulate Bot Visit'}
              </button>

              <ServerLogs logs={logs} domain={domainName} />
              <SocialSimulator data={selectedPreview} platform={simulationPlatform} domain={domainName} isSimulating={isSimulating} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
