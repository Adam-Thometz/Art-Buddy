import InstrumentIdRoutes from "./InstrumentIdRoutes";

import { render } from "test/render";
import { screen } from "@testing-library/react";

import { instrumentIdUrls } from "routes/routeUrls";

jest.mock("tone", () => ({
  Transport: {
    bpm: { value: 120 },
    stop: jest.fn(),
  },
  Buffer: jest.fn(),
}));

describe("Instrument Id Routes", () => {
  it("renders without crashing", () => {
    render(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.learn] });
  });

  it("renders the main learn page", () => {
    render(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.learn] });
    expect(
      screen.getByText("To begin, choose an instrument family")
    ).toBeInTheDocument();
  });

  it("renders an instrument family page", () => {
    render(<InstrumentIdRoutes />, {
      initialRoutes: [`${instrumentIdUrls.learn}/brass`],
    });
    expect(screen.getByText("THE BRASS FAMILY")).toBeInTheDocument();
  });

  it("renders a page for a specific instrument", () => {
    render(<InstrumentIdRoutes />, {
      initialRoutes: [`${instrumentIdUrls.learn}/brass/trumpet`],
    });
    expect(
      screen.getByText("What is the trumpet made of?")
    ).toBeInTheDocument();
  });

  it("renders the main play page", () => {
    render(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.play] });
    expect(screen.getByText("INSTRUMENT ID: PLAY")).toBeInTheDocument();
  });

  it("renders the listening skills page", () => {
    render(<InstrumentIdRoutes />, {
      initialRoutes: [instrumentIdUrls.playListening],
    });
    expect(
      screen.getByText(
        "Practice your listening skills to unlock instruments that you can play later on the Song Maker section!"
      )
    ).toBeInTheDocument();
  });

  it("renders a level for listening skills", () => {
    render(<InstrumentIdRoutes />, {
      initialRoutes: [`${instrumentIdUrls.playListening}/1`],
    });
    expect(
      screen.getByText("Listening Skills Test: Level 1")
    ).toBeInTheDocument();
  });

  it("renders the song maker", () => {
    render(<InstrumentIdRoutes />, {
      initialRoutes: [instrumentIdUrls.playSongMaker],
    });
    expect(screen.getByText("Song Maker")).toBeInTheDocument();
    expect(screen.getByText("SAVED SONGS")).toBeInTheDocument();
  });
});
