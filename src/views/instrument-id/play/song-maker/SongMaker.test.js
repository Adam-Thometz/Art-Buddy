import SongMaker from "./SongMaker";
import App from "App";

import { render } from "test/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { instrumentIdUrls } from "routes/routeUrls";

jest.mock("tone", () => ({
  Transport: { stop: jest.fn() },
  Time: jest.fn(() => ({ toSeconds: jest.fn() })),
  Buffer: jest.fn(),
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => ({
      urls,
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note,
        duration,
        time,
      })),
    })),
  })),
}));

describe("SongMaker component", () => {
  it("renders without crashing", () => {
    render(<SongMaker />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SongMaker />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("selects melodies", () => {
    render(<SongMaker />);
    const instrumentDropdown = screen.getByText("INSTRUMENT");
    userEvent.click(instrumentDropdown);
    const instrumentOption = screen.getByText("VIOLIN");
    userEvent.click(instrumentOption);
    expect(screen.getByText("MELODY")).toBeInTheDocument();

    const melodyDropdown = screen.getByText("MELODY");
    userEvent.click(melodyDropdown);
    const melodyOption = screen.getByText("BABY SHARK");
    userEvent.click(melodyOption);
    expect(screen.queryByText("MELODY")).not.toBeInTheDocument();
  });

  it("selects rhythms", () => {
    render(<SongMaker />);
    const addInstrumentBtns = screen.getAllByText("ADD INSTRUMENT");
    userEvent.click(addInstrumentBtns[0]);
    expect(screen.getAllByText("INSTRUMENT")[1]).toBeInTheDocument();

    const instrumentDropdown = screen.getAllByText("INSTRUMENT")[1];
    userEvent.click(instrumentDropdown);
    const instrumentOption = screen.getByText("DRUM SET");
    userEvent.click(instrumentOption);
    expect(screen.getByText("RHYTHM")).toBeInTheDocument();

    const rhythmDropdown = screen.getByText("RHYTHM");
    userEvent.click(rhythmDropdown);
    const rhythmOption = screen.getByText("REGULAR");
    userEvent.click(rhythmOption);
    expect(screen.queryByText("RHYTHM")).not.toBeInTheDocument();
  });

  it("saves a song", async () => {
    // below is essentially rendering the SongMaker. This is to get the Popup
    render(<App />, { initialRoutes: [instrumentIdUrls.playSongMaker] });
    const saveBtn = screen.getByText("SAVE");
    userEvent.click(saveBtn);
    expect(await screen.findByText("SAVE SONG")).toBeInTheDocument();

    const input = screen.getByLabelText("Song Title");
    userEvent.type(input, "Regular Baby");
    const submit = screen.getAllByText("SAVE")[0];
    userEvent.click(submit);
    expect(screen.getByText("Song Saved!")).toBeInTheDocument();

    const close = screen.getByText("CLOSE");
    userEvent.click(close);
    const savedSongs = screen.getByText("SAVED SONGS");
    userEvent.click(savedSongs);
    expect(screen.getByText("Regular Baby")).toBeInTheDocument();
  });
});
