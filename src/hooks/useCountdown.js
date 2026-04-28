import { useState, useEffect } from "react";

export function useCountdown(targetHour = 21) {
  const getSecondsLeft = () => {
    const now    = new Date();
    const target = new Date();
    target.setHours(targetHour, 0, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
    return Math.max(0, Math.floor((target - now) / 1000));
  };

  const [secs, setSecs] = useState(getSecondsLeft);

  useEffect(() => {
    const timer = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    h: String(Math.floor(secs / 3600)).padStart(2, "0"),
    m: String(Math.floor((secs % 3600) / 60)).padStart(2, "0"),
    s: String(secs % 60).padStart(2, "0"),
  };
}