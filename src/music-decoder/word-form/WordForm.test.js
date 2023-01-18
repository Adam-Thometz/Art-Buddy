import WordForm from "./WordForm";

import { render } from "_testUtils/render";

describe("WordForm component", () => {
  it("renders without crashing", () => {
    render(<WordForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<WordForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
