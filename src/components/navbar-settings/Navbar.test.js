import Navbar from "./Navbar";

import { render } from "test/render";

describe("Navbar component", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });

  it("matches the snapshot of the navbar", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
