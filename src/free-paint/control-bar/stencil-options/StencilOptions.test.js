import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import StencilOptions from "./StencilOptions";

describe('StencilOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<StencilOptions id='numbers' />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<StencilOptions id='numbers' />);
    expect(asFragment()).toMatchSnapshot();
  });
});