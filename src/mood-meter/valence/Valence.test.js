import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import Valence from './Valence';

describe('Valence component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Valence />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Valence />);
    expect(asFragment()).toMatchSnapshot();
  });
});