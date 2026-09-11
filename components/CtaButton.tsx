"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  children?: string;
};

export function CtaButton({ className, children }: Props) {
  const [href, setHref] = useState(site.x);
  const [label, setLabel] = useState(children || "Start a Project on X");

  useEffect(() => {
    fetch("/config.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((cfg) => {
        const num = String(cfg.whatsapp || "").replace(/\D/g, "");
        if (!num) return;
        const text = encodeURIComponent("Hello JOYAS CONCEPT — I want to start a project.");
        setHref(`https://wa.me/${num}?text=${text}`);
        setLabel("Start a Project on WhatsApp");
      })
      .catch(() => undefined);
  }, [children]);

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}
