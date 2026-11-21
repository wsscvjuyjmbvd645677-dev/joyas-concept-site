import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">About</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">{site.name}</h1>
      <p className="mt-6 text-sm tracking-[0.16em] uppercase text-gold">Brand Lab · Lagos</p>
      <div className="mt-12 space-y-8 text-base leading-8 text-mute md:text-lg">
        <p>
          JOYAS CONCEPT is a Lagos-based Brand Lab. We build identity systems for ambitious businesses that already cost money but still look unfinished online.
        </p>
        <p>
          Identity comes first. One mark. One type system. One colour system. Applied consistently until people recognise the brand without its name. Social media, campaigns and print follow from a proper identity system.
        </p>
        <p>
          Quiet confidence. Commercial quality. Strategic design. No decoration without a reason. Premium editorial presentation. Nigeria-based, internationally competitive.
        </p>
        <p>
          The standard is recognition. If the logo can be covered and the brand is still identifiable, the system is working. Every decision serves that outcome.
        </p>
      </div>
    </div>
  );
}
