import React from "react";
import renderWithProvider from '../_testUtils/renderWithProvider';
import LandingPage from './LandingPage'

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LandingPage />);
  })

  it('matches the snapshot of the landing page displaying the welcome page', () => {
    const { asFragment } = renderWithProvider(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  })
})