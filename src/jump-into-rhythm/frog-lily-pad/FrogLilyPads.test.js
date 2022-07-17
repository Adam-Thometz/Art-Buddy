import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import FrogLilyPads from "./FrogLilyPads";

describe('FrogLilyPads component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<FrogLilyPads />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<FrogLilyPads />);
    expect(asFragment()).toMatchSnapshot();
  });
});