import './ProgressBar.css';

/**
 * ProgressBar component
 *
 * This component renders a progress bar. The progress bar is filled according to the `progress` prop.
 *
 * @example
 * // The progress bar will be filled to 50%
 * <ProgressBar progress={50} />
 *
 * @param {number} props.progress - The percentage of progress to be displayed. This should be a number between 0 and 100.
 *
 * @returns The ProgressBar component.
 */
function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="progress-bar" role="progressbar">
      <div className="progress-fill" style={{ width: `${props.progress}%` }} />
    </div>
  );
}

interface ProgressBarProps {
  progress: number;
}

export default ProgressBar;
