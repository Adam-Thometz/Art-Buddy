import React from "react";

import { PlayContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";

import SequencePlayReset from './SequencePlayReset';

describe('SequencePlayReset component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <SequencePlayReset />
    </PlayContextMock>);
  });

  it('matches the snapshot of SequencePlayReset', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <SequencePlayReset />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});