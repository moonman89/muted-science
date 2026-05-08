import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Kyiv" });

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\//g, ".");

  return (
    <footer className="w-full bg-black flex flex-col text-[9px] uppercase tracking-widest text-white/50">
      <div className="grid grid-cols-4 divide-x divide-white/20 border-b border-white/20">
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-white text-[10px] font-display tracking-widest">Muted Science</h3>
          <p className="leading-relaxed normal-case">An ongoing research system exploring the space between culture, memory, objects and the future.</p>
        </div>

        <div className="p-3 flex flex-col gap-1.5">
          <h4 className="text-white/30 mb-1">System</h4>
          {["About", "Contact", "Submissions", "Archive Access", "Legal"].map((item) => (
            <Link key={item} href="/" className="hover:text-white transition-colors w-fit">{item}</Link>
          ))}
        </div>

        <div className="p-3 flex flex-col gap-1.5">
          <h4 className="text-white/30 mb-1">Connect</h4>
          {["Instagram", "Email", "Newsletter", "Sound System"].map((item) => (
            <Link key={item} href="/" className="hover:text-white transition-colors w-fit">{item}</Link>
          ))}
        </div>

        <div className="p-3 flex flex-col gap-3">
          <div>
            <h4 className="text-white/30 mb-1">Current Location</h4>
            <p className="text-white">Kyiv / Lviv / Online</p>
          </div>
          <div>
            <h4 className="text-white/30 mb-1">System Time</h4>
            <p className="font-mono text-white text-[10px]">{formatTime(time)}</p>
            <p className="font-mono text-white/30 text-[8px] mt-0.5">{formatDate(time)}</p>
          </div>
          <div
            className="w-full border border-white/20 opacity-30 flex items-center justify-center"
            style={{ height: "40px", background: "repeating-linear-gradient(0deg,transparent,transparent 5px,rgba(255,255,255,0.06) 5px,rgba(255,255,255,0.06) 6px),repeating-linear-gradient(90deg,transparent,transparent 5px,rgba(255,255,255,0.06) 5px,rgba(255,255,255,0.06) 6px)" }}
          >
            <div className="w-1.5 h-1.5 border border-white/60" />
          </div>
        </div>
      </div>

      <div className="px-3 py-1.5 flex justify-between items-center text-[8px] text-white/30">
        <span>&copy; Muted Science 2024</span>
        <span>All Transmissions Archived</span>
      </div>
    </footer>
  );
}
