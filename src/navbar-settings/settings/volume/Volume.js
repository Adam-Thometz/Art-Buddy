import { useSelector, useDispatch } from "react-redux";
import { setVolume } from "_redux/settings/settingsReducer";

import "./Volume.css";

import Icon from "_components/icon/Icon";

import { VOLUME_LOW, VOLUME_MEDIUM, VOLUME_HIGH } from "_media/settings/settings.assets";
import { LOW, MEDIUM, HIGH } from "_data/_utils/volume";

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
        icon={VOLUME_LOW}
        otherImgStyles={volume === LOW ? selectedVolume : unselectedVolume}
        text="LOW"
        onClick={handleVolume}
        id={LOW}
        size="50px"
        width="40px"
      />
      <Icon
        icon={VOLUME_MEDIUM}
        otherImgStyles={volume === MEDIUM ? selectedVolume : unselectedVolume}
        text="MEDIUM"
        onClick={handleVolume}
        id={MEDIUM}
        size="50px"
      />
      <Icon
        icon={VOLUME_HIGH}
        otherImgStyles={volume === HIGH ? selectedVolume : unselectedVolume}
        text="HIGH"
        onClick={handleVolume}
        id={HIGH}
        size="50px"
        width="60px"
      />
    </section>
  );
};

export default Volume;
