import NotFound from "./NotFound";

import { render } from "test/render";

describe("NotFound component", () => {
  it("renders without crashing", () => {
    render(<NotFound />);
  });

  it("matches the snapshot of the not found page", () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
