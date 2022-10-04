import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import JumpIntoRhythm from "./JumpIntoRhythm";

describe('JumpIntoRhythm component', () => {
  window.localStorage.setItem('visited-jir', true);
  it('renders without crashing', () => {
    renderWithProvider(<JumpIntoRhythm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<JumpIntoRhythm />);
    expect(asFragment()).toMatchSnapshot();
  });
});