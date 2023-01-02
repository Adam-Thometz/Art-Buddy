import React from "react";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

import renderWithProvider from "_testUtils/renderWithProvider";
import { setupChoices } from "_testUtils/setup-functions/ListeningSkillsTestSetup";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ListeningSkillsTest from "./ListeningSkillsTest";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    level: '2'
  })
}));
jest.mock('tone', () => ({
  Buffer: jest.fn()
}));

describe('ListeningSkillsTest component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <ListeningSkillsTest />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <ListeningSkillsTest />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders choices', () => {
    renderWithProvider(<PlayContextMock>
      <ListeningSkillsTest />
    </PlayContextMock>);
    const btn = screen.getByText('START');
    expect(btn).toBeDisabled();

    setupChoices();
    expect(screen.getByText('FRENCH HORN')).toBeInTheDocument();
    expect(screen.getByText('TROMBONE')).toBeInTheDocument();
    expect(screen.queryAllByText('SWAP').length).toBe(2);
    expect(Math.random).toBeCalledTimes(3);
    expect(btn).toBeEnabled();
  });

  it('flashes correct and incorrect for answers', () => {
    renderWithProvider(<PlayContextMock>
      <ListeningSkillsTest />
    </PlayContextMock>);
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