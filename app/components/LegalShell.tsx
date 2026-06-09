import Image from "next/image";
import Link from "next/link";
import appIcon from "../appicon.jpg";

export default function LegalShell({
  title,
  lastUpdated,
  dateLabel = "Last updated",
  children,
}: {
  title: string;
  lastUpdated: string;
  dateLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" />
      </div>

      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
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
        </Link>
        <Link
          href="/"
          className="text-sm text-slate-400 transition hover:text-electric"
        >
          ← Back to home
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {dateLabel}: {lastUpdated}
        </p>

        <div className="legal-content mt-10 flex flex-col gap-6 text-[15px] leading-relaxed text-slate-300">
          {children}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
          <p>
            Questions about this document? Email us at{" "}
            <a
              href="mailto:cengizsen17@hotmail.com"
              className="font-medium text-slate-300 underline decoration-white/20 underline-offset-2 hover:text-electric"
            >
              cengizsen17@hotmail.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-slate-100">{heading}</h2>
      {children}
    </section>
  );
}
