import React from "react";

import { useSelector } from "react-redux";

import InstrumentIdMenu from "./InstrumentIdMenu";

const InstrumentId = () => {
  const mode = useSelector(state => state.instrumentId.mode);
  
  return (
    <div className="InstrumentId">
      {!mode ? <InstrumentIdMenu /> : null}
    </div>
  );
};

export default InstrumentId;