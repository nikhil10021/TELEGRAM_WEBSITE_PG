import { useState, useEffect } from 'react';
import { NOTIFICATIONS } from '../data/siteData';
import '../styles/SocialNotification.css';

export default function SocialNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const notification = NOTIFICATIONS[currentIndex];
  const initial = notification.name.charAt(0);

  return (
    <div className="social-notification">
      <div className="social-notification__avatar">
        {initial}
      </div>
      <div className="social-notification__content">
        <p className="social-notification__name">{notification.name}</p>
        <p className="social-notification__text">{notification.text}</p>
      </div>
      <div className="social-notification__dot"></div>
    </div>
  );
}