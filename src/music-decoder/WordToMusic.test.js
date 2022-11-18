import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WordToMusic from './WordToMusic';

import { WTM } from '_data/_utils/localStorageKeys';

jest.mock('_helpers/music-decoder/play');

describe('WordToMusic component', () => {
  window.localStorage.setItem(`visited-${WTM}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<WordToMusic />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<WordToMusic />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle upper and lowercase letters', () => {
    renderWithProvider(<WordToMusic />);
    const toggle = screen.getByText('ON');
    userEvent.click(toggle);
    expect(screen.getByText('z')).toBeInTheDocument();
  });

  it('colors a letter in the word input if found', () => {
    renderWithProvider(<WordToMusic />);
    const input = screen.getByLabelText('WORDS');
    userEvent.type(input, 'HELLO');
    expect(input).toHaveValue('HELLO');
    
    const wrongLetter = screen.getByText('Z');
    userEvent.click(wrongLetter);
    expect(wrongLetter).toHaveClass('AlphabetTable-cell');
    
    const rightLetter = screen.getByText('L');
    userEvent.click(rightLetter);
    expect(rightLetter).toHaveClass('AlphabetTable-cell E');
  });
});