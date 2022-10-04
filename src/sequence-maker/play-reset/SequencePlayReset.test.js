import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import SequencePlayReset from './SequencePlayReset';

describe('SequencePlayReset component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SequencePlayReset />);
  });

  it('matches the snapshot of SequencePlayReset', () => {
    const { asFragment } = renderWithProvider(<SequencePlayReset />);
    expect(asFragment()).toMatchSnapshot();
  });
});