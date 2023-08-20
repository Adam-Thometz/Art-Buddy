import Frog from "./Frog";

import { render } from "test/render";

import { BLUE } from "assets/jump-into-rhythm/jumpIntoRhythm.assets";

describe("Frog component", () => {
  it("renders without crashing", () => {
    render(<Frog frog={BLUE} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Frog frog={BLUE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
