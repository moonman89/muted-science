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
    <nav className="w-full border-b border-white/20 flex text-[10px] uppercase tracking-widest" data-testid="nav-main">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex-1 px-4 py-2.5 border-r border-white/20 hover:bg-white hover:text-black transition-colors text-center"
          data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
        >
          {link.label}
        </Link>
      ))}
      <Link href="/" className="px-4 py-2.5 border-r border-white/20 hover:bg-white hover:text-black transition-colors" data-testid="nav-link-search">
        Search
      </Link>
      <Link href="/" className="px-4 py-2.5 hover:bg-white hover:text-black transition-colors" data-testid="nav-link-cart">
        Cart (0)
      </Link>
    </nav>
  );
}
