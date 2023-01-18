import Welcome from "./Welcome";

import { render } from "_testUtils/render";

describe("Welcome component", () => {
  it("renders without crashing", () => {
    render(<Welcome />);
  });

  it("matches the snapshot of the welcome page", () => {
    const { asFragment } = render(<Welcome />);
    expect(asFragment()).toMatchSnapshot();
  });
});
