import NewRoster from "./NewRoster";

import { render } from "testUtils/render";

describe("NewRoster component", () => {
  window.localStorage.setItem("rosters", "{}");
  it("renders without crashing", () => {
    render(<NewRoster />);
  });

  it("matches the snapshot of NewRoster", () => {
    const { asFragment } = render(<NewRoster />);
    expect(asFragment()).toMatchSnapshot();
  });
});
