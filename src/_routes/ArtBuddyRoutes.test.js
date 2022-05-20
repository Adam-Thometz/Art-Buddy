import React from "react";

import renderWithProvider from "../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ArtBuddyRoutes from "./ArtBuddyRoutes";

describe('Art Buddy Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ArtBuddyRoutes />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ArtBuddyRoutes />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the music games page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/music'] });
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  });
  
  it('renders the art games page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/art'] });
    expect(screen.getByText('ART GAMES')).toBeInTheDocument();
  });
  
  it('renders all games', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/all'] });
    expect(screen.getByText('ALL GAMES')).toBeInTheDocument();
  });
  
  it('renders the word-to-music decoder', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/word-to-music'] });
    expect(screen.getByText('Word-To-Music Decoder')).toBeInTheDocument();
  });
  
  it('renders the sequence maker', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/sequencer'] });
    expect(screen.getByText('Sequence Maker')).toBeInTheDocument();
  });
  
  it('renders the instrument id game', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/instrument-id'] });
    expect(screen.getByText("What's That Instrument?")).toBeInTheDocument();
  });
  
  it('renders the score keeper', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/score-keeper'] });
    expect(screen.getByText('Score Keeper')).toBeInTheDocument();
  });
  
  it('renders the 404 page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/gregwerg'] });
    expect(screen.getByText('UH OH!')).toBeInTheDocument();
  });
})