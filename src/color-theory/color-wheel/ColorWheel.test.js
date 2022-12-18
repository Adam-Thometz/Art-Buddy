import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ColorWheel from "./ColorWheel";

describe('ColorWheel component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorWheel />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ColorWheel />);
    expect(asFragment()).toMatchSnapshot();
  });
});