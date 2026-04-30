import { FEATURED_DEAL, STATS, siteConfig, openTelegram } from '../data/siteData';
import '../styles/MainSection.css';

const getNextDealTime = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Add 1 hour, if minutes > 0 add another hour (round up)
  let targetHour = currentMinutes > 0 ? currentHour + 2 : currentHour + 1;
  
  // Keep within 24 hours
  targetHour = targetHour % 24;
  
  // Format to 12-hour
  const period = targetHour >= 12 ? 'PM' : 'AM';
  const hour12 = targetHour % 12 === 0 ? 12 : targetHour % 12;
  
  return `${hour12}:00 ${period}`;
};

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="main-section__container">
        {/* LEFT COLUMN - Deal Showcase */}
        <div className="main-section__left">
          <div className="deal-showcase">
            <div className="deal-showcase__header">
              <span className="deal-showcase__emoji">{FEATURED_DEAL.emoji}</span>
              <span className="deal-showcase__badge">Order Confirmed</span>
            </div>
            <h3 className="deal-showcase__title">{FEATURED_DEAL.name}</h3>
            <p className="deal-showcase__details">
              Color: {FEATURED_DEAL.color} | Seller: {FEATURED_DEAL.seller}
            </p>
            <div className="deal-showcase__price">
              <span className="deal-showcase__amount">₹{FEATURED_DEAL.price}</span>
              <span className="deal-showcase__offers">{FEATURED_DEAL.offers} offers</span>
            </div>
            <div className="deal-showcase__steps">
              <div className="deal-showcase__step deal-showcase__step--active">
                <span className="deal-showcase__step-icon">✓</span>
                <span>Shipped</span>
              </div>
              <div className="deal-showcase__step deal-showcase__step--active">
                <span className="deal-showcase__step-icon">✓</span>
                <span>Out For Delivery</span>
              </div>
              <div className="deal-showcase__step">
                <span className="deal-showcase__step-icon">○</span>
                <span>Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="price-comparison">
            <div className="price-comparison__item price-comparison__item--regular">
              <span className="price-comparison__label">Regular Price 🤑</span>
              <span className="price-comparison__value">₹{FEATURED_DEAL.mrp.toLocaleString()}</span>
            </div>
            <div className="price-comparison__item price-comparison__item--loot">
              <span className="price-comparison__label">Loot Price 😎</span>
              <span className="price-comparison__value">₹{FEATURED_DEAL.price}</span>
            </div>
          </div>
          
          <p className="main-section__cta-text">
            Join Our Telegram Channel For Such Loot Deals 👇 (Click Subscribe Button)
          </p>
        </div>
        
        {/* RIGHT COLUMN - Sidebar CTA */}
        <div className="main-section__right">
          <div className="welcome-banner-box">
            🎉 Welcome to the Loot Deal Channel — 90% Discount Offer! 🎉 
          </div>
          <button className="subscribe-btn" onClick={openTelegram}>
            Subscribe Now
          </button>
          
          <div className="stats-bar">
            {STATS.map((stat, index) => (
              <div className="stats-bar__item" key={index}>
                <span className="stats-bar__icon">{stat.icon}</span>
                <span className="stats-bar__value">{stat.value}</span>
                <span className="stats-bar__label">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="next-loot-card">
            <h4 className="next-loot-card__title">🔔 NEXT BIG LOOT</h4>
            <p className="next-loot-card__time">Dropping Today at {getNextDealTime()}</p>
            <button className="next-loot-card__btn" onClick={openTelegram}>
              Join Telegram to Reveal Deal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}