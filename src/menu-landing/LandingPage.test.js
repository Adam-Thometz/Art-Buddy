import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import LocalStorageMock from '_testUtils/mocks/localStorageMock';
import { screen } from "@testing-library/react";

import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LandingPage />);
  });

  it('matches the snapshot of the landing page displaying the games page', () => {
    const { asFragment } = renderWithProvider(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders welcome page only when visited is NOT set to true', () => {
    const localStorage = new LocalStorageMock();
    localStorage.setItem('visited', false)
    renderWithProvider(<LandingPage />);
    expect(screen.getByText('WELCOME TO ART BUDDY!')).toBeInTheDocument();
  });
});