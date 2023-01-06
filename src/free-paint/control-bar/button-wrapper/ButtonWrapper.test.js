import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ButtonWrapper from "./ButtonWrapper";

describe('ButtonWrapper component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ButtonWrapper label="ABC" id="upperCase" colorId={4} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ButtonWrapper label="ABC" id="upperCase" colorId={4} />);
    expect(asFragment()).toMatchSnapshot();
  });
});