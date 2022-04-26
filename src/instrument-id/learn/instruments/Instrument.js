import React from "react";

import { useSelector } from "react-redux";

const Instrument = () => {
  const instrument = useSelector(state => state.instrumentId.currInstrument);
  return (
    <div className="Instrument">

    </div>
  );
};

export default Instrument;