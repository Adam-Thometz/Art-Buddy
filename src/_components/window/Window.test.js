import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Window from './Window'

describe('Window component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Window />);
  })

  it('matches the snapshot of the button', () => {
    const { asFragment } = renderWithRouter(<Window />);
    expect(asFragment()).toMatchSnapshot();
  })
})