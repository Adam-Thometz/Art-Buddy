import LearnColors from "./LearnColors";

import { render } from "testUtils/render";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "primary",
  }),
}));

describe("LearnColors component", () => {
  it("renders without crashing", () => {
    render(<LearnColors />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<LearnColors />);
    expect(asFragment()).toMatchSnapshot();
  });
});
