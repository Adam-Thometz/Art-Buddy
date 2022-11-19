import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import NoteBlock from "./NoteBlock";

describe('NoteBlock component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NoteBlock />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<NoteBlock />);
    expect(asFragment()).toMatchSnapshot();
  });
});