import ProfileCard from "../components/ProfileCard";

import "./Landing.css";

const roles = [
  {
    role: "Game Developer",
    level: 69,
    xp: 2048,
    progress: 84.5,
    icon: "/icons/game-controller-outline.svg",
  },
  {
    role: "Frontend Developer",
    level: 26,
    xp: 128,
    progress: 29.1,
    icon: "/icons/cloud-outline.svg",
  },
  {
    role: "Desktop Developer",
    level: 2,
    xp: 512,
    progress: 53.9,
    icon: "/icons/hardware-chip-outline.svg",
  },
];

const Landing = () => {
  return (
    <main className="profile-container">
      <ProfileCard
        name="César Zárate"
        picture="/images/pp-no-bg.png"
        roles={roles}
      />
    </main>
  );
};

export default Landing;
