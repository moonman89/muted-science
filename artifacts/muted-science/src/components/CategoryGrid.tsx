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
    <section className="w-full border-b border-white/20 grid grid-cols-4 divide-x divide-white/20" data-testid="section-categories">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="flex flex-col group"
          data-testid={`category-${cat.name.toLowerCase().replace(" ", "-")}`}
        >
          <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/80">
            {cat.name}
          </div>
          <div className="w-full overflow-hidden relative cursor-pointer border-b border-white/20" style={{ height: "140px" }}>
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover grayscale opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
          <Link
            href="/"
            className="px-2 py-1.5 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            data-testid={`link-view-${cat.name.toLowerCase().replace(" ", "-")}`}
          >
            View All {cat.name} &rarr;
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
