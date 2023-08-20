import InstrumentId from "./InstrumentId";

import { render } from "test/render";

describe("InstrumentId component", () => {
  it("renders without crashing", () => {
    render(<InstrumentId />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<InstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});
