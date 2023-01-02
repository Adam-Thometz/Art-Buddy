import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

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
});