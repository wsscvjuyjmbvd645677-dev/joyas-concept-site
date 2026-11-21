import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { concepts, flint, workAreas } from "@/lib/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Work</p>
      <h1 className="mt-4 max-w-4xl font-serif text-5xl md:text-6xl leading-[0.95]">
        Selected systems, not a catalogue of fake clients.
      </h1>
      <p className="mt-8 max-w-2xl text-base leading-7 text-mute">
        Studio studies and concept work. No invented client names, awards or metrics. Paid work replaces concepts as it is completed.
      </p>

      <article className="mt-20 border border-line">
        <div className="border-b border-line p-8 md:flex md:items-end md:justify-between md:p-12">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{flint.kicker}</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl">{flint.title}</h2>
            <p className="mt-5 text-lg text-paper">{flint.line}</p>
            <p className="mt-4 text-[12px] tracking-[0.16em] uppercase text-gold">{flint.note}</p>
          </div>
          <p className="mt-8 text-[11px] tracking-[0.18em] uppercase text-mute md:mt-0">
            JOYAS CONCEPT × FLINT
          </p>
        </div>

        <div className="grid gap-px bg-line md:grid-cols-2">
          {flint.images.map((img) => (
            <figure key={img.src} className={img.wide ? "bg-ink md:col-span-2" : "bg-ink"}>
              <img
                src={img.src}
                alt={img.alt}
                className="block h-auto w-full"
                loading={img.src === flint.hero ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </article>

      <p className="mt-20 text-[11px] tracking-[0.22em] uppercase text-gold">Concept Studies</p>
      <div className="mt-8 space-y-12">
        {concepts.map((concept) => (
          <article key={concept.title} className="border border-line">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-line md:border-b-0 md:border-r">
                <img
                  src={concept.image}
                  alt={concept.alt}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-12">
                <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{concept.kicker}</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl">{concept.title}</h2>
                <p className="mt-5 text-base text-mute">{concept.line}</p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase text-gold">{concept.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-20 text-[11px] tracking-[0.22em] uppercase text-gold">Other frames</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {workAreas.map((item) => (
          <article key={item.slug} className="min-h-[240px] border border-line p-8 hover:border-gold/40 transition-colors">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{item.title}</p>
            <h2 className="mt-14 font-serif text-3xl md:text-4xl">{item.line}</h2>
            <p className="mt-8 text-sm text-mute">Further studies · available on request</p>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <CtaButton className="inline-block bg-paper px-8 py-4 text-[13px] tracking-[0.18em] uppercase text-ink hover:bg-gold">
          Start a Project
        </CtaButton>
      </div>
    </div>
  );
}
