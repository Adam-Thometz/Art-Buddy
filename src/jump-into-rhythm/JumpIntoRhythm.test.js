import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import JumpIntoRhythm from "./JumpIntoRhythm";

import { JIR } from '_data/_utils/localStorageKeys';
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

jest.mock('tone', () => ({
  Transport: { bpm: { value: 90 } },
  Sampler: jest.fn(() => ({
    toDestination: jest.fn()
  })),
}));

describe('JumpIntoRhythm component', () => {
  window.localStorage.setItem(`visited-${JIR}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <JumpIntoRhythm />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <JumpIntoRhythm />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should select a musical note', () => {
    renderWithProvider(<PlayContextMock>
      <JumpIntoRhythm />
    </PlayContextMock>);
    const options = screen.getAllByTestId('notes');
    userEvent.click(options[0]);
    const blocks = screen.getAllByTestId('block');
    const firstBlock = within(blocks[0]).queryAllByRole('img');
    const secondBlock = within(blocks[1]).queryAllByRole('img');
    expect(firstBlock.length).toBe(2);
    expect(secondBlock.length).toBe(0);
  });
});