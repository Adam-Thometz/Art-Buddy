import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

import WordForm from './WordForm';

describe('WordForm component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WordForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<WordForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});