import Frog from "./Frog";

import { render } from "_testUtils/render";

import { BLUE } from "_assets/jump-into-rhythm/jumpIntoRhythm.assets";

describe("Frog component", () => {
  it("renders without crashing", () => {
    render(<Frog frog={BLUE} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Frog frog={BLUE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
