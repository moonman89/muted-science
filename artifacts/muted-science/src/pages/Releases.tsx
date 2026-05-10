import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const release = siteConfig.releaseProducts.ms001;

export default function Releases() {
  const releases = [
    {
      code: "MS-001",
      title: "Pronounced Love",
      medium: "Digital Study / PDF Edition",
      status: "Available Now",
      href: release.href,
    },
    {
      code: "MS-002",
      title: "The First Signal",
      medium: "Garment Study",
      status: "In Development",
      href: "/archive",
    },
    {
      code: "MS-003",
      title: "Private Armor",
      medium: "Object / Garment Study",
      status: "In Development",
      href: "/archive",
    },
  ];

  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[34px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">{siteConfig.name}</Link>
            <span className="text-white/45">Releases</span>
          </div>
        </header>

        <section className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/35">Numbered Public Outputs</p>
            <h1 className="font-display text-[clamp(42px,6vw,86px)] uppercase leading-[0.88] tracking-[0.04em]">Releases</h1>
          </div>
          <div className="p-4 md:p-6">
            <p className="max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              Public artifacts from the Muted Science system. A release may appear as a PDF edition, garment study, object, image work, printed matter, or limited construction.
            </p>
          </div>
        </section>

        <section className="border-b border-white/20">
          {releases.map((item) => (
            <Link key={item.code} href={item.href} className="grid border-b border-white/20 last:border-b-0 hover:bg-white hover:text-black md:grid-cols-[0.2fr_0.4fr_0.25fr_0.15fr]">
              <div className="border-b border-white/20 p-4 font-mono text-[10px] uppercase tracking-widest md:border-b-0 md:border-r">{item.code}</div>
              <div className="border-b border-white/20 p-4 text-[13px] uppercase tracking-widest md:border-b-0 md:border-r">{item.title}</div>
              <div className="border-b border-white/20 p-4 text-[10px] uppercase tracking-widest text-white/55 md:border-b-0 md:border-r">{item.medium}</div>
              <div className="p-4 text-[10px] uppercase tracking-widest text-white/45">{item.status}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
