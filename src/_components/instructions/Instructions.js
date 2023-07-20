import { useSelector } from "react-redux";

import Icon from "_components/icon/Icon";

import { PLAY_ACTION_BTN } from "_assets/_general/general.assets";

const Instructions = ({ setVisited }) => {
  const { currGame } = useSelector((state) => state.general);
  const handleSetVisited = () => setVisited(true);
  return (
    <div className="Instructions">
      <article>{currGame.description}</article>
      <Icon icon={PLAY_ACTION_BTN} text="PLAY" size="250px" onClick={handleSetVisited} />
    </div>
  );
};

export default Instructions;
