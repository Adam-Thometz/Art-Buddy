import React from "react";
import renderWithProvider from "../../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Input from "./Input";

describe('Input component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Input />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('accepts user input', () => {
    renderWithProvider(<Input />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Hello world!');
    expect(screen.getByDisplayValue('Hello world!')).toBeInTheDocument();
  })
});