import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import Student from './Student'

describe('Student component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Student />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithProvider(<Student name='Eddie' color='#000000' points={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});