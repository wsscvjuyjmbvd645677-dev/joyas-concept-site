import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Contact</p>
      <h1 className="mt-3 font-serif text-5xl">Start a project</h1>
      <p className="mt-6 text-mute">
        Send the brand name, what you sell, and what needs to look expensive. We reply with scope and a range.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        <CtaButton className="bg-paper px-6 py-4 text-center text-[12px] tracking-[0.18em] uppercase text-ink">
          Start a Project
        </CtaButton>
        <Link href={site.x} className="border border-line px-6 py-4 text-center text-[12px] tracking-[0.18em] uppercase text-mute hover:text-paper">
          X {site.handle}
        </Link>
      </div>
      <p className="mt-8 text-sm text-mute">
        Primary button uses X until a WhatsApp number is added in public/config.json.
      </p>
    </div>
  );
}
