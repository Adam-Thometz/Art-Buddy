import { useState, useEffect, useContext } from "react";
import { MicContext } from "_context/MicContext";

import { useSelector, useDispatch } from "react-redux";
import { setMeterVolume } from "_redux/noise-meter/noiseMeterReducer";

import "./Meter.css";

import Line from "./line/Line";

import meterDisplay from "_data/noise-meter/noiseMeter";
import * as Tone from "tone";

const Meter = () => {
  const { isRecording } = useSelector(state => state.noiseMeter);
  const { mic, setMic } = useContext(MicContext);
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function toggleMic() {
      if (isRecording) {
        if (Tone.Transport.state === "stopped") await Tone.start();
        const meter = new Tone.Meter({ normalRange: true });
        const newMic = new Tone.UserMedia().connect(meter);
        await newMic.open();
        
        const id = setInterval(() => {
          const volume = meter.getValue();
          dispatch(setMeterVolume(volume));
        }, 100);
        setMic(newMic);
        setIntervalId(id);
      } else if (mic) {
        await mic.close();
        setMic(null);
        clearInterval(intervalId);
        setIntervalId(null);
        setMeterVolume(0);
      }
    }
    toggleMic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);

  return (
    <section className='Meter'>
      {meterDisplay.map((color, i) => <Line color={color} i={i} />)}
    </section>
  );
}

export default Meter;
