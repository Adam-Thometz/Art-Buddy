import React from "react";
import { MusicDecoderContextMock } from "_testUtils/mocks/contextMocks";
import renderWithProvider from '_testUtils/renderWithProvider';
import AlphabetTable from './AlphabetTable';

describe('AlphabetTable component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<MusicDecoderContextMock>
      <AlphabetTable />
    </MusicDecoderContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<MusicDecoderContextMock>
      <AlphabetTable />
    </MusicDecoderContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });
});