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
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Kyiv' });
  };

  return (
    <footer className="w-full bg-black flex flex-col text-[11px] uppercase tracking-widest text-white/60">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
        
        {/* Col 1 */}
        <div className="p-6 flex flex-col gap-6">
          <h3 className="text-white text-lg font-display tracking-widest">Muted Science</h3>
          <p className="leading-relaxed">An ongoing research system exploring the space between culture, memory, objects and the future.</p>
        </div>

        {/* Col 2 */}
        <div className="p-6 flex flex-col gap-4">
          <h4 className="text-white/40 mb-2">System</h4>
          <Link href="/" className="hover:text-white transition-colors w-fit">About</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Contact</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Submissions</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Archive Access</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Legal</Link>
        </div>

        {/* Col 3 */}
        <div className="p-6 flex flex-col gap-4">
          <h4 className="text-white/40 mb-2">Connect</h4>
          <Link href="/" className="hover:text-white transition-colors w-fit">Instagram</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Email</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Newsletter</Link>
          <Link href="/" className="hover:text-white transition-colors w-fit">Sound System</Link>
        </div>

        {/* Col 4 */}
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-white/40">Current Location</h4>
            <p className="text-white">Kyiv / Lviv / Online</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white/40">System Time (EET)</h4>
            <p className="font-mono text-white tracking-widest">{formatTime(time)}</p>
          </div>

          <div className="w-full h-24 border border-white/20 opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mt-auto flex items-center justify-center mix-blend-screen">
             <div className="w-full h-[1px] bg-white/20" />
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center text-[10px] text-white/40">
        <span>&copy; Muted Science 2024</span>
        <span>All Transmissions Archived</span>
      </div>
    </footer>
  );
}
