import React from "react";

import renderWithProvider from "../../../../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SaveSong from "./SaveSong";

describe('SaveSong component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SaveSong />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SaveSong />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('saves a song and provides feedback', () => {
    renderWithProvider(<SaveSong />);
    const input = screen.getByText('Song Title');
    userEvent.type(input, 'My super awesome song!');
    const submit = screen.getByText('SAVE');
    userEvent.click(submit);
    expect(screen.getByText('Song Saved!')).toBeInTheDocument();
  });
});