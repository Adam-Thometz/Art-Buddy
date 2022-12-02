import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import MusicRoutes from "./MusicRoutes";
import urls from '_data/_routes/routeUrls';

jest.mock('tone', () => ({
  ...jest.requireActual('tone'),
  Transport: jest.fn()
}));

describe('Music Game Routes', () => {
  it('renders without crashing', () => {
    renderWithProvider(<MusicRoutes />);
  });

  it('renders the word-to-music decoder', () => {
    window.localStorage.setItem('visited-wtm', true);
    renderWithProvider(<MusicRoutes />, { initialRoutes: [urls.wordToMusicUrl] });
    expect(screen.getByText('WORD-TO-MUSIC DECODER')).toBeInTheDocument();
  });
  
  it('renders the sequence maker', () => {
    renderWithProvider(<MusicRoutes />, { initialRoutes: [urls.sequenceMakerUrl] });
    expect(screen.getByText('SEQUENCE MAKER')).toBeInTheDocument();
  });
  
  it('renders jump into rhythm', () => {
    renderWithProvider(<MusicRoutes />, { initialRoutes: [urls.jumpIntoRhythmUrl] });
    expect(screen.getByText('JUMP INTO RHYTHM')).toBeInTheDocument();
  });
  
  it('renders the instrument id game', () => {
    renderWithProvider(<MusicRoutes />, { initialRoutes: [urls.instrumentIdUrl] });
    expect(screen.getByText("INSTRUMENT ID")).toBeInTheDocument();
  });
});