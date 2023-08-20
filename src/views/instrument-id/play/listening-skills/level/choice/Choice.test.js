import Choice from "./Choice";

import { render } from "test/render";

import getInstrument from "utils/instrument-id/getInstrument";

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
