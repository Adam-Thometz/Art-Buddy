import { useDispatch, useSelector } from "react-redux";
import { toggleRecording } from "_redux/noise-meter/noiseMeterReducer";

import "./Switch.css";

import Icon from "_components/icon/Icon";

import play from "_media/_general/play.png";
import pause from "_media/_general/pause.png";

const Switch = () => {
  const { isRecording } = useSelector((state) => state.noiseMeter);
  const dispatch = useDispatch();

  const handleRecording = () => dispatch(toggleRecording());

  const icon = !isRecording ? play : pause;
  const text = !isRecording ? "START" : "STOP";

  return (
    <section className="Switch">
      <Icon icon={icon} text={text} onClick={handleRecording} size={"100px"} />
    </section>
  );
};

export default Switch;
