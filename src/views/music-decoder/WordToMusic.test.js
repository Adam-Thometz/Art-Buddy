import WordToMusic from "./WordToMusic";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { wordToMusic } from "data/_activities/activityList";

jest.mock("tone", () => ({
  PitchShift: jest.fn(() => ({
    toDestination: jest.fn(),
    triggerAttackRelease: jest.fn(),
  })),
  Synth: jest.fn(() => ({
    connect: jest.fn(() => ({
      volume: { value: 0 },
      triggerAttackRelease: jest.fn(),
    })),
  })),
  now: jest.fn(),
  Transport: {
    stop: jest.fn(),
  },
}));

describe("WordToMusic component", () => {
  window.localStorage.setItem(`visited-${wordToMusic.lsKey}`, true);
  it("renders without crashing", () => {
    render(<WordToMusic />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<WordToMusic />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle upper and lowercase letters", () => {
    render(<WordToMusic />);
    const toggle = screen.getByText("ON");
    userEvent.click(toggle);
    expect(screen.getByText("z")).toBeInTheDocument();
    userEvent.click(toggle);
    expect(screen.getByText("Z")).toBeInTheDocument();
  });

  it("colors a letter in the word input if found", () => {
    render(<WordToMusic />);
    const input = screen.getByLabelText("WORDS");
    userEvent.type(input, "HELLO");
    expect(input).toHaveValue("HELLO");

    const wrongLetter = screen.getByText("Z");
    userEvent.click(wrongLetter);
    expect(wrongLetter).toHaveClass("AlphabetTable-cell");

    const rightLetter = screen.getByText("L");
    userEvent.click(rightLetter);
    expect(rightLetter).toHaveClass("AlphabetTable-cell E");
  });

  it("removes color if a letter is deleted from the input", () => {
    render(<WordToMusic />);
    const input = screen.getByLabelText("WORDS");
    userEvent.type(input, "HELLO");

    const rightLetter = screen.getByText("L");
    userEvent.click(rightLetter);
    expect(rightLetter).toHaveClass("AlphabetTable-cell E");

    userEvent.type(input, "{del}");
    expect(rightLetter).toHaveClass("AlphabetTable-cell");
  });
});
