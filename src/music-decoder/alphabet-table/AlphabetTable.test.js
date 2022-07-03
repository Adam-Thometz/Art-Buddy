import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import AlphabetTable from './AlphabetTable';

describe('AlphabetTable component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<AlphabetTable />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<AlphabetTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});