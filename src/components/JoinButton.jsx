import '../styles/JoinButton.css';

export default function JoinButton({ label, url, variant = "primary", icon, size = "md" }) {
  const sizeClass = `btn--${size}`;
  const variantClass = `btn--${variant}`;
  
  return (
    <a 
      href={url} 
      className={`join-btn ${sizeClass} ${variantClass}`}
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon && <span className="join-btn__icon">{icon}</span>}
      <span className="join-btn__label">{label}</span>
      <span className="join-btn__arrow">→</span>
    </a>
  );
}