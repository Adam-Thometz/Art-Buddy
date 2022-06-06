import React from "react";

import renderWithProvider from '../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WordToMusic from './WordToMusic';

describe('WordToMusic component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WordToMusic />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<WordToMusic />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('colors a letter in the word input if found', () => {
    renderWithProvider(<WordToMusic />);
    const input = screen.getByLabelText('WORDS');
    userEvent.type(input, 'HELLO');

    const wrongLetter = screen.getByText('Z');
    userEvent.click(wrongLetter);
    expect(wrongLetter).toHaveClass('AlphabetTable-cell');

    const rightLetter = screen.getByText('H');
    userEvent.click(rightLetter);
    console.log(rightLetter);
    expect(rightLetter).toHaveClass('AlphabetTable-cell A');
  });
});