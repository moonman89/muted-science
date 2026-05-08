import { motion } from "framer-motion";
import { Link } from "wouter";

const notes = [
  { date: "12.05.24", title: "Field Note: Kyiv Studio Visit by MS" },
  { date: "11.05.24", title: "Object 019: Found Synthesizer in Lviv by WA" },
  { date: "10.05.24", title: "Garment 002: Field Jacket Update by MS" },
  { date: "09.05.24", title: "Interview: Photographer A. Fragment by MS" },
  { date: "08.05.24", title: "Signal interference in underground spaces" },
];

export default function ContentGrid() {
  return (
    <section
      className="w-full border-b border-white/20"
      style={{ height: "370px", display: "grid", gridTemplateColumns: "22% 52% 26%" }}
    >
      {/* Left Column — Latest Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col border-r border-white/20 overflow-hidden"
      >
        <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex-shrink-0">
          Latest Notes
        </div>
        <div className="flex flex-col flex-1 overflow-hidden divide-y divide-white/10">
          {notes.map((note, i) => (
            <Link
              key={i}
              href="/"
              className="px-2 py-1.5 group hover:bg-white/5 transition-colors flex flex-col flex-shrink-0"
              data-testid={`note-item-${i}`}
            >
              <span className="text-[9px] text-white/40 font-mono mb-0.5">{note.date}</span>
              <span className="text-[10px] leading-snug group-hover:underline underline-offset-2 line-clamp-3">{note.title}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="px-2 py-1.5 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 flex-shrink-0"
          data-testid="link-view-all-notes"
        >
          View All Notes &rarr;
        </Link>
      </motion.div>

      {/* Center Column — Featured Project */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="flex flex-col border-r border-white/20 overflow-hidden"
      >
        <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex justify-between flex-shrink-0">
          <span>Featured Project</span>
          <span>04.4</span>
        </div>
        <div className="flex-1 relative overflow-hidden cursor-pointer group">
          <img
            src="/images/featured.png"
            alt="Kyiv / Body / Static"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
            <p className="text-[9px] uppercase tracking-widest text-white/55 mb-0.5">Featured Project</p>
            <h2 className="font-display uppercase leading-none text-white" style={{ fontSize: "clamp(18px, 2.8vw, 36px)" }}>
              Kyiv / Body / Static
            </h2>
          </div>
        </div>
        <Link
          href="/"
          className="px-2 py-1.5 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 flex-shrink-0"
          data-testid="link-view-project"
        >
          View Project &rarr;
        </Link>
      </motion.div>

      {/* Right Column — Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-col overflow-hidden"
      >
        <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex-shrink-0">
          Coordinates
        </div>
        <div className="p-2 flex flex-col gap-2 flex-1 overflow-hidden">
          {/* Map grid */}
          <div
            className="w-full border border-white/20 relative flex-shrink-0 flex items-center justify-center"
            style={{
              height: "80px",
              background: "repeating-linear-gradient(0deg,transparent,transparent 8px,rgba(255,255,255,0.05) 8px,rgba(255,255,255,0.05) 9px),repeating-linear-gradient(90deg,transparent,transparent 8px,rgba(255,255,255,0.05) 8px,rgba(255,255,255,0.05) 9px)"
            }}
          >
            <div className="absolute w-[1px] h-full bg-white/15 left-1/2" />
            <div className="absolute h-[1px] w-full bg-white/15 top-1/2" />
            <div className="w-1.5 h-1.5 border border-white/70 relative z-10" />
          </div>

          <div className="font-mono text-[9px] text-white/60 border border-white/10 px-2 py-1 bg-white/[0.03] flex-shrink-0 truncate">
            MS://ROOM-04/SIGNAL-4489
          </div>

          <div className="flex flex-col text-[9px] uppercase tracking-widest gap-2 overflow-hidden leading-tight">
            <div>
              <p className="text-white/40 mb-0.5">Related Objects</p>
              <p className="text-white/80">Object 017</p>
              <p className="text-white/80">Object 019</p>
              <p className="text-white/80">Object 022</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Related Rooms</p>
              <p className="text-white/80 truncate">Room 03: Image Systems</p>
              <p className="text-white/80 truncate">Room 06: Signals from Kyiv</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Related Artist</p>
              <p className="text-white/80">A. K.</p>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="px-2 py-1.5 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 flex-shrink-0"
          data-testid="link-view-index"
        >
          View Full Index &rarr;
        </Link>
      </motion.div>
    </section>
  );
}
