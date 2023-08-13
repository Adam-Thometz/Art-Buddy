import InstrumentDisplay from "./InstrumentDisplay";

import { render } from "testUtils/render";

jest.mock("tone", () => ({
  Buffer: jest.fn(),
}));

describe("InstrumentDisplay component", () => {
  it("renders without crashing", () => {
    render(<InstrumentDisplay />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<InstrumentDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
