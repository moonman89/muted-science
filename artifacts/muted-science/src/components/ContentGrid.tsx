import { motion } from "framer-motion";
import { Link } from "wouter";

const notes = [
  { date: "12.05.24", title: "Field Note: Kyiv Studio Visit by MS" },
  { date: "11.05.24", title: "Object 019: Found Synthesizer in Lviv by WA" },
  { date: "10.05.24", title: "Garment 002: Field Jacket Update by MS" },
  { date: "09.05.24", title: "Interview: Photographer A. Fragment by MS" },
  { date: "08.05.24", title: "Signal interference in underground spaces" },
  { date: "07.05.24", title: "Transmission protocols for isolation" },
];

export default function ContentGrid() {
  return (
    <section className="w-full flex flex-col md:flex-row border-b border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20">

      {/* Left Column - Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/4 flex flex-col"
      >
        <div className="px-3 py-2 border-b border-white/20 text-[10px] uppercase tracking-widest text-white/50">
          Latest Notes
        </div>
        <div className="flex flex-col flex-1 divide-y divide-white/10">
          {notes.map((note, i) => (
            <Link key={i} href="/" className="px-3 py-2 group hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer block" data-testid={`note-item-${i}`}>
              <span className="text-[9px] text-white/40 font-mono">{note.date}</span>
              <span className="text-[11px] tracking-wide group-hover:underline underline-offset-2 leading-tight">{note.title}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className="px-3 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 mt-auto block" data-testid="link-view-all-notes">
          View All Notes &rarr;
        </Link>
      </motion.div>

      {/* Center Column - Featured */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="w-full md:w-1/2 flex flex-col"
      >
        <div className="px-3 py-2 border-b border-white/20 text-[10px] uppercase tracking-widest text-white/50 flex justify-between">
          <span>Featured Project</span>
          <span>04.4</span>
        </div>
        <div className="flex-1 relative overflow-hidden cursor-pointer group" style={{ minHeight: "220px" }}>
          <img
            src="/images/featured.png"
            alt="Featured project"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out absolute inset-0"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
            <p className="text-[9px] uppercase tracking-widest text-white/60 mb-1">Featured Project</p>
            <h2 className="text-2xl md:text-3xl font-display uppercase leading-none">Kyiv / Body / Static</h2>
          </div>
        </div>
        <Link href="/" className="px-3 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 block" data-testid="link-view-project">
          View Project &rarr;
        </Link>
      </motion.div>

      {/* Right Column - Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full md:w-1/4 flex flex-col"
      >
        <div className="px-3 py-2 border-b border-white/20 text-[10px] uppercase tracking-widest text-white/50">
          Coordinates
        </div>
        <div className="p-3 flex flex-col gap-3 flex-1">
          <div className="w-full border border-white/20 relative flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-70" style={{ height: "90px" }}>
            <div className="absolute w-[1px] h-full bg-white/20 left-1/2 top-0" />
            <div className="absolute h-[1px] w-full bg-white/20 top-1/2 left-0" />
            <div className="w-2 h-2 border border-white/50 relative z-10" />
          </div>

          <div className="font-mono text-[9px] text-white/70 bg-white/5 px-2 py-1.5 border border-white/10 leading-relaxed">
            MS://ROOM-04/SIGNAL-4489
          </div>

          <div className="flex flex-col text-[10px] uppercase tracking-widest gap-2">
            <div>
              <p className="text-white/40 text-[9px] mb-1">Related Objects</p>
              <p>Object 017 &nbsp; Object 019 &nbsp; Object 022</p>
            </div>
            <div>
              <p className="text-white/40 text-[9px] mb-1">Related Rooms</p>
              <p>Room 03: Image Systems</p>
              <p>Room 06: Signals from Kyiv</p>
            </div>
            <div>
              <p className="text-white/40 text-[9px] mb-1">Related Artist</p>
              <p>A. K.</p>
            </div>
          </div>
        </div>
        <Link href="/" className="px-3 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 mt-auto block" data-testid="link-view-index">
          View Full Index &rarr;
        </Link>
      </motion.div>

    </section>
  );
}
