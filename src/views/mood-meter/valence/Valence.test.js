import Valence from "./Valence";

import { render } from "test/render";

describe("Valence component", () => {
  it("renders without crashing", () => {
    render(<Valence />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Valence />);
    expect(asFragment()).toMatchSnapshot();
  });
});
