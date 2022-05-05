import React from "react";
import renderWithProvider from "../_testUtils/renderWithProvider";
import ScoreKeeper from "./ScoreKeeper";

describe('Score Keeper', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });
})