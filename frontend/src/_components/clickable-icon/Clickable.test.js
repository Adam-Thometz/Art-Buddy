import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Clickable from './Clickable'

describe('Clickable component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Clickable />);
  })

  it('matches the snapshot of the clickable icon', () => {
    const { asFragment } = renderWithRouter(<Clickable />);
    expect(asFragment()).toMatchSnapshot();
  })
})