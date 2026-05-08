import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-white/20 overflow-hidden flex flex-col justify-end bg-black" style={{ height: "42vh", minHeight: "280px" }}>
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-20 px-4 py-3 flex flex-row justify-between items-end w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-[52px] md:text-[72px] leading-[0.85] font-display flex flex-col uppercase">
            <span>Transmission 04</span>
            <span className="text-white/70">The Body</span>
            <span className="text-white/40">Stores</span>
            <span>Signal.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-1"
        >
          <Link href="/" className="text-[10px] uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-1" data-testid="link-enter-archive">
            Enter Archive &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
