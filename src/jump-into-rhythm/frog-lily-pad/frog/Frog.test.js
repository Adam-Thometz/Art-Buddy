import Frog from "./Frog";

import { render } from "_testUtils/render";

import { BLUE } from "_media/jump-into-rhythm/jumpIntoRhythmAssets";

describe("Frog component", () => {
  it("renders without crashing", () => {
    render(<Frog frog={BLUE} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Frog frog={BLUE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
