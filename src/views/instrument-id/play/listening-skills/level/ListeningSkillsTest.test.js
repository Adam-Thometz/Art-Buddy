import ListeningSkillsTest from "./ListeningSkillsTest";

import { render } from "test/render";
import { setupChoices } from "test/setup-functions/ListeningSkillsTestSetup";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    level: "2",
  }),
}));
jest.mock("tone", () => ({
  Buffer: jest.fn(),
  Transport: { stop: jest.fn() },
}));

describe("ListeningSkillsTest component", () => {
  it("renders without crashing", () => {
    render(<ListeningSkillsTest />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ListeningSkillsTest />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders choices", () => {
    render(<ListeningSkillsTest />);
    const btn = screen.getByText("START");
    expect(btn).toBeDisabled();

    setupChoices();
    expect(screen.getByText("FRENCH HORN")).toBeInTheDocument();
    expect(screen.getByText("TROMBONE")).toBeInTheDocument();
    expect(screen.queryAllByText("SWAP").length).toBe(2);
    expect(Math.random).toBeCalledTimes(3);
    expect(btn).toBeEnabled();
  });

  it("flashes correct and incorrect for answers", () => {
    render(<ListeningSkillsTest />);
    setupChoices();

    const correctWrappers = screen.getAllByTestId("isCorrect");

    const incorrect = screen.getByText("TROMBONE");
    userEvent.click(incorrect);
    expect(correctWrappers[1]).toHaveClass("Choice-wrapper incorrect");
    const correct = screen.getByText("FRENCH HORN");
    userEvent.click(correct);
    expect(correctWrappers[0]).toHaveClass("Choice-wrapper correct");
  });
});
