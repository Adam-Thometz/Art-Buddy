import ColorWheel from "./ColorWheel";

import { render } from "testUtils/render";

describe("ColorWheel component", () => {
  it("renders without crashing", () => {
    render(<ColorWheel />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ColorWheel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
