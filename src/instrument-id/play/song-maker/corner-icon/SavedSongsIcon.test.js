import SavedSongsIcon from "./SavedSongsIcon";

import { render } from "_testUtils/render";

describe("SavedSongsIcon component", () => {
  it("renders without crashing", () => {
    render(<SavedSongsIcon />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SavedSongsIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
