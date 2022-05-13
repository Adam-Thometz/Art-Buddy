import React from "react";

import renderWithProvider from "../_testUtils/renderWithProvider";

import InstrumentId from "./InstrumentId";

describe('InstrumentId component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<InstrumentId />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<InstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});