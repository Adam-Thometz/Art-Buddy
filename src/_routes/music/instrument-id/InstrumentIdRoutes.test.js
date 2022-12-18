import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import InstrumentIdRoutes from "./InstrumentIdRoutes";
import { instrumentIdUrls } from '_routes/routeUrls';

jest.mock('tone', () => ({
  ...jest.requireActual('tone'),
  Transport: { stop: jest.fn() },
}));

describe('Instrument Id Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<InstrumentIdRoutes />);
  });

  it('renders the main learn page', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.learn] });
    expect(screen.getByText('To begin, choose an instrument family')).toBeInTheDocument();
  });

  it('renders an instrument family page', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [`${instrumentIdUrls.learn}/brass`] });
    expect(screen.getByText('THE BRASS FAMILY')).toBeInTheDocument();
  });

  it('renders a page for a specific instrument', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [`${instrumentIdUrls.learn}/brass/trumpet`] });
    expect(screen.getByText('What is the trumpet made of?')).toBeInTheDocument();
  });

  it('renders the main play page', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.play] });
    expect(screen.getByText('INSTRUMENT ID: PLAY')).toBeInTheDocument();
  });

  it('renders the listening skills page', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.playListening] });
    expect(screen.getByText('Practice your listening skills to unlock instruments that you can play later on the Song Maker section!')).toBeInTheDocument();
  });

  it('renders a level for listening skills', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [`${instrumentIdUrls.playListening}/1`] });
    expect(screen.getByText('Listening Skills Test: Level 1')).toBeInTheDocument();
  });

  it('renders the song maker', () => {
    renderWithProvider(<InstrumentIdRoutes />, { initialRoutes: [instrumentIdUrls.playSongMaker] });
    expect(screen.getByText('Song Maker')).toBeInTheDocument();
    expect(screen.getByText('SAVED SONGS')).toBeInTheDocument();
  });
});