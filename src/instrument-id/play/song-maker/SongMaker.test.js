import React from "react";
import renderWithProvider from "../../../_testUtils/renderWithProvider";
import SongMaker from "./SongMaker";

describe('SongMaker component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SongMaker />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SongMaker />);
    expect(asFragment()).toMatchSnapshot();
  });
});