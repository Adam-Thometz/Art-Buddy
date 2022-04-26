import React from "react";

import { useSelector } from "react-redux";
import Learn from "./learn/Learn";

import InstrumentIdMenu from "./main/InstrumentIdMenu";
import Play from "./play/Play";

const InstrumentId = () => {
  const mode = useSelector(state => state.instrumentId.mode);
  const currFamily = useSelector(state => state.instrumentId.currFamily);

  const showPage = (mode, family) => {
    if (mode === 'learn') {
      if (!family) {
        return <Learn />;
      } else {

      }
    }
    if (mode === 'play') {
      if (!family) {
        return <Play />;
      } else {
        
      }
    }
    return <InstrumentIdMenu />
  }
  
  return (
    <div className="InstrumentId">
      {showPage(mode, currFamily)}
    </div>
  );
};

export default InstrumentId;