import { siteConfig } from "@/lib/siteConfig";

export default function Navigation() {
  return (
    <nav className="w-full border-b border-white/20 flex text-[10px] uppercase tracking-wider" style={{ height: "28px" }}>
      {siteConfig.nav.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex-1 flex items-center justify-center border-r border-white/20 hover:bg-white hover:text-black transition-colors whitespace-nowrap px-1"
          data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
        >
          {link.label}
        </a>
      ))}
      <a href="#releases" className="px-3 flex items-center hover:bg-white hover:text-black transition-colors whitespace-nowrap" data-testid="nav-link-cart">
        Cart (0)
      </a>
    </nav>
  );
}
