import ToolsRoutes from "./ToolsRoutes";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";

import urls from "routes/routeUrls";

describe("Tools Routes", () => {
  it("renders without crashing", () => {
    render(<ToolsRoutes />, { initialRoutes: [urls.scoreKeeperUrl] });
  });

  it("renders the score keeper", () => {
    render(<ToolsRoutes />, { initialRoutes: [urls.scoreKeeperUrl] });
    expect(screen.getByText("SCORE KEEPER")).toBeInTheDocument();
  });

  it('renders the time keeper', () => {
    render(<ToolsRoutes />, { initialRoutes: [urls.timeKeeperUrl] });
    expect(screen.getByText('TIME KEEPER')).toBeInTheDocument();
  });

  it("renders the mood meter", () => {
    render(<ToolsRoutes />, { initialRoutes: [urls.moodMeterUrl] });
    expect(screen.getByText("MOOD METER")).toBeInTheDocument();
  });

  it("renders the noise meter", () => {
    render(<ToolsRoutes />, { initialRoutes: [urls.noiseMeterUrl] });
    expect(screen.getByText("NOISE METER")).toBeInTheDocument();
  });
});
