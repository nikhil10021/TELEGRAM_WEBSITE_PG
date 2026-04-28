import { useCountdown } from '../hooks/useCountdown';
import { SITE_CONFIG } from '../data/siteData';
import '../styles/CountdownTimer.css';

export default function CountdownTimer() {
  const { h, m, s } = useCountdown(21);

  return (
    <div className="countdown">
      <p className="countdown__label">⏰ Next deal drops in</p>
      <div className="countdown__blocks">
        <div className="countdown__block">
          <span className="countdown__number">{h}</span>
          <span className="countdown__unit">HR</span>
        </div>
        <span className="countdown__separator">:</span>
        <div className="countdown__block">
          <span className="countdown__number">{m}</span>
          <span className="countdown__unit">MIN</span>
        </div>
        <span className="countdown__separator">:</span>
        <div className="countdown__block">
          <span className="countdown__number">{s}</span>
          <span className="countdown__unit">SEC</span>
        </div>
      </div>
    </div>
  );
}