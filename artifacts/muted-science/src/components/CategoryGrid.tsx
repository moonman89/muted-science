import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const HDR = 26;
const IMG_H = 190;
const FTR = 26;

export default function CategoryGrid() {
  return (
    <section
      className="w-full border-b border-white/20"
      style={{ height: HDR + IMG_H + FTR, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      data-testid="section-categories"
    >
      {siteConfig.categories.map((cat, i) => (
        <motion.div
          key={`${cat.name}-${i}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="flex flex-col group overflow-hidden"
          style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
          data-testid={`category-${cat.name.toLowerCase().replace(" ", "-")}-${i}`}
        >
          <div
            className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/80"
            style={{ height: HDR }}
          >
            {cat.name}
          </div>

          <a href={cat.href} className="relative overflow-hidden cursor-pointer flex-shrink-0" style={{ height: IMG_H }}>
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </a>

          <a
            href={cat.href}
            className="flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            style={{ height: FTR }}
            data-testid={`link-view-${cat.name.toLowerCase().replace(" ", "-")}-${i}`}
          >
            View All {cat.name} &rarr;
          </a>
        </motion.div>
      ))}
    </section>
  );
}
