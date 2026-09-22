import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  background?: "white" | "light" | "primary";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
  className?: string;
}

const backgrounds = {
  white: "bg-white",
  light: "bg-[var(--color-background)]",
  primary: "bg-[var(--color-primary)]",
};

const spacings = {
  none: "",
  sm: "py-8 lg:py-10",
  md: "py-10 lg:py-12",
  lg: "py-12 lg:py-16",
  xl: "py-16 lg:py-20",
};

export default function Section({
  children,
  background = "white",
  spacing = "md",
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        ${backgrounds[background]}
        ${spacings[spacing]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}

