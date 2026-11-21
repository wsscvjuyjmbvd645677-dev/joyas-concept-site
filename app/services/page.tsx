import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Services</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">Current ranges</h1>
      <p className="mt-6 max-w-xl text-base text-mute">
        Prices are ranges, not a menu. Scope is confirmed before work starts. Campaign systems begin at ₦250,000.
      </p>
      <div className="mt-14 space-y-8">
        {services.map((s, i) => (
          <article key={s.name} className="border border-line p-8 md:p-10 hover:border-gold/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">0{i + 1}</p>
                <h2 className="mt-3 font-serif text-4xl">{s.name}</h2>
                <p className="mt-4 max-w-lg text-base text-mute">{s.note}</p>
                <ul className="mt-6 space-y-2 text-sm text-mute">
                  {s.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <p className="text-xl text-gold">{s.range}</p>
                <Link href="/contact" className="mt-6 inline-block border border-gold/50 px-6 py-3 text-[12px] tracking-[0.16em] uppercase text-gold hover:bg-gold hover:text-ink">
                  Start This Project
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14">
        <CtaButton className="inline-block bg-paper px-8 py-4 text-[13px] tracking-[0.18em] uppercase text-ink hover:bg-gold">
          Start a Project
        </CtaButton>
      </div>
    </div>
  );
}
