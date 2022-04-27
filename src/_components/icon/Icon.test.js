import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Icon from './Icon'

describe('Clickable component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Icon />);
  })

  it('matches the snapshot of the clickable icon', () => {
    const { asFragment } = renderWithRouter(<Icon />);
    expect(asFragment()).toMatchSnapshot();
  })
})