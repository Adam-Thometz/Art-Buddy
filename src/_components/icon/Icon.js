import React from "react";

const Icon = ({ icon, text, onClick = null, size = "250px", id = null }) => {
  const styles = {
    width: size,
    height: size,
    cursor: onClick ? 'pointer' : null
  };

  return (
    <div className="Icon" onClick={onClick} id={id ? id : null}>
      <img style={styles} src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Icon;