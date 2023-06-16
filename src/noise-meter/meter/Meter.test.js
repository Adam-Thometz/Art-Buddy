import Meter from "./Meter";

import { render } from "_testUtils/render";

describe("Meter component", () => {
  it("renders without crashing", () => {
    render(<Meter />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Meter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
