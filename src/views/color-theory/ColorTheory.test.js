import ColorTheory from "./ColorTheory";

import { render } from "testUtils/render";

describe("ColorTheory component", () => {
  it("renders without crashing", () => {
    render(<ColorTheory />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ColorTheory />);
    expect(asFragment()).toMatchSnapshot();
  });
});
