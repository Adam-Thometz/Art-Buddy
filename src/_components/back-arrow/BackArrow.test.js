import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import BackArrow from './BackArrow';

describe('BackArrow component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<BackArrow />);
  });

  it('matches the snapshot of the back arrow', () => {
    const { asFragment } = renderWithProvider(<BackArrow/>);
    expect(asFragment()).toMatchSnapshot();
  });
});