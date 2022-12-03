import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import LilyPadDisplay from "./LilyPadDisplay";

describe('LilyPadDisplay component', () => {
  const measure = [{ duration: ['4n'], isRest: false }, null, null, null];
  it('renders without crashing', () => {
    renderWithProvider(<LilyPadDisplay measure={measure} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<LilyPadDisplay measure={measure} />);
    expect(asFragment()).toMatchSnapshot();
  });
});