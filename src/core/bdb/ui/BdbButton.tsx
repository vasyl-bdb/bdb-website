"use client";

import Link from "next/link";
import { Button } from "@/core/ui/Button";
import { cn } from "@/lib/utils";

interface BdbButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
}

export default function BdbButton({
  children,
  href,
  onClick,
  className,
  variant = "default",
  size = "lg",
}: BdbButtonProps) {
  const classes = cn(
    "rounded-2xl font-semibold transition-all duration-300",
    "hover:-translate-y-0.5 hover:shadow-lg",
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <Button
          variant={variant}
          size={size}
          className={classes}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={classes}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

