import { STATS } from '../data/siteData';
import '../styles/Stats.css';

export default function StatsSection() {
  return (
    <div className="stats-section">
      {STATS.map((stat, index) => (
        <div className="stats-section__item" key={index}>
          <span className="stats-section__icon">{stat.icon}</span>
          <span className="stats-section__value">{stat.value}</span>
          <span className="stats-section__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}