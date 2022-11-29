import React from "react";

import { default as store } from "_redux/rootReducer";
import { setStencil, setEditStencilMode } from "_redux/free-paint/freePaintActions";

import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";

import Stencil from "./Stencil";

describe('Stencil component', () => {
  store.dispatch(setStencil('A'));
  
  it('renders without crashing', () => {
    renderWithProvider(<Stencil />, { store });
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Stencil />, { store });
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the close and resize features when edit stencil mode is on', () => {
    store.dispatch(setEditStencilMode(true));
    renderWithProvider(<Stencil />, { store });
    expect(screen.getByTestId('stencil-close')).toBeInTheDocument();
    expect(screen.getByTestId('stencil-resize')).toBeInTheDocument();
  });
});