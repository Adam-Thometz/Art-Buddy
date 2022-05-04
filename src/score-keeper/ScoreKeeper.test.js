import React from "react";
import renderWithProvider from "../_testUtils/renderWithProvider";
// import { screen } from "@testing-library/react";
import ScoreKeeper from "./ScoreKeeper";
jest.mock('tone');

describe('Score Keeper', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });
})