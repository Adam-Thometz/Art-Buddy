import React from "react";

import rootReducer from "_redux/rootReducer";
import { setDisplay } from "_redux/free-paint/freePaintActions";

import renderWithProvider from "_testUtils/renderWithProvider";

import Stencil from "./Stencil";

describe('Stencil component', () => {
  rootReducer.dispatch(setDisplay('A'));

  it('renders without crashing', () => {
    renderWithProvider(<Stencil />, { store: rootReducer });
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Stencil />, { store: rootReducer });
    expect(asFragment()).toMatchSnapshot();
  });
});