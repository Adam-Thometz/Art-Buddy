import React from "react";
import { render } from "test/render";

import { default as store } from "store/rootReducer";
import { setStencil, setEditStencilMode } from "store/free-paint/freePaintReducer";

import { screen } from "@testing-library/react";

import Stencil from "./Stencil";

describe("Stencil component", () => {
  store.dispatch(setStencil("A"));

  it("renders without crashing", () => {
    render(<Stencil />, { store });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Stencil />, { store });
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the close and resize features when edit stencil mode is on", () => {
    store.dispatch(setEditStencilMode(true));
    render(<Stencil />, { store });
    expect(screen.getByTestId("stencil-close")).toBeInTheDocument();
    expect(screen.getByTestId("stencil-resize")).toBeInTheDocument();
  });
});
