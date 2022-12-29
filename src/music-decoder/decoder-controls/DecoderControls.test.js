import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import renderWithProvider from '_testUtils/renderWithProvider';

import DecoderControls from './DecoderControls';

describe('DecoderControls component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <DecoderControls />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <DecoderControls />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});