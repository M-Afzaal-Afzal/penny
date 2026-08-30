import { FOOTER } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer>
      <div className="in">
        <span>{FOOTER.copyright}</span>
        <nav>
          {FOOTER.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="legal">{FOOTER.legal}</p>
    </footer>
  );
}
