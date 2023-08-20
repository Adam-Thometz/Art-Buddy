import LilyPadDisplay from "./LilyPadDisplay";

import { render } from "test/render";

describe("LilyPadDisplay component", () => {
  const measure = [{ duration: ["4n"], isRest: false }, null, null, null];
  it("renders without crashing", () => {
    render(<LilyPadDisplay measure={measure} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<LilyPadDisplay measure={measure} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
