import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import NoteOptions from "./NoteOptions";

describe('NoteOptions component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NoteOptions />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<NoteOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});