import Result from "./Result";

import { render } from "testUtils/render";

import { default as store } from "store/rootReducer";
import { setEnergy, setValence } from "store/mood-meter/moodMeterReducer";

describe("Result component", () => {
  store.dispatch(setValence(2));
  store.dispatch(setEnergy(2));
  it("renders without crashing", () => {
    render(<Result />, { store });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Result />, { store });
    expect(asFragment()).toMatchSnapshot();
  });
});
