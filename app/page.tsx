import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { flint, process, services, site, workAreas } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-36">
        <p className="reveal text-[11px] tracking-[0.28em] uppercase text-gold">BRAND LAB · LAGOS</p>
        <h1 className="reveal mt-8 max-w-5xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          IDENTITY SYSTEMS FOR AMBITIOUS BUSINESSES.
        </h1>
        <p className="reveal mt-10 max-w-2xl text-lg leading-8 text-mute md:text-xl">
          One mark. One type. One colour. Applied until people recognise you without the name.
        </p>
        <div className="reveal mt-12 flex flex-wrap gap-5">
          <Link href="/work" className="border border-line px-8 py-4 text-[13px] tracking-[0.2em] uppercase text-mute hover:text-paper hover:border-gold">
            Explore Selected Work
          </Link>
          <CtaButton className="bg-paper px-8 py-4 text-[13px] tracking-[0.2em] uppercase text-ink hover:bg-gold">
            Start a Project
          </CtaButton>
        </div>
      </section>

      <section className="border-y border-line">
        <Link href="/work" className="block hover:bg-white/[0.02] transition-colors">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="border-b border-line md:border-b-0 md:border-r">
              <img
                src={flint.hero}
                alt={flint.images[0].alt}
                className="block h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end px-6 py-12 md:px-12">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{flint.kicker}</p>
              <h2 className="mt-5 font-serif text-5xl md:text-6xl">{flint.title}</h2>
              <p className="mt-5 max-w-sm text-base text-mute">{flint.line}</p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-gold">{flint.note}</p>
              <p className="mt-10 text-[12px] tracking-[0.16em] uppercase text-mute">
                View the study →
              </p>
            </div>
          </div>
        </Link>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          {workAreas.slice(0, 4).map((item, i) => (
            <Link
              key={item.slug}
              href="/work"
              className="border-line px-6 py-12 hover:bg-white/[0.02] transition-colors md:border-r md:even:border-r-0 md:[&:nth-child(-n+2)]:border-b"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold">0{i + 1}</p>
              <h2 className="mt-5 font-serif text-4xl">{item.title}</h2>
              <p className="mt-4 max-w-sm text-base text-mute">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Services</p>
        <h2 className="mt-4 font-serif text-5xl md:text-6xl">What we sell</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <div key={s.name} className="grid gap-3 py-8 md:grid-cols-[1.2fr_1fr_1.4fr] md:items-baseline">
              <h3 className="text-base tracking-[0.08em] uppercase">{s.name}</h3>
              <p className="text-gold text-lg">{s.range}</p>
              <p className="text-base text-mute">{s.note}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="mt-10 inline-block text-[13px] tracking-[0.16em] uppercase text-mute hover:text-paper">
          Full services →
        </Link>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Process</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl">How we work</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-5">
            {process.map((step) => (
              <div key={step.number}>
                <p className="text-gold text-sm tracking-[0.2em]">{step.number}</p>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="font-serif text-5xl md:text-6xl">Start a project</h2>
        <p className="mx-auto mt-6 max-w-md text-mute">Tell us about the brand. We reply with scope and a range.</p>
        <div className="mt-10">
          <CtaButton className="inline-block bg-paper px-10 py-5 text-[13px] tracking-[0.2em] uppercase text-ink hover:bg-gold">
            Start a Project
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
