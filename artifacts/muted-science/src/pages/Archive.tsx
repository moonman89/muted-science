import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const entries = [
  ["MS-001", "Pronounced Love", "Digital Study / PDF Edition", "Available Now"],
  ["MS-002", "The First Signal", "Garment Study", "In Development"],
  ["MS-003", "Private Armor", "Object / Garment Study", "In Development"],
];

export default function Archive() {
  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">{siteConfig.name}</Link>
            <span className="text-white/45">Archive</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Cold Index / Release History</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">Archive</h1>
          </div>
          <div className="p-4 md:p-6">
            <p className="max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              A direct index of numbered releases, studies, media, and status inside the Muted Science system.
            </p>
          </div>
        </section>

        <section className="border-b border-white/20 text-[10px] uppercase tracking-widest">
          {entries.map(([code, title, medium, status]) => (
            <Link key={code} href={code === "MS-001" ? "/releases/ms-001-pronounced-love" : "/archive"} className="grid border-b border-white/20 last:border-b-0 hover:bg-white hover:text-black md:grid-cols-[0.18fr_0.34fr_0.3fr_0.18fr]">
              <div className="border-b border-white/20 p-3 font-mono md:border-b-0 md:border-r">{code}</div>
              <div className="border-b border-white/20 p-3 md:border-b-0 md:border-r">{title}</div>
              <div className="border-b border-white/20 p-3 text-white/55 md:border-b-0 md:border-r">{medium}</div>
              <div className="p-3 text-white/45">{status}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
