import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../../../_components/icon/Icon";
import Options from "../../../_components/option/Options";

import { songMaker, listeningSkills } from "../../_icons/iconImports";
import { instrumentIdUrls } from '../../../_routes/routeUrls';

const Play = () => {
  const navigate = useNavigate();
  return (
    <div className="Play">
      <p>Master skills in Listening Skills to unlock instruments for the Song Maker!</p>
      <Options width="65%">
        <Icon icon={listeningSkills} text="LISTENING SKILLS" onClick={() => navigate(instrumentIdUrls.playListeningUrl)} />
        <Icon icon={songMaker} text="SONG MAKER" onClick={() => navigate(instrumentIdUrls.playSongMakerUrl)} />
      </Options>
    </div>
  );
};

export default Play;