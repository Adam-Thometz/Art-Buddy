import React from "react";
import renderWithRouter from '../_testUtils/renderWithRouter';
import LandingPage from './LandingPage'

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<LandingPage />);
  })

  it('matches the snapshot of the landing page displaying the welcome page', () => {
    const { asFragment } = renderWithRouter(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  })
})