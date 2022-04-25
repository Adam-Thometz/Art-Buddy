import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Welcome from './Welcome'

describe('Welcome component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Welcome />);
  })

  it('matches the snapshot of the welcome page', () => {
    const { asFragment } = renderWithRouter(<Welcome />);
    expect(asFragment()).toMatchSnapshot();
  })
})