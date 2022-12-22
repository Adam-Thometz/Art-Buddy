import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import InstrumentDisplay from "./InstrumentDisplay";

jest.mock('_utils/instrument-id/buffers');

describe('InstrumentDisplay component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<InstrumentDisplay />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<InstrumentDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});