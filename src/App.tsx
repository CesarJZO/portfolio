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
        <ProfileCard
          name="César Zárate"
          picturePath="src/assets/pp-no-bg.png"
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
