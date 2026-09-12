import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { flint, workAreas } from "@/lib/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Work</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl">Selected systems, not a catalogue of fake clients.</h1>
      <p className="mt-6 max-w-xl text-mute">
        Finished studies go here when they exist. No invented names, awards or metrics.
      </p>

      <article className="mt-16 border border-line">
        <div className="border-b border-line p-7 md:flex md:items-end md:justify-between md:p-10">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{flint.kicker}</p>
            <h2 className="mt-3 font-serif text-5xl">{flint.title}</h2>
            <p className="mt-4 text-paper">{flint.line}</p>
            <p className="mt-3 text-sm text-mute">{flint.note}</p>
          </div>
          <p className="mt-6 text-[11px] tracking-[0.18em] uppercase text-mute md:mt-0">
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

      <p className="mt-16 text-[11px] tracking-[0.22em] uppercase text-gold">Other frames</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {workAreas.map((item) => (
          <article key={item.slug} className="min-h-[220px] border border-line p-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{item.title}</p>
            <h2 className="mt-12 font-serif text-3xl">{item.line}</h2>
            <p className="mt-6 text-sm text-mute">Further studies · available on request</p>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <CtaButton className="inline-block bg-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-ink">
          Start a Project
        </CtaButton>
      </div>
    </div>
  );
}
