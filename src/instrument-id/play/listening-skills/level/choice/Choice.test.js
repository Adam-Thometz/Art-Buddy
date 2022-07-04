import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import getInstrument from "_helpers/instrument-id/getInstrument";

import Choice from "./Choice";

describe('Choice component', () => {
  const choice = getInstrument('theremin');
  it('renders without crashing', () => {
    renderWithProvider(<Choice choice={choice} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Choice choice={choice} />);
    expect(asFragment()).toMatchSnapshot();
  });
});