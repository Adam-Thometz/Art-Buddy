import Dropdown from "./Dropdown";

import { render } from "testUtils/render";

const testOptions = {
  test: "test option",
  test2: "another test option",
};

describe("Dropdown component", () => {
  it("renders without crashing", () => {
    render(<Dropdown options={testOptions} />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Dropdown options={testOptions} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
