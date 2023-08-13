import TimeLeft from "./TimeLeft";

import { render } from "testUtils/render";

describe("TimeLeft component", () => {
  it("renders without crashing", () => {
    render(<TimeLeft />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TimeLeft />);
    expect(asFragment()).toMatchSnapshot();
  });
});
