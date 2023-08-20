import Home from "./Home";

import { render } from "test/render";

describe("Home component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("matches the snapshot of the landing page displaying the games page", () => {
    window.localStorage.setItem("visited", true);
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the snapshot of the landing page displaying the welcome page", () => {
    window.localStorage.setItem("visited", false);
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
