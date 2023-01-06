import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import SavedSongs from "./SavedSongs";

describe('SavedSongs component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SavedSongs />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SavedSongs />);
    expect(asFragment()).toMatchSnapshot();
  });
});