import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import TooSmall from './TooSmall';

describe('TooSmall component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<TooSmall />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<TooSmall />);
    expect(asFragment()).toMatchSnapshot();
  });
});