import './Toggle.css';

const Toggle = ({ label = null, currToggle, toggleFn }) => {
  return (
    <div className='Toggle'>
      <div className={`Toggle-switch ${currToggle ? 'on' : 'off'}`} onClick={toggleFn}>
        <div className='Toggle-button'></div>
        <span>ON</span>
        <span>OFF</span>
      </div>
      {label ? <span className='Toggle-label'>{label}</span> : null}
    </div>
  );
};

export default Toggle;