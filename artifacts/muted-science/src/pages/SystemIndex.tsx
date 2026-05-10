import { useEffect, useState } from "react";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";
import EmailSignup from "@/components/EmailSignup";

const principles = [
  ["01", "Internal Condition", "Each release begins with an internal condition: repetition, restraint, attachment, guilt, protection, impulse, or memory."],
  ["02", "Translation", "The condition is translated through writing, image, material, construction, garment language, object language, and archive."],
  ["03", "Numbered Release", "A workbook, garment, film, printed object, image study, limited edition, or one-of-one piece enters the system as a numbered release."],
  ["04", "No Merchandise", "MutedScience does not treat output as merchandise. Each work is designed, documented, and archived as part of a larger body of study."],
];

const releaseMap = [
  ["RELEASES", "Numbered public works"],
  ["SIGNALS", "Internal themes and fragments"],
  ["OBJECTS", "Material studies and editions"],
  ["ARCHIVE", "Cold index of status and output"],
  ["SYSTEM", "The logic of the house"],
];

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

        <section className="grid border-b border-white/20 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-white/20 p-4 lg:border-b-0 lg:border-r lg:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">System / Definition / Contact</p>
            <h1 className="font-display text-[clamp(46px,6.8vw,96px)] uppercase leading-[0.84] tracking-[0.04em]">
              System<br />Index
            </h1>
            <p className="mt-5 max-w-sm text-[10px] uppercase leading-5 tracking-widest text-white/45">
              Muted Science is not a shop. It is a research system for numbered releases, signals, objects, images, and private studies.
            </p>
          </div>

          <div className="grid lg:grid-rows-[auto_auto]">
            <div className="grid border-b border-white/20 lg:grid-cols-[1fr_0.72fr]">
              <div className="border-b border-white/20 p-4 lg:border-b-0 lg:border-r lg:p-6">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-white/35">Definition</p>
                <p className="max-w-3xl text-xl leading-8 text-white/78 md:text-2xl md:leading-9">
                  An independent research system translating internal patterns into garments, objects, images, writing, and numbered releases.
                </p>
              </div>
              <div className="grid grid-cols-3 text-[9px] uppercase tracking-widest lg:grid-cols-1">
                <div className="border-r border-white/20 p-3 lg:border-b lg:border-r-0">
                  <p className="mb-2 text-white/35">Location</p>
                  <p className="font-mono text-white/80">{siteConfig.currentLocation}</p>
                </div>
                <div className="border-r border-white/20 p-3 lg:border-b lg:border-r-0">
                  <p className="mb-2 text-white/35">System Time</p>
                  <p className="font-mono text-white">{systemTime}</p>
                </div>
                <div className="p-3">
                  <p className="mb-2 text-white/35">Date</p>
                  <p className="font-mono text-white/65">{systemDate}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4">
              {principles.map(([num, title, body]) => (
                <article key={title} className="min-h-[160px] border-b border-r border-white/20 p-4 md:border-b-0">
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-white/30">{num}</p>
                  <h2 className="mb-3 text-[11px] uppercase tracking-widest text-white/80">{title}</h2>
                  <p className="text-[10px] uppercase leading-5 tracking-widest text-white/45">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid border-b border-white/20 lg:grid-cols-[0.42fr_0.28fr_0.30fr]">
          <div className="border-b border-white/20 p-4 lg:border-b-0 lg:border-r lg:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Map</p>
            <div className="grid gap-0 border border-white/20 text-[10px] uppercase tracking-widest">
              {releaseMap.map(([label, body]) => (
                <div key={label} className="grid grid-cols-[0.34fr_0.66fr] border-b border-white/20 last:border-b-0">
                  <p className="border-r border-white/20 p-3 text-white/80">{label}</p>
                  <p className="p-3 text-white/45">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-white/20 p-4 lg:border-b-0 lg:border-r lg:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Connect</p>
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-widest">
              {siteConfig.footer.connect.map((item) => (
                <a key={item.label} href={item.href} className="w-fit text-white/65 hover:text-white hover:underline underline-offset-4">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 lg:p-5">
            <p className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Signal List</p>
            <EmailSignup compact />
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
