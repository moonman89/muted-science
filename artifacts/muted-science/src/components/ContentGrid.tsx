import { motion } from "framer-motion";
import { Link } from "wouter";

const notes = [
  { date: "12.05.24", title: "Field Note: Kyiv Studio Visit\nby MS" },
  { date: "11.05.24", title: "Object 019: Found Synthesizer\nin Lviv by WA" },
  { date: "10.05.24", title: "Garment 002: Field Jacket\nUpdate by MS" },
  { date: "09.05.24", title: "Interview: Photographer A.\nFragment by MS" },
  { date: "08.05.24", title: "Signal interference in\nunderground spaces" },
];

const SECTION_HEIGHT = 370;

export default function ContentGrid() {
  return (
    <section
      className="w-full flex border-b border-white/20 divide-x divide-white/20"
      style={{ height: `${SECTION_HEIGHT}px` }}
    >
      {/* Left Column - Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col overflow-hidden"
        style={{ width: "22%" }}
      >
        <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex-shrink-0">
          Latest Notes
        </div>
        <div className="flex flex-col flex-1 overflow-hidden divide-y divide-white/10">
          {notes.map((note, i) => (
            <Link
              key={i}
              href="/"
              className="px-2 py-2 group hover:bg-white/5 transition-colors flex flex-col flex-shrink-0 cursor-pointer"
              data-testid={`note-item-${i}`}
            >
              <span className="text-[9px] text-white/40 font-mono leading-none mb-0.5">{note.date}</span>
              <span className="text-[10px] tracking-wide group-hover:underline underline-offset-2 leading-snug whitespace-pre-line">{note.title}</span>
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

      {/* Center Column - Featured */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-col"
        style={{ width: "52%" }}
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
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10">
            <p className="text-[9px] uppercase tracking-widest text-white/60 mb-0.5">Featured Project</p>
            <h2
              className="font-display uppercase leading-none text-white"
              style={{ fontSize: "clamp(20px, 3vw, 38px)" }}
            >
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

      {/* Right Column - Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col"
        style={{ width: "26%" }}
      >
        <div className="px-2 py-1.5 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50 flex-shrink-0">
          Coordinates
        </div>
        <div className="p-2 flex flex-col gap-2 flex-1 overflow-hidden">
          <div
            className="w-full border border-white/20 relative flex items-center justify-center flex-shrink-0"
            style={{
              height: "88px",
              background: "repeating-linear-gradient(0deg,transparent,transparent 9px,rgba(255,255,255,0.04) 9px,rgba(255,255,255,0.04) 10px),repeating-linear-gradient(90deg,transparent,transparent 9px,rgba(255,255,255,0.04) 9px,rgba(255,255,255,0.04) 10px)"
            }}
          >
            <div className="absolute w-[1px] h-full bg-white/15 left-1/2" />
            <div className="absolute h-[1px] w-full bg-white/15 top-1/2" />
            <div className="w-1.5 h-1.5 border border-white/60 relative z-10" />
          </div>

          <div className="font-mono text-[9px] text-white/60 border border-white/10 px-2 py-1 bg-white/[0.03] flex-shrink-0">
            MS://ROOM-04/SIGNAL-4489
          </div>

          <div className="flex flex-col text-[9px] uppercase tracking-widest gap-2 overflow-hidden">
            <div>
              <p className="text-white/40 mb-0.5">Related Objects</p>
              <p>Object 017</p>
              <p>Object 019</p>
              <p>Object 022</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Related Rooms</p>
              <p>Room 03: Image Systems</p>
              <p>Room 06: Signals from Kyiv</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Related Artist</p>
              <p>A. K.</p>
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
