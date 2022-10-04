import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ScoreKeeper from "./ScoreKeeper";

describe('Score Keeper', () => {
  window.localStorage.setItem('visited-sk', true);
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });
});