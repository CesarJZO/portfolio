import "./RoleLevelCard.css";

import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

/**
 * RoleLevelCard component
 *
 * This component renders a card that displays the level and experience of a role.
 *
 * @param {string} role - The name of the role.
 * @param {number} level - The level of the role.
 * @param {number} xp - The amount of experience points of the role.
 * @param {number} progress - The percentage of progress to be displayed. This should be a number between 0 and 100.
 * @param {string} icon - The path to the icon of the role.
 *
 * @returns The RoleLevelCard component.
 */
function RoleLevelCard({
  role,
  level,
  xp,
  progress,
  icon,
}: RoleLevelCardProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(progress);
    }, 10);

    return () => clearTimeout(timeout);
  }, [width]);

  return (
    <section className="role-level-card">
      <img className="role-icon" src={icon} alt="Role icon" />

      <strong className="exp-level">{level}</strong>

      <h2 className="exp-title">{role}</h2>

      <ProgressBar progress={width} />

      <strong className="exp-points">{xp.toLocaleString()} XP</strong>
    </section>
  );
}

interface RoleLevelCardProps {
  role: string;
  level: number;
  xp: number;
  progress: number;
  icon: string;
}

export default RoleLevelCard;
