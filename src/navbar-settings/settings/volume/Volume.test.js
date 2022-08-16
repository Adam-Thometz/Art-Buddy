import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import Volume from './Volume';

describe('Volume component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Volume />);
  });

  it('matches the snapshot of Volume', () => {
    const { asFragment } = renderWithProvider(<Volume />);
    expect(asFragment()).toMatchSnapshot();
  });
});