import React from "react";
import { useParams } from 'react-router-dom';
import Icon from "../../../_components/icon/Icon";
import learnInstrumentOptions from "../learnInstrumentOptions";

const Instrument = () => {
  const { family, instrument } = useParams();
  const instrumentInfo = learnInstrumentOptions[family]
    .instruments
    .find(i => i.name === instrument.replace('-', ' '));
  return (
    <div className="Instrument">
      <div className="Instrument-name">
        <Icon icon={instrumentInfo.icon} text={instrumentInfo.name.toUpperCase()} />
      </div>
      <div className="Instrument-information">

      </div>
    </div>
  );
};

export default Instrument;