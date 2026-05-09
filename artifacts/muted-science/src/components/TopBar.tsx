import { siteConfig } from "@/lib/siteConfig";

export default function TopBar() {
  return (
    <header className="ms-topbar flex flex-row items-center justify-between gap-3 px-3 py-0 border-b border-white/20 text-[10px] uppercase tracking-widest">
      <div className="font-bold whitespace-nowrap flex-shrink-0">
        {siteConfig.name}
      </div>
      <div className="ms-topbar__tagline flex-1 text-center text-white/50 px-4 hidden sm:block truncate min-w-0">
        {siteConfig.tagline}
      </div>
      <div className="ms-topbar__right flex items-center gap-4 flex-shrink-0 min-w-0">
        <span className="whitespace-nowrap">Transmission: {siteConfig.currentTransmission}</span>
        <span className="text-white/50 whitespace-nowrap hidden md:inline">Kyiv / Body / Static</span>
      </div>
    </header>
  );
}
