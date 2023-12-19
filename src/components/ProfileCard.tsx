import "./ProfileCard.css";

import Divider from "./Divider";
import RoleLevelCard from "./RoleLevelCard";

function ProfileCard(props: ProfileCardProps) {
  return (
    <article className="profile-card">
      <Summary {...props} />
      <Divider />
      <section className="roles">
        {props.roles.map((role) => (
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
  roles: {
    role: string;
    level: number;
    xp: number;
    progress: number;
    iconPath: string;
  }[];
}

export default ProfileCard;
