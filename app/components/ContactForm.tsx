"use client";

import { useState } from "react";

const SUPPORT_EMAIL = "cengizsen17@hotmail.com";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const subject = encodeURIComponent(`BlockSet Support — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 500);
  }

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-navy-deep/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-electric/60 focus:ring-2 focus:ring-electric/30";

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium uppercase tracking-wide text-slate-400"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wide text-slate-400"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium uppercase tracking-wide text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help…"
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="glossy-btn group mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-strong via-electric to-emerald font-semibold text-navy-deep shadow-[0_10px_30px_-10px_rgba(56,189,248,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,0.8)] disabled:opacity-60"
        >
          {status === "submitting" ? "Opening your mail app…" : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-emerald-soft">
            Thanks! Your email draft is ready — just hit send. Prefer to write us
            directly?{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium underline decoration-emerald/50 underline-offset-2"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        )}

        <p className="text-center text-xs text-slate-500">
          Or reach us directly at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-slate-300 underline decoration-white/20 underline-offset-2 hover:text-electric"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  );
}
