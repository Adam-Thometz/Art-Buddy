import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import MenuRoutes from "./MenuRoutes";
import urls from '../routeUrls';

describe('Menu Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<MenuRoutes />);
  });
  
  it('renders the music games page', () => {
    renderWithProvider(<MenuRoutes />, { initialRoutes: [urls.musicGames] });
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  });
  
  it('renders the art games page', () => {
    renderWithProvider(<MenuRoutes />, { initialRoutes: [urls.artGames] });
    expect(screen.getByText('ART GAMES')).toBeInTheDocument();
  });
  
  it('renders all games', () => {
    renderWithProvider(<MenuRoutes />, { initialRoutes: [urls.allGames] });
    expect(screen.getByText('ALL GAMES')).toBeInTheDocument();
  });
});