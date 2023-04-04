import Result from "./Result";

import { render } from "_testUtils/render";

import { default as store } from "_redux/rootReducer";
import { setEnergy, setValence } from "_redux/mood-meter/moodMeterReducer";

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
