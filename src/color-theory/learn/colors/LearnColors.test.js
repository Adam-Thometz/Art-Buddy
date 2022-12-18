import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import LearnColors from "./LearnColors";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'primary',
  })
}));

describe('LearnColors component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LearnColors />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<LearnColors />);
    expect(asFragment()).toMatchSnapshot();
  });
});