import { WHY_JOIN_US, openTelegram } from '../data/siteData';
import '../styles/WhyJoinUs.css';

export default function WhyJoinUs() {
  return (
    <section className="why-join-us">
      <div className="why-join-us__container">
        <h2 className="why-join-us__title">
          ⚡ Why 9 Lakh+ People Trust Us?
        </h2>
        
        <div className="why-join-us__grid">
          {WHY_JOIN_US.map((feature, index) => (
            <div 
              className="why-join-us__card" 
              key={index}
            >
              <div className="why-join-us__icon">
                {feature.icon}
              </div>
              <h3 className="why-join-us__card-title">
                {feature.title}
              </h3>
              <p className="why-join-us__card-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <button className="why-join-us__btn" onClick={openTelegram}>
          💬 Join Free on Telegram Now
        </button>
      </div>
    </section>
  );
}