import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Settings from './Settings';

describe('Settings component', () => {
  window.localStorage.setItem('rosters', '{}')
  it('renders without crashing', () => {
    renderWithProvider(<Settings />);
  });

  it('matches the snapshot of Settings', () => {
    const { asFragment } = renderWithProvider(<Settings />);
    expect(asFragment()).toMatchSnapshot();
  });
});