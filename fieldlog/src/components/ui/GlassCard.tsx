import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={`
        bg-white/60 dark:bg-slate-900/40 
        backdrop-blur-glass 
        border border-white/40 dark:border-white/10 
        shadow-glass dark:shadow-glass-dark 
        rounded-glass p-6 
        transition-all duration-300
        ${hoverEffect ? "hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-slate-900/60 hover:shadow-lg" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};