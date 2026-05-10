import { siteConfig } from "@/lib/siteConfig";

export default function Navigation() {
  return (
    <nav className="ms-nav w-full border-b border-white/20 text-[10px] uppercase tracking-wider">
      {siteConfig.nav.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex min-w-0 items-center justify-center border-r border-white/20 px-1 text-center leading-none hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none last:border-r-0"
          data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
        >
          <span className="truncate">{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
