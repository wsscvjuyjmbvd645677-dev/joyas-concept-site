import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-[12px] tracking-[0.18em] text-gold">
                JA
              </span>
              <span className="font-serif text-2xl">{site.name}</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              Brand Lab · Lagos. Identity systems for ambitious businesses. One mark. One type. One colour.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Navigate</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-mute">
              <Link href="/work" className="hover:text-paper">Work</Link>
              <Link href="/services" className="hover:text-paper">Services</Link>
              <Link href="/about" className="hover:text-paper">About</Link>
              <Link href="/contact" className="hover:text-paper">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Connect</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-mute">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Instagram {site.instagramHandle}
              </a>
              <a href={site.x} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                X {site.handle}
              </a>
              <a href="https://wa.me/2349126552362" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                WhatsApp +234 912 655 2362
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[12px] text-mute md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Lagos · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
