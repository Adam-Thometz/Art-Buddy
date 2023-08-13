import SoundOptions from "./SoundOptions";

import { render } from "testUtils/render";

describe("SoundOptions component", () => {
  it("renders without crashing", () => {
    render(<SoundOptions />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SoundOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
