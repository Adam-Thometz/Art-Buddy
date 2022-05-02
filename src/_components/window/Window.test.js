import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import Window from './Window'

describe('Window component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Window />);
  })

  it('matches the snapshot of the button', () => {
    const { asFragment } = renderWithProvider(<Window />);
    expect(asFragment()).toMatchSnapshot();
  })
})