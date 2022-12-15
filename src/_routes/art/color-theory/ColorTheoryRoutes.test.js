import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ColorTheoryRoutes from "./ColorTheoryRoutes";
import { colorTheoryUrls } from '_data/_routes/routeUrls';

describe('Instrument Id Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorTheoryRoutes />);
  });

  it('renders the main learn page', () => {
    renderWithProvider(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
    expect(screen.getByText('PRIMARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('SECONDARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('TERTIARY COLORS')).toBeInTheDocument();
  });
});