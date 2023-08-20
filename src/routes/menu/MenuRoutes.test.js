import MenuRoutes from "./MenuRoutes";

import { render } from "test/render";
import { screen } from "@testing-library/react";

import urls from "routes/routeUrls";

describe("Menu Routes", () => {
  it("renders without crashing", () => {
    render(<MenuRoutes />, { initialRoutes: [urls.musicGames] });
  });

  it("renders the music games page", () => {
    render(<MenuRoutes />, { initialRoutes: [urls.musicGames] });
    expect(screen.getByText("MUSIC GAMES")).toBeInTheDocument();
  });

  it("renders the art games page", () => {
    render(<MenuRoutes />, { initialRoutes: [urls.artGames] });
    expect(screen.getByText("ART GAMES")).toBeInTheDocument();
  });

  it("renders all games", () => {
    render(<MenuRoutes />, { initialRoutes: [urls.allGames] });
    expect(screen.getByText("ALL GAMES")).toBeInTheDocument();
  });
});
