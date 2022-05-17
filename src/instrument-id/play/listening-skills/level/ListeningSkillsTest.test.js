import React from "react";

import renderWithProvider from "../../../../_testUtils/renderWithProvider";

import ListeningSkillsTest from "./ListeningSkillsTest";

describe('ListeningSkillsTest component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ListeningSkillsTest />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ListeningSkillsTest />);
    expect(asFragment()).toMatchSnapshot();
  });
})