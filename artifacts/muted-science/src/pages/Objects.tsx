import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const objects = [
  { label: "Garments", status: "Future Study", body: "Cut, protection, restraint, and the body as signal." },
  { label: "Objects", status: "Future Edition", body: "Physical artifacts, tools, fragments, and coded editions." },
  { label: "Printed Matter", status: "Active Medium", body: "PDF editions, workbook systems, notes, and release documents." },
  { label: "Image Work", status: "Active Medium", body: "Campaigns, stills, visual records, and archive images." },
];

export default function Objects() {
  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">{siteConfig.name}</Link>
            <span className="text-white/45">Objects</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Material / Editions / Forms</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">Objects</h1>
          </div>
          <div className="p-4 md:p-6">
            <p className="max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              Objects are the material outputs of the system: garments, printed matter, editions, images, and constructed forms. The first active object is MS-001 as a digital PDF edition.
            </p>
          </div>
        </section>

        <section className="grid border-b border-white/20 md:grid-cols-4">
          {objects.map((item, index) => (
            <article key={item.label} className="min-h-[220px] border-b border-r border-white/20 p-4">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-white/30">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mb-3 text-[13px] uppercase tracking-widest text-white">{item.label}</h2>
              <p className="mb-5 text-[9px] uppercase tracking-widest text-white/35">{item.status}</p>
              <p className="text-[10px] uppercase leading-5 tracking-widest text-white/50">{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
