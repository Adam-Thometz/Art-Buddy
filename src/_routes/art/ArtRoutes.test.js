import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ArtRoutes from "./ArtRoutes";
import urls from '_data/_routes/routeUrls';

describe('Menu Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ArtRoutes />);
  });
  
  it('renders the music games page', () => {
    renderWithProvider(<ArtRoutes />, { initialRoutes: [urls.freePaintUrl] });
    expect(screen.getByText('FREE PAINT')).toBeInTheDocument();
  });
});