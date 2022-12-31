import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import SavedSongs from "./SavedSongs";

describe('SavedSongs component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <SavedSongs />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <SavedSongs />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});