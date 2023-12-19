import "./App.css";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <TopBar
        socialLinks={[
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
        ]}
      />

      <main>
        <ProfileCard
          name="César Zárate"
          picture="src/assets/pp-no-bg.png"
          roles={[
            {
              role: "Frontend Developer",
              level: 3,
              xp: 100,
              progress: 50,
              icon: "src/assets/game-controller-outline.svg",
            },
            {
              role: "Backend Developer",
              level: 5,
              xp: 50,
              progress: 75,
              icon: "src/assets/hardware-chip-outline.svg",
            },
            {
              role: "Fullstack Developer",
              level: 2,
              xp: 50,
              progress: 25,
              icon: "src/assets/cloud-outline.svg",
            },
          ]}
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
