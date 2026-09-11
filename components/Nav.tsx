import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 text-[11px] tracking-[0.18em] text-gold">
            JA
          </span>
          <span className="text-[12px] font-medium tracking-[0.22em] uppercase">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[12px] tracking-[0.16em] uppercase text-mute md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-paper">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="border border-gold/50 px-3 py-2 text-[11px] tracking-[0.18em] uppercase text-gold hover:bg-gold hover:text-ink"
        >
          Start a Project
        </Link>
      </div>
      <nav className="flex gap-5 overflow-x-auto border-t border-line px-5 py-3 text-[11px] tracking-[0.16em] uppercase text-mute md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-paper">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
