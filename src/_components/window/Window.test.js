import Window from "./Window";

import { render } from "_testUtils/render";

describe("Window component", () => {
  it("renders without crashing", () => {
    render(<Window />);
  });

  it("matches the snapshot of the window", () => {
    const { asFragment } = render(<Window />);
    expect(asFragment()).toMatchSnapshot();
  });
});
