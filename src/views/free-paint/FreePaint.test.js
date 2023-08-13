import FreePaint from "./FreePaint";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { freePaint } from "data/_activities/activityList";

describe("FreePaint component", () => {
  window.localStorage.setItem(`visited-${freePaint.lsKey}`, true);
  it("renders without crashing", () => {
    render(<FreePaint />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<FreePaint />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a stencil when an option is picked", () => {
    render(<FreePaint />);
    const abc = screen.getByText("abc");
    userEvent.click(abc);
    const f = screen.getByText("f");
    userEvent.click(f);
    userEvent.click(abc);
    expect(screen.getByText("f")).toBeInTheDocument();
  });
});
