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
    <section className="w-full border-b border-white/20 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
      {categories.map((cat, i) => (
        <motion.div 
          key={cat.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col group"
        >
          <div className="w-full aspect-[3/4] md:aspect-auto md:h-[400px] overflow-hidden relative border-b border-white/20 cursor-pointer">
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src={cat.img} 
              alt={cat.name}
              className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute top-4 right-4 z-20 text-[10px] font-mono bg-black/50 px-2 py-1 border border-white/20 backdrop-blur-sm">
              [{cat.count}]
            </div>
          </div>
          <Link href="/" className="px-4 py-4 text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex justify-between items-center w-full">
            <span>{cat.name}</span>
            <span className="text-lg leading-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
