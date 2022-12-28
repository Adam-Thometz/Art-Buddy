import React from "react";
import { MusicDecoderContextMock } from "_testUtils/mocks/contextMocks";

import renderWithProvider from '_testUtils/renderWithProvider';

import DecoderControls from './DecoderControls';

describe('DecoderControls component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<MusicDecoderContextMock>
      <DecoderControls />
    </MusicDecoderContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<MusicDecoderContextMock>
      <DecoderControls />
    </MusicDecoderContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});