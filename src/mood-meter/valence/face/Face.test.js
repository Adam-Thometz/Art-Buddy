import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import Face from './Face';

describe('Face component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Face src='file' id={0} isSelected={false} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Face src='file' id={0} isSelected={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});