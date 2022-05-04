import React from "react";

import './ListeningSkills.css';

import Button from "../../../_components/button/Button";
import Icon from "../../../_components/icon/Icon";

import { listeningSkills, reportCard } from "../../_icons/iconImports";

const ListeningSkills = () => {
  return (
    <div className="ListeningSkills">
      <div className="ListeningSkills-icon">
        <Icon
          icon={listeningSkills}
          text='Listening Skills Test'
        />
      </div>
      <div className="ListeningSkills-levels-report-cards">
        <p>Practice your listening skills to unlock instruments that you can play later on the Song Maker section!</p>
        <div className="ListeningSkills-level">
          <Button colorId={0}>Level 1</Button>
          <div className="ListeningSkills-report-card">
            <img src={reportCard} alt='' />
            <p>Report Card</p>
          </div>
        </div>
        <div className="ListeningSkills-level">
          <Button colorId={1}>Level 2</Button>
          <div className="ListeningSkills-report-card">
            <img src={reportCard} alt='' />
            <p>Report Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningSkills;