import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

const HDR = 26;
const NOTE = 60;

export default function ContentGrid() {
  const featuredRelease = siteConfig.releaseProducts.ms001;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="ms-content-grid w-full border-b border-white/20"
    >
      <div className="flex flex-col border-r border-white/20 overflow-hidden min-w-0">
        <div
          className="flex-shrink-0 flex items-center px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: HDR }}
        >
          {siteConfig.labels.latestNotes}
        </div>

        {siteConfig.contentNotes.map((note, i) => (
          <Link
            key={i}
            href="#archive"
            className="ms-card-link flex-shrink-0 flex flex-col justify-center px-2 border-b border-white/10 group hover:bg-white/5 hover:text-white transition-colors overflow-hidden"
            style={{ height: NOTE }}
            data-testid={`note-item-${i}`}
          >
            <span className="text-[9px] text-white/40 font-mono leading-none mb-1">{note.date}</span>
            <span className="text-[10px] leading-tight group-hover:underline underline-offset-2 ms-clamp-2">{note.title}</span>
          </Link>
        ))}

        <Link
          href="#archive"
          className="ms-cta-row flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors mt-auto"
          style={{ height: HDR }}
          data-testid="link-view-all-notes"
        >
          {siteConfig.labels.viewAllNotes} &rarr;
        </Link>
      </div>

      <div className="ms-content-grid__featured ms-feature-card flex flex-col overflow-hidden min-w-0">
        <div
          className="flex-shrink-0 flex items-center justify-between gap-3 px-2 border-b border-white/20 text-[9px] uppercase tracking-widest text-white/50"
          style={{ height: HDR }}
        >
          <span className="truncate">Featured Release</span>
          <span className="shrink-0">{featuredRelease.code}</span>
        </div>

        <Link href={featuredRelease.href} className="flex-1 relative overflow-hidden cursor-pointer group min-h-[260px]">
          <img
            src={featuredRelease.previewImages[0]}
            alt={featuredRelease.displayTitle}
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10">
            <p className="text-[8px] uppercase tracking-widest text-white/50 mb-1">{featuredRelease.format}</p>
            <h2 className="font-display uppercase leading-none text-white" style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}>
              MS-001 / Pronounced Love
            </h2>
            <p className="mt-2 max-w-xl text-[9px] uppercase tracking-widest text-white/55">
              62 days / Reflect. Write. Act. Integrate.
            </p>
          </div>
        </Link>

        <Link
          href={featuredRelease.href}
          className="ms-cta-row flex-shrink-0 flex items-center px-2 border-t border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          style={{ height: HDR }}
          data-testid="link-view-project"
        >
          View Release &rarr;
        </Link>
      </div>
    </motion.section>
  );
}
