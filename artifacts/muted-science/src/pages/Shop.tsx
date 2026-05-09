import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Price {
  id: string;
  unit_amount: number;
  currency: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, string>;
  prices: Price[];
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [checkingOut, setCheckingOut] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [location] = useLocation();

  const success = new URLSearchParams(window.location.search).get("success") === "true";
  const cancelled = new URLSearchParams(window.location.search).get("cancelled") === "true";

  useEffect(() => {
    fetch("/api/stripe/products")
      .then((r) => r.json())
      .then((body) => {
        setProducts(body.data ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  async function handleBuy(priceId: string) {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email to receive your PDF.");
      return;
    }
    setEmailError("");
    setCheckingOut(priceId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, email }),
      });
      const body = await res.json();
      if (body.url) {
        window.location.href = body.url;
      } else {
        setError(body.error ?? "Something went wrong.");
        setCheckingOut(null);
      }
    } catch {
      setError("Failed to start checkout.");
      setCheckingOut(null);
    }
  }

  return (
    <main className="min-h-[100dvh] bg-black text-white w-full overflow-x-hidden selection:bg-white selection:text-black">
      <div className="max-w-screen-3xl mx-auto border-x border-white/20">
        <TopBar />
        <Navigation />

        {/* Page header */}
        <div
          className="w-full border-b border-white/20 flex items-center px-3 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: 28 }}
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 text-white/25">/</span>
          <span className="text-white/80">Releases</span>
        </div>

        {success && (
          <div className="w-full border-b border-white/20 px-4 py-3 text-[10px] uppercase tracking-widest text-white bg-white/10">
            Payment confirmed — your PDF will be sent to your email shortly.
          </div>
        )}
        {cancelled && (
          <div className="w-full border-b border-white/20 px-4 py-3 text-[10px] uppercase tracking-widest text-white/50">
            Checkout cancelled. No charge was made.
          </div>
        )}

        <div className="w-full p-4 border-b border-white/20">
          <h1 className="font-display uppercase text-[10px] tracking-widest text-white/40 mb-4">
            Releases
          </h1>

          {loading && (
            <p className="text-[10px] uppercase tracking-widest text-white/30 animate-pulse">
              Loading...
            </p>
          )}

          {error && !loading && (
            <p className="text-[10px] uppercase tracking-widest text-red-400">{error}</p>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              No releases available yet.
            </p>
          )}

          {!loading && products.length > 0 && (
            <div className="grid gap-0" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {products.map((product) => {
                const price = product.prices[0];
                return (
                  <div
                    key={product.id}
                    className="border border-white/20 flex flex-col"
                  >
                    {/* Product image placeholder */}
                    <div
                      className="w-full border-b border-white/20 flex items-center justify-center"
                      style={{
                        height: 260,
                        background:
                          "repeating-linear-gradient(45deg,transparent,transparent 4px,rgba(255,255,255,0.02) 4px,rgba(255,255,255,0.02) 5px)",
                      }}
                    >
                      <div className="text-center">
                        <p className="font-display text-[11px] uppercase tracking-widest text-white/20">
                          {product.metadata?.issue ?? "MS"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-3 gap-2">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40 mb-0.5">
                          {product.metadata?.format === "pdf" ? "Digital PDF" : "Release"}
                        </p>
                        <h2 className="font-display uppercase text-[13px] leading-tight text-white">
                          {product.name}
                        </h2>
                        {product.description && (
                          <p className="text-[9px] text-white/50 mt-1 leading-relaxed normal-case">
                            {product.description}
                          </p>
                        )}
                      </div>

                      {price && (
                        <div className="mt-auto pt-2 border-t border-white/10 flex flex-col gap-2">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[10px] uppercase tracking-widest text-white">
                              {formatPrice(price.unit_amount, price.currency)}
                            </span>
                            <span className="text-[9px] text-white/30 uppercase tracking-widest">PDF via email</span>
                          </div>

                          <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                            className="w-full bg-transparent border border-white/20 px-2 py-1.5 text-[10px] uppercase tracking-widest text-white placeholder-white/25 focus:outline-none focus:border-white/60 transition-colors"
                          />
                          {emailError && (
                            <p className="text-[9px] text-red-400 uppercase tracking-widest">{emailError}</p>
                          )}

                          <button
                            onClick={() => handleBuy(price.id)}
                            disabled={checkingOut === price.id}
                            className="w-full border border-white/40 px-3 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            {checkingOut === price.id ? "Redirecting..." : "Buy Now"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}
