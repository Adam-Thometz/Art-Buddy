const TimeLeft = ({ seconds }) => {
  return <h1 className="TimeLeft">{seconds ? seconds : "00:00:00"}</h1>;
};

export default TimeLeft;
