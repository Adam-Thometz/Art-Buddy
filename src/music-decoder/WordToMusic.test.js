import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WordToMusic from './WordToMusic';

import { WTM } from '_data/_utils/localStorageKeys';

jest.mock('tone', () => ({
  PitchShift: jest.fn(() => ({
    toDestination: jest.fn(),
    triggerAttackRelease: jest.fn()
  })),
  Synth: jest.fn(() => ({
    connect: jest.fn(() => ({
      volume: { value: 0 },
      triggerAttackRelease: jest.fn()
    })),
  })),
  now: jest.fn()
}));

describe('WordToMusic component', () => {
  window.localStorage.setItem(`visited-${WTM}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <WordToMusic />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <WordToMusic />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle upper and lowercase letters', () => {
    renderWithProvider(<PlayContextMock>
      <WordToMusic />
    </PlayContextMock>);
    const toggle = screen.getByText('ON');
    userEvent.click(toggle);
    expect(screen.getByText('z')).toBeInTheDocument();
    userEvent.click(toggle);
    expect(screen.getByText('Z')).toBeInTheDocument();
  });

  it('colors a letter in the word input if found', () => {
    renderWithProvider(<PlayContextMock>
      <WordToMusic />
    </PlayContextMock>);
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
  
  it('removes color if a letter is deleted from the input', () => {
    renderWithProvider(<PlayContextMock>
      <WordToMusic />
    </PlayContextMock>);
    const input = screen.getByLabelText('WORDS');
    userEvent.type(input, 'HELLO');
    
    const rightLetter = screen.getByText('L');
    userEvent.click(rightLetter);
    expect(rightLetter).toHaveClass('AlphabetTable-cell E');
    
    userEvent.type(input, '{del}');
    expect(rightLetter).toHaveClass('AlphabetTable-cell');
  });
});