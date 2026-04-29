import { siteConfig, openTelegram } from '../data/siteData';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <span className="navbar__logo">🔥</span>
          <span className="navbar__name">{siteConfig.brandName}</span>
        </div>
        <div className="navbar__actions">
          <button className="nav-cta-btn" onClick={openTelegram}>
            📢 Click To Join Telegram Channel
          </button>
        </div>
      </div>
    </nav>
  );
}