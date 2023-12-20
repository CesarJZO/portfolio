import "./ProfileCard.css";

import Divider from "./Divider";
import RoleLevelCard from "./RoleLevelCard";

/**
 * ProfileCard component
 * 
 * This component renders a card that displays the profile information and the roles of the user.
 * 
 * @param {string} name - The name of the user.
 * @param {string} picture - The path to the profile picture of the user.
 * @param {object[]} roles - The roles of the user.
 * 
 * @returns The ProfileCard component.
 */
function ProfileCard(props: ProfileCardProps) {
  const { roles } = props;

  return (
    <article className="profile-card">
      <Summary {...props} />
      <Divider />
      <section className="roles">
        {roles.sort((a, b) => b.level - a.level)
          .map((role) => (
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
