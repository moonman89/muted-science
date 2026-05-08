import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative w-full aspect-square md:aspect-[21/9] border-b border-white/20 overflow-hidden flex flex-col justify-end bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      
      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-20 p-4 md:p-8 flex flex-col md:flex-row justify-between items-end w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-auto mb-8 md:mb-0"
        >
          <h1 className="text-6xl md:text-[120px] leading-[0.85] font-display flex flex-col uppercase">
            <span>Transmission 04</span>
            <span className="text-white/70">The Body</span>
            <span className="text-white/40">Stores</span>
            <span>Signal.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/" className="text-[11px] uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2">
            Enter Archive <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
