import NoiseMeter from "./NoiseMeter";

import { render } from "testUtils/render";

describe("NoiseMeter component", () => {
  it("renders without crashing", () => {
    render(<NoiseMeter />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NoiseMeter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
