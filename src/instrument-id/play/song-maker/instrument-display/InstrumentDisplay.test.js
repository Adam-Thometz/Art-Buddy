import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import InstrumentDisplay from "./InstrumentDisplay";

describe('InstrumentDisplay component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<InstrumentDisplay />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<InstrumentDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});