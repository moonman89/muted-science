import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const product = siteConfig.releaseProducts.ms001;

export default function ReleaseMS001() {
  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
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
            <a href={product.checkoutUrl} className="px-3 py-3 hover:bg-white hover:text-black">
              {product.acquireLabel}
            </a>
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
              <p className="mb-3 text-[10px] uppercase tracking-widest text-white/40">Product Copy</p>
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
              <a
                href={product.checkoutUrl}
                className="flex min-w-[190px] items-center justify-center border-l border-white/20 px-5 text-center hover:bg-white hover:text-black"
              >
                {product.acquireLabel} &rarr;
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-white/20">
          <div className="flex min-h-[28px] items-center border-b border-white/20 px-3 text-[9px] uppercase tracking-widest text-white/45">
            Preview Images / Public Samples
          </div>
          <div className="grid md:grid-cols-3">
            {product.previewImages.map((image, index) => (
              <article key={image} className="group border-b border-r border-white/20 md:border-b-0">
                <div className="aspect-[4/3] overflow-hidden bg-white/[0.02]">
                  <img
                    src={image}
                    alt={`${product.displayTitle} preview ${index + 1}`}
                    className="h-full w-full object-cover grayscale opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                  />
                </div>
                <div className="flex h-8 items-center justify-between px-3 text-[9px] uppercase tracking-widest text-white/45">
                  <span>Preview {String(index + 1).padStart(2, "0")}</span>
                  <span>MS-001</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-b border-white/20 md:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-white/20 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Distribution Note</p>
          </div>
          <div className="p-4 text-sm leading-7 text-white/65 md:p-6 md:text-base">
            <p>
              The paid PDF file is not stored in the public site folder. This page is only the public release shell: product copy, preview imagery, price, and the acquisition path.
            </p>
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
