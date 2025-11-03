"use client";

import { useEffect, useRef, useState } from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
}

