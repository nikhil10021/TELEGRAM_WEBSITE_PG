import '../styles/JoinButton.css';

export default function JoinButton({ label, url, variant = "primary", icon, size = "md", onClick }) {
  const sizeClass = `btn--${size}`;
  const variantClass = `btn--${variant}`;
  
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  
  return (
    <a 
      href={url} 
      className={`join-btn ${sizeClass} ${variantClass}`}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {icon && <span className="join-btn__icon">{icon}</span>}
      <span className="join-btn__label">{label}</span>
      <span className="join-btn__arrow">→</span>
    </a>
  );
}