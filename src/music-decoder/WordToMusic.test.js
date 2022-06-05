import React from "react";
import renderWithProvider from '../_testUtils/renderWithProvider';
import WordToMusic from './WordToMusic';

describe('WordToMusic component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WordToMusic />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<WordToMusic />);
    expect(asFragment()).toMatchSnapshot();
  });
});