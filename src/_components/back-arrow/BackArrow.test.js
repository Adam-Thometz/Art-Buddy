import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import BackArrow from './BackArrow'

describe('BackArrow component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<BackArrow />);
  })

  it('matches the snapshot of the back arrow', () => {
    const { asFragment } = renderWithRouter(<BackArrow/>);
    expect(asFragment()).toMatchSnapshot();
  })
})