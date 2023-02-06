import { useDispatch, useSelector } from "react-redux";
import { setColor, setIsErasing } from "_redux/free-paint/freePaintActions";

import "./ColorOptions.css";

const ColorOptions = () => {
  const { availableColors } = useSelector((state) => state.freePaint);

  const dispatch = useDispatch();

  const handleChangeColor = (e) => {
    dispatch(setColor(e.target.id));
    dispatch(setIsErasing(false));
  };

  return (
    <div className="ColorOptions">
      {availableColors.map((color) => (
        <div
          key={color}
          className="ColorOptions-option"
          data-testid={`color-option-${color}`}
          id={color}
          style={{ backgroundColor: color }}
          onClick={handleChangeColor}
        ></div>
      ))}
    </div>
  );
};

export default ColorOptions;
