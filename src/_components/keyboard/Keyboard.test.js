import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Keyboard from "./Keyboard";

describe('Keyboard component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Keyboard />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Keyboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});