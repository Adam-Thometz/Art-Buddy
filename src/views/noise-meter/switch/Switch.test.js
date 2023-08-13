import Switch from "./Switch";

import { render } from "_testUtils/render";

describe("Switch component", () => {
  it("renders without crashing", () => {
    render(<Switch />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
