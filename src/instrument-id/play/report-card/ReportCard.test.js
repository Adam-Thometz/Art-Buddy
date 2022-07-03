import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import ReportCard from "./ReportCard";

describe('ReportCard component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ReportCard />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ReportCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});