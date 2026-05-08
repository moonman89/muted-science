import { Link } from "wouter";

export default function Navigation() {
  const links = [
    { label: "Signal", href: "/" },
    { label: "Archive", href: "/" },
    { label: "Garments", href: "/" },
    { label: "Objects", href: "/" },
    { label: "Field Notes", href: "/" },
    { label: "People", href: "/" },
  ];

  return (
    <nav className="w-full border-b border-white/20 flex flex-wrap text-[11px] uppercase tracking-widest">
      {links.map((link, i) => (
        <Link 
          key={link.label} 
          href={link.href}
          className={`flex-1 md:flex-none px-6 py-4 border-b md:border-b-0 border-white/20 md:border-r hover:bg-white hover:text-black transition-colors text-center md:text-left ${i === links.length - 1 ? '' : ''}`}
        >
          {link.label}
        </Link>
      ))}
      <div className="flex-1 flex border-t md:border-t-0 border-white/20">
        <Link href="/" className="flex-1 px-6 py-4 border-r border-white/20 hover:bg-white hover:text-black transition-colors text-center md:text-left">
          Search
        </Link>
        <Link href="/" className="px-6 py-4 hover:bg-white hover:text-black transition-colors min-w-max text-center md:text-left">
          Cart (0)
        </Link>
      </div>
    </nav>
  );
}
