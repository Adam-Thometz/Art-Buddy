import MusicRoutes from "./MusicRoutes";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";

import urls from "routes/routeUrls";

jest.mock("tone", () => ({
  Transport: {
    stop: jest.fn(),
    bpm: { value: 120 },
  },
  Buffer: jest.fn(),
  PitchShift: jest.fn(() => ({
    toDestination: jest.fn(),
  })),
  Synth: jest.fn(() => ({
    connect: jest.fn(() => ({
      volume: { value: 0 },
    })),
  })),
  Sampler: jest.fn(() => ({
    connect: jest.fn(() => ({
      volume: { value: 0 },
    })),
    toDestination: jest.fn(),
  })),
}));

describe("Music Game Routes", () => {
  it("renders without crashing", () => {
    render(<MusicRoutes />, { initialRoutes: [urls.wordToMusicUrl] });
  });

  it("renders the word-to-music decoder", () => {
    window.localStorage.setItem("visited-wtm", true);
    render(<MusicRoutes />, { initialRoutes: [urls.wordToMusicUrl] });
    expect(screen.getByText("WORD-TO-MUSIC DECODER")).toBeInTheDocument();
  });

  it("renders the sequence maker", () => {
    render(<MusicRoutes />, { initialRoutes: [urls.sequenceMakerUrl] });
    expect(screen.getByText("SEQUENCE MAKER")).toBeInTheDocument();
  });

  it("renders jump into rhythm", () => {
    render(<MusicRoutes />, { initialRoutes: [urls.jumpIntoRhythmUrl] });
    expect(screen.getByText("JUMP INTO RHYTHM")).toBeInTheDocument();
  });

  it("renders the instrument id game", () => {
    render(<MusicRoutes />, { initialRoutes: [urls.instrumentIdUrl] });
    expect(screen.getByText("INSTRUMENT ID")).toBeInTheDocument();
  });
});
