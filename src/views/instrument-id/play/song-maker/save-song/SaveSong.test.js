import SaveSong from "./SaveSong";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SaveSong component", () => {
  it("renders without crashing", () => {
    render(<SaveSong />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SaveSong />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("saves a song and provides feedback", () => {
    render(<SaveSong />);
    const input = screen.getByText("Song Title");
    userEvent.type(input, "My super awesome song!");
    const submit = screen.getByText("SAVE");
    userEvent.click(submit);
    expect(screen.getByText("Song Saved!")).toBeInTheDocument();
    expect(
      screen.queryByDisplayValue("My super awesome song!")
    ).not.toBeInTheDocument();
  });
});
