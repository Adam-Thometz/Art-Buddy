import { useSelector, useDispatch } from "react-redux";
import { toggleTextToSpeech } from "store/settings/settingsReducer";

import "./TextToSpeech.css";

import Toggle from "components/toggle/Toggle";

const TextToSpeech = () => {
  const { textToSpeech } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleTextToSpeech = () => dispatch(toggleTextToSpeech());

  return (
    <div className="TextToSpeech">
      <Toggle currToggle={textToSpeech} toggleFn={handleTextToSpeech} />
    </div>
  );
};

export default TextToSpeech;
