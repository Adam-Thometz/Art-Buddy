import ListeningSkills from "./ListeningSkills";

import { render } from "test/render";

describe("ListeningSkills component", () => {
  it("renders without crashing", () => {
    render(<ListeningSkills />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ListeningSkills />);
    expect(asFragment()).toMatchSnapshot();
  });
});
