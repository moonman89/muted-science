import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

const release = siteConfig.releaseProducts.ms001;

const launchSections = [
  {
    id: "system",
    label: "System",
    title: "For the person caught between awareness and behavior.",
    body: "You already know the pattern. You already know the damage. The issue is not information. The issue is repetition. Pronounced Love gives that repetition a structure.",
  },
  {
    id: "inside",
    label: "Inside",
    title: "A 62-day daily workbook system.",
    body: "Reflect / Write / Action / Integrate. Eight movements: Truth, Regulation, Responsibility, Identity, Relationship, Structure, Presence, and Release.",
  },
  {
    id: "delivery",
    label: "Delivery",
    title: "152-page digital PDF workbook.",
    body: "Delivered through secure checkout. No cart. No public PDF file. One release, one acquisition path.",
  },
];

export default function Home() {
  return (
    <main id="current" className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <TopBar />
        <Navigation />
        <Hero />

        <section id="archive" className="grid border-b border-white/20 md:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-3 text-[10px] uppercase tracking-widest text-white/40">Current Release</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.9] tracking-[0.04em]">
              MS-001<br />Pronounced Love
            </h2>
          </div>
          <div className="flex flex-col justify-between p-4 md:p-6">
            <div className="max-w-3xl space-y-4 text-sm leading-7 text-white/70 md:text-base">
              {release.copy.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-8 grid border border-white/20 text-[10px] uppercase tracking-widest md:grid-cols-4">
              {release.metadata.map((item) => (
                <div key={item.label} className="border-b border-r border-white/20 p-3 md:border-b-0">
                  <p className="mb-2 text-white/35">{item.label}</p>
                  <p className="text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="releases" className="border-b border-white/20">
          {launchSections.map((section, index) => (
            <article key={section.id} id={section.id} className="grid border-b border-white/20 last:border-b-0 md:grid-cols-[0.26fr_0.74fr]">
              <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-5">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-mono text-[11px] uppercase leading-tight tracking-[0.22em] text-white/60">
                  {section.label}
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <h4 className="mb-4 max-w-4xl font-mono text-lg uppercase leading-tight tracking-[0.1em] md:text-2xl">
                  {section.title}
                </h4>
                <p className="max-w-4xl text-sm leading-7 text-white/65 md:text-base">{section.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="objects" className="grid border-b border-white/20 md:grid-cols-[1fr_auto]">
          <div className="p-4 md:p-6">
            <p className="mb-2 text-[10px] uppercase tracking-widest text-white/35">Acquire</p>
            <h2 className="font-display text-[clamp(32px,4vw,58px)] uppercase leading-none">
              {release.displayTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm uppercase leading-7 tracking-widest text-white/55">
              {release.format} / {release.price} / Digital PDF available now.
            </p>
          </div>
          <a
            href={release.checkoutUrl}
            className="ms-cta-row flex min-h-[96px] min-w-[260px] items-center justify-center border-t border-white/20 px-6 text-center text-[10px] uppercase tracking-widest hover:bg-white hover:text-black md:border-l md:border-t-0"
          >
            {release.acquireLabel} — {release.price} &rarr;
          </a>
        </section>

        <section id="index">
          <Footer />
        </section>
      </div>
    </main>
  );
}
