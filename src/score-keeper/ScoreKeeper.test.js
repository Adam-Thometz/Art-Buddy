import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScoreKeeper from "./ScoreKeeper";

import { SK } from '_data/_utils/localStorageKeys';

describe('Score Keeper', () => {
  window.localStorage.setItem(`visited-${SK}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<ScoreKeeper />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should update points and sort students', () => {
    renderWithProvider(<ScoreKeeper />);
    let buttons = screen.getAllByRole('button');
    let results = screen.getAllByTestId('score');
    for (let i = 0; i < 5; i++) {
      userEvent.click(buttons[1]);
    };
    expect(results[0].textContent).toBe('5');

    for (let i = 0; i < 6; i++) {
      userEvent.click(buttons[3]);
    };
    buttons = screen.getAllByRole('button');
    results = screen.getAllByTestId('score');
    expect(results[0].textContent).toBe('6');
    expect(results[1].textContent).toBe('5');
    
    for (let i = 0; i < 6; i++) {
      userEvent.click(buttons[2]);
    }
    buttons = screen.getAllByRole('button');
    results = screen.getAllByTestId('score');
    expect(results[1].textContent).toBe('0');
  });
});