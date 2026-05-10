import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const signals = [
  ["Truth", "Breaking point / two selves / pattern mapping"],
  ["Regulation", "Breath / body awareness / internal safety"],
  ["Responsibility", "Shame vs guilt / repair over punishment"],
  ["Identity", "Micro-discipline / emotional honesty"],
  ["Relationship", "Trust / temptation / image"],
  ["Structure", "Direction / discipline / stability"],
  ["Presence", "Emotional availability / consistency"],
  ["Release", "Closure / detachment / forgiveness"],
];

export default function Signals() {
  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">{siteConfig.name}</Link>
            <span className="text-white/45">Signals</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Internal Themes / Field Material</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">Signals</h1>
          </div>
          <div className="p-4 md:p-6">
            <p className="max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              Signals are the internal patterns, image fragments, emotional conditions, and research material behind the releases. They are not fixed categories. They are traces the system keeps returning to.
            </p>
          </div>
        </section>

        <section className="grid border-b border-white/20 md:grid-cols-4">
          {signals.map(([title, body], index) => (
            <article key={title} className="min-h-[170px] border-b border-r border-white/20 p-4">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-white/30">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mb-3 text-[13px] uppercase tracking-widest text-white">{title}</h2>
              <p className="text-[10px] uppercase leading-5 tracking-widest text-white/50">{body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
