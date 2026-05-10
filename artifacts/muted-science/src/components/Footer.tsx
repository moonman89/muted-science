import { useState, useEffect } from "react";
import { Link } from "wouter";
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

  return (
    <footer className="mt-8 w-full border-t border-white/20 bg-black text-[9px] uppercase tracking-widest">
      <Link
        href="/system"
        className="ms-cta-row flex min-h-[34px] items-center justify-between gap-3 border-b border-white/20 px-3 text-white/45 hover:bg-white hover:text-black"
      >
        <span>System Index</span>
        <span>Open Contact / Signal List &rarr;</span>
      </Link>

      <div className="grid border-b border-white/20 md:grid-cols-[1fr_1fr_1.4fr]">
        <div className="border-b border-white/20 p-3 md:border-b-0 md:border-r">
          <p className="mb-1 text-white/35">Current Location</p>
          <p className="font-mono text-[11px] text-white/80">{siteConfig.currentLocation}</p>
        </div>

        <div className="border-b border-white/20 p-3 md:border-b-0 md:border-r">
          <p className="mb-1 text-white/35">System Time</p>
          <p className="font-mono text-[11px] text-white">{formatTime(time)}</p>
        </div>

        <div className="p-0">
          <EmailSignup compact />
        </div>
      </div>

      <div className="flex min-h-[30px] items-center justify-between gap-3 px-3 text-[8px] text-white/30">
        <span>{siteConfig.footer.copyright}</span>
        <a href="mailto:mutedscience@icloud.com" className="hover:text-white hover:underline underline-offset-4">
          Contact
        </a>
      </div>
    </footer>
  );
}
