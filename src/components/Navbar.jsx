import { useState, useEffect } from 'react';
import { CHANNEL_LINKS, SITE_CONFIG } from '../data/siteData';
import JoinButton from './JoinButton';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <span className="navbar__logo">💰</span>
          <span className="navbar__name">{SITE_CONFIG.brandName}</span>
        </div>
        <div className="navbar__actions">
          <JoinButton 
            label={CHANNEL_LINKS[0].label}
            url={CHANNEL_LINKS[0].url}
            variant={CHANNEL_LINKS[0].variant}
            icon={CHANNEL_LINKS[0].icon}
            size="sm"
          />
        </div>
      </div>
    </nav>
  );
}