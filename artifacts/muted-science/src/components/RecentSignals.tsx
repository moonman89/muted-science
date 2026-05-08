import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

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
      <div
        className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
        style={{ height: HDR }}
      >
        {siteConfig.labels.recentSignals}
      </div>

      <div
        className="flex-shrink-0"
        style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", height: IMG_H + LBL_H }}
      >
        {siteConfig.recentSignals.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex flex-col group cursor-pointer hover:bg-white/5 transition-colors overflow-hidden"
            style={{ borderRight: i < siteConfig.recentSignals.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}
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

      <div
        className="flex-shrink-0 flex items-center justify-end px-2 border-t border-white/20"
        style={{ height: FTR }}
      >
        <Link href="/" className="text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-colors" data-testid="link-view-all-signals">
          {siteConfig.labels.viewAllSignals} &rarr;
        </Link>
      </div>
    </section>
  );
}
