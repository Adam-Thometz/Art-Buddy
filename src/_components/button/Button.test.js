import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import Button from './Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Button />);
  })

  it('matches the snapshot of the button', () => {
    const { asFragment } = renderWithProvider(<Button/>);
    expect(asFragment()).toMatchSnapshot();
  })
})