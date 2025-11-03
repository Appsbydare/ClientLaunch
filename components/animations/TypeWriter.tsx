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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || texts.length === 0) return;

    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      // Move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else if (isDeleting) {
      // Delete character
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      // Type character
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [mounted, displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration]);

  if (!mounted) {
    return <span className={className}>{texts[0] || ""}</span>;
  }

  return (
    <span className={className}>
      {displayText || texts[0]}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

