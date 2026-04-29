import { DEALS, openTelegram } from '../data/siteData';
import '../styles/DealCards.css';

export default function DealCards() {
  return (
    <section className="deal-cards">
      <div className="deal-cards__container">
        <h2 className="deal-cards__title">
          🔥 Recent Loot Deals We Posted
        </h2>
        <p className="deal-cards__subtitle">
          These deals were shared on our Telegram channel recently
        </p>
        
        <div className="deal-cards__grid">
          {DEALS.map((deal, index) => (
            <div 
              className="deal-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="deal-card__badge">
                {deal.off}% OFF
              </div>
              <div className="deal-card__emoji">
                {deal.emoji}
              </div>
              <h3 className="deal-card__name">
                {deal.name}
              </h3>
              <div className="deal-card__prices">
                <span className="deal-card__regular">
                  ₹{deal.mrp.toLocaleString()}
                </span>
                <span className="deal-card__loot">
                  ₹{deal.loot}
                </span>
              </div>
              <button 
                className="deal-card__button"
                onClick={openTelegram}
              >
                🔥 Grab This Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}