import React from "react";

import { render } from "test/render";

import StencilOptions from "./StencilOptions";

describe("StencilOptions component", () => {
  it("renders without crashing", () => {
    render(<StencilOptions id="numbers" />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<StencilOptions id="numbers" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
