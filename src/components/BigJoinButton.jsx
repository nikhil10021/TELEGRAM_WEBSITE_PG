import { openTelegram } from '../data/siteData';
import '../styles/BigJoinButton.css';

export default function BigJoinButton() {
  return (
    <section className="big-join-section">
      <button className="big-join-btn" onClick={openTelegram}>
        JOIN Telegram Channel
      </button>
    </section>
  );
}