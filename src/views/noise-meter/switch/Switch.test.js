import Switch from "./Switch";

import { render } from "test/render";

describe("Switch component", () => {
  it("renders without crashing", () => {
    render(<Switch />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
