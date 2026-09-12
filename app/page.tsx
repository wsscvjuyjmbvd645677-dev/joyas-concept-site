import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { flint, services, site, workAreas } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-28">
        <p className="reveal text-[11px] tracking-[0.28em] uppercase text-gold">{site.position} · {site.location}</p>
        <h1 className="reveal mt-6 max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl">
          {site.tagline}
        </h1>
        <p className="reveal mt-8 max-w-xl text-base leading-7 text-mute">
          Identity systems for businesses that already cost money — and still look unfinished online.
          One mark. One type. One colour. Applied until people recognise you without the name.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4">
          <CtaButton className="bg-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-ink">
            Start a Project
          </CtaButton>
          <Link href="/work" className="border border-line px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-mute hover:text-paper">
            Selected work
          </Link>
        </div>
      </section>

      <section className="border-y border-line">
        <Link href="/work" className="block hover:bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="border-b border-line md:border-b-0 md:border-r">
              <img
                src={flint.hero}
                alt={flint.images[0].alt}
                className="block h-auto w-full"
              />
            </div>
            <div className="flex flex-col justify-end px-5 py-10 md:px-10">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{flint.kicker}</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">{flint.title}</h2>
              <p className="mt-4 max-w-sm text-sm text-mute">{flint.line}</p>
              <p className="mt-8 text-[12px] tracking-[0.16em] uppercase text-mute">
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
              className="border-line px-5 py-10 hover:bg-white/[0.02] md:border-r md:even:border-r-0 md:[&:nth-child(-n+2)]:border-b"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold">0{i + 1}</p>
              <h2 className="mt-4 font-serif text-3xl">{item.title}</h2>
              <p className="mt-3 max-w-sm text-sm text-mute">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Services</p>
        <h2 className="mt-3 font-serif text-4xl">What we sell</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <div key={s.name} className="grid gap-2 py-6 md:grid-cols-[1.2fr_1fr_1.4fr] md:items-baseline">
              <h3 className="text-sm tracking-[0.08em] uppercase">{s.name}</h3>
              <p className="text-gold">{s.range}</p>
              <p className="text-sm text-mute">{s.note}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-block text-[12px] tracking-[0.16em] uppercase text-mute hover:text-paper">
          Full services →
        </Link>
      </section>
    </div>
  );
}
