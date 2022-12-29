import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from '_testUtils/renderWithProvider';
import AlphabetTable from './AlphabetTable';

describe('AlphabetTable component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <AlphabetTable />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <AlphabetTable />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});