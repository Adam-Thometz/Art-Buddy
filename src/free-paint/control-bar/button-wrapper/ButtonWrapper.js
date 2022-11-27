import React, { useContext } from 'react'
import ControlBarContext from '_helpers/free-paint/ControlBarContext';

import './ButtonWrapper.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import { colorsToFilter } from '_data/free-paint/colors';

const ButtonWrapper = ({ 
  color = null,
  colorId = null,
  iconImg,
  id = '',
  label, 
  onClick = null,
  Popout = null
}) => {
  const { shownOptions, handleShownOptions } = useContext(ControlBarContext);

  const buttonColor = color ? {
    color,
    borderColor: color
  } : {};

  const imgFilter = color ? {
    filter: colorsToFilter.get(color)
  }: {};

  const buttonTxt = iconImg
    // having an iconImg means that an Icon should render
    ? <Icon
      id={id}
      onClick={onClick ? onClick : handleShownOptions}
      size="45px"
      text={label}
      icon={iconImg}
      otherImgStyles={imgFilter} 
    />
    // otherwise, set the label
    : label.startsWith('data:image')
      ? <img src={label} alt={id} className='ButtonWrapper-shape-button' />
      : label;

  return (
    <div className='ButtonWrapper'>
      <Button id={id} onClick={onClick ? onClick : handleShownOptions} colorId={colorId} otherStyles={buttonColor}>
        {buttonTxt}
      </Button>
      {Popout ? (
        shownOptions === id ? <Popout id={id} /> : null
      ) : null}
    </div>
  );
};

export default ButtonWrapper;