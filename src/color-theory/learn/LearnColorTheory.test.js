import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import LearnColorTheory from "./LearnColorTheory";

describe('LearnColorTheory component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LearnColorTheory />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<LearnColorTheory />);
    expect(asFragment()).toMatchSnapshot();
  });
});