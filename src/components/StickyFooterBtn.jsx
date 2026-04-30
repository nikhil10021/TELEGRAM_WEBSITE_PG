import { openTelegram } from '../data/siteData';
import '../styles/StickyFooterBtn.css';

const StickyFooterBtn = () => (
  <div className="sticky-footer-bar">
    <button className="sticky-footer-btn" onClick={openTelegram}>
      📢 JOIN Telegram Channel
    </button>
  </div>
);

export default StickyFooterBtn;