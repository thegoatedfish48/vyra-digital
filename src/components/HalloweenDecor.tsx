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

function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <path d="M58 22c0-10 4-16 12-18" stroke="var(--pumpkin-stem)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="60" cy="65" rx="54" ry="40" fill="var(--primary)" stroke="var(--ghost-ink)" strokeWidth="4" />
      <ellipse cx="60" cy="65" rx="22" ry="40" fill="none" stroke="var(--ghost-ink)" strokeWidth="3" opacity="0.4" />
      <path d="M32 52l12-10 8 14Z M88 52l-12-10-8 14Z" fill="var(--ghost-ink)" />
      <path d="M30 72q30 26 60 0l-8 4-6-6-8 8-8-8-8 8-8-8-6 6Z" fill="var(--ghost-ink)" />
    </svg>
  );
}

export function HalloweenDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <Ghost className="animate-floaty absolute left-[4%] top-6 w-14 opacity-90 sm:w-20" />
      <Ghost className="animate-floaty absolute right-[6%] top-[38%] w-12 opacity-80 [animation-delay:-2s] sm:w-16" />
      <Ghost className="animate-floaty absolute left-[45%] top-[70%] w-12 opacity-70 [animation-delay:-3.5s]" />
      <Pumpkin className="absolute right-[3%] top-4 w-16 rotate-6 sm:w-24" />
      <Pumpkin className="absolute left-[2%] top-[55%] w-14 -rotate-6 sm:w-20" />
      <Pumpkin className="absolute bottom-6 right-[10%] w-16 rotate-3" />
    </div>
  );
}
