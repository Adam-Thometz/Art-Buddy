function getChoice({ choice, choices }) {
  const instrumentIdx = Math.floor(Math.random() * choices.length);
  const instrumentChoice = { ...choices[instrumentIdx], family: choice };
  return instrumentChoice;
};

function getChoices({ choice, choices }) {
  const instrument1Idx = Math.floor(Math.random() * choices.length);
  const instrumentChoice1 = { ...choices[instrument1Idx], family: choice };

  let instrument2Idx = instrument1Idx;
  while (instrument2Idx === instrument1Idx) {
    instrument2Idx = Math.floor(Math.random() * choices.length);
  }
  const instrumentChoice2 = { ...choices[instrument2Idx], family: choice };
  return { instrumentChoice1, instrumentChoice2 };
}

export { getChoice, getChoices };