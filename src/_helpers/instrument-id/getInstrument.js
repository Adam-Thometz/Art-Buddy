import learnInstrumentOptions from "_data/instrument-id/learnInstrumentOptions";

/** getInstrument
 * Purpose: get information about an instrument from learnInstrumentOptions based on the passed id
 * Found in: buffers.js, instrumentIdReducer.js, Instrument.js
 */

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
};