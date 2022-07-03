import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Help from "./Help";

describe('Help component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Help />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });
});