import TimeKeeperNav from "./TimeKeeperNav";

import { render } from "test/render";

describe("TimeKeeperNav component", () => {
  it("renders without crashing", () => {
    render(<TimeKeeperNav />);
  });

  it("matches the snapshot of the TimeKeeperNav", () => {
    const { asFragment } = render(<TimeKeeperNav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
