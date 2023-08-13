import AddIcon from "./AddIcon";

import { render } from "testUtils/render";

describe("AddIcon component", () => {
  it("renders without crashing", () => {
    render(<AddIcon />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<AddIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
