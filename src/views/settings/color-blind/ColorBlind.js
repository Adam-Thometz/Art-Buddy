import { useSelector, useDispatch } from "react-redux";
import { toggleColorBlind } from "store/settings/settingsReducer";

import "./ColorBlind.css";

import Toggle from "components/toggle/Toggle";

const ColorBlind = () => {
  const { colorBlind } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleColorBlind = () => dispatch(toggleColorBlind());

  return (
    <div className="ColorBlind">
      <Toggle currToggle={colorBlind} toggleFn={handleColorBlind} />
    </div>
  );
};

export default ColorBlind;
