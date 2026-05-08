import { siteConfig } from "@/lib/siteConfig";

export default function TopBar() {
  return (
    <header className="flex flex-row items-center justify-between px-3 border-b border-white/20 text-[10px] uppercase tracking-widest" style={{ height: "32px" }}>
      <div className="font-bold whitespace-nowrap flex-shrink-0">
        {siteConfig.name}
      </div>
      <div className="flex-1 text-center text-white/50 px-4 hidden sm:block truncate">
        {siteConfig.tagline}
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className="whitespace-nowrap">Current Transmission: {siteConfig.currentTransmission}</span>
        <span className="text-white/50 whitespace-nowrap hidden md:inline">Kyiv / Body / Static</span>
      </div>
    </header>
  );
}
