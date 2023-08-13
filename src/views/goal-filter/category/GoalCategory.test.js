import GoalCategory from "./GoalCategory";

import { render } from "_testUtils/render";

describe("GoalCategory component", () => {
  it("renders without crashing", () => {
    render(<GoalCategory />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<GoalCategory />);
    expect(asFragment()).toMatchSnapshot();
  });
});
