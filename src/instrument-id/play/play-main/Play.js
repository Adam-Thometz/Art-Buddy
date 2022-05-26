import React from "react";
import { useNavigate } from "react-router-dom";

import './Play.css';

import Icon from "../../../_components/icon/Icon";
import Options from "../../../_components/option/Options";

import { songMaker, listeningSkills } from "../../_icons/iconImports";
import { instrumentIdUrls } from '../../../_routes/routeUrls';

const Play = () => {
  const navigate = useNavigate();
  return (
    <main className="Play">
      <header>
        <p>Master skills in Listening Skills to unlock instruments for the Song Maker!</p>
      </header>
      <Options width="50%">
        <Icon largeFont icon={listeningSkills} text="Listening Skills Test" onClick={() => navigate(instrumentIdUrls.playListeningUrl)} />
        <Icon largeFont icon={songMaker} text="Song Maker" onClick={() => navigate(instrumentIdUrls.playSongMakerUrl)} />
      </Options>
    </main>
  );
};

export default Play;