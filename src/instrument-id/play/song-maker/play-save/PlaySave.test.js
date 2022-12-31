import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import PlaySave from "./PlaySave";

describe('PlaySave component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <PlaySave />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <PlaySave />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});