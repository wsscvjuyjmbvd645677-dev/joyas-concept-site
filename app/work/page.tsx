import type { Metadata } from "next";
import { workAreas } from "@/lib/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Work</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl">Selected systems, not a catalogue of fake clients.</h1>
      <p className="mt-6 max-w-xl text-mute">
        This page is a showcase frame. Finished case studies go here when they are cleared to publish.
        No invented names, awards or metrics.
      </p>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {workAreas.map((item) => (
          <article key={item.slug} className="min-h-[280px] border border-line p-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{item.title}</p>
            <h2 className="mt-16 font-serif text-3xl">{item.line}</h2>
            <p className="mt-6 text-sm text-mute">Studio study · available on request</p>
          </article>
        ))}
      </div>
    </div>
  );
}
