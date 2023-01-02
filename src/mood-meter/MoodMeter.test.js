import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';

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
});