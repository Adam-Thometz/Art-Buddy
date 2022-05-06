import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import Icon from './Icon'

describe('Icon component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Icon />);
  });

  it('matches the snapshot of the icon', () => {
    const { asFragment } = renderWithProvider(<Icon />);
    expect(asFragment()).toMatchSnapshot();
  });
})