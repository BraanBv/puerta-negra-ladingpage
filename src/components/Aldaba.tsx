// Aldaba de anillo, el detalle de latón de la puerta del logo.
export function Aldaba({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 56" aria-hidden="true" focusable="false">
      <circle cx="20" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M17 12h6v5h-6z" fill="currentColor" />
      <circle cx="20" cy="34" r="15" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="20" cy="49" r="2.5" fill="currentColor" />
    </svg>
  );
}
