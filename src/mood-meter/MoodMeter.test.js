import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MoodMeter from './MoodMeter';
import App from "App";

import { moodMeter } from "_data/_activities/activityList";
import { GREEN_FILTER, RED_FILTER } from "_data/mood-meter/batteries";
import urls from "_routes/routeUrls";

describe('MoodMeter component', () => {
  window.localStorage.setItem(`visited-${moodMeter.lsKey}`, true);
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
  
  it('should show a mood after selecting valence and energy', () => {
    // below is rendering the MoodMeter component. This is to get the Popup
    renderWithProvider(<App />, { initialRoutes: [urls.moodMeterUrl] });
    
    expect(screen.getByText('YOUR MOOD IS...')).toBeInTheDocument();
    expect(screen.getByText('Curious')).toBeInTheDocument();

    const face = screen.getAllByTestId(/face/)[0];
    expect(face).toHaveClass('selected-face');
    const battery = screen.getAllByTestId('bar')[0];
    const batteryStyle = window.getComputedStyle(battery);
    expect(batteryStyle.filter).toBe(GREEN_FILTER);
  });
});