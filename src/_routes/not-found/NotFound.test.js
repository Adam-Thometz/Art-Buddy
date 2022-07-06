import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import NotFound from './NotFound'

describe('NotFound component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NotFound />);
  })

  it('matches the snapshot of the not found page', () => {
    const { asFragment } = renderWithProvider(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  })
})