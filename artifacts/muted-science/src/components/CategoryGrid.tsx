import { motion } from "framer-motion";
import { Link } from "wouter";

const categories = [
  { name: "Garments", img: "/images/garments.png", count: "42" },
  { name: "Objects", img: "/images/objects.png", count: "108" },
  { name: "Field Notes", img: "/images/fieldnotes.png", count: "256" },
  { name: "People", img: "/images/people.png", count: "14" },
];

export default function CategoryGrid() {
  return (
    <section className="w-full border-b border-white/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20" data-testid="section-categories">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex flex-col group"
          data-testid={`category-${cat.name.toLowerCase().replace(" ", "-")}`}
        >
          <div className="w-full overflow-hidden relative border-b border-white/20 cursor-pointer" style={{ height: "160px" }}>
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute top-2 right-2 z-20 text-[9px] font-mono bg-black/60 px-1.5 py-0.5 border border-white/20">
              [{cat.count}]
            </div>
          </div>
          <Link href="/" className="px-3 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex justify-between items-center w-full" data-testid={`link-view-${cat.name.toLowerCase().replace(" ", "-")}`}>
            <span>View All {cat.name} &rarr;</span>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
