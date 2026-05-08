import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Kyiv" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\//g, ".");
  };

  return (
    <footer className="w-full bg-black flex flex-col text-[10px] uppercase tracking-widest text-white/50">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 border-b border-white/20">

        {/* Col 1 */}
        <div className="p-4 flex flex-col gap-3">
          <h3 className="text-white text-[11px] font-display tracking-widest">Muted Science</h3>
          <p className="leading-relaxed text-white/50">An ongoing research system exploring the space between culture, memory, objects and the future.</p>
        </div>

        {/* Col 2 */}
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-white/30 mb-1">System</h4>
          {["About", "Contact", "Submissions", "Archive Access", "Legal"].map((item) => (
            <Link key={item} href="/" className="hover:text-white transition-colors w-fit" data-testid={`footer-link-${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
          ))}
        </div>

        {/* Col 3 */}
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-white/30 mb-1">Connect</h4>
          {["Instagram", "Email", "Newsletter", "Sound System"].map((item) => (
            <Link key={item} href="/" className="hover:text-white transition-colors w-fit" data-testid={`footer-link-${item.toLowerCase()}`}>{item}</Link>
          ))}
        </div>

        {/* Col 4 */}
        <div className="p-4 flex flex-col gap-3">
          <div>
            <h4 className="text-white/30 mb-1">Current Location</h4>
            <p className="text-white">Kyiv / Lviv / Online</p>
          </div>
          <div>
            <h4 className="text-white/30 mb-1">System Time</h4>
            <p className="font-mono text-white">{formatTime(time)}</p>
            <p className="font-mono text-white/40 text-[9px] mt-0.5">{formatDate(time)}</p>
          </div>
          <div className="w-full border border-white/20 opacity-40 flex items-center justify-center" style={{ height: "48px" }}>
            <div className="w-full h-[1px] bg-white/20" />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 flex justify-between items-center text-[9px] text-white/30">
        <span>&copy; Muted Science 2024</span>
        <span>All Transmissions Archived</span>
      </div>
    </footer>
  );
}
