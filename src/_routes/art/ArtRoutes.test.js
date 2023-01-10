import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ArtRoutes from "./ArtRoutes";
import urls from '_routes/routeUrls';

describe('Art Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ArtRoutes />, { initialRoutes: [urls.freePaintUrl] });
  });
  
  it('renders free paint', () => {
    renderWithProvider(<ArtRoutes />, { initialRoutes: [urls.freePaintUrl] });
    expect(screen.getByText('FREE PAINT')).toBeInTheDocument();
  });

  it('renders color theory', () => {
    renderWithProvider(<ArtRoutes />, { initialRoutes: [urls.colorTheoryUrl] });
    expect(screen.getByText('COLOR THEORY')).toBeInTheDocument();
  });
});