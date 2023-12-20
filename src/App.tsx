import "./App.css";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import ProfileCard from "./components/ProfileCard";

const socialLinks = [
  {
    site: "GitHub",
    icon: "src/assets/logo-github.svg",
    link: "https://github.com/CesarJZO",
  },
  {
    site: "LinkedIn",
    icon: "src/assets/logo-linkedin.svg",
    link: "https://www.linkedin.com/in/cesarjzo/",
  },
  {
    site: "Twitter",
    icon: "src/assets/logo-twitter.svg",
    link: "https://twitter.com/CesarJZO",
  },
];

const roles = [
  {
    role: "Game Developer",
    level: 69,
    xp: 2048,
    progress: 84.5,
    icon: "src/assets/game-controller-outline.svg",
  },
  {
    role: "Frontend Developer",
    level: 26,
    xp: 128,
    progress: 29.1,
    icon: "src/assets/cloud-outline.svg",
  },
  {
    role: "Desktop Developer",
    level: 2,
    xp: 512,
    progress: 53.9,
    icon: "src/assets/hardware-chip-outline.svg",
  },
];

const links = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Courses", path: "/courses" },
];

function App() {
  return (
    <>
      <TopBar socialLinks={socialLinks} />

      <main>
        <ProfileCard
          name="César Zárate"
          picture="src/assets/pp-no-bg.png"
          roles={roles}
        />
      </main>

      <BottomBar links={links} />
    </>
  );
}

export default App;
