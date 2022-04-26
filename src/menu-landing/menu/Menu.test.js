import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Menu from "./Menu";;

describe('Menu component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Menu />);
  })

  it('matches the snapshot of the main menu', () => {
    const { asFragment } = renderWithRouter(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('matches the snapshot music games', () => {
    const { asFragment } = renderWithRouter(<Menu type={'music'} />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('matches the snapshot art games', () => {
    const { asFragment } = renderWithRouter(<Menu type={'art'} />);
    expect(asFragment()).toMatchSnapshot();
  })
})