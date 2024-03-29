import ColorTheoryRoutes from "./ColorTheoryRoutes";

import { render } from "test/render";
import { screen } from "@testing-library/react";

import { colorTheoryUrls } from "routes/routeUrls";

describe("Color Theory Routes", () => {
  it("renders without crashing", () => {
    render(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
  });

  it("renders the main learn page", () => {
    render(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
    expect(screen.getByText("PRIMARY COLORS")).toBeInTheDocument();
    expect(screen.getByText("SECONDARY COLORS")).toBeInTheDocument();
    expect(screen.getByText("TERTIARY COLORS")).toBeInTheDocument();
  });

  it("renders different pages for different color categories", () => {
    render(<ColorTheoryRoutes />, {
      initialRoutes: [`${colorTheoryUrls.learn}/primary`],
    });
    expect(screen.getByText("PRIMARY COLORS")).toBeInTheDocument();
    render(<ColorTheoryRoutes />, {
      initialRoutes: [`${colorTheoryUrls.learn}/secondary`],
    });
    expect(screen.getByText("SECONDARY COLORS")).toBeInTheDocument();
  });

  it("renders the main play page", () => {
    render(<ColorTheoryRoutes />, {
      initialRoutes: [colorTheoryUrls.playMain],
    });
    expect(screen.getByText("COLOR THEORY: PLAY")).toBeInTheDocument();
  });

  it("renders different levels", () => {
    render(<ColorTheoryRoutes />, {
      initialRoutes: [`${colorTheoryUrls.playMain}/1`],
    });
    expect(screen.getByText("Play: Level 1A")).toBeInTheDocument();
    render(<ColorTheoryRoutes />, {
      initialRoutes: [`${colorTheoryUrls.playMain}/2`],
    });
    expect(screen.getByText("Play: Level 2A")).toBeInTheDocument();
    render(<ColorTheoryRoutes />, {
      initialRoutes: [`${colorTheoryUrls.playMain}/3`],
    });
    expect(screen.getByText("Play: Level 3A")).toBeInTheDocument();
  });
});
