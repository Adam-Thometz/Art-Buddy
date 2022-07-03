import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import SequenceControls from './SequenceControls';

describe('SequenceControls component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SequenceControls />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SequenceControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});