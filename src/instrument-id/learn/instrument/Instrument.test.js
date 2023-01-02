import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import renderWithProvider from "_testUtils/renderWithProvider";

import Instrument from "./Instrument";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    family: 'brass',
    instrument: 'trumpet'
  })
}));
jest.mock('tone', () => ({
  Buffer: jest.fn()
}));

describe('Instrument component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <Instrument />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <Instrument />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});