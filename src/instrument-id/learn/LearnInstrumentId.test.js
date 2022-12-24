import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import LearnInstrumentId from "./LearnInstrumentId";

describe('LearnInstrumentId component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LearnInstrumentId />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<LearnInstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});