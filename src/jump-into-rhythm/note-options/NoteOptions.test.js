import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import NoteOptions from "./NoteOptions";

describe('NoteOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <NoteOptions />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <NoteOptions />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});