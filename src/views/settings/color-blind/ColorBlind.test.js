import ColorBlind from "./ColorBlind";

import { render } from "test/render";

describe("ColorBlind component", () => {
  it("renders without crashing", () => {
    render(<ColorBlind />);
  });

  it("matches the snapshot of ColorBlind", () => {
    const { asFragment } = render(<ColorBlind />);
    expect(asFragment()).toMatchSnapshot();
  });
});
