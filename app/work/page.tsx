import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { flint } from "@/lib/site";

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

        <div className="border-t border-line p-8 md:p-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Identity system notes</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mute">
            {flint.systemNotes}
          </p>
          <p className="mt-6 text-sm text-mute">
            This is an unofficial studio study. The campaign photographs demonstrate application of the wordmark and lockup. Exact font names, hex values and full brand guidelines were not part of the available source material.
          </p>
        </div>
      </article>

      <div className="mt-20">
        <CtaButton className="inline-block bg-paper px-8 py-4 text-[13px] tracking-[0.18em] uppercase text-ink hover:bg-gold">
          Start a Project
        </CtaButton>
      </div>
    </div>
  );
}
