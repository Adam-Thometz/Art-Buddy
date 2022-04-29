import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import { screen } from "@testing-library/react";
import Menu from "./Menu";;

describe('Menu component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Menu />);
  })

  it('matches the snapshot of the main menu', () => {
    const { asFragment } = renderWithRouter(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('renders music games', () => {
    renderWithRouter(<Menu type='music' />);
    expect(screen.getByText('SEQUENCE MAKER')).toMatchSnapshot();
  })

  it('renders art games', () => {
    renderWithRouter(<Menu type='art' />);
    expect(screen.getByText('COLOR THEORY')).toMatchSnapshot();
  })
})