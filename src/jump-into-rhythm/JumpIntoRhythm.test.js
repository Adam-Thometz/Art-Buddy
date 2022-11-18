import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import JumpIntoRhythm from "./JumpIntoRhythm";

import { JIR } from '_data/_utils/localStorageKeys';

describe('JumpIntoRhythm component', () => {
  window.localStorage.setItem(`visited-${JIR}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<JumpIntoRhythm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<JumpIntoRhythm />);
    expect(asFragment()).toMatchSnapshot();
  });
});