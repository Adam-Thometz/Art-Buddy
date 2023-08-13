import LearnInstrumentId from "./LearnInstrumentId";

import { render } from "testUtils/render";

describe("LearnInstrumentId component", () => {
  it("renders without crashing", () => {
    render(<LearnInstrumentId />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<LearnInstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});
