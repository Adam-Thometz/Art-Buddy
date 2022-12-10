import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import Frog from "./Frog";

import { blue } from "_media/jump-into-rhythm/frogs/frogs";

describe('Frog component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Frog frog={blue} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Frog frog={blue} />);
    expect(asFragment()).toMatchSnapshot();
  });
});