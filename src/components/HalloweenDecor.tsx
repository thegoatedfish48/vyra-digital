function Ghost({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <path
        d="M50 5C25 5 12 25 12 50v60l12-10 13 12 13-12 13 12 13-12 12 10V50C88 25 75 5 50 5Z"
        fill="var(--ghost)"
        stroke="var(--ghost-ink)"
        strokeWidth="4"
      />
      <ellipse cx="38" cy="48" rx="6" ry="9" fill="var(--ghost-ink)" />
      <ellipse cx="62" cy="48" rx="6" ry="9" fill="var(--ghost-ink)" />
      <ellipse cx="50" cy="70" rx="7" ry="9" fill="var(--ghost-ink)" />
    </svg>
  );
}

function JackOLantern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <path d="M58 22c0-10 4-16 12-18" stroke="var(--pumpkin-stem)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="60" cy="65" rx="54" ry="40" fill="var(--primary)" stroke="var(--ghost-ink)" strokeWidth="4" />
      <ellipse cx="60" cy="65" rx="22" ry="40" fill="none" stroke="var(--ghost-ink)" strokeWidth="3" opacity="0.4" />
      {/* carved triangle eyes, glowing purple */}
      <path d="M30 52l14-12 6 16Z M90 52l-14-12-6 16Z" fill="var(--accent)" />
      {/* carved triangle nose */}
      <path d="M60 58l-6 10h12Z" fill="var(--accent)" />
      {/* toothy grin, glowing purple */}
      <path d="M28 74q32 26 64 0l-9 5-6-7-8 9-9-9-9 9-8-9-6 7Z" fill="var(--accent)" />
    </svg>
  );
}

export function HalloweenDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <Ghost className="animate-floaty absolute left-[4%] top-6 w-14 opacity-90 sm:w-20" />
      <Ghost className="animate-floaty absolute right-[6%] top-[38%] w-12 opacity-80 [animation-delay:-2s] sm:w-16" />
      <Ghost className="animate-floaty absolute left-[45%] top-[70%] w-12 opacity-70 [animation-delay:-3.5s]" />
      <JackOLantern className="animate-floaty absolute right-[3%] top-4 w-16 rotate-6 [animation-delay:-1s] sm:w-24" />
      <JackOLantern className="animate-floaty absolute left-[2%] top-[55%] w-14 -rotate-6 [animation-delay:-2.5s] sm:w-20" />
      <JackOLantern className="animate-floaty absolute bottom-6 right-[10%] w-16 rotate-3 [animation-delay:-4s]" />
    </div>
  );
}
