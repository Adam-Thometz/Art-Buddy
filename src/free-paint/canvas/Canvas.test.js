import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import Canvas from "./Canvas";

describe('Canvas component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Canvas />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Canvas />);
    expect(asFragment()).toMatchSnapshot();
  });
});