import { useContext } from "react";
import { PopupContext } from "context/PopupContext";

import { useSelector } from "react-redux";

import "./Result.css";

import Button from "components/button/Button";
import Video from "components/video/Video";
import Face from "../valence/face/Face";
import Battery from "../energy/battery/Battery";

import faces from "data/mood-meter/faces";
import batteries from "data/mood-meter/batteries";
import moods from "data/mood-meter/moods";

const Result = () => {
  const { valence, energy } = useSelector((state) => state.moodMeter);
  const { setCurrPopup } = useContext(PopupContext);

  const face = faces.find((face) => face.id === valence);
  const valenceIcon = (
    <Face key="face" src={face.src} id={face.id} isSelected={true} />
  );

  const battery = batteries.find((battery) => battery.id === energy);
  const energyIcon = (
    <Battery
      key="battery"
      width={battery.width}
      id={battery.id}
      filter={battery.filter}
    />
  );

  const mood = moods[valence][energy];

  const openVideo = () =>
    setCurrPopup({
      title: `${mood.name.toUpperCase()} SONG`,
      popup: <Video uri={mood.songURI} />,
    });

  return (
    <div className="Result">
      <div className="Result-icons">
        {valenceIcon}
        {energyIcon}
      </div>
      <p className="Result-text">{mood.name}</p>
      <Button colorId={2} onClick={openVideo}>
        Listen To Song
      </Button>
    </div>
  );
};

export default Result;
