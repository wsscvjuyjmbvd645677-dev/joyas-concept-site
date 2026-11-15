import type { Metadata } from "next";
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
      <div className="mt-14 space-y-5">
        {services.map((s) => (
          <article key={s.name} className="border border-line p-8 md:flex md:items-end md:justify-between hover:border-gold/40 transition-colors">
            <div>
              <h2 className="font-serif text-4xl">{s.name}</h2>
              <p className="mt-4 max-w-md text-base text-mute">{s.note}</p>
            </div>
            <p className="mt-6 text-xl text-gold md:mt-0">{s.range}</p>
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
