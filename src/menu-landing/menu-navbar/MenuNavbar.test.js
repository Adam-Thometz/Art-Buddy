import React from "react";
import renderWithRouter from '../../_testUtils/renderWithRouter';
import { screen } from "@testing-library/react";
import MenuNavbar from './MenuNavbar'

describe('MenuNavbar component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<MenuNavbar />);
  })

  it('matches the snapshot of the MenuNavbar', () => {
    const { asFragment } = renderWithRouter(<MenuNavbar />);
    expect(asFragment()).toMatchSnapshot();
  })
  
  it('matches the snapshot of the MenuNavbar in the music menu', () => {
    renderWithRouter(<MenuNavbar page='music' />);
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  })
})