import Choice from "./Choice";

import { render } from "testUtils/render";

import getInstrument from "lib/instrument-id/getInstrument";

describe("Choice component", () => {
  const choice = getInstrument("theremin");
  it("renders without crashing", () => {
    render(<Choice choice={choice} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Choice choice={choice} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
