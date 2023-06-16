import { useSelector } from 'react-redux';

import './Line.css';

import line from "_media/noise-meter/meter-piece.png";

const Line = ({ filter, i }) => {
  const { meterVolume, isRecording } = useSelector(state => state.noiseMeter);
  const color = isRecording && i / 9 < meterVolume ? { filter } : null;
  return (
    <img
      key={`meter${i+1}`}
      className="Line"
      src={line}
      style={color}
      alt=""
    />
  );
}

export default Line;
