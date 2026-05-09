import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const product = siteConfig.releaseProducts.ms001;

function PurchasedBanner() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("purchased") !== "true") return null;
  return (
    <div className="border-b border-white/20 bg-white px-4 py-4 text-center">
      <p className="font-mono text-[10px] uppercase tracking-widest text-black">
        Purchase complete — the PDF has been sent to your email.
      </p>
    </div>
  );
}

const pageSections = [
  {
    title: "Who This Is For",
    lines: [
      "For the person caught between awareness and behavior.",
      "You already know the pattern.",
      "You already know the damage.",
      "You already know when you're acting out of alignment.",
      "The issue is not information.",
      "The issue is repetition.",
      "This workbook gives that repetition a structure.",
    ],
  },
  {
    title: "How The System Works",
    lines: [
      "REFLECT — Questions that slow the pattern down.",
      "WRITE — Unfiltered prompts that force the real version onto paper.",
      "ACT — Small daily moves that turn awareness into behavior.",
      "INTEGRATE — One sentence to carry through the day.",
    ],
  },
  {
    title: "What's Inside",
    lines: [
      "01 / TRUTH — Breaking point. Two selves. Pain as compass. Pattern mapping.",
      "02 / REGULATION — The wave. Breath. Body awareness. Internal safety. Crisis protocol.",
      "03 / RESPONSIBILITY — Shame vs guilt. Owning damage. Repair over punishment.",
      "04 / IDENTITY — Micro-discipline. Internal boundaries. Emotional honesty.",
      "05 / RELATIONSHIP — Intimacy. Trust. Temptation. Honesty over image.",
      "06 / STRUCTURE — Direction. Discipline. Stability. Self-respect.",
      "07 / PRESENCE — Emotional availability. Holding space. Consistency.",
      "08 / RELEASE — Closure. Detachment. Forgiveness. Moving forward clean.",
    ],
  },
  {
    title: "What You Receive",
    lines: [
      "152-page digital PDF workbook.",
      "62-day daily system.",
      "Reflect / Write / Action / Integrate structure.",
      "Instant delivery after purchase.",
    ],
  },
  {
    title: "Delivery",
    lines: ["After purchase, the PDF is delivered to your email immediately."],
  },
  {
    title: "Note / Disclaimer",
    lines: [
      "Pronounced Love is a self-guided workbook. It is not therapy, crisis support, or medical advice.",
    ],
  },
];

export default function ReleaseMS001() {
  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <PurchasedBanner />
        <header className="border-b border-white/20">
          <div className="flex min-h-[32px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">
              {siteConfig.name}
            </Link>
            <span className="text-white/45">Release / {product.code}</span>
          </div>
          <nav className="grid grid-cols-2 border-t border-white/20 text-[9px] uppercase tracking-widest md:grid-cols-4">
            <Link href="/" className="border-r border-white/20 px-3 py-3 hover:bg-white hover:text-black">
              Index
            </Link>
            <Link href="/#releases" className="border-r border-white/20 px-3 py-3 hover:bg-white hover:text-black">
              Releases
            </Link>
            <Link href="/#archive" className="border-r border-white/20 px-3 py-3 hover:bg-white hover:text-black">
              Archive
            </Link>
            <Link href={product.checkoutUrl} className="px-3 py-3 hover:bg-white hover:text-black">
              {product.acquireLabel}
            </Link>
          </nav>
        </header>

        <section className="grid border-b border-white/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[440px] overflow-hidden border-b border-white/20 lg:border-b-0 lg:border-r">
            <img
              src={product.previewImages[0]}
              alt={`${product.displayTitle} preview`}
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-white/55">
                Private Workbook / Digital Release
              </p>
              <h1 className="max-w-4xl font-display text-[17vw] uppercase leading-[0.82] tracking-[0.04em] md:text-[10vw] lg:text-[7vw]">
                MS-001<br />Pronounced Love
              </h1>
            </div>
          </div>

          <div className="flex min-h-[440px] flex-col">
            <div className="border-b border-white/20 p-4 md:p-6">
              <p className="mb-3 text-[10px] uppercase tracking-widest text-white/40">Digital PDF Workbook</p>
              <h2 className="mb-6 font-mono text-xl uppercase leading-tight tracking-[0.12em] md:text-2xl">
                {product.displayTitle}
              </h2>
              <div className="space-y-4 text-sm leading-7 text-white/72 md:text-base">
                {product.copy.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-white/20 text-[10px] uppercase tracking-widest">
              {product.metadata.map((item) => (
                <div key={item.label} className="border-r border-b border-white/15 p-3">
                  <p className="mb-2 text-white/35">{item.label}</p>
                  <p className="text-white/80">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-[1fr_auto] border-t border-white/20 text-[10px] uppercase tracking-widest">
              <div className="p-4">
                <p className="text-white/35">Price</p>
                <p className="mt-2 text-2xl text-white">{product.price}</p>
              </div>
              <Link
                href={product.checkoutUrl}
                className="flex min-w-[190px] items-center justify-center border-l border-white/20 px-5 text-center hover:bg-white hover:text-black"
              >
                {product.acquireLabel} &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/20">
          {pageSections.map((section, index) => (
            <article key={section.title} className="grid border-b border-white/20 last:border-b-0 md:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-5">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-mono text-[11px] uppercase leading-tight tracking-[0.22em] text-white/60">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-3 p-4 text-sm leading-7 text-white/70 md:p-5 md:text-base">
                {section.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid border-b border-white/20 md:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-5">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Acquire</p>
          </div>
          <div className="grid grid-cols-[1fr_auto] text-[10px] uppercase tracking-widest">
            <div className="p-4 md:p-5">
              <p className="text-white/35">Price</p>
              <p className="mt-2 text-2xl text-white">{product.price}</p>
            </div>
            <Link
              href={product.checkoutUrl}
              className="flex min-w-[190px] items-center justify-center border-l border-white/20 px-5 text-center hover:bg-white hover:text-black"
            >
              {product.acquireLabel} &rarr;
            </Link>
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-2 px-3 py-3 text-[9px] uppercase tracking-widest text-white/35 md:flex-row">
          <p>{siteConfig.name} / {product.displayTitle}</p>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4">Return to Index</Link>
        </footer>
      </div>
    </main>
  );
}
