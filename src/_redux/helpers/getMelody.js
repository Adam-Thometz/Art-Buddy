import learnInstrumentOptions from "../../instrument-id/learnInstrumentOptions";

function getMelody({ instrumentId, melodyId }) {
  const families = Object.keys(learnInstrumentOptions);
  for (let family of families) {
    const instruments = learnInstrumentOptions[family].instruments;
    for (let instrument of instruments) {
      if (instrument.id === instrumentId) {
        return instrument.melodies[melodyId];
      };
    };
  };
};

export default getMelody;