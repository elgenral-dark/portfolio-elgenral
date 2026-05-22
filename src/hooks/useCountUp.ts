import { useEffect, useRef, useState } from "react";

interface CountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  start?: number;
}

export default function useCountUp({ end, duration = 1800, delay = 0, start = 0 }: CountUpOptions, trigger: boolean) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const timeout = setTimeout(() => {
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(start + (end - start) * eased));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, end, duration, delay, start]);

  return value;
}
