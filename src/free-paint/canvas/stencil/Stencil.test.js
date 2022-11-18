import React from "react";

import { default as store } from "_redux/rootReducer";
import { setStencil } from "_redux/free-paint/freePaintActions";

import renderWithProvider from "_testUtils/renderWithProvider";

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
});