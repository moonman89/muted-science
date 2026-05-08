import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";

export default function Navigation() {
  return (
    <nav className="w-full border-b border-white/20 flex text-[10px] uppercase tracking-wider" style={{ height: "28px" }}>
      {siteConfig.nav.links.map((label, i) => (
        <Link
          key={label}
          href="/"
          className="flex-1 flex items-center justify-center border-r border-white/20 hover:bg-white hover:text-black transition-colors whitespace-nowrap px-1"
          data-testid={`nav-link-${label.toLowerCase().replace(" ", "-")}`}
        >
          {label}
        </Link>
      ))}
      <Link href="/" className="px-3 flex items-center hover:bg-white hover:text-black transition-colors whitespace-nowrap" data-testid="nav-link-cart">
        Cart (0)
      </Link>
    </nav>
  );
}
