import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const HDR = 26;
const IMG_H = 126;
const LBL_H = 58;
const FTR = 26;

export default function RecentSignals() {
  return (
    <section
      className="w-full border-b border-white/20 flex flex-col"
      data-testid="section-recent-signals"
    >
      <div
        className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
        style={{ height: HDR }}
      >
        {siteConfig.labels.recentSignals}
      </div>

      <div className="ms-recent-signals-grid flex-shrink-0">
        {siteConfig.recentSignals.map((signal, i) => (
          <motion.a
            href={signal.href || "#releases"}
            key={`${signal.label}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="ms-signal-card flex flex-col group cursor-pointer hover:bg-white/5 transition-colors overflow-hidden border-r border-white/15 border-b border-white/15"
            data-testid={`signal-item-${i}`}
          >
            <div className="overflow-hidden flex-shrink-0" style={{ height: IMG_H }}>
              <img
                src={signal.img}
                alt={signal.label}
                className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div
              className="flex-shrink-0 flex flex-col justify-center px-2 border-t border-white/10 min-w-0"
              style={{ minHeight: LBL_H }}
            >
              <p className="text-[9px] text-white/85 leading-tight ms-clamp-2 group-hover:underline underline-offset-2">
                {signal.label}
              </p>
              {signal.sub && <p className="text-[9px] text-white/45 leading-tight ms-clamp-2 mt-0.5">{signal.sub}</p>}
              <p className="text-[8px] font-mono text-white/30 mt-1 shrink-0">{signal.date}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div
        className="flex-shrink-0 flex items-center justify-end px-2 border-t border-white/20"
        style={{ height: FTR }}
      >
        <Link href={siteConfig.releaseProducts.ms001.href} className="ms-cta-row text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-colors" data-testid="link-view-all-signals">
          {siteConfig.labels.viewAllSignals} &rarr;
        </Link>
      </div>
    </section>
  );
}
