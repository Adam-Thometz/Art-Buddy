import React from "react";
import Icon from "../../../../_components/icon/Icon";

const Choice = ({ choice }) => {
  return (
    <div className="Choice">
      <Icon icon={choice.icon} text={choice.name} />
    </div>
  );
};

export default Choice;