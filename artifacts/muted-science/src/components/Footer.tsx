import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import EmailSignup from "@/components/EmailSignup";

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
    <footer className="mt-8 w-full border-t border-white/20 bg-black text-[9px] uppercase tracking-widest">
      <div className="border-b border-white/20 bg-black">
        <div className="flex min-h-[34px] items-center justify-between gap-3 px-3 text-white/35">
          <span>System Index</span>
          <span>{siteConfig.name}</span>
        </div>
      </div>

      <div className="ms-footer-grid w-full border-b border-white/20">
        <div className="flex flex-col p-2.5 gap-1.5 border-r border-white/20 min-h-[132px]">
          <p className="text-white font-bold text-[10px] leading-none">{siteConfig.name}</p>
          <p className="text-white/50 leading-relaxed normal-case text-[9px] max-w-[34ch]">
            {siteConfig.footer.description}
          </p>
          <p className="text-white/30 mt-auto text-[8px] leading-none">{siteConfig.footer.copyright}</p>
        </div>

        <div className="flex flex-col p-2.5 gap-1 border-r border-white/20 min-h-[132px]">
          <p className="text-white/35 mb-1 leading-none">System</p>
          {siteConfig.footer.system.map((item) => (
            <a key={item.label} href={item.href} className="text-white/60 hover:text-white transition-colors w-fit leading-tight underline-offset-2">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col p-2.5 gap-1 border-r border-white/20 min-h-[132px]">
          <p className="text-white/35 mb-1 leading-none">Connect</p>
          {siteConfig.footer.connect.map((item) => (
            <a key={item.label} href={item.href} className="text-white/60 hover:text-white transition-colors w-fit leading-tight underline-offset-2">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 min-h-[132px]">
          <div className="flex flex-col p-2.5 gap-1.5 border-b border-white/20">
            <div>
              <p className="text-white/35 mb-1 leading-none">Current Location</p>
              <p className="text-white/80 leading-tight">{siteConfig.currentLocation}</p>
            </div>
            <div>
              <p className="text-white/35 mb-1 leading-none">System Time</p>
              <p className="font-mono text-white text-[11px] leading-none">{formatTime(time)}</p>
              <p className="font-mono text-white/40 text-[8px] mt-1 leading-none">{formatDate(time)}</p>
            </div>
            <div className="mt-auto flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-white/30 font-mono text-[10px] select-none">
                <span>&#8212;</span>
                <span className="border border-white/25 w-3 h-3 flex items-center justify-center text-[8px]">+</span>
                <span>&#8212;</span>
              </div>
              <div
                className="w-7 h-7 border border-white/20 flex-shrink-0 opacity-80"
                style={{
                  background: "radial-gradient(circle, rgba(80,120,60,0.6) 0%, rgba(40,60,30,0.4) 60%, transparent 100%)",
                  boxShadow: "inset 0 0 8px rgba(80,140,50,0.3)",
                }}
              />
            </div>
          </div>
          <EmailSignup />
        </div>
      </div>
    </footer>
  );
}
