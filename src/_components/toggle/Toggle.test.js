import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import Toggle from './Toggle'

describe('Toggle component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Toggle />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Toggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});