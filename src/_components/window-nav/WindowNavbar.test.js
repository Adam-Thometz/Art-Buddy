import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import WindowNavbar from './WindowNavbar'

describe('WindowNavbar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WindowNavbar />);
  })

  it('matches the snapshot of the WindowNavbar', () => {
    const { asFragment } = renderWithProvider(<WindowNavbar />);
    expect(asFragment()).toMatchSnapshot();
  })
  
  it('renders the WindowNavbar in the music menu', () => {
    renderWithProvider(<WindowNavbar page='MUSIC GAMES' />);
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  })
})