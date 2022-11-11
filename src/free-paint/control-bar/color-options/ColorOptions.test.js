import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ColorOptions from "./ColorOptions";

describe('ColorOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorOptions />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ColorOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});