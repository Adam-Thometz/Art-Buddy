import React from "react";

import renderWithProvider from "../../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewStudentForm from "./NewStudentForm";
import ScoreKeeper from "../ScoreKeeper";

describe('New Student Form', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NewStudentForm />)
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithProvider(<NewStudentForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inputs a student name and selects a color', () => {
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
});