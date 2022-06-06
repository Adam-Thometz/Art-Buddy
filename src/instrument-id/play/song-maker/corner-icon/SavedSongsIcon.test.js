import React from "react";

import renderWithProvider from "../../../../_testUtils/renderWithProvider";

import SavedSongsIcon from "./SavedSongsIcon";

describe('SavedSongsIcon component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SavedSongsIcon />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SavedSongsIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});