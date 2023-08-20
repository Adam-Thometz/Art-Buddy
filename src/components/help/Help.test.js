import Help from "./Help";

import { render } from "test/render";

describe("Help component", () => {
  it("renders without crashing", () => {
    render(<Help />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });
});
