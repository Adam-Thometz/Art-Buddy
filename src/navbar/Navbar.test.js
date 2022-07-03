import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Navbar />);
  });

  it('matches the snapshot of the navbar', () => {
    const { asFragment } = renderWithProvider(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});