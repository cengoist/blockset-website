import Image from "next/image";
import Link from "next/link";
import appIcon from "./appicon.jpg";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import StoreBadges from "./components/StoreBadges";

const FEATURES = [
  {
    title: "Juicy Combos",
    description:
      "Chain clears to fire up a dynamic score multiplier. Every satisfying snap stacks your combo higher, turning a calm board into a fireworks of points.",
    accent: "electric",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Smart Rescue",
    description:
      "Our AI director quietly watches your board and offers the perfect piece when you're truly stuck — so a tough spot becomes a clever comeback, never a dead end.",
    accent: "emerald",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Play Offline",
    description:
      "No Wi-Fi, no problem. BlockSet runs fully offline with zero lag and a buttery-smooth 60fps anywhere — on a plane, a subway, or off the grid.",
    accent: "ruby",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
] as const;

const accentMap = {
  electric: {
    text: "text-electric",
    hoverRing: "hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.5)]",
    bg: "bg-electric/10 border-electric/30",
    glow: "from-electric/30",
  },
  emerald: {
    text: "text-emerald-soft",
    hoverRing: "hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.5)]",
    bg: "bg-emerald/10 border-emerald/30",
    glow: "from-emerald/30",
  },
  ruby: {
    text: "text-ruby-soft",
    hoverRing: "hover:shadow-[0_0_40px_-8px_rgba(244,63,94,0.5)]",
    bg: "bg-ruby/10 border-ruby/30",
    glow: "from-ruby/30",
  },
} as const;

function AppIconPlaceholder() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-gradient-to-tr from-electric/40 via-emerald/30 to-ruby/40 blur-3xl animate-glow"
      />
      <div className="glossy-btn relative h-40 w-40 overflow-hidden rounded-[2rem] border border-white/15 bg-navy-soft shadow-2xl animate-float sm:h-48 sm:w-48">
        <Image
          src={appIcon}
          alt="BlockSet app icon"
          fill
          priority
          sizes="(min-width: 640px) 192px, 160px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-emerald/10 blur-[120px]" />
        <div className="absolute left-[-10%] top-[60%] h-[400px] w-[400px] rounded-full bg-ruby/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <Image
            src={appIcon}
            alt="BlockSet"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg border border-white/10 object-cover"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            BlockSet
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 sm:flex">
          <a href="#features" className="transition hover:text-slate-100">
            Features
          </a>
          <a href="#support" className="transition hover:text-slate-100">
            Support
          </a>
          <a href="#faq" className="transition hover:text-slate-100">
            FAQ
          </a>
        </nav>
        <a
          href="#download"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
        >
          Download
        </a>
      </header>

      <section
        id="download"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pb-20 pt-12 text-center sm:pt-20"
      >
        <div className="animate-rise" style={{ animationDelay: "0.05s" }}>
          <AppIconPlaceholder />
        </div>

        <div
          className="flex flex-col items-center gap-6 animate-rise"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-soft" />
            No time limits · Just pure puzzle flow
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl">
            BlockSet: <span className="text-gradient">Neon Puzzle Game</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Relax, hit massive combos, and train your brain. No time limits,
            just pure puzzle flow.
          </p>

          <StoreBadges className="mt-2 items-center justify-center" />

          <div className="mt-2 flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Stars /> 4.9 average rating
            </span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="hidden sm:inline">2M+ puzzles solved daily</span>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20"
      >
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Built to feel <span className="text-gradient">effortless</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Thoughtful systems that keep the game relaxing, rewarding, and
            playable anywhere.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const a = accentMap[feature.accent];
            return (
              <div
                key={feature.title}
                className={`group glass relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${a.hoverRing}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl border ${a.bg} ${a.text}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="support"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20"
      >
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            We&apos;re here to <span className="text-gradient">help</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Questions, bugs, or feedback? Send us a note and a real human will
            reply, usually within 24 hours.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>

        <div id="faq" className="mt-20 scroll-mt-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
              Frequently asked questions
            </h3>
          </div>
          <Faq />
        </div>
      </section>

      <footer className="mt-10 border-t border-white/10 bg-navy-deep/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <Image
                  src={appIcon}
                  alt="BlockSet"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg border border-white/10 object-cover"
                />
                <span className="text-base font-semibold text-slate-100">
                  BlockSet
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                A relaxing neon block puzzle for iOS and Android. Hit combos,
                train your brain, and play offline anywhere.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Product
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
                  <li>
                    <a href="#features" className="hover:text-electric">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#download" className="hover:text-electric">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-electric">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Legal & Support
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
                  <li>
                    <Link href="/privacy" className="hover:text-electric">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-electric">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:cengizsen17@hotmail.com"
                      className="hover:text-electric"
                    >
                      cengizsen17@hotmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © 2026 BlockSet. All rights networks reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link href="/privacy" className="hover:text-slate-300">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-300">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-emerald-soft">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}
