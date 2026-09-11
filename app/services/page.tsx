import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Services</p>
      <h1 className="mt-3 font-serif text-5xl">Current ranges</h1>
      <p className="mt-6 max-w-xl text-mute">
        Prices are ranges, not a menu. Scope is confirmed before work starts.
      </p>
      <div className="mt-12 space-y-4">
        {services.map((s) => (
          <article key={s.name} className="border border-line p-7 md:flex md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl">{s.name}</h2>
              <p className="mt-3 max-w-md text-sm text-mute">{s.note}</p>
            </div>
            <p className="mt-6 text-gold md:mt-0">{s.range}</p>
          </article>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-block bg-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-ink">
        Start a Project
      </Link>
    </div>
  );
}
