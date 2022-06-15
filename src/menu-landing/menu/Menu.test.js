import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import Menu from "./Menu";;

describe('Menu component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Menu />);
  });

  it('matches the snapshot of the main menu', () => {
    const { asFragment } = renderWithProvider(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders music games', () => {
    renderWithProvider(<Menu type='music' />);
    expect(screen.getByText('SEQUENCE MAKER')).toMatchSnapshot();
  });

  it('renders art games', () => {
    renderWithProvider(<Menu type='art' />);
    expect(screen.getByText('COLOR THEORY')).toMatchSnapshot();
  });
});