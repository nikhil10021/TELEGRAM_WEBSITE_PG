import { DEAL_IMAGES, CHANNEL_LINKS, SITE_CONFIG } from '../data/siteData';
import JoinButton from './JoinButton';
import '../styles/DealGallery.css';

export default function DealGallery() {
  return (
    <section className="deal-gallery">
      <div className="deal-gallery__container">
        <h2 className="deal-gallery__title">👇 Real Deals Our Members Got</h2>
        <p className="deal-gallery__subtitle">
          Join thousands of smart shoppers who never miss a loot deal
        </p>
        
        <div className="deal-grid">
          {DEAL_IMAGES.map((deal) => (
            <div className="deal-card" key={deal.id}>
              <img src={deal.src} alt={deal.alt} className="deal-card__image" />
              <div className="deal-card__overlay">
                <span className="deal-card__label">🔥 Loot Deal</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="deal-gallery__footer">
          <p className="deal-gallery__members">
            🎉 {SITE_CONFIG.memberCount} members already joined!
          </p>
          <div className="deal-gallery__links">
            {CHANNEL_LINKS.map((link) => (
              <JoinButton
                key={link.id}
                label={link.label}
                url={link.url}
                variant={link.variant}
                icon={link.icon}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}