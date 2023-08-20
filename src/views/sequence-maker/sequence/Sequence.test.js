import Sequence from "./Sequence";

import { render } from "test/render";

describe("Sequence component", () => {
  it("renders without crashing", () => {
    render(<Sequence />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Sequence />);
    expect(asFragment()).toMatchSnapshot();
  });
});
