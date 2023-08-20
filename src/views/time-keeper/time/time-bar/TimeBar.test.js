import TimeBar from "./TimeBar";

import { render } from "test/render";

describe("TimeBar component", () => {
  it("renders without crashing", () => {
    render(<TimeBar />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TimeBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
