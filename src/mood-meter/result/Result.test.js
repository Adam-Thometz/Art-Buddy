import React from "react";
import { default as store } from "_redux/rootReducer";
import { setEnergy, setValence } from "_redux/mood-meter/moodMeterActions";

import renderWithProvider from "_testUtils/renderWithProvider";
import Result from "./Result";

describe('Result component', () => {
  store.dispatch(setValence(2));
  store.dispatch(setEnergy(2));
  it('renders without crashing', () => {
    renderWithProvider(<Result />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Result />);
    expect(asFragment()).toMatchSnapshot();
  });
});