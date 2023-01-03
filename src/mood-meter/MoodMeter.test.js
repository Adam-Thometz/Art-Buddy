import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MoodMeter from './MoodMeter';

import { MM } from '_data/_utils/localStorageKeys';
import { GREEN_FILTER, RED_FILTER } from "_data/mood-meter/batteryDefaults";

describe('MoodMeter component', () => {
  window.localStorage.setItem(`visited-${MM}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<MoodMeter />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<MoodMeter />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('should select valence', () => {
    renderWithProvider(<MoodMeter />);
    const valenceOptions = screen.getAllByTestId(/face/);
    userEvent.click(valenceOptions[0]);
    expect(screen.getByTestId('face2')).toHaveClass('selected-face');
    
    userEvent.click(valenceOptions[1]);
    expect(screen.getByTestId('face1')).toHaveClass('selected-face');
    expect(screen.getByTestId('face2')).not.toHaveClass('selected-face');
  });
  
  it('should select energy', () => {
    renderWithProvider(<MoodMeter />);
    const energyOptions = screen.getAllByTestId(/battery/);
    userEvent.click(energyOptions[2]);
    const firstClicked = screen.getAllByTestId('bar')[2];
    const firstStyle = window.getComputedStyle(firstClicked);
    expect(firstStyle.filter).toBe(RED_FILTER);
    
    userEvent.click(energyOptions[0]);
    const secondClicked = screen.getAllByTestId('bar')[0];
    const secondStyle = window.getComputedStyle(secondClicked);
    expect(secondStyle.filter).toBe(GREEN_FILTER);
    const firstClickedAgain = screen.getAllByTestId('bar')[2];
    const firstStyleAgain = window.getComputedStyle(firstClickedAgain);
    expect(firstStyleAgain.filter).not.toBe(RED_FILTER);
  });
});