import React from "react";

import renderWithProvider from "../../../../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupChoices } from "../../../../_testUtils/setup-functions/ListeningSkillsTestSetup";

import ListeningSkillsTest from "./ListeningSkillsTest";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    level: '2'
  })
}));

describe('ListeningSkillsTest component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ListeningSkillsTest />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<ListeningSkillsTest />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders choices', () => {
    renderWithProvider(<ListeningSkillsTest />);
    const btn = screen.getByText('START');
    expect(btn).toBeDisabled();

    setupChoices();
    expect(screen.getByText('FRENCH HORN')).toBeInTheDocument();
    expect(screen.getByText('TROMBONE')).toBeInTheDocument();
    expect(screen.queryAllByText('SWAP').length).toBe(2);
    expect(Math.random).toBeCalledTimes(3);
    expect(btn).toBeEnabled();
  });

  it('flashes corrent and incorrect for answers', () => {
    renderWithProvider(<ListeningSkillsTest />);
    setupChoices();

    const correctWrappers = screen.getAllByTestId('isCorrect');

    const incorrect = screen.getByText('TROMBONE');
    userEvent.click(incorrect);
    expect(correctWrappers[1]).toHaveClass('Choice-wrapper incorrect');
    const correct = screen.getByText('FRENCH HORN');
    userEvent.click(correct);
    expect(correctWrappers[0]).toHaveClass('Choice-wrapper correct');
  });
});