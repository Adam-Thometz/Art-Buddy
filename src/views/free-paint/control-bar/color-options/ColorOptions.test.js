import ColorOptions from "./ColorOptions";

import { render } from "_testUtils/render";

describe("ColorOptions component", () => {
  it("renders without crashing", () => {
    render(<ColorOptions />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ColorOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
