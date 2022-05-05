import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import Welcome from './Welcome'

describe('Welcome component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Welcome />);
  })

  it('matches the snapshot of the welcome page', () => {
    const { asFragment } = renderWithProvider(<Welcome />);
    expect(asFragment()).toMatchSnapshot();
  })
})