import SequenceControls from "./SequenceControls";

import { render } from "testUtils/render";

describe("SequenceControls component", () => {
  it("renders without crashing", () => {
    render(<SequenceControls />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SequenceControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});
