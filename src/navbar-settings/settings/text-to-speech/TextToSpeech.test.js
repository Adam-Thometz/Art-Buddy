import TextToSpeech from "./TextToSpeech";

import { render } from "_testUtils/render";

describe("TextToSpeech component", () => {
  it("renders without crashing", () => {
    render(<TextToSpeech />);
  });

  it("matches the snapshot of TextToSpeech", () => {
    const { asFragment } = render(<TextToSpeech />);
    expect(asFragment()).toMatchSnapshot();
  });
});
