import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import Sequence from './Sequence';

describe('Sequence component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <Sequence />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <Sequence />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});