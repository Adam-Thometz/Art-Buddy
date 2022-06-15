import React from "react";
import renderWithProvider from "../../_testUtils/renderWithProvider";
import Settings from './Settings';

describe('Settings component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Settings />);
  });

  it('matches the snapshot of the Settings', () => {
    const { asFragment } = renderWithProvider(<Settings />);
    expect(asFragment()).toMatchSnapshot();
  });
});