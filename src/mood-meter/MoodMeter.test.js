import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MoodMeter from './MoodMeter';

import { MM } from '_data/_utils/localStorageKeys';

describe('MoodMeter component', () => {
  window.localStorage.setItem(`visited-${MM}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<MoodMeter />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<MoodMeter />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('should select valence and energy', () => {
    renderWithProvider(<MoodMeter />);
    const valenceOptions = screen.getAllByTestId(/face/);
    const energyOptions = screen.getAllByTestId(/battery/);
    userEvent.click(valenceOptions[0]);
    expect(screen.getByTestId('face2')).toHaveClass('selected-face');
    userEvent.click(valenceOptions[1]);
    expect(screen.getByTestId('face1')).toHaveClass('selected-face');
    expect(screen.getByTestId('face2')).not.toHaveClass('selected-face');
    userEvent.click(energyOptions[2]);
    expect(screen.getByTestId('battery0')).toHaveClass('selected-battery');
  });
});