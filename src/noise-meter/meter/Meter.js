import "./Meter.css";

import line from "_media/noise-meter/meter-piece.png";

const Meter = () => {
  return (
    <section className='Meter'>
      {Array(9).fill(null).map((part, i) => <img className="Meter-line" src={line} alt="" />)}
    </section>
  )
}

export default Meter;
