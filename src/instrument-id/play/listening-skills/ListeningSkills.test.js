import React from "react";

import renderWithProvider from "../../../_testUtils/renderWithProvider";

import ListeningSkills from "./ListeningSkills";

describe('ListeningSkills component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ListeningSkills />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ListeningSkills />);
    expect(asFragment()).toMatchSnapshot();
  });
})