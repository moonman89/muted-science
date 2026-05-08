export default function TopBar() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b border-white/20 text-[10px] md:text-[11px] uppercase tracking-widest gap-2 md:gap-0">
      <div className="w-full md:w-1/3 flex justify-start font-bold">
        Muted Science
      </div>
      <div className="w-full md:w-1/3 flex justify-center text-white/50 text-center">
        A creative system operating between image, object, garment and signal.
      </div>
      <div className="w-full md:w-1/3 flex justify-end gap-6">
        <span>Current Transmission: 04</span>
        <span className="text-white/50 hidden md:inline">Kyiv / Body / Static</span>
      </div>
    </header>
  );
}
