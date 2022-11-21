import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import { default as store } from "_redux/rootReducer";
import Menu from "./Menu";
import { changeMenu } from "_redux/settings/mainSettingsActions";

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
    expect(screen.getByText("WHAT'S THAT INSTRUMENT?")).toBeInTheDocument();
    expect(screen.getByText('JUMP INTO RHYTHM')).toBeInTheDocument();
    expect(screen.getByText('SEQUENCE MAKER')).toBeInTheDocument();
    expect(screen.getByText('WORD-TO-MUSIC DECODER')).toBeInTheDocument();
  });

  it('renders art games', () => {
    renderWithProvider(<Menu type='art' />);
    expect(screen.getByText('COLOR THEORY')).toBeInTheDocument();
    expect(screen.getByText('FREE PAINT')).toBeInTheDocument();
  });
  
  it('renders tools', () => {
    store.dispatch(changeMenu('tools'));
    renderWithProvider(<Menu />);
    expect(screen.getByText('SCORE KEEPER')).toBeInTheDocument();
    expect(screen.getByText('TIME KEEPER')).toBeInTheDocument();
  })
});