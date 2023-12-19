import "./App.css";

import RoleLevelCard from "./components/RoleLevelCard";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <header>My portfolio</header>
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
      </main>
      
      <BottomBar links={[
        { name: "Projects", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Courses", path: "/courses" },
      ]} />
    </>
  );
}

export default App;
