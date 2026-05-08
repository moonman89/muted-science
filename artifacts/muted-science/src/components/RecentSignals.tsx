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

const HDR = 26;
const IMG_H = 115;
const LBL_H = 44;
const FTR = 26;

export default function RecentSignals() {
  return (
    <section
      className="w-full border-b border-white/20 flex flex-col"
      style={{ height: HDR + IMG_H + LBL_H + FTR }}
      data-testid="section-recent-signals"
    >
      {/* Header — label only */}
      <div
        className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
        style={{ height: HDR }}
      >
        Recent Signals
      </div>

      {/* 6-column equal grid */}
      <div
        className="flex-shrink-0"
        style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", height: IMG_H + LBL_H }}
      >
        {signals.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex flex-col group cursor-pointer hover:bg-white/5 transition-colors overflow-hidden"
            style={{ borderRight: i < signals.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}
            data-testid={`signal-item-${i}`}
          >
            <div className="overflow-hidden flex-shrink-0" style={{ height: IMG_H }}>
              <img
                src={signal.img}
                alt={signal.label}
                className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div
              className="flex-shrink-0 flex flex-col justify-center px-2 border-t border-white/10"
              style={{ height: LBL_H }}
            >
              <p className="text-[9px] text-white/85 truncate leading-tight">{signal.label}</p>
              {signal.sub && <p className="text-[9px] text-white/45 truncate leading-tight">{signal.sub}</p>}
              <p className="text-[8px] font-mono text-white/30 mt-0.5">{signal.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer — VIEW ALL right-aligned */}
      <div
        className="flex-shrink-0 flex items-center justify-end px-2 border-t border-white/20"
        style={{ height: FTR }}
      >
        <Link href="/" className="text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-colors" data-testid="link-view-all-signals">
          View All Signals &rarr;
        </Link>
      </div>
    </section>
  );
}
