import React from "react";
import renderWithProvider from "../../../_testUtils/renderWithProvider";
import NewRoster from './NewRoster';

describe('NewRoster component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NewRoster />);
  });

  it('matches the snapshot of NewRoster', () => {
    const { asFragment } = renderWithProvider(<NewRoster />);
    expect(asFragment()).toMatchSnapshot();
  });
});