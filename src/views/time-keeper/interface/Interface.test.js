import Interface from "./Interface";

import { render } from "_testUtils/render";

describe("Interface component", () => {
  it("renders without crashing", () => {
    render(<Interface />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Interface />);
    expect(asFragment()).toMatchSnapshot();
  });
});
