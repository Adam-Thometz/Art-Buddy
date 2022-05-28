import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';

import DecoderControls from './DecoderControls';

describe('DecoderControls component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<DecoderControls />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<DecoderControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});