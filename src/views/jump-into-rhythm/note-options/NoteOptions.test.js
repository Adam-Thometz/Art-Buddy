import NoteOptions from "./NoteOptions";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("NoteOptions component", () => {
  it("renders without crashing", () => {
    render(<NoteOptions />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NoteOptions />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should enable the play button after notes are selected", () => {
    render(<NoteOptions />);
    const playBtn = screen.getByText("PLAY");
    const options = screen.getAllByTestId("notes");
    for (let i = 0; i < 4; i++) {
      expect(playBtn).toBeDisabled();
      userEvent.click(options[0]);
    }
    expect(playBtn).not.toBeDisabled();
  });
});
