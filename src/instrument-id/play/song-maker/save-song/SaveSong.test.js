import React from "react";
import renderWithProvider from "../../../../_testUtils/renderWithProvider";
import SaveSong from "./SaveSong";

describe('SaveSong component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SaveSong />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SaveSong />);
    expect(asFragment()).toMatchSnapshot();
  });
});