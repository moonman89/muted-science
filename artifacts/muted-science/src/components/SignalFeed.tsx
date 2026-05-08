import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SignalFeed() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const d = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.');
    const t = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return `${d}  ${t}`;
  };

  return (
    <div className="w-full border-b border-white/20 flex flex-col md:flex-row text-[10px] md:text-[11px] uppercase tracking-widest divide-y md:divide-y-0 md:divide-x divide-white/20">
      <div className="px-4 py-3 md:w-1/3 flex items-center">
        Live Signal Feed
      </div>
      <div className="px-4 py-3 md:w-1/3 flex items-center justify-start md:justify-center font-mono">
        Last Update: {formatDate(time)}
      </div>
      <div className="px-4 py-3 md:w-1/3 flex items-center justify-start md:justify-end gap-2 text-white/70">
        System Status: Active
        <motion.div 
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </div>
  );
}
