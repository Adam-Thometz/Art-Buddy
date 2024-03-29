import Play from "./Play";

import { render } from "test/render";

describe("Play component", () => {
  it("renders without crashing", () => {
    render(<Play />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Play />);
    expect(asFragment()).toMatchSnapshot();
  });
});
