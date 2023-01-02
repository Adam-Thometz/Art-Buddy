import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import Energy from './Energy';

describe('Energy component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Energy />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Energy />);
    expect(asFragment()).toMatchSnapshot();
  });
});