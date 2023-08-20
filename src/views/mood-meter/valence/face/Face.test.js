import Face from "./Face";

import { render } from "test/render";

describe("Face component", () => {
  it("renders without crashing", () => {
    render(<Face src="file" id={0} isSelected={false} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Face src="file" id={0} isSelected={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
