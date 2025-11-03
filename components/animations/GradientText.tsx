"use client";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient ${className}`}
      style={{
        backgroundSize: "200% auto",
        animation: "gradient 8s linear infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </span>
  );
}

