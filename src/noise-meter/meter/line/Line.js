import { useSelector } from 'react-redux';

import './Line.css';

import { METER_LINE } from '_media/noise-meter/noiseMeter.assets';

const Line = ({ filter, i }) => {
  const { meterVolume, isRecording } = useSelector(state => state.noiseMeter);
  const color = isRecording && i / 9 < meterVolume ? { filter } : null;
  return (
    <img
      key={`meter${i+1}`}
      className="Line"
      src={METER_LINE}
      style={color}
      alt=""
    />
  );
}

export default Line;
