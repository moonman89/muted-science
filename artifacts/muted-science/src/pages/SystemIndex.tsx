import { useEffect, useState } from "react";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";
import EmailSignup from "@/components/EmailSignup";

export default function SystemIndex() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const systemTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Kyiv",
  });

  const systemDate = time
    .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" })
    .replace(/\//g, ".");

  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">
              {siteConfig.name}
            </Link>
            <span className="text-white/45">System Index</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Contact / Signal List / Index</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">
              System<br />Index
            </h1>
          </div>
          <div className="flex flex-col justify-between p-4 md:p-6">
            <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              {siteConfig.footer.description}
            </p>
            <div className="mt-8 grid border border-white/20 text-[10px] uppercase tracking-widest md:grid-cols-3">
              <div className="border-b border-r border-white/20 p-3 md:border-b-0">
                <p className="mb-2 text-white/35">Current Location</p>
                <p className="text-white/80">{siteConfig.currentLocation}</p>
              </div>
              <div className="border-b border-r border-white/20 p-3 md:border-b-0">
                <p className="mb-2 text-white/35">System Time</p>
                <p className="font-mono text-white">{systemTime}</p>
              </div>
              <div className="p-3">
                <p className="mb-2 text-white/35">Date</p>
                <p className="font-mono text-white/70">{systemDate}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid border-b border-white/20 md:grid-cols-3">
          <div className="min-h-[220px] border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">System</p>
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-widest">
              {siteConfig.footer.system.map((item) => (
                <a key={item.label} href={item.href} className="w-fit text-white/65 hover:text-white hover:underline underline-offset-4">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="min-h-[220px] border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Connect</p>
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-widest">
              {siteConfig.footer.connect.map((item) => (
                <a key={item.label} href={item.href} className="w-fit text-white/65 hover:text-white hover:underline underline-offset-4">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="min-h-[220px] p-4 md:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Signal List</p>
            <EmailSignup />
          </div>
        </section>

        <footer className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[9px] uppercase tracking-widest text-white/35">
          <p>{siteConfig.footer.copyright}</p>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4">Return to Release</Link>
        </footer>
      </div>
    </main>
  );
}
