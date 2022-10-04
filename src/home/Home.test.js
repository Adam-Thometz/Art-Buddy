import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import Home from './Home';

describe('Home component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Home />);
  });

  it('matches the snapshot of the landing page displaying the games page', () => {
    window.localStorage.setItem('visited', true);
    const { asFragment } = renderWithProvider(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('matches the snapshot of the landing page displaying the welcome page', () => {
    window.localStorage.setItem('visited', false);
    const { asFragment } = renderWithProvider(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});