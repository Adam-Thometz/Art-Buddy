import Instrument from "./Instrument";

import { render } from "test/render";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    family: "brass",
    instrument: "trumpet",
  }),
}));
jest.mock("tone", () => ({
  Buffer: jest.fn(),
  Transport: { stop: jest.fn() },
}));

describe("Instrument component", () => {
  it("renders without crashing", () => {
    render(<Instrument />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Instrument />);
    expect(asFragment()).toMatchSnapshot();
  });
});
