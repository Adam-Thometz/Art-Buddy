import { useDispatch } from "react-redux";
import { setEnergy } from "_redux/mood-meter/moodMeterReducer";

import "./Battery.css";

import { BATTERY_BAR, BATTERY } from "_media/mood-meter/moodMeter.assets";

const Battery = ({ width, filter, id }) => {
  const dispatch = useDispatch();

  const handleSelect = (e) => dispatch(setEnergy(+e.target.id));
  return (
    <div
      className="Battery"
      id={id}
      onClick={handleSelect}
      data-testid={`battery${id}`}
    >
      <img src={BATTERY} alt="" id={id} onClick={handleSelect} />
      <img
        src={BATTERY_BAR}
        alt=""
        style={{ width, filter }}
        id={id}
        onClick={handleSelect}
        data-testid="bar"
      />
    </div>
  );
};

export default Battery;
