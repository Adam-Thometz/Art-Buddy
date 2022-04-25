import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import MenuNavbar from './MenuNavbar'

describe('MenuNavbar component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<MenuNavbar />);
  })

  it('matches the snapshot of the MenuNavbar', () => {
    const { asFragment } = renderWithRouter(<MenuNavbar />);
    expect(asFragment()).toMatchSnapshot();
  })
})