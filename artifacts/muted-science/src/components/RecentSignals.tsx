import { motion } from "framer-motion";
import { Link } from "wouter";

const signals = [
  { id: "Transmission 03", label: "Transmission 03", img: "/images/recent-1.png", date: "09.05.24" },
  { id: "Garment 001", label: "Garment 001\nField Shirt", img: "/images/recent-2.png", date: "08.05.24" },
  { id: "Field Note", label: "Field Note\nKharkiv, Fragment", img: "/images/recent-3.png", date: "07.05.24" },
  { id: "Object 018", label: "Object 018\nVideo Still", img: "/images/recent-4.png", date: "05.05.24" },
  { id: "Object 018b", label: "Object 018\nWW-Helmet", img: "/images/fieldnotes.png", date: "05.05.24" },
  { id: "Transmission 02", label: "Transmission 02", img: "/images/garments.png", date: "02.05.24" },
];

export default function RecentSignals() {
  return (
    <section className="w-full border-b border-white/20 flex flex-col overflow-hidden" data-testid="section-recent-signals">
      <div className="px-3 py-2 border-b border-white/20 text-[10px] uppercase tracking-widest text-white/50 flex justify-between items-center">
        <span>Recent Signals</span>
        <Link href="/" className="hover:text-white transition-colors" data-testid="link-view-all-signals">View All Signals &rarr;</Link>
      </div>

      <div className="flex overflow-x-auto divide-x divide-white/20 snap-x">
        {signals.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="min-w-[160px] flex-shrink-0 flex flex-col group cursor-pointer hover:bg-white/5 transition-colors snap-start"
            data-testid={`signal-item-${i}`}
          >
            <div className="w-full overflow-hidden bg-white/5" style={{ height: "120px" }}>
              <img
                src={signal.img}
                alt={signal.id}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="px-2 py-1.5 flex flex-col gap-0.5">
              {signal.label.split("\n").map((line, j) => (
                <span key={j} className={`text-[9px] uppercase tracking-widest font-mono ${j === 0 ? "text-white/90" : "text-white/50"}`}>{line}</span>
              ))}
              <span className="text-[9px] text-white/30 mt-0.5">{signal.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
