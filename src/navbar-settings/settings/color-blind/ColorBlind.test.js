import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import ColorBlind from './ColorBlind';

describe('ColorBlind component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorBlind />);
  });

  it('matches the snapshot of ColorBlind', () => {
    const { asFragment } = renderWithProvider(<ColorBlind />);
    expect(asFragment()).toMatchSnapshot();
  });
});