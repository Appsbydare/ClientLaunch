"use client";

import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 50,
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            filter: isVisible ? "blur(0)" : "blur(4px)",
            transition: `all 0.6s ease-out ${index * staggerDelay}ms`,
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </div>
  );
}

