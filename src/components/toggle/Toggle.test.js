import Toggle from "./Toggle";

import { render } from "test/render";

describe("Toggle component", () => {
  it("renders without crashing", () => {
    render(<Toggle />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Toggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
