import { useSelector } from 'react-redux';

import './ColorWheel.css';

const ColorWheel = () => {
  const { colorWheel } = useSelector(state => state.colorTheory);

  const colors = Object.keys(colorWheel).map(c => {
    const { color, isShowing } = colorWheel[c];
    const backgroundColor = isShowing.color ? color.hex : '#D9D9D9';
    return (
      <div key={c} className='ColorWheel-color' style={{ backgroundColor }}>
        {isShowing.text ? c : null}
      </div>
    );
  });

  return (
    <div className='ColorWheel'>
      {colors}
    </div>
  );
};

export default ColorWheel;