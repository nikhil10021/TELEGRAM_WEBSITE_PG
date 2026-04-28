import { CHANNEL_LINKS, SITE_CONFIG } from '../data/siteData';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">💰</span>
          <span className="footer__name">{SITE_CONFIG.brandName}</span>
        </div>
        
        <p className="footer__disclaimer">
          📢 We are a deals aggregator. We don't sell products — we just find the best 
          deals for you! Commissions help keep us free forever.
        </p>
        
        <div className="footer__links">
          <a href="#" className="footer__link">Privacy Policy</a>
          <span className="footer__divider">•</span>
          <a href="#" className="footer__link">Contact Us</a>
          <span className="footer__divider">•</span>
          <a 
            href={CHANNEL_LINKS[0].url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__link"
          >
            Telegram
          </a>
        </div>
        
        <p className="footer__copyright">
          © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}