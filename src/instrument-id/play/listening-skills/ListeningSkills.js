import React from "react";

import './ListeningSkills.css';

import Button from "../../../_components/button/Button";
import Icon from "../../../_components/icon/Icon";
import { listeningSkills } from "../../_icons/iconImports";

const ListeningSkills = () => {
  return (
    <div className="ListeningSkills">
      <div className="ListeningSkills-icon">
        <Icon
          icon={listeningSkills}
          text='Listening Skills Test'
        />
      </div>
      <div className="ListeningSkills-levels">
        <Button colorId={0}>Level 1</Button>
        <Button colorId={1}>Level 2</Button>
        <Button colorId={2}>Level 3</Button>
      </div>
    </div>
  );
};

export default ListeningSkills;