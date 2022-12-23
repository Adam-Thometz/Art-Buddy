import React from "react";
import { SongMakerContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import PlaySave from "./PlaySave";

describe('PlaySave component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SongMakerContextMock>
      <PlaySave />
    </SongMakerContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SongMakerContextMock>
      <PlaySave />
    </SongMakerContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});