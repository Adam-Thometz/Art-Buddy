import NoteBlock from "./NoteBlock";

import { render } from "test/render";

describe("NoteBlock component", () => {
  it("renders without crashing", () => {
    render(<NoteBlock />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NoteBlock />);
    expect(asFragment()).toMatchSnapshot();
  });
});
