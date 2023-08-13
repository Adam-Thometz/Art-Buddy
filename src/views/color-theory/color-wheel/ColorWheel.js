import { useSelector } from "react-redux";

import "./ColorWheel.css";

const ColorWheel = ({ update = null }) => {
  const { colorWheel } = useSelector((state) => state.colorWheel);

  const colors = Object.keys(colorWheel).map((c) => {
    const { color, isShowing } = colorWheel[c];
    const backgroundColor = isShowing.color ? color.hex : "#D9D9D9";
    const updateFn = update && isShowing.color ? update : null;
    return (
      <div key={c} id={c} className="ColorWheel-color" style={{ backgroundColor }} onClick={updateFn}>
        {isShowing.text ? c : null}
      </div>
    );
  });

  return <div className="ColorWheel">{colors}</div>;
};

export default ColorWheel;
