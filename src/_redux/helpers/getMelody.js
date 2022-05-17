import learnInstrumentOptions from "../../instrument-id/learnInstrumentOptions";

function getMelody({ instrumentName, melodyId }) {
  const families = Object.keys(learnInstrumentOptions);
  for (let family of families) {
    const instruments = learnInstrumentOptions[family].instruments;
    for (let instrument of instruments) {
      if (instrument.name === instrumentName) {
        return instrument.melodies[melodyId];
      };
    };
  };
};

export default getMelody;