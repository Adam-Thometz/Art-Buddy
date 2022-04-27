import React from "react";

const Icon = ({ icon, text, onClick = null, size = "250px", additionalClass = null }) => {
  const styles = {
    width: size,
    height: size,
    cursor: onClick !== null ? 'pointer' : null
  };

  return (
    <div className={`Icon${additionalClass ? ` ${additionalClass}` : ''}`} onClick={onClick}>
      <img style={styles} src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Icon;