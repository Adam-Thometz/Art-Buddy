import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ArtBuddyRoutes from "./ArtBuddyRoutes";

describe('Art Buddy Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ArtBuddyRoutes />);
  });

  it('renders the 404 page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/gregwerg'] });
    expect(screen.getByText('UH OH!')).toBeInTheDocument();
  });
});