import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Button from './Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Button />);
  })

  it('matches the snapshot of the button', () => {
    const { asFragment } = renderWithRouter(<Button/>);
    expect(asFragment()).toMatchSnapshot();
  })
})