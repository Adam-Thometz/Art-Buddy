import React from "react";
import { PopupContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import Rosters from './Rosters';

describe('Rosters component', () => {
  window.localStorage.setItem('rosters', '{}');
  it('renders without crashing', () => {
    renderWithProvider(<PopupContextMock>
      <Rosters />
    </PopupContextMock>);
  });

  it('matches the snapshot of Rosters', () => {
    const { asFragment } = renderWithProvider(<PopupContextMock>
      <Rosters />
    </PopupContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});