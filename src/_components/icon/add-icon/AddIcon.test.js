import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import AddIcon from './AddIcon';

describe('AddIcon component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<AddIcon />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<AddIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});