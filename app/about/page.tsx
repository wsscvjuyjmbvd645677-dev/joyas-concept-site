import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">About</p>
      <h1 className="mt-3 font-serif text-5xl">{site.name}</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-mute">
        <p>
          JOYAS CONCEPT is a brand and design studio. We work with ambitious businesses that need to look
          more premium, more credible, and ready to sell — without looking like a template page.
        </p>
        <p>
          The work is identity first: mark, type, colour, crop, application. Social, campaign and print
          come after the system exists. If the logo can be covered and nobody can tell it is you, the brand
          is not finished.
        </p>
        <p>
          We operate from Lagos and build for businesses that sell in Nigeria and beyond. Quiet work.
          Commercial standards. No decoration without a rule.
        </p>
      </div>
    </div>
  );
}
