import { siteConfig, openTelegram } from '../data/siteData';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <div className="navbar-logo">
            <img 
              src="/logo.png" 
              alt="LootDeals Logo" 
              className="navbar-logo-img"
              onError={(e) => { e.target.style.display='none'; }}
            />
            <span className="navbar-brand-name">LootDeals</span>
          </div>
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