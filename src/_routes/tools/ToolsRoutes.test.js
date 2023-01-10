import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ToolsRoutes from "./ToolsRoutes";
import urls from '_routes/routeUrls';

describe('Tools Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ToolsRoutes />, { initialRoutes: [urls.scoreKeeperUrl] });
  });

  it('renders the score keeper', () => {
    renderWithProvider(<ToolsRoutes />, { initialRoutes: [urls.scoreKeeperUrl] });
    expect(screen.getByText('SCORE KEEPER')).toBeInTheDocument();
  });

  // it('renders the time keeper', () => {
  //   renderWithProvider(<ToolsRoutes />, { initialRoutes: [urls.timeKeeperUrl] });
  //   expect(screen.getByText('TIME KEEPER')).toBeInTheDocument();
  // });
  
  it('renders the mood meter', () => {
    renderWithProvider(<ToolsRoutes />, { initialRoutes: [urls.moodMeterUrl] });
    expect(screen.getByText('MOOD METER')).toBeInTheDocument();
  });
});