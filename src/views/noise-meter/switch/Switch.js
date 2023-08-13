import { useContext } from "react";
import { PopupContext } from "context/PopupContext";

import { useDispatch, useSelector } from "react-redux";
import { toggleRecording } from "store/noise-meter/noiseMeterReducer";

import "./Switch.css";

import Icon from "components/icon/Icon";
import Permissions from "../permissions/Permissions";

import { PLAY, PAUSE } from "assets/_general/general.assets";

const Switch = () => {
  const { isRecording } = useSelector((state) => state.noiseMeter);
  const { setCurrPopup } = useContext(PopupContext);

  const dispatch = useDispatch();

  const handleRecording = async () => {
    const result = await navigator.permissions.query({ name: "microphone" });
    if (result.state !== "granted") {
      setCurrPopup({ 
        title: "Allow microphone access?",
        popup: <Permissions />
      });
    } else {
      dispatch(toggleRecording());
    }
  }

  const icon = !isRecording ? PLAY : PAUSE;
  const text = !isRecording ? "START" : "STOP";

  return (
    <section className="Switch">
      <Icon icon={icon} text={text} onClick={handleRecording} size={"100px"} />
    </section>
  );
};

export default Switch;
