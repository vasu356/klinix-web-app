import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full transition-all duration-200 font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[#0C6f6d] hover:shadow-lg",
    secondary: "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
