import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import ControlBar from "./ControlBar";

describe('ControlBar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ControlBar />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ControlBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows options on click and hides when clicked again', () => {
    renderWithProvider(<ControlBar />);
    const abc = screen.getByText('abc');
    userEvent.click(abc)
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    userEvent.click(abc)
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
  });

  it('shows options on click and hides when a different option is clicked', () => {
    renderWithProvider(<ControlBar />);
    const abc = screen.getByText('abc');
    userEvent.click(abc)
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    const oneTwoThree = screen.getByText('123');
    userEvent.click(oneTwoThree)
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
    expect(screen.getByTestId('stencilOptions-numbers')).toBeInTheDocument();
  });
});