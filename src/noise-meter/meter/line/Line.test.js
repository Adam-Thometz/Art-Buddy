import Line from "./Line";

import { render } from "_testUtils/render";

describe("Line component", () => {
  it("renders without crashing", () => {
    render(<Line filter="blur(5px)" i={4} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Line filter="blur(5px)" i={4} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
