interface CalculatorCardProps {
  title: string;
  description: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

export default function CalculatorCard({
  title,
  description,
  icon,
  active,
  onClick,
}: CalculatorCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full rounded-3xl border p-6 text-left transition-all duration-300
        ${
          active
            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-xl scale-[1.02]"
            : "border-[var(--color-border)] bg-white hover:-translate-y-1 hover:shadow-lg"
        }
      `}
    >
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-bold">
        {title}
      </h3>

      <p
        className={
          active
            ? "text-white/90"
            : "text-[var(--color-text-light)]"
        }
      >
        {description}
      </p>
    </button>
  );
}

