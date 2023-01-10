import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ColorTheoryRoutes from "./ColorTheoryRoutes";
import { colorTheoryUrls } from '_routes/routeUrls';

describe('Color Theory Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
  });

  it('renders the main learn page', () => {
    renderWithProvider(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
    expect(screen.getByText('PRIMARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('SECONDARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('TERTIARY COLORS')).toBeInTheDocument();
  });

  it('renders different pages for different color catregories', () => {
    renderWithProvider(<ColorTheoryRoutes />, { initialRoutes: [`${colorTheoryUrls.learn}/primary`] });
    expect(screen.getByText('PRIMARY COLORS')).toBeInTheDocument();
    renderWithProvider(<ColorTheoryRoutes />, { initialRoutes: [`${colorTheoryUrls.learn}/secondary`] });
    expect(screen.getByText('SECONDARY COLORS')).toBeInTheDocument();
  });
});