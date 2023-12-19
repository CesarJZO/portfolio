import "./TopBar.css";

function TopBar({ socialLinks }: TopBarProps) {
  return (
    <header className="top-bar">
      <h2>Portfolio</h2>
      <address className="social-media">
        {socialLinks.map(({site, icon, link}) => (
          <a key={site} href={link}>
            <img className="logo" src={icon} alt="GitHub logo" />
          </a>
        ))}
      </address>
    </header>
  );
}

interface TopBarProps {
  socialLinks: { site: string; icon: string; link: string }[];
}

export default TopBar;
