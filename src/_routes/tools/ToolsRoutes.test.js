import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ToolsRoutes from "./ToolsRoutes";
import urls from '../../_data/_routes/routeUrls';

describe('Tools Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ToolsRoutes />);
  });

  it('renders the score keeper', () => {
    renderWithProvider(<ToolsRoutes />, { initialRoutes: [urls.scoreKeeper] });
    expect(screen.getByText('SCORE KEEPER')).toBeInTheDocument();
  });
});