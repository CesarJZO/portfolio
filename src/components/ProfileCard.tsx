import "./ProfileCard.css";

import Divider from "./Divider";
import RoleLevelCard from "./RoleLevelCard";

function ProfileCard(props: ProfileCardProps) {
  const { roles } = props;
  
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

function Summary({ name, picture }: ProfileCardProps) {
  return (
    <section className="profile-summary">
      <img
        className="profile-picture"
        src={picture}
        alt={`${name}'s profile picture`}
      />
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores
        dolorem consequatur.
      </p>
    </section>
  );
}

interface ProfileCardProps {
  name: string;
  picture: string;
  roles: {
    role: string;
    level: number;
    xp: number;
    progress: number;
    icon: string;
  }[];
}

export default ProfileCard;
