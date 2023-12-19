import "./TopBar.css";

function TopBar(props: TopBarProps) {
  return (
    <header className="top-bar">
      <h2>Portfolio</h2>
      <address className="social-media">
        {props.socialLinks.map((socialLink) => (
          <a key={socialLink.site} href={socialLink.link}>
            <img className="logo" src={socialLink.iconPath} alt="GitHub logo" />
          </a>
        ))}
      </address>
    </header>
  );
}

interface TopBarProps {
  socialLinks: { site: string; iconPath: string; link: string }[];
}

export default TopBar;
