import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import Menu from "./Menu";;

describe('Menu component', () => {
  it('renders the main menu', () => {
    renderWithRouter(<Menu />, { initialRoutes: ['/'] });
  })

  it('renders the music games', () => {
    const { asFragment } = renderWithRouter(<Menu />, { initialRoutes: ['/'] });
    expect(asFragment()).toMatchSnapshot();
  })
})