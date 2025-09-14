type Props = { size?: number; className?: string };

export default function Logo({ size = 32, className }: Props) {
  const px = `${size}px`;
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 64 64"
      role="img"
      aria-label="GS logo"
      className={className}
    >
      <defs>
        <linearGradient id="gs-grad" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="12" fill="url(#gs-grad)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontWeight={800}
        fontSize={28}
        fill="hsl(var(--primary-foreground))"
        letterSpacing="1"
      >
        gs
      </text>
    </svg>
  );
}
