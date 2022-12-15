import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ColorTheory from "./ColorTheory";

describe('ColorTheory component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorTheory />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ColorTheory />);
    expect(asFragment()).toMatchSnapshot();
  });
});