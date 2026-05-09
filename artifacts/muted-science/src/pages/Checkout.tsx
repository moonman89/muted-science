import { useState } from "react";
import { Link, useLocation } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const product = siteConfig.releaseProducts.ms001;
const PRICE_ID = "price_1TV5ztA1DpVtTo0sGCkx5WNW";

type Stage = "form" | "loading" | "error";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState<Stage>("form");
  const [errorMsg, setErrorMsg] = useState("");
  const [, navigate] = useLocation();

  const params = new URLSearchParams(window.location.search);
  const cancelled = params.get("cancelled") === "true";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStage("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: PRICE_ID, email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Failed to create checkout session.");
      }

      window.location.href = data.url;
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStage("error");
    }
  }

  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">

        <header className="border-b border-white/20">
          <div className="flex min-h-[32px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">
              {siteConfig.name}
            </Link>
            <span className="text-white/45">Acquire / {product.code}</span>
          </div>
          <nav className="grid grid-cols-3 border-t border-white/20 text-[9px] uppercase tracking-widest">
            <Link href="/" className="border-r border-white/20 px-3 py-3 hover:bg-white hover:text-black">
              Index
            </Link>
            <Link href={product.href} className="border-r border-white/20 px-3 py-3 hover:bg-white hover:text-black">
              {product.code}
            </Link>
            <span className="px-3 py-3 text-white/30">Checkout</span>
          </nav>
        </header>

        <div className="grid min-h-[calc(100dvh-80px)] lg:grid-cols-2">

          <section className="flex flex-col border-b border-white/20 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/20 p-6 md:p-8">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">
                Release / {product.code}
              </p>
              <h1 className="font-mono text-2xl uppercase tracking-[0.12em] md:text-3xl">
                {product.displayTitle}
              </h1>
            </div>

            <div className="border-b border-white/20 p-6 md:p-8">
              <div className="space-y-3 text-sm leading-7 text-white/60">
                {product.copy.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-white/20">
              {product.metadata.map((item) => (
                <div key={item.label} className="border-r border-b border-white/15 p-4 last:border-r-0">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-white/30">{item.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto p-6 md:p-8">
              <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-white/35">Price</p>
              <p className="font-mono text-4xl tracking-tight text-white">{product.price}</p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-white/30">
                Instant PDF delivery to your email after purchase
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center p-6 md:p-10 lg:p-14">

            {cancelled && stage !== "loading" && (
              <div className="mb-8 border border-white/20 bg-white/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  Purchase cancelled — no charge was made. Try again when ready.
                </p>
              </div>
            )}

            <div className="mb-8">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">Step 01</p>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
                Enter Your Email
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/45">
                The PDF will be delivered to this address immediately after purchase.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="border border-white/25">
                <label className="block border-b border-white/15 px-4 pt-3 pb-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={stage === "loading"}
                  className="block w-full bg-transparent px-4 py-4 font-mono text-sm text-white placeholder-white/20 outline-none disabled:opacity-40"
                />
              </div>

              {stage === "error" && (
                <div className="border border-white/20 bg-white/5 p-4 mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">{errorMsg}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={stage === "loading" || !email.trim()}
                  className="w-full border border-white/25 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {stage === "loading" ? "Preparing Checkout..." : `Complete Purchase — ${product.price}`}
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/25 leading-6">
                  Payment is processed securely by Stripe. You will be redirected to the Stripe checkout page to enter your card details. The PDF is emailed immediately upon successful payment.
                </p>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href={product.href}
                className="font-mono text-[9px] uppercase tracking-widest text-white/30 hover:text-white hover:underline underline-offset-4"
              >
                ← Back to {product.code}
              </Link>
            </div>
          </section>

        </div>

        <footer className="flex flex-col justify-between gap-2 border-t border-white/20 px-3 py-3 text-[9px] uppercase tracking-widest text-white/35 md:flex-row">
          <p>{siteConfig.name} / Secure Checkout</p>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4">Return to Index</Link>
        </footer>

      </div>
    </main>
  );
}
