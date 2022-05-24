import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';

import SequenceBlock from './SequenceBlock';

describe('SequenceBlock component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SequenceBlock block={null} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SequenceBlock block={null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});