import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Rosters from './Rosters';

describe('Rosters component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Rosters />);
  });

  it('matches the snapshot of Rosters', () => {
    const { asFragment } = renderWithProvider(<Rosters />);
    expect(asFragment()).toMatchSnapshot();
  });
});