import { siteConfig, openTelegram } from '../data/siteData';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">🔥</span>
          <span className="footer__name">{siteConfig.brandName}</span>
          <p className="footer__tagline">{siteConfig.tagline}</p>
        </div>
        
        <div className="footer__actions">
          <button className="footer__btn" onClick={openTelegram}>
            📢 Join Main Channel
          </button>
          <button className="footer__btn" onClick={openTelegram}>
            💬 Join WhatsApp
          </button>
          <button className="footer__btn" onClick={openTelegram}>
            🚀 Join Backup Channel
          </button>
        </div>
        
        <p className="footer__copyright">
          © {currentYear} {siteConfig.brandName}. Made with ❤️ for smart shoppers of India.
        </p>
      </div>
    </footer>
  );
}