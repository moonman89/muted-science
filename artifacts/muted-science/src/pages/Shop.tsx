import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

export default function Shop() {
  const params = new URLSearchParams(window.location.search);
  const success = params.get("success") === "true";

  return (
    <main className="ms-page min-h-[100dvh] bg-black text-white selection:bg-white selection:text-black">
      <div className="ms-shell border-x border-white/20">
        <header className="border-b border-white/20">
          <div className="flex min-h-[32px] items-center justify-between gap-4 px-3 text-[10px] uppercase tracking-widest">
            <Link href="/" className="font-bold hover:underline underline-offset-4">
              {siteConfig.name}
            </Link>
            <span className="text-white/45">Shop</span>
          </div>
        </header>

        {success && (
          <div className="border-b border-white/20 bg-white px-4 py-4 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-black">
              Purchase complete — the PDF has been sent to your email.
            </p>
          </div>
        )}

        <div className="p-6 md:p-10">
          <Link
            href={siteConfig.releaseProducts.ms001.href}
            className="font-mono text-[9px] uppercase tracking-widest text-white/30 hover:text-white hover:underline underline-offset-4"
          >
            ← View MS-001 Release
          </Link>
        </div>
      </div>
    </main>
  );
}
