import { useSelector, useDispatch } from "react-redux";
import { setShownOptions } from "_redux/free-paint/freePaintReducer";

import "./ButtonWrapper.css";

import Button from "_components/button/Button";
import Icon from "_components/icon/Icon";

import { colorsToFilter } from "_data/free-paint/colors";
import { ROOT_URL } from "_assets/awsS3Root";

const ButtonWrapper = ({
  color = null,
  colorId = null,
  iconImg,
  id = "",
  label,
  onClick = null,
  Popout = null,
}) => {
  const { shownOptions } = useSelector((state) => state.freePaint);
  const dispatch = useDispatch();
  const buttonColor = color
    ? {
        color,
        borderColor: color,
      }
    : {};

  const imgFilter = color
    ? {
        filter: colorsToFilter.get(color),
      }
    : {};

  const handleShownOptions = (e) => {
    const { tagName, id, parentElement } = e.target;
    const currId = tagName === "BUTTON" ? id : parentElement.id;
    dispatch(setShownOptions(currId === shownOptions ? null : currId));
  };

  const buttonTxt = iconImg
    ? (
      // tools and functions like eraser and pencil have an icon
      <Icon
        id={id}
        onClick={onClick ? onClick : handleShownOptions}
        size="45px"
        text={label}
        icon={iconImg}
        otherImgStyles={imgFilter}
      />
    )
    // stencils are not icons
    : label.startsWith(ROOT_URL)
      ? <img src={label} alt={id} className="ButtonWrapper-shape-button" />
      : label;

  return (
    <div className="ButtonWrapper">
      <Button
        id={id}
        onClick={onClick ? onClick : handleShownOptions}
        colorId={colorId}
        otherStyles={buttonColor}
      >
        {buttonTxt}
      </Button>
      {Popout ? shownOptions === id ? <Popout id={id} /> : null : null}
    </div>
  );
};

export default ButtonWrapper;
