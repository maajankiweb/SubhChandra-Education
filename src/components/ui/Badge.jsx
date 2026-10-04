import React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  primary: "bg-primary-50 text-primary-700 border border-primary-100",
  accent: "bg-amber-100 text-amber-800 border border-amber-200",
  success: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  neutral: "bg-gray-100 text-gray-700 border border-gray-200",
  outline: "bg-transparent text-primary-700 border border-primary-700",
};

export function Badge({ children, variant = "primary", className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        badgeVariants[variant] || badgeVariants.primary,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
