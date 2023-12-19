import "./ProfileCard.css";

import Divider from "./Divider";
import RoleLevelCard from "./RoleLevelCard";

function ProfileCard(props: ProfileCardProps) {
  const roles = [
    {
      role: "Frontend Developer",
      level: 3,
      xp: 100,
      progress: 50,
      iconPath: "src/assets/game-controller-outline.svg",
    },
    {
      role: "Backend Developer",
      level: 5,
      xp: 50,
      progress: 75,
      iconPath: "src/assets/hardware-chip-outline.svg",
    },
    {
      role: "Fullstack Developer",
      level: 2,
      xp: 50,
      progress: 25,
      iconPath: "src/assets/cloud-outline.svg",
    },
  ];

  return (
    <article className="profile-card">
      <Summary {...props} />
      <Divider />
      <section className="roles">
        {roles.map((role) => (
          <RoleLevelCard key={role.role} {...role} />
        ))}
      </section>
    </article>
  );
}

function Summary(props: ProfileCardProps) {
  return (
    <section className="profile-summary">
      <img
        className="profile-picture"
        src={props.picturePath}
        alt={`${props.name}'s profile picture`}
      />
      <h1>{props.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores
        dolorem consequatur.
      </p>
    </section>
  );
}

interface ProfileCardProps {
  name: string;
  picturePath: string;
}

export default ProfileCard;
