import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Popup from "./Popup";

describe('Popup component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Popup />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Popup />);
    expect(asFragment()).toMatchSnapshot();
  });
});