import { motion } from "framer-motion";
import { Link } from "wouter";

const signals = [
  { label: "Transmission 03", sub: "", img: "/images/recent-1.png", date: "09.05.24" },
  { label: "Garment 001", sub: "Field Shirt", img: "/images/recent-2.png", date: "08.05.24" },
  { label: "Field Note", sub: "Kharkiv, Fragment", img: "/images/recent-3.png", date: "07.05.24" },
  { label: "Object 018", sub: "Video Still", img: "/images/recent-4.png", date: "05.05.24" },
  { label: "Object 018", sub: "WW-Helmet", img: "/images/fieldnotes.png", date: "05.05.24" },
  { label: "Transmission 02", sub: "", img: "/images/garments.png", date: "02.05.24" },
];

export default function RecentSignals() {
  return (
    <section className="w-full border-b border-white/20 flex flex-col" data-testid="section-recent-signals">
      <div
        className="px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex justify-between items-center flex-shrink-0"
        style={{ height: "26px" }}
      >
        <span>Recent Signals</span>
        <Link href="/" className="hover:text-white transition-colors" data-testid="link-view-all-signals">
          View All Signals &rarr;
        </Link>
      </div>

      <div className="hide-scrollbar flex overflow-x-auto" style={{ height: "150px" }}>
        {signals.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex-shrink-0 flex flex-col group cursor-pointer hover:bg-white/5 transition-colors overflow-hidden"
            style={{ width: "148px", borderRight: "1px solid rgba(255,255,255,0.2)" }}
            data-testid={`signal-item-${i}`}
          >
            <div className="flex-1 overflow-hidden">
              <img
                src={signal.img}
                alt={signal.label}
                className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="px-2 py-1 flex-shrink-0 border-t border-white/10">
              <p className="text-[9px] uppercase tracking-widest text-white/85 truncate">{signal.label}</p>
              {signal.sub && <p className="text-[9px] uppercase tracking-widest text-white/40 truncate">{signal.sub}</p>}
              <p className="text-[8px] text-white/30 mt-0.5 font-mono">{signal.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
