"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    category: "Fashion",
    service: "Brand Identity",
    budget: "",
    timeline: "",
    description: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "opened" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.business || !form.email || !form.description) {
      setError("Please fill in name, business, email and project description.");
      setStatus("error");
      return;
    }
    setStatus("loading");

    const message = `Hello JOYAS CONCEPT,

I'd like to start a project.

Name: ${form.name}
Business/Brand: ${form.business}
Email: ${form.email}
WhatsApp: ${form.whatsapp || "Not provided"}
Category: ${form.category}
Service: ${form.service}
Budget: ${form.budget || "Not specified"}
Timeline: ${form.timeline || "Not specified"}

Project:
${form.description}

Thank you.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/2349126552362?text=${encoded}`;

    const opened = window.open(url, "_blank");
    if (opened) {
      setStatus("opened");
      setForm({
        name: "",
        business: "",
        email: "",
        whatsapp: "",
        category: "Fashion",
        service: "Brand Identity",
        budget: "",
        timeline: "",
        description: ""
      });
    } else {
      setStatus("error");
      setError("WhatsApp could not open. Please allow pop-ups or contact us directly.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Contact</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">Start a project</h1>
      <p className="mt-6 text-base leading-7 text-mute">
        Tell us about the brand. We reply with scope and a range on WhatsApp.
      </p>

      {status === "opened" && (
        <p className="mt-6 text-sm text-gold">WhatsApp opened with your details. We will reply with scope and a range.</p>
      )}

      <form onSubmit={handleSubmit} className="mt-12 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" required />
          </div>
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Business / brand name</label>
            <input name="business" value={form.business} onChange={handleChange} className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" required />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Email address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" required />
          </div>
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">WhatsApp number</label>
            <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+234..." className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Business category</label>
            <select name="category" value={form.category} onChange={handleChange} className="mt-2 w-full border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-gold">
              <option>Fashion</option>
              <option>Beauty</option>
              <option>Lifestyle</option>
              <option>Food</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Service required</label>
            <select name="service" value={form.service} onChange={handleChange} className="mt-2 w-full border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-gold">
              <option>Brand Identity</option>
              <option>Complete Brand Kit</option>
              <option>Campaign System</option>
              <option>Social Media Design</option>
              <option>Print & Advertising Design</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Project budget (optional)</label>
            <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₦150,000" className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" />
          </div>
          <div>
            <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Preferred timeline (optional)</label>
            <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 2 weeks" className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" />
          </div>
        </div>

        <div>
          <label className="text-[12px] tracking-[0.14em] uppercase text-mute">Project description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows={6} className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-paper outline-none focus:border-gold" required />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button type="submit" disabled={status === "loading"} className="w-full bg-paper py-4 text-[13px] tracking-[0.18em] uppercase text-ink hover:bg-gold disabled:opacity-60">
          {status === "loading" ? "Opening WhatsApp…" : "Send via WhatsApp"}
        </button>

        <p className="text-center text-[12px] text-mute">Opens WhatsApp with your details pre-filled.</p>
      </form>

      <div className="mt-16 border-t border-line pt-10 text-sm text-mute">
        <p>Or reach us directly:</p>
        <div className="mt-4 flex flex-col gap-2">
          <a href={site.instagram} className="hover:text-paper">Instagram {site.instagramHandle}</a>
          <a href={site.x} className="hover:text-paper">X {site.handle}</a>
          <a href="https://wa.me/2349126552362" className="hover:text-paper">WhatsApp +234 912 655 2362</a>
        </div>
      </div>
    </div>
  );
}
