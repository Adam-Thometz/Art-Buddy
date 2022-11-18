import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ScoreKeeper from "./ScoreKeeper";

import { SK } from '_data/_utils/localStorageKeys';

describe('Score Keeper', () => {
  window.localStorage.setItem(`visited-${SK}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });
});