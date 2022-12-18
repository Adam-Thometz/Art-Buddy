import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import Learn from "./Learn";

describe('Learn component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Learn />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Learn />);
    expect(asFragment()).toMatchSnapshot();
  });
});