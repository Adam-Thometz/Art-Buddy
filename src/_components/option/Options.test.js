import Options from "./Options";

import { render } from "_testUtils/render";

describe("Options component", () => {
  it("renders without crashing", () => {
    render(<Options />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Options />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot of smaller window", () => {
    const { asFragment } = render(<Options width="65%" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
