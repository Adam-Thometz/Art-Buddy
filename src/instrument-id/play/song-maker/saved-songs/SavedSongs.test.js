import React from "react";
import { SongMakerContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import SavedSongs from "./SavedSongs";

describe('SavedSongs component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SongMakerContextMock>
      <SavedSongs />
    </SongMakerContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SongMakerContextMock>
      <SavedSongs />
    </SongMakerContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});