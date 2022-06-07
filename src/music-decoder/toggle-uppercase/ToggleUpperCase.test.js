import React from "react";

import renderWithProvider from "../../_testUtils/renderWithProvider";

import ToggleUpperCase from "./ToggleUpperCase";

describe('ToggleUpperCase component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ToggleUpperCase />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ToggleUpperCase />);
    expect(asFragment()).toMatchSnapshot();
  });
});