import React from "react";

import renderWithProvider from "../../../../../_testUtils/renderWithProvider";

import ReportCardIcon from "./ReportCardIcon";

describe('ReportCardIcon component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ReportCardIcon />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ReportCardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});