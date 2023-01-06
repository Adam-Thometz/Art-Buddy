import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import Sequence from './Sequence';

describe('Sequence component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Sequence />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Sequence />);
    expect(asFragment()).toMatchSnapshot();
  });
});