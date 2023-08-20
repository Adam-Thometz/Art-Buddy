import ColorWheel from "./ColorWheel";

import { render } from "test/render";

describe("ColorWheel component", () => {
  it("renders without crashing", () => {
    render(<ColorWheel />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ColorWheel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
