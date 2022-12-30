import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import SoundOptions from './SoundOptions';

describe('SoundOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <SoundOptions />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <SoundOptions />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});