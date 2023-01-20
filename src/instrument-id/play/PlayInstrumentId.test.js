import PlayInstrumentId from "./PlayInstrumentId";

import { render } from "_testUtils/render";

describe("PlayInstrumentId component", () => {
  it("renders without crashing", () => {
    render(<PlayInstrumentId />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PlayInstrumentId />);
    expect(asFragment()).toMatchSnapshot();
  });
});
