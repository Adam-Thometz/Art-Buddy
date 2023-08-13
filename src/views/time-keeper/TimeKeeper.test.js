import TimeKeeper from "./TimeKeeper";

import { render } from "testUtils/render";

describe("TimeKeeper component", () => {
  it("renders without crashing", () => {
    render(<TimeKeeper />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TimeKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
