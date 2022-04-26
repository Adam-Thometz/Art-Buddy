import React from "react";
import renderWithRouter from '../_testUtils/renderWithRouter';
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Navbar />);
  })

  it('matches the snapshot of the navbar', () => {
    const { asFragment } = renderWithRouter(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  })
})