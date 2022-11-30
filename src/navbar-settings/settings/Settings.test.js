import React from "react";
import { PopupContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from "_testUtils/renderWithProvider";
import Settings from './Settings';

describe('Settings component', () => {
  window.localStorage.setItem('rosters', '{}')
  it('renders without crashing', () => {
    renderWithProvider(<PopupContextMock>
      <Settings />
    </PopupContextMock>);
  });

  it('matches the snapshot of Settings', () => {
    const { asFragment } = renderWithProvider(<PopupContextMock>
      <Settings />
    </PopupContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});