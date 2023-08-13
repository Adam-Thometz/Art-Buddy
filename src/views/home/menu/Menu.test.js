import Menu from "./Menu";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";

import { default as store } from "store/rootReducer";
import { changeMenu } from "store/_general/generalReducer";

describe("Menu component", () => {
  it("renders without crashing", () => {
    render(<Menu />);
  });

  it("matches the snapshot of the main menu", () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders music games", () => {
    render(<Menu type="music" />);
    expect(screen.getByText("WHAT'S THAT INSTRUMENT?")).toBeInTheDocument();
    expect(screen.getByText("JUMP INTO RHYTHM")).toBeInTheDocument();
    expect(screen.getByText("SEQUENCE MAKER")).toBeInTheDocument();
    expect(screen.getByText("WORD-TO-MUSIC DECODER")).toBeInTheDocument();
  });

  it("renders art games", () => {
    render(<Menu type="art" />);
    expect(screen.getByText("COLOR THEORY")).toBeInTheDocument();
    expect(screen.getByText("FREE PAINT")).toBeInTheDocument();
  });

  it("renders tools", () => {
    store.dispatch(changeMenu("tools"));
    render(<Menu />, { store });
    expect(screen.getByText("SCORE KEEPER")).toBeInTheDocument();
    expect(screen.getByText("TIME KEEPER")).toBeInTheDocument();
  });
});
