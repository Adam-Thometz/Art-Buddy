import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import PlayInstrumentId from "./PlayInstrumentId";

describe('PlayInstrumentId component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayInstrumentId />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayInstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});