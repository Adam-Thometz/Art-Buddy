import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NoteOptions from "./NoteOptions";

describe('NoteOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NoteOptions />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<NoteOptions />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should enable the play button after notes are selected', () => {
    renderWithProvider(<NoteOptions />);
    const playBtn = screen.getByText('PLAY');
    const options = screen.getAllByTestId('notes');
    for (let i = 0; i < 4; i++) {
      expect(playBtn).toBeDisabled();
      userEvent.click(options[0]);
    };
    expect(playBtn).not.toBeDisabled();
  });
});