import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import JumpIntoRhythm from "./JumpIntoRhythm";

describe('JumpIntoRhythm component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<JumpIntoRhythm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<JumpIntoRhythm />);
    expect(asFragment()).toMatchSnapshot();
  });
});