import { useState, useEffect } from 'react';
import '../styles/UrgencyBanner.css';

export default function UrgencyBanner() {
  // Countdown from 10 minutes (as per design reference)
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="urgency-banner">
      <span className="urgency-banner__icon">🔴</span>
      <span className="urgency-banner__text">
        Secret Invitation Link Expires in: <span className="urgency-banner__countdown">{formatTime(timeLeft)}</span>
      </span>
    </div>
  );
}