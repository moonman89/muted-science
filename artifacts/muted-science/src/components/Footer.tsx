import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Kyiv" });

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\//g, ".");

  return (
    <footer className="w-full bg-black text-[9px] uppercase tracking-widest">
      <div
        className="w-full border-b border-white/20"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        <div className="flex flex-col p-3 gap-2 border-r border-white/20">
          <p className="text-white font-bold text-[10px]">{siteConfig.name}</p>
          <p className="text-white/50 leading-relaxed normal-case text-[9px]">
            {siteConfig.footer.description}
          </p>
          <p className="text-white/25 mt-auto text-[8px]">{siteConfig.footer.copyright}</p>
        </div>

        <div className="flex flex-col p-3 gap-1.5 border-r border-white/20">
          <p className="text-white/35 mb-1">System</p>
          {siteConfig.footer.system.map((item) => (
            <a key={item.label} href={item.href} className="text-white/60 hover:text-white transition-colors w-fit">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col p-3 gap-1.5 border-r border-white/20">
          <p className="text-white/35 mb-1">Connect</p>
          {siteConfig.footer.connect.map((item) => (
            <a key={item.label} href={item.href} className="text-white/60 hover:text-white transition-colors w-fit">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col p-3 gap-2">
          <div>
            <p className="text-white/35 mb-1">Current Location</p>
            <p className="text-white/80">{siteConfig.currentLocation}</p>
          </div>
          <div>
            <p className="text-white/35 mb-1">System Time</p>
            <p className="font-mono text-white text-[11px]">{formatTime(time)}</p>
            <p className="font-mono text-white/40 text-[8px] mt-0.5">{formatDate(time)}</p>
          </div>
          <div className="mt-auto flex items-center gap-2">
            <div className="flex items-center gap-1 text-white/30 font-mono text-[10px] select-none">
              <span>&#8212;</span>
              <span className="border border-white/25 w-3 h-3 flex items-center justify-center text-[8px]">+</span>
              <span>&#8212;</span>
            </div>
            <div
              className="w-8 h-8 border border-white/20 flex-shrink-0"
              style={{
                background: "radial-gradient(circle, rgba(80,120,60,0.6) 0%, rgba(40,60,30,0.4) 60%, transparent 100%)",
                boxShadow: "inset 0 0 8px rgba(80,140,50,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
