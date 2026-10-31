const APP_STORE_URL =
  "https://apps.apple.com/tr/app/blockset-neon-blok-bulmaca/id6778793458?l=tr";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.blockset.blockset&hl=tr";

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download BlockSet on the App Store"
      className="glossy-btn group flex h-[58px] items-center gap-3 rounded-2xl border border-white/15 bg-black/70 px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_12px_40px_-12px_rgba(56,189,248,0.7)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 384 512"
        className="h-7 w-7 fill-white"
      >
        <path d="M318.7 268c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 1.2 184.2 1.2 272c0 26.1 4.8 53 14.4 80.7 12.8 36.6 59 126.3 107.2 124.8 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.2 102.6-118.9-65.2-30.7-58.9-90-58.9-90.6zM255.5 89.7c30.3-36 27.6-68.8 26.7-80.7-26.8 1.5-57.8 18.2-75.5 38.7-19.5 22-31 49.2-28.5 79.8 29 2.2 55.5-12.7 77.3-37.8z" />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide text-white/70">
          Download on the
        </span>
        <span className="text-[19px] font-semibold text-white">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get BlockSet on Google Play"
      className="glossy-btn group flex h-[58px] items-center gap-3 rounded-2xl border border-white/15 bg-black/70 px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_12px_40px_-12px_rgba(16,185,129,0.7)]"
    >
      <svg aria-hidden="true" viewBox="0 0 512 512" className="h-7 w-7">
        <path
          fill="#00d4ff"
          d="M48 59.5c-5 5.3-7.9 13.5-7.9 24.1v344.8c0 10.6 2.9 18.8 7.9 24.1l1.2 1.1L242 261.9v-4.5L49.2 58.4 48 59.5z"
        />
        <path
          fill="#00f076"
          d="M306.2 326.3L242 261.9v-4.5l64.2-64.4 1.5.8 76 43.2c21.7 12.3 21.7 32.5 0 44.9l-76 43.2-1.5.8z"
        />
        <path
          fill="#ff3a44"
          d="M307.7 325.5L242 259.7 48 453.7c7.2 7.6 19 8.5 32.3 1L307.7 325.5z"
        />
        <path
          fill="#ffd400"
          d="M307.7 193.9L80.3 65.1C67 57.7 55.2 58.6 48 66.2l194 194 65.7-66.3z"
        />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide text-white/70">
          Get it on
        </span>
        <span className="text-[19px] font-semibold text-white">
          Google Play
        </span>
      </span>
    </a>
  );
}

export default function StoreBadges({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <AppStoreBadge />
      <GooglePlayBadge />
    </div>
  );
}
