
import React from 'react';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'success';
  message: string;
}

interface ServerLogsProps {
  logs: LogEntry[];
  domain?: string;
}

export const ServerLogs: React.FC<ServerLogsProps> = ({ logs, domain = 'hamid.com' }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] h-48 overflow-y-auto border border-slate-800 shadow-inner">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <span className="text-slate-500 uppercase font-bold tracking-widest text-[9px]">Server Logs - {domain}</span>
      </div>
      {logs.length === 0 && <div className="text-slate-600 italic">Waiting for requests...</div>}
      {logs.map((log, i) => (
        <div key={i} className="mb-1 animate-in fade-in duration-300">
          <span className="text-slate-600">[{log.timestamp}]</span>{' '}
          <span className={
            log.level === 'success' ? 'text-green-400' : 
            log.level === 'warn' ? 'text-amber-400' : 'text-blue-400'
          }>
            {log.level.toUpperCase()}:
          </span>{' '}
          <span className="text-slate-300">{log.message}</span>
        </div>
      ))}
    </div>
  );
};
