import GoalFilter from "./GoalFilter";

import { render } from "_testUtils/render";

describe("GoalFilter component", () => {
  it("renders without crashing", () => {
    render(<GoalFilter />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<GoalFilter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
