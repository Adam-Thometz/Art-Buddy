/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayContext } from "context/PlayContext";
import { PopupContext } from "context/PopupContext";

import { useSelector } from "react-redux";

import "./Instrument.css";

import Icon from "components/icon/Icon";
import Button from "components/button/Button";
import WindowNavbar from "components/window-nav/WindowNavbar";
import Video from "components/video/Video";

import loadSounds from "utils/instrument-id/loadSounds";
import getInstrument from "utils/instrument-id/getInstrument";
import convertToId from "utils/_general/convertToId";
import { Transport, start } from "tone";

const Instrument = () => {
  const { volume } = useSelector((state) => state.settings);
  const { instrument } = useParams();
  const { playFn, setPlayFn } = useContext(PlayContext);
  const { setCurrPopup } = useContext(PopupContext);

  const { id, name, icon, madeFrom, howToPlay, width, videoUri } =
    getInstrument(convertToId(instrument.replace(/-/g, " ")));

  const playInstrument = async () => {
    if (Transport.state === "stopped") await start();
    playFn.play(id);
  };

  useEffect(() => {
    return () => {
      Transport.stop();
      setCurrPopup(null);
      setPlayFn(null);
    };
  }, []);

  useEffect(() => {
    setPlayFn(() => loadSounds({ ids: [id], volume, isTest: false }));
  }, [id, volume])

  const openVideo = () =>
    setCurrPopup({
      title: name,
      popup: <Video uri={videoUri} />,
    });

  return (
    <>
      <WindowNavbar page="INSTRUMENT ID: LEARN" />
      <div className="Instrument-main">
        <header className="Instrument-name">
          <Icon largeFont icon={icon} text={name} width={width} />
        </header>
        <article className="Instrument-information">
          <h2>What is the {name.toLowerCase()} made of?</h2>
          <section className="Instrument-materials">
            {madeFrom.map((material) => (
              <Icon
                key={material.name}
                icon={material.icon}
                text={material.name}
                size="100px"
              />
            ))}
          </section>
          <p className="Instrument-made-of">
            The {name} is played by {howToPlay}
          </p>
          <section className="Instrument-buttons">
            <Button colorId={0} onClick={playInstrument}>
              Play Sound
            </Button>
            <Button colorId={2} onClick={openVideo}>
              Watch Video
            </Button>
          </section>
        </article>
      </div>
    </>
  );
};

export default Instrument;
