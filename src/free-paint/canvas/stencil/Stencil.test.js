import React from "react";

import rootReducer from "_redux/rootReducer";
import { setStencil } from "_redux/free-paint/freePaintActions";

import renderWithProvider from "_testUtils/renderWithProvider";

import Stencil from "./Stencil";

describe('Stencil component', () => {
  rootReducer.dispatch(setStencil('A'));

  it('renders without crashing', () => {
    renderWithProvider(<Stencil />, { store: rootReducer });
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Stencil />, { store: rootReducer });
    expect(asFragment()).toMatchSnapshot();
  });
});