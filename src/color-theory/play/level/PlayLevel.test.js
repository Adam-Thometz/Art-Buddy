import PlayLevel from "./PlayLevel";

import { render } from "_testUtils/render";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    level: "1",
  }),
}));

describe("PlayLevel component", () => {
  it("renders without crashing", () => {
    render(<PlayLevel />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PlayLevel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
