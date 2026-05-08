import { motion } from "framer-motion";
import { Link } from "wouter";

const notes = [
  { date: "12.05.24", title: "Thermal degradation of memory objects" },
  { date: "09.05.24", title: "Structural analysis: Field Jacket 004" },
  { date: "03.05.24", title: "Signal interference in underground spaces" },
  { date: "28.04.24", title: "The body as an antenna" },
  { date: "15.04.24", title: "Acoustic properties of ruined concrete" },
  { date: "12.04.24", title: "Transmission protocols for isolation" },
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
        <div className="px-4 py-3 border-b border-white/20 text-[11px] uppercase tracking-widest text-white/50">
          Latest Notes
        </div>
        <div className="flex flex-col flex-1 divide-y divide-white/10">
          {notes.map((note, i) => (
            <Link key={i} href="/" className="px-4 py-4 group hover:bg-white/5 transition-colors flex flex-col gap-1 cursor-pointer block">
              <span className="text-[10px] text-white/40 font-mono">{note.date}</span>
              <span className="text-sm tracking-wide group-hover:underline underline-offset-2">{note.title}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className="px-4 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 mt-auto block">
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
        <div className="px-4 py-3 border-b border-white/20 text-[11px] uppercase tracking-widest text-white/50 flex justify-between">
          <span>Featured Project</span>
          <span>04.4</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-center gap-6">
          <div className="w-full aspect-[4/3] bg-white/5 relative group cursor-pointer overflow-hidden">
            <img 
              src="/images/featured.png" 
              alt="Featured project" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-display uppercase leading-none">Kyiv / Body / Static</h2>
            <p className="text-sm text-white/60 max-w-md">An exploration of isolation and environmental noise. The garments act as shields against both physical elements and unwanted frequencies.</p>
          </div>
        </div>
        <Link href="/" className="px-4 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 block">
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
        <div className="px-4 py-3 border-b border-white/20 text-[11px] uppercase tracking-widest text-white/50">
          Coordinates
        </div>
        <div className="p-4 flex flex-col gap-6 flex-1">
          <div className="w-full aspect-square border border-white/20 relative flex items-center justify-center p-2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-80 mix-blend-screen">
             <div className="absolute w-[1px] h-full bg-white/20 left-1/2 top-0" />
             <div className="absolute h-[1px] w-full bg-white/20 top-1/2 left-0" />
             <div className="w-2 h-2 border border-white/50 relative z-10" />
          </div>
          
          <div className="font-mono text-xs text-white/70 bg-white/5 p-3 border border-white/10">
            MS://ROOM-04/SIGNAL-4489<br/>
            LAT: 50.4501 N<br/>
            LON: 30.5234 E<br/>
            FREQ: 144.02 MHz
          </div>

          <div className="flex flex-col text-[11px] uppercase tracking-widest gap-3">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/50">Related Objects</span>
              <span>03</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/50">Related Rooms</span>
              <span>02</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/50">Related Artist</span>
              <span>Unknown</span>
            </div>
          </div>
        </div>
        <Link href="/" className="px-4 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-t border-white/20 mt-auto block">
          View Full Index &rarr;
        </Link>
      </motion.div>
      
    </section>
  );
}
