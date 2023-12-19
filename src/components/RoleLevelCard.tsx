import "./RoleLevelCard.css";

function RoleLevelCard(props: RoleLevelCardProps) {
  return (
    <section id="role-level-card">
      <img className="role-icon" src={props.iconPath} alt="Level icon" />
      <strong className="exp-level">{props.level}</strong>
      <h2 className="exp-title">{props.role}</h2>
      <div className="progress-bar" role="progressbar">
        <div
          className="progress-fill"
          style={{ width: `${props.progress}%` }}
        />
      </div>
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
