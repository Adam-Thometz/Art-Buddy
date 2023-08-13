import BackArrow from "./BackArrow";

import { render } from "testUtils/render";

describe("BackArrow component", () => {
  it("renders without crashing", () => {
    render(<BackArrow />);
  });

  it("matches the snapshot of the back arrow", () => {
    const { asFragment } = render(<BackArrow />);
    expect(asFragment()).toMatchSnapshot();
  });
});
