import learnInstrumentOptions from "../../instrument-id/learnInstrumentOptions";

function getChoices({ level, choice }) {
  const choices = learnInstrumentOptions[choice].instruments;
  const instrumentIdx = Math.floor(Math.random() * choices.length);
  const instrumentChoice = { ...choices[instrumentIdx], family: choice };

  if (level === '1') return instrumentChoice;

  let instrument2Idx = instrumentIdx;
  while (instrument2Idx === instrumentIdx) {
    instrument2Idx = Math.floor(Math.random() * choices.length);
  }
  const instrumentChoice2 = { ...choices[instrument2Idx], family: choice };
  return { instrumentChoice, instrumentChoice2 };
};

export default getChoices;