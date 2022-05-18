import learnInstrumentOptions from "../../instrument-id/learnInstrumentOptions";

export default function getInstrument(instrumentId) {
  const families = Object.keys(learnInstrumentOptions);
  for (let family of families) {
    const instruments = learnInstrumentOptions[family].instruments;
    for (let instrument of instruments) {
      if (instrument.id === instrumentId) {
        return instrument;
      };
    };
  };
}

export function isRhythmicInstrument(instrument) {
  return (typeof instrument.sound === 'object') ? true : false;
};