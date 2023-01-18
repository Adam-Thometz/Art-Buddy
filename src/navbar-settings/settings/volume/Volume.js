import { useSelector, useDispatch } from "react-redux";
import { setVolume } from "_redux/settings/settingsActions";

import "./Volume.css";

import Icon from "_components/icon/Icon";

import volumeHigh from "_media/settings/volume/volume-high.png";
import volumeMid from "_media/settings/volume/volume-medium.png";
import volumeLow from "_media/settings/volume/volume-low.png";

const Volume = () => {
  const { volume } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const selectedVolume = {
    // Space Cadet (not completely accurate)
    filter:
      "invert(9%) sepia(31%) saturate(5353%) hue-rotate(221deg) brightness(100%) contrast(94%)",
  };

  const unselectedVolume = {
    // Light Grey (not completely accurate)
    filter:
      "invert(71%) sepia(83%) saturate(6%) hue-rotate(236deg) brightness(103%) contrast(89%)",
  };

  const handleVolume = (e) => dispatch(setVolume(+e.currentTarget.id));

  return (
    <section className="Volume">
      <Icon
        icon={volumeLow}
        otherImgStyles={volume === -12 ? selectedVolume : unselectedVolume}
        text="LOW"
        onClick={handleVolume}
        id="-12"
        size="50px"
        width="40px"
      />
      <Icon
        icon={volumeMid}
        otherImgStyles={volume === 0 ? selectedVolume : unselectedVolume}
        text="MEDIUM"
        onClick={handleVolume}
        id="0"
        size="50px"
      />
      <Icon
        icon={volumeHigh}
        otherImgStyles={volume === 12 ? selectedVolume : unselectedVolume}
        text="HIGH"
        onClick={handleVolume}
        id="12"
        size="50px"
        width="60px"
      />
    </section>
  );
};

export default Volume;
