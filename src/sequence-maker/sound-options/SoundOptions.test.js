import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';

import SoundOptions from './SoundOptions';

describe('SoundOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SoundOptions />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SoundOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});