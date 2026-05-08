import { motion } from "framer-motion";
import { Link } from "wouter";

const signals = [
  { id: "04.1", type: "Transmission", img: "/images/recent-1.png", date: "10.05.24" },
  { id: "G-012", type: "Garment", img: "/images/recent-2.png", date: "08.05.24" },
  { id: "O-044", type: "Object", img: "/images/recent-3.png", date: "05.05.24" },
  { id: "FN-89", type: "Field Note", img: "/images/recent-4.png", date: "01.05.24" },
  { id: "03.9", type: "Transmission", img: "/images/fieldnotes.png", date: "28.04.24" },
  { id: "G-011", type: "Garment", img: "/images/garments.png", date: "22.04.24" },
];

export default function RecentSignals() {
  return (
    <section className="w-full border-b border-white/20 flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-white/20 text-[11px] uppercase tracking-widest text-white/50 flex justify-between items-center">
        <span>Recent Signals</span>
        <Link href="/" className="hover:text-white transition-colors">View All Signals &rarr;</Link>
      </div>
      
      <div className="flex overflow-x-auto hide-scrollbar divide-x divide-white/20 snap-x">
        {signals.map((signal, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="min-w-[280px] md:min-w-[320px] flex-shrink-0 flex flex-col p-4 group cursor-pointer hover:bg-white/5 transition-colors snap-start"
          >
            <div className="w-full aspect-square mb-4 overflow-hidden bg-white/5">
              <img 
                src={signal.img} 
                alt={signal.type}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="flex justify-between items-start text-[10px] uppercase tracking-widest font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-white/50">{signal.type}</span>
                <span className="text-sm">{signal.id}</span>
              </div>
              <span className="text-white/40">{signal.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
