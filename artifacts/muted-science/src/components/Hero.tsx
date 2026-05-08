import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section
      className="relative w-full border-b border-white/20 overflow-hidden flex flex-col justify-end bg-black"
      style={{ height: "340px" }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: "url('/images/hero.png')", opacity: 0.55 }}
      />

      <div className="relative z-20 px-4 pb-3 flex flex-row justify-between items-end w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1
            className="font-display uppercase leading-none"
            style={{ fontSize: "clamp(42px, 5.5vw, 80px)", lineHeight: 0.88 }}
          >
            <span className="block text-white">Transmission 04</span>
            <span className="block text-white/65">The Body</span>
            <span className="block text-white/35">Stores</span>
            <span className="block text-white">Signal.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            href="/"
            className="text-[10px] uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-1"
            data-testid="link-enter-archive"
          >
            Enter Archive &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
