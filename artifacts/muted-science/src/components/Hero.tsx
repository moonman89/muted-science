import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const opacities = ["text-white", "text-white/70", "text-white/45", "text-white"];

export default function Hero() {
  const lines = [siteConfig.hero.issueCode, ...siteConfig.hero.lines];
  const release = siteConfig.releaseProducts.ms001;

  return (
    <section className="ms-hero relative w-full border-b border-white/20 overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: "url('/images/hero.png')", opacity: 0.52 }}
      />

      <div className="relative z-20 h-full min-h-inherit flex flex-col justify-end px-3 pb-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="mb-3 max-w-xl text-[10px] uppercase tracking-widest text-white/55">
            A 62-day digital PDF workbook / Reflect. Write. Act. Integrate.
          </p>
          <h1
            className="font-display uppercase leading-none mb-3 max-w-full"
            style={{ fontSize: "clamp(42px, 7.4vw, 88px)", lineHeight: 0.88 }}
          >
            {lines.map((line, i) => (
              <span key={i} className={`block ${opacities[i] ?? "text-white"}`}>{line}</span>
            ))}
          </h1>
          <Link
            href={release.href}
            className="inline-flex min-h-[30px] items-center px-1 text-[10px] uppercase tracking-widest text-white/70 hover:text-white hover:underline underline-offset-4"
            data-testid="link-open-release-hero"
          >
            Read the system
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
