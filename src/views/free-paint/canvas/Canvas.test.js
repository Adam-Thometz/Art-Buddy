import Canvas from "./Canvas";

import { render } from "test/render";

describe("Canvas component", () => {
  it("renders without crashing", () => {
    render(<Canvas />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Canvas />);
    expect(asFragment()).toMatchSnapshot();
  });
});
