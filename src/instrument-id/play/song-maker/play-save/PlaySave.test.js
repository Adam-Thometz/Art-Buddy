import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import PlaySave from "./PlaySave";

describe('PlaySave component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlaySave />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlaySave />);
    expect(asFragment()).toMatchSnapshot();
  });
});