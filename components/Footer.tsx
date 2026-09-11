import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{site.position}</p>
          <p className="mt-2 font-serif text-2xl">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-mute">{site.location}. Identity systems for businesses that want to look finished.</p>
        </div>
        <div className="flex gap-6 text-[12px] tracking-[0.14em] uppercase text-mute">
          <Link href={site.x} className="hover:text-paper">
            X {site.handle}
          </Link>
          <Link href="/contact" className="hover:text-paper">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
