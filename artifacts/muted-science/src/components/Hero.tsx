import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const opacities = ["text-white", "text-white/65", "text-white/35", "text-white"];

export default function Hero() {
  const lines = [siteConfig.hero.issueCode, ...siteConfig.hero.lines];

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
          <h1
            className="font-display uppercase leading-none mb-2 max-w-full"
            style={{ fontSize: "clamp(38px, 7vw, 78px)", lineHeight: 0.9 }}
          >
            {lines.map((line, i) => (
              <span key={i} className={`block ${opacities[i] ?? "text-white"}`}>{line}</span>
            ))}
          </h1>
          <a
            href="#archive"
            className="ms-cta-row inline-flex items-center gap-1 text-[10px] uppercase tracking-widest underline-offset-4 mt-1 text-white/85 hover:text-white"
            data-testid="link-enter-archive"
          >
            {siteConfig.hero.cta} &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
