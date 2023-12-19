import "./App.css";

import RoleLevelCard from "./components/RoleLevelCard";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <TopBar
        socialLinks={[
          {
            site: "GitHub",
            iconPath: "src/assets/logo-github.svg",
            link: "https://github.com/CesarJZO",
          },
          {
            site: "LinkedIn",
            iconPath: "src/assets/logo-linkedin.svg",
            link: "https://www.linkedin.com/in/cesarjzo/",
          },
          {
            site: "Twitter",
            iconPath: "src/assets/logo-twitter.svg",
            link: "https://twitter.com/CesarJZO",
          },
        ]}
      />
      <main>
        <RoleLevelCard
          role="Frontend Developer"
          level={2}
          xp={100}
          progress={50}
          iconPath="src/assets/game-controller-outline.svg"
        />
        <RoleLevelCard
          role="Backend Developer"
          level={1}
          xp={50}
          progress={25}
          iconPath="src/assets/hardware-chip-outline.svg"
        />
        <RoleLevelCard
          role="Fullstack Developer"
          level={1}
          xp={50}
          progress={25}
          iconPath="src/assets/cloud-outline.svg"
        />
      </main>

      <BottomBar
        links={[
          { name: "Projects", path: "/projects" },
          { name: "Blog", path: "/blog" },
          { name: "Tutorials", path: "/tutorials" },
          { name: "Courses", path: "/courses" },
        ]}
      />
    </>
  );
}

export default App;
