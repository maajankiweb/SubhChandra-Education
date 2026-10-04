import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900 border border-transparent shadow-sm focus-visible:ring-primary-700",
  accent:
    "bg-accent-500 text-ink hover:bg-accent-600 active:bg-accent-600 border border-transparent font-semibold shadow-sm focus-visible:ring-accent-500",
  outline:
    "bg-transparent text-primary-700 border-1.5 border-primary-700 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-700",
  ghost:
    "bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100 border border-transparent focus-visible:ring-primary-700",
  danger:
    "bg-danger text-white hover:bg-red-700 active:bg-red-800 border border-transparent focus-visible:ring-danger",
};

const buttonSizes = {
  sm: "h-9 px-3.5 text-xs rounded-md gap-1.5",
  md: "h-11 px-5 text-sm rounded-md gap-2",
  lg: "h-12 px-6 text-base rounded-md gap-2.5",
};

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none",
          buttonVariants[variant] || buttonVariants.primary,
          buttonSizes[size] || buttonSizes.md,
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
