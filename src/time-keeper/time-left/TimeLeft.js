import "./TimeLeft.css";

const TimeLeft = ({ seconds }) => {
  return (
    <section className="TimeLeft">
      <h1 className="TimeLeft-text">{seconds ? seconds : "00:00:00"}</h1>
      <div className="TimeLeft-bar"></div>
    </section>
  );
};

export default TimeLeft;
