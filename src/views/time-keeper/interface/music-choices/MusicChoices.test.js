import MusicChoices from "./MusicChoices";

import { render } from "_testUtils/render";

describe("MusicChoices component", () => {
  const SAMPLE_MOOD = "excited";
  it("renders without crashing", () => {
    render(<MusicChoices mood={SAMPLE_MOOD} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<MusicChoices mood={SAMPLE_MOOD} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
