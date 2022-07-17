import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "_components/icon/Icon";
import Options from "_components/option/Options";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import Help from "_components/help/Help";

import { songMaker, listeningSkills } from "_media/instrument-id/_icons/iconImports";
import { instrumentIdUrls } from '_data/_routes/routeUrls';

const Play = () => {
  const navigate = useNavigate();

  const goToListeningTest = () => navigate(instrumentIdUrls.playListening);
  const goToSongMaker = () => navigate(instrumentIdUrls.playSongMaker);
  
  return (
    <main className="Play">
      <WindowNavbar page='INSTRUMENT ID: PLAY' cornerIcon={<Help />} />
      <header>
        <p>Master skills in Listening Skills to unlock instruments for the Song Maker!</p>
      </header>
      <Options width="50%">
        <Icon largeFont icon={listeningSkills} text="Listening Skills Test" onClick={goToListeningTest} />
        <Icon largeFont icon={songMaker} text="Song Maker" onClick={goToSongMaker} />
      </Options>
    </main>
  );
};

export default Play;