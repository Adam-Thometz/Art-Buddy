import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import ReportCard from "./ReportCard";

describe('ReportCard component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ReportCard game='instrumentId' level='1' />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ReportCard game='instrumentId' level='1' />);
    expect(asFragment()).toMatchSnapshot();
  });
});