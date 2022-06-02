import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import AlphabetCell from './AlphabetCell'

describe('AlphabetCell component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<AlphabetCell letter='C' note='C' />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<AlphabetCell letter='C' note='C' />);
    expect(asFragment()).toMatchSnapshot();
  });
});