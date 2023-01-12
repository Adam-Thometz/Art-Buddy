import ControlBar from "./ControlBar";

import { render } from "_testUtils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('ControlBar component', () => {
  it('renders without crashing', () => {
    render(<ControlBar />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ControlBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows options on click and hides when clicked again', () => {
    render(<ControlBar />);
    const abc = screen.getByText('abc');
    userEvent.click(abc);
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    userEvent.click(abc);
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
  });

  it('shows options on click and hides when a different option is clicked', () => {
    render(<ControlBar />);
    const abc = screen.getByText('abc');
    userEvent.click(abc);
    expect(screen.getByTestId('stencilOptions-lowerCase')).toBeInTheDocument();
    const oneTwoThree = screen.getByText('123');
    userEvent.click(oneTwoThree);
    expect(screen.queryByTestId('stencilOptions-lowerCase')).not.toBeInTheDocument();
    expect(screen.getByTestId('stencilOptions-numbers')).toBeInTheDocument();
  });

  it('changes the pencil color when a color is picked', () => {
    render(<ControlBar />);
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