import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';

import Students from './Students';

describe('Students component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Students />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Students />);
    expect(asFragment()).toMatchSnapshot();
  });
});