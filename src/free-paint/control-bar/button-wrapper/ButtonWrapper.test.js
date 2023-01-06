import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { ControlBarProvider } from "_context/ControlBarContext";

import ButtonWrapper from "./ButtonWrapper";

describe('ButtonWrapper component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ControlBarProvider>
      <ButtonWrapper label="ABC" id="upperCase" colorId={4} />
    </ControlBarProvider>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ControlBarProvider>
      <ButtonWrapper label="ABC" id="upperCase" colorId={4} />
    </ControlBarProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});