import JumpIntoRhythm from "./JumpIntoRhythm";

import { render } from "test/render";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { jumpIntoRhythm } from "data/_activities/activityList";

jest.mock("tone", () => ({
  Transport: {
    bpm: { value: 90 },
    stop: jest.fn(),
  },
  Sampler: jest.fn(() => ({
    toDestination: jest.fn(),
  })),
}));

describe("JumpIntoRhythm component", () => {
  window.localStorage.setItem(`visited-${jumpIntoRhythm.lsKey}`, true);
  it("renders without crashing", () => {
    render(<JumpIntoRhythm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<JumpIntoRhythm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should select a musical note", () => {
    render(<JumpIntoRhythm />);
    const options = screen.getAllByTestId("notes");
    userEvent.click(options[0]);
    const blocks = screen.getAllByTestId("block");
    const firstBlock = within(blocks[0]).queryAllByRole("img");
    const secondBlock = within(blocks[1]).queryAllByRole("img");
    expect(firstBlock.length).toBe(2);
    expect(secondBlock.length).toBe(0);
  });
});
