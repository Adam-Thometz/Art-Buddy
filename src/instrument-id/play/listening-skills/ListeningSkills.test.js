import ListeningSkills from "./ListeningSkills";

import { render } from "_testUtils/render";

describe("ListeningSkills component", () => {
  it("renders without crashing", () => {
    render(<ListeningSkills />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ListeningSkills />);
    expect(asFragment()).toMatchSnapshot();
  });
});
