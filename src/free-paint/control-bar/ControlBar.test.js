import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ControlBar from "./ControlBar";
import { ControlBarProvider } from "_context/ControlBarContext";

describe('ControlBar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ControlBarProvider>
      <ControlBar />
    </ControlBarProvider>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ControlBarProvider>
      <ControlBar />
    </ControlBarProvider>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows options on click and hides when clicked again', () => {
    renderWithProvider(<ControlBarProvider>
      <ControlBar />
    </ControlBarProvider>);
    const abc = screen.getByText('abc');
    userEvent.click(abc);
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    userEvent.click(abc);
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
  });

  it('shows options on click and hides when a different option is clicked', () => {
    renderWithProvider(<ControlBarProvider>
      <ControlBar />
    </ControlBarProvider>);
    const abc = screen.getByText('abc');
    userEvent.click(abc);
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    const oneTwoThree = screen.getByText('123');
    userEvent.click(oneTwoThree);
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
    expect(screen.getByTestId('stencilOptions-numbers')).toBeInTheDocument();
  });

  it('changes the pencil color when a color is picked', () => {
    renderWithProvider(<ControlBarProvider>
      <ControlBar />
    </ControlBarProvider>);
    const pencilBtn = screen.getAllByRole('button')[5];
    userEvent.click(pencilBtn);
    const red = screen.getByTestId('color-option-#FF0000');
    userEvent.click(red);
    const style = window.getComputedStyle(pencilBtn);
    // both values below refer to red. color gives result in rgb and borderColor gives result in hex
    expect(style.color).toBe('rgb(255, 0, 0)');
    expect(style.borderColor).toBe('#ff0000');
  });
});