import { SOCIAL_STATS, siteConfig, openTelegram } from '../data/siteData';
import '../styles/SocialProof.css';

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof__container">
        <h2 className="social-proof__title">
          More than <span className="social-proof__highlight">9,00,000+</span> members are already getting loot deals on Telegram!
        </h2>
        
        <div className="social-proof__stats">
          {SOCIAL_STATS.map((stat, index) => (
            <div className="social-proof__stat" key={index}>
              <span className="social-proof__stat-icon">{stat.icon}</span>
              <span className="social-proof__stat-value">{stat.value}</span>
              <span className="social-proof__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <button className="social-proof__btn" onClick={openTelegram}>
          🚀 Join The Community Now — It's FREE!
        </button>
      </div>
    </section>
  );
}