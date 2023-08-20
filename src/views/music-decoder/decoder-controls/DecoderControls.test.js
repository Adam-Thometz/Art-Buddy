import DecoderControls from "./DecoderControls";

import { render } from "test/render";

describe("DecoderControls component", () => {
  it("renders without crashing", () => {
    render(<DecoderControls />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<DecoderControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});
