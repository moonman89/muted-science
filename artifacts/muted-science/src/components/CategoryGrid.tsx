import { motion } from "framer-motion";
import { Link } from "wouter";

const categories = [
  { name: "Garments", img: "/images/garments.png" },
  { name: "Objects", img: "/images/objects.png" },
  { name: "Field Notes", img: "/images/fieldnotes.png" },
  { name: "People", img: "/images/people.png" },
];

export default function CategoryGrid() {
  return (
    <section
      className="w-full border-b border-white/20"
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      data-testid="section-categories"
    >
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="flex flex-col group overflow-hidden"
          style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
          data-testid={`category-${cat.name.toLowerCase().replace(" ", "-")}`}
        >
          <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/80 flex-shrink-0">
            {cat.name}
          </div>
          <div className="relative overflow-hidden border-b border-white/20 cursor-pointer flex-1 group" style={{ height: "140px" }}>
            <div className="absolute inset-0 z-10 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
          <Link
            href="/"
            className="px-2 py-1.5 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex-shrink-0"
            data-testid={`link-view-${cat.name.toLowerCase().replace(" ", "-")}`}
          >
            View All {cat.name} &rarr;
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
