import React from "react";

import renderWithProvider from "../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import ArtBuddyRoutes from "./ArtBuddyRoutes";
import urls from './routeUrls';

describe('Art Buddy Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ArtBuddyRoutes />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ArtBuddyRoutes />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the music games page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.musicGames] });
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  });
  
  it('renders the art games page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.artGames] });
    expect(screen.getByText('ART GAMES')).toBeInTheDocument();
  });
  
  it('renders all games', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.allGames] });
    expect(screen.getByText('ALL GAMES')).toBeInTheDocument();
  });
  
  it('renders the word-to-music decoder', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.wordToMusic] });
    expect(screen.getByText('WORD-TO-MUSIC DECODER')).toBeInTheDocument();
  });
  
  it('renders the sequence maker', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.sequenceMaker] });
    expect(screen.getByText('SEQUENCE MAKER')).toBeInTheDocument();
  });
  
  it('renders jump into rhythm', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.jumpIntoRhythm] });
    expect(screen.getByText('JUMP INTO RHYTHM')).toBeInTheDocument();
  });
  
  it('renders the instrument id game', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.instrumentId] });
    expect(screen.getByText("INSTRUMENT ID")).toBeInTheDocument();
  });
  
  it('renders the score keeper', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: [urls.scoreKeeper] });
    expect(screen.getByText('SCORE KEEPER')).toBeInTheDocument();
  });
  
  it('renders the 404 page', () => {
    renderWithProvider(<ArtBuddyRoutes />, { initialRoutes: ['/gregwerg'] });
    expect(screen.getByText('UH OH!')).toBeInTheDocument();
  });
})