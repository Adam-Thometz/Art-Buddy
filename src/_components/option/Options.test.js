import React from "react";
import renderWithRouter from "../../_testUtils/renderWithRouter";
// import { screen } from "@testing-library/react";
import Options from "./Options";

describe('Options component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Options />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithRouter(<Options />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('matches snapshot of smaller window', () => {
    const { asFragment } = renderWithRouter(<Options width="65%" />);
    expect(asFragment()).toMatchSnapshot();
  });
})