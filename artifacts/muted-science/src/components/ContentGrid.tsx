import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const HDR = 26;
const NOTE = 60;
const TOTAL = HDR + NOTE * 5 + HDR;

export default function ContentGrid() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full border-b border-white/20"
      style={{ height: TOTAL, display: "grid", gridTemplateColumns: "22% 52% 26%" }}
    >
      {/* ── Left: Notes ── */}
      <div className="flex flex-col border-r border-white/20 overflow-hidden">
        <div
          className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: HDR }}
        >
          {siteConfig.labels.latestNotes}
        </div>

        {siteConfig.contentNotes.map((note, i) => (
          <Link
            key={i}
            href="/"
            className="flex-shrink-0 flex flex-col justify-center px-2 border-b border-white/10 group hover:bg-white/5 transition-colors overflow-hidden"
            style={{ height: NOTE }}
            data-testid={`note-item-${i}`}
          >
            <span className="text-[9px] text-white/40 font-mono leading-none mb-1">{note.date}</span>
            <span className="text-[10px] leading-tight group-hover:underline underline-offset-2 line-clamp-2">{note.title}</span>
          </Link>
        ))}

        <Link
          href="/"
          className="flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors mt-auto"
          style={{ height: HDR }}
          data-testid="link-view-all-notes"
        >
          {siteConfig.labels.viewAllNotes} &rarr;
        </Link>
      </div>

      {/* ── Center: Featured ── */}
      <div className="flex flex-col border-r border-white/20 overflow-hidden">
        <div
          className="flex-shrink-0 flex items-center justify-between px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: HDR }}
        >
          <span>{siteConfig.labels.featuredProject}</span>
          <span>04.4</span>
        </div>

        <div className="flex-1 relative overflow-hidden cursor-pointer group">
          <img
            src="/images/featured.png"
            alt="Kyiv / Body / Static"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
            <p className="text-[8px] uppercase tracking-widest text-white/50 mb-0.5">{siteConfig.labels.featuredProject}</p>
            <h2 className="font-display uppercase leading-none text-white" style={{ fontSize: "clamp(18px, 2.6vw, 34px)" }}>
              Kyiv / Body / Static
            </h2>
          </div>
        </div>

        <Link
          href="/"
          className="flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          style={{ height: HDR }}
          data-testid="link-view-project"
        >
          {siteConfig.labels.viewProject} &rarr;
        </Link>
      </div>

      {/* ── Right: Coordinates ── */}
      <div className="flex flex-col overflow-hidden">
        <div
          className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: HDR }}
        >
          Coordinates
        </div>

        <div className="flex-1 flex flex-col gap-2 p-2 overflow-hidden">
          <div
            className="w-full border border-white/20 relative flex-shrink-0 flex items-center justify-center"
            style={{
              height: 76,
              background:
                "repeating-linear-gradient(0deg,transparent,transparent 7px,rgba(255,255,255,0.05) 7px,rgba(255,255,255,0.05) 8px)," +
                "repeating-linear-gradient(90deg,transparent,transparent 7px,rgba(255,255,255,0.05) 7px,rgba(255,255,255,0.05) 8px)",
            }}
          >
            <div className="absolute w-px h-full bg-white/15 left-1/2" />
            <div className="absolute h-px w-full bg-white/15 top-1/2" />
            <div className="w-1.5 h-1.5 border border-white/70 relative z-10" />
          </div>

          <div className="font-mono text-[9px] text-white/60 border border-white/10 px-2 py-1 bg-white/[0.03] flex-shrink-0 truncate">
            MS://ROOM-04/SIGNAL-4489
          </div>

          <div className="flex flex-col gap-1.5 text-[9px] uppercase tracking-widest overflow-hidden">
            <p className="text-white/40">Related Objects</p>
            <p className="text-white/75">Object 017 &nbsp; Object 019 &nbsp; Object 022</p>
            <p className="text-white/40 mt-0.5">Related Rooms</p>
            <p className="text-white/75 truncate">Room 03: Image Systems</p>
            <p className="text-white/75 truncate">Room 06: Signals from Kyiv</p>
            <p className="text-white/40 mt-0.5">Related Artist</p>
            <p className="text-white/75">A. K.</p>
          </div>
        </div>

        <Link
          href="/"
          className="flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          style={{ height: HDR }}
          data-testid="link-view-index"
        >
          {siteConfig.labels.viewFullIndex} &rarr;
        </Link>
      </div>
    </motion.section>
  );
}
