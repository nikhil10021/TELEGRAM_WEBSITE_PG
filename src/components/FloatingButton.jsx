import { openTelegram } from '../data/siteData';
import '../styles/FloatingButton.css';

export default function FloatingButton() {
  return (
    <button className="floating-btn" onClick={openTelegram}>
      📢 Join Now
    </button>
  );
}