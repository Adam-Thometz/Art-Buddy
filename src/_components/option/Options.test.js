import React from "react";
import renderWithProvider from "../../_testUtils/renderWithProvider";
import Options from "./Options";

describe('Options component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Options />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Options />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('matches snapshot of smaller window', () => {
    const { asFragment } = renderWithProvider(<Options width="65%" />);
    expect(asFragment()).toMatchSnapshot();
  });
})