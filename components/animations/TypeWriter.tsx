"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || texts.length === 0) return;

    const currentText = texts[textIndex];

    // Handle pause state
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    // Handle typing complete - trigger pause
    if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      return;
    }

    // Handle delete complete - move to next text
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    // Type or delete character
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [mounted, displayText, textIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  if (!mounted) {
    return <span className={className}>{texts[0] || ""}</span>;
  }

  return (
    <span className={className}>
      {displayText || texts[0]}
      <span className="inline-block w-0.5 h-[1em] bg-current animate-pulse ml-1" />
    </span>
  );
}

