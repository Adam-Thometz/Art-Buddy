import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import ControlBarContextMock from "_testUtils/mocks/controlBarContextMock";

import ButtonWrapper from "./ButtonWrapper";

describe('ButtonWrapper component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ControlBarContextMock>
      <ButtonWrapper label="ABC" id="upperCase" colorId={4} />
    </ControlBarContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ControlBarContextMock>
      <ButtonWrapper label="ABC" id="upperCase" colorId={4} />
    </ControlBarContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});