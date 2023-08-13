import Energy from "./Energy";

import { render } from "testUtils/render";

describe("Energy component", () => {
  it("renders without crashing", () => {
    render(<Energy />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Energy />);
    expect(asFragment()).toMatchSnapshot();
  });
});
