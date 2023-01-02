import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import Battery from './Battery';

describe('Battery component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Battery width='100%' id={0} filter={null} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Battery width='100%' id={0} filter={null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});