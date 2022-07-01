import React from "react";

import renderWithProvider from "../../_testUtils/renderWithProvider";

import Play from "./Play";

describe('Play component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Play />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Play />);
    expect(asFragment()).toMatchSnapshot();
  });
});