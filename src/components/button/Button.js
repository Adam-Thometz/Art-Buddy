import "./Button.css";

import colors from "data/_utils/colorOrder";

const Button = ({
  children,
  colorId,
  disabled = false,
  id = null,
  icon = null,
  onClick,
  otherStyles = {},
  small = false,
  selected = false,
}) => {
  const borderColor = colors[colorId];
  return (
    <button
      id={id}
      disabled={disabled}
      className={`Button ${
        small ? "small" : "regular"
      }${
        selected ? " selected" : ""
      }`}
      onClick={onClick}
      style={{
        borderColor,
        backgroundColor: disabled ? "grey" : null,
        ...otherStyles,
      }}
    >
      {icon ? <img src={icon} alt="" /> : null}
      {children}
    </button>
  );
};

export default Button;
