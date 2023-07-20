import { useSelector } from 'react-redux';

import './Line.css';

const DEFAULT_COLOR = "#D4D2D5"

const Line = ({ color, i }) => {
  const { meterVolume, isRecording } = useSelector(state => state.noiseMeter);
  const backgroundColor = isRecording && i / 9 < meterVolume ? color : DEFAULT_COLOR;
  return (
    <div key={`meter${i+1}`} className="Line" style={{ backgroundColor }} />
  );
}

export default Line;
