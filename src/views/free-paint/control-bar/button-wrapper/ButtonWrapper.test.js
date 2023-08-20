import ButtonWrapper from "./ButtonWrapper";

import { render } from "test/render";

describe("ButtonWrapper component", () => {
  it("renders without crashing", () => {
    render(<ButtonWrapper label="ABC" id="upperCase" colorId={4} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <ButtonWrapper label="ABC" id="upperCase" colorId={4} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
