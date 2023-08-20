import Score from "./Score";

import { render } from "test/render";

import { instrumentIdColors } from "data/_report-cards/colorsForProgressBar";

describe("Score component", () => {
  it("renders without crashing", () => {
    render(
      <Score
        name="COOL FACTOR"
        score={2}
        maxScore={4}
        colorPalette={instrumentIdColors}
      />
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Score
        name="COOL FACTOR"
        score={2}
        maxScore={4}
        colorPalette={instrumentIdColors}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
