import { useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

export default function useTypewriter(
  { text, speed = 80, delay = 0, cursor = true }: TypewriterOptions,
  trigger: boolean
) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const timeout = setTimeout(() => {
      setShowCursor(true);
      let i = 0;

      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));

        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
          // Hide cursor after a short pause
          if (cursor) {
            setTimeout(() => setShowCursor(false), 1500);
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [trigger, text, speed, delay, cursor]);

  return { displayed, showCursor, done };
}
