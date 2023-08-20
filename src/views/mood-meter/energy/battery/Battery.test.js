import Battery from "./Battery";

import { render } from "test/render";

describe("Battery component", () => {
  it("renders without crashing", () => {
    render(<Battery width="100%" id={0} filter={null} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Battery width="100%" id={0} filter={null} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
