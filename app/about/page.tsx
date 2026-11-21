import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">About</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">{site.name}</h1>
      <div className="mt-12 space-y-8 text-base leading-8 text-mute md:text-lg">
        <p>
          JOYAS CONCEPT is a Brand Lab in Lagos. We build identity systems for ambitious businesses that already cost money but still look unfinished online.
        </p>
        <p>
          The work is identity first: one mark, one type, one colour, applied until the brand is recognisable without the name. Social media, campaigns and print follow only after the system exists. If the logo can be covered and nobody can tell it is you, the brand is not finished.
        </p>
        <p>
          Quiet confidence. Commercial standards. No decoration without a rule. Recognition before decoration. Identity before campaigns. Consistency across every brand touchpoint.
        </p>
        <p>
          We design for businesses that sell in Nigeria and beyond. Every mark, type choice and colour decision exists to make the brand commercially ready and recognisable.
        </p>
      </div>
    </div>
  );
}
