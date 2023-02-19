import "./TimeBlock.css";

const TimeBlock = ({ mood, seconds }) => {
  const displayValue = seconds >= 60 ? `${seconds / 60} MIN` : `${seconds} SEC`;
  return <div className={`TimeBlock ${mood}`}>{displayValue}</div>;
};

export default TimeBlock;
