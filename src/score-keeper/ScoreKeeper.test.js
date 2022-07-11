import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import ScoreKeeper from "./ScoreKeeper";

describe('Score Keeper', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });
});