import SequencePlayReset from "./SequencePlayReset";

import { render } from "_testUtils/render";

describe("SequencePlayReset component", () => {
  it("renders without crashing", () => {
    render(<SequencePlayReset />);
  });

  it("matches the snapshot of SequencePlayReset", () => {
    const { asFragment } = render(<SequencePlayReset />);
    expect(asFragment()).toMatchSnapshot();
  });
});
