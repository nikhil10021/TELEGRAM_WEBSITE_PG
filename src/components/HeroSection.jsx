import { CHANNEL_LINKS, SITE_CONFIG, siteConfig } from '../data/siteData';
import CountdownTimer from './CountdownTimer';
import JoinButton from './JoinButton';
import SocialNotification from './SocialNotification';
import StatsSection from './StatsSection';
import '../styles/Hero.css';

export default function HeroSection() {
  const handleJoinClick = () => {
    window.open(siteConfig.telegramLink, "_blank");
  };

  return (
    <section className="hero">
      <div className="hero__blob"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge" style={{ animationDelay: '0s' }}>
            🔥 Limited Invites Left
          </div>
          
          <h1 className="hero__title" style={{ animationDelay: '0.05s' }}>
            Get Loot Deals Before Anyone Else
            <span className="hero__highlight"> Loot Deals</span>
            <span className="hero__underline"></span>
          </h1>
          
          <p className="hero__subtitle" style={{ animationDelay: '0.1s' }}>
            Join {SITE_CONFIG.memberCount} smart shoppers getting free loot deals, 
            flash sales & exclusive discounts every day. No spam, just pure savings!
          </p>
          
          <div style={{ animationDelay: '0.15s' }}>
            <CountdownTimer />
          </div>
          
          <div className="hero__actions" style={{ animationDelay: '0.2s' }}>
            {CHANNEL_LINKS.map((link) => (
              <JoinButton
                key={link.id}
                label={link.label}
                url={link.url}
                variant={link.variant}
                icon={link.icon}
                size="md"
                onClick={handleJoinClick}
              />
            ))}
          </div>
          
          <div style={{ animationDelay: '0.25s' }}>
            <SocialNotification />
          </div>
          
          <div style={{ animationDelay: '0.3s' }}>
            <StatsSection />
          </div>
        </div>
        
        <div className="hero__image-wrap">
          <div className="hero__image-card">
            <span className="hero__image-badge">Next Big Deal 🔔</span>
            <img 
              src={SITE_CONFIG.heroImage} 
              alt="Loot Deals" 
              className="hero__image"
            />
            <div className="hero__image-footer">
              {SITE_CONFIG.nextDealTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}