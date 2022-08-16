import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import TextToSpeech from './TextToSpeech';

describe('TextToSpeech component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<TextToSpeech />);
  });

  it('matches the snapshot of TextToSpeech', () => {
    const { asFragment } = renderWithProvider(<TextToSpeech />);
    expect(asFragment()).toMatchSnapshot();
  });
});