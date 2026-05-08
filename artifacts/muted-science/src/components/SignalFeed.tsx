import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SignalFeed() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const d = date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\//g, ".");
    const t = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    return `${d}  ${t}`;
  };

  return (
    <div className="w-full border-b border-white/20 flex flex-row text-[9px] uppercase tracking-widest divide-x divide-white/20" style={{ height: "26px" }}>
      <div className="flex-1 px-2 flex items-center whitespace-nowrap">Live Signal Feed</div>
      <div className="flex-1 px-2 flex items-center justify-center font-mono whitespace-nowrap">
        Last Update: {formatDate(time)}
      </div>
      <div className="flex-1 px-2 flex items-center justify-end gap-2 text-white/60 whitespace-nowrap">
        System Status: Active
        <motion.div
          className="w-1 h-1 bg-white rounded-full flex-shrink-0"
          animate={{ opacity: [1, 0.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </div>
  );
}
