import { motion } from "framer-motion";
import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

export default function SignalFeed() {
  const release = siteConfig.releaseProducts.ms001;

  return (
    <Link
      href={release.href}
      className="ms-signal-feed group w-full border-b border-white/20 text-[9px] uppercase tracking-widest hover:bg-white hover:text-black"
      data-testid="link-live-signal-ms001"
    >
      <div className="min-w-0 px-2 flex items-center whitespace-nowrap border-r border-white/20 group-hover:border-black/20">
        Live Signal Feed
      </div>
      <div className="min-w-0 px-2 flex items-center justify-center font-mono whitespace-nowrap border-r border-white/20 text-center group-hover:border-black/20">
        MS-001 — Pronounced Love
      </div>
      <div className="min-w-0 px-2 flex items-center justify-end gap-2 text-white/60 whitespace-nowrap group-hover:text-black">
        Digital PDF / {release.price} / Open Project
        <motion.div
          className="w-1 h-1 bg-white rounded-full flex-shrink-0 group-hover:bg-black"
          animate={{ opacity: [1, 0.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </Link>
  );
}
