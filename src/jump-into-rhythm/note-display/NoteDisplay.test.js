import React from "react";

import renderWithProvider from "_testUtils/renderWithProvider";

import NoteDisplay from "./NoteDisplay";

describe('NoteDisplay component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NoteDisplay />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<NoteDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});