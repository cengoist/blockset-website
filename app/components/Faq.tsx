"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I restore my purchases?",
    answer:
      "Open BlockSet, go to Settings → Restore Purchases, and sign in with the same Apple ID or Google account you originally used. Your ad-free upgrade and any unlocked themes will be re-applied instantly. If anything is missing, email us and we'll sort it out the same day.",
  },
  {
    question: "How do I reset my high score?",
    answer:
      "Head to Settings → Game Data → Reset Progress. You'll be asked to confirm, then your high score, streaks, and board state are wiped so you can start fresh. This action can't be undone, so make sure it's what you want.",
  },
  {
    question: "Is BlockSet really free to play offline?",
    answer:
      "Yes. The full puzzle experience runs 100% offline with no account required. We show occasional ads to keep the game free, and you can remove them anytime with a one-time in-app purchase.",
  },
  {
    question: "Does BlockSet collect my personal data?",
    answer:
      "We don't ask for your name or email to play. Our ad and analytics partners may collect device-level identifiers to serve ads and measure performance. You can review exactly what is collected in our Privacy Policy and opt out of personalized ads in your device settings.",
  },
  {
    question: "I found a bug or have a feature idea. What now?",
    answer:
      "We'd love to hear it. Use the contact form above or email cengizsen17@hotmail.com with your device model and OS version. We read every message and ship updates regularly.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-electric transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
      {FAQ_ITEMS.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            className="glass overflow-hidden rounded-2xl transition-colors duration-300 hover:border-white/20"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-medium text-slate-100">
                {item.question}
              </span>
              <ChevronIcon open={open} />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
