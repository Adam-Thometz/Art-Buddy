import PlayPause from "./PlayPause";

import { render } from "test/render";

describe("PlayPause component", () => {
  it("renders without crashing", () => {
    render(<PlayPause />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PlayPause />);
    expect(asFragment()).toMatchSnapshot();
  });
});
