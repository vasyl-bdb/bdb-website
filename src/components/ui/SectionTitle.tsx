interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`mx-auto max-w-4xl text-center ${className}`}
    >
      {badge && (
        <div
          className={`mb-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
            light
              ? "bg-white/10 text-white"
              : "bg-[var(--color-secondary)]/10 text-[var(--color-primary)]"
          }`}
        >
          {badge}
        </div>
      )}

      <h2
        className={`text-4xl font-bold leading-tight md:text-5xl ${
          light
            ? "text-white"
            : "text-[var(--color-primary)]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-3xl text-base leading-7 md:text-lg md:leading-8 ${
            light
              ? "text-white/80"
              : "text-[var(--color-text-light)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

