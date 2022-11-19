import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import Notes from "./Notes";

describe('Notes component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Notes />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Notes />);
    expect(asFragment()).toMatchSnapshot();
  });
});