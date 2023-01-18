import DecoderControls from "./DecoderControls";

import { render } from "_testUtils/render";

describe("DecoderControls component", () => {
  it("renders without crashing", () => {
    render(<DecoderControls />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<DecoderControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});
