import "./RoleLevelCard.css";

import ProgressBar from "./ProgressBar";

/**
 * RoleLevelCard component
 *
 * This component renders a card that displays the level and experience of a role.
 *
 * @param {string} props.role - The name of the role.
 * @param {number} props.level - The level of the role.
 * @param {number} props.xp - The amount of experience points of the role.
 * @param {number} props.progress - The percentage of progress to be displayed. This should be a number between 0 and 100.
 * @param {string} props.iconPath - The path to the icon of the role.
 *
 * @returns The RoleLevelCard component.
 */
function RoleLevelCard(props: RoleLevelCardProps) {
  return (
    <section id="role-level-card">
      <img className="role-icon" src={props.iconPath} alt="Role icon" />

      <strong className="exp-level">{props.level}</strong>

      <h2 className="exp-title">{props.role}</h2>

      <ProgressBar progress={props.progress} />

      <strong className="exp-points">{props.xp} XP</strong>
    </section>
  );
}

interface RoleLevelCardProps {
  role: string;
  level: number;
  xp: number;
  progress: number;
  iconPath: string;
}

export default RoleLevelCard;
