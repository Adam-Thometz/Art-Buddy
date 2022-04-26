import React from "react";
import renderWithRouter from '../_testUtils/renderWithRouter';
import NotFound from './NotFound'

describe('NotFound component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<NotFound />);
  })

  it('matches the snapshot of the not found page', () => {
    const { asFragment } = renderWithRouter(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  })
})