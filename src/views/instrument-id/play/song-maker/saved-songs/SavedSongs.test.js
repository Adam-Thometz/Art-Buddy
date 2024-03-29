import SavedSongs from "./SavedSongs";

import { render } from "test/render";

describe("SavedSongs component", () => {
  it("renders without crashing", () => {
    render(<SavedSongs />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SavedSongs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
