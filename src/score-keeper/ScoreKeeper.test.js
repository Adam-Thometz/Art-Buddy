import React from "react";

import renderWithProvider from "../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScoreKeeper from "./ScoreKeeper";

describe('Score Keeper', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inputs a student name and selects a color', () => {
    renderWithProvider(<ScoreKeeper />);
    const input = screen.getByRole('textbox');
    const dropdown = screen.getByText('PICK A COLOR');
    const btn = screen.getByText('ADD STUDENT');
    userEvent.type(input, 'Eddie');
    expect(screen.getByDisplayValue('Eddie')).toBeInTheDocument();
    
    userEvent.click(dropdown);
    const option = screen.getByText('Red');
    userEvent.click(option);
    userEvent.click(btn);
    expect(screen.getByText('Eddie')).toBeInTheDocument();
    expect(screen.getByText('Eddie')).toHaveStyle({color: '#E60026'});
  });
});