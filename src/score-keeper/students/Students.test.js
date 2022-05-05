import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Students from './Students';
import ScoreKeeper from '../ScoreKeeper';

describe('Students component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Students />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Students />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows students', () => {
    renderWithProvider(<ScoreKeeper />)
    const input = screen.getByRole('textbox');
    const dropdown = screen.getByText('PICK A COLOR');
    const btn = screen.getByText('ADD STUDENT');
    userEvent.type(input, 'Eddie');
    expect(screen.getByDisplayValue('Eddie')).toBeInTheDocument();
    userEvent.hover(dropdown)
    const option = screen.getByText('Red');
    userEvent.click(option);
    userEvent.click(btn);
    expect(screen.getByText('Eddie')).toBeInTheDocument();
  });
})