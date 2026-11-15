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
          JOYAS CONCEPT is a brand and design studio based in Lagos. We help ambitious businesses look more premium, more credible, and commercially ready — without looking like a template.
        </p>
        <p>
          The work is identity first: mark, type, colour, crop, application. Social, campaign and print follow only after the system exists. If the logo can be covered and nobody can tell it is you, the brand is not finished.
        </p>
        <p>
          We design for businesses that sell in Nigeria and beyond. Quiet confidence. Commercial standards. No decoration without a rule. Every mark, every type choice, every colour decision exists to make the brand look expensive.
        </p>
        <p className="text-paper">
          We make brands look expensive.
        </p>
      </div>
    </div>
  );
}
