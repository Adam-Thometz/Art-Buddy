import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SequenceMaker from './SequenceMaker';

import { sequenceMaker } from "_data/_activities/activityList";
import TimeMock from "_testUtils/mocks/timeMock";

jest.mock('tone', () => ({
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => ({
      urls,
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note, duration, time
      }))
    }))
  })),
  now: jest.fn(() => 0),
  Part: jest.fn((_, notesToPlay) => ({
    notesToPlay,
    start: jest.fn(),
    stop: jest.fn(),
  })),
  Transport: {
    start: jest.fn(),
    stop: jest.fn(),
  }
}));

function setupChoices() {
  const categoryDropdown = screen.getByText('SOUND CATEGORY');
  userEvent.click(categoryDropdown);
  const option = screen.getByText('ANIMALS');
  userEvent.click(option);
};

function setupSequence() {
  const choice = screen.getByText('CAT');
  const choice2 = screen.getByText('DOG');
  userEvent.click(choice);
  userEvent.click(choice2);
};

describe('SequenceMaker component', () => {
  window.localStorage.setItem(`visited-${sequenceMaker.lsKey}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<SequenceMaker />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SequenceMaker />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('adds sounds to the sound options component', () => {
    renderWithProvider(<SequenceMaker />);
    setupChoices();
    expect(screen.getByText('DOG')).toBeInTheDocument();
  });

  it('adds a choice to the sequence', () => {
    renderWithProvider(<SequenceMaker />);
    setupChoices();
    let sequence = screen.getAllByTestId(/block/);
    expect(within(sequence[0]).queryByRole('button')).not.toBeInTheDocument();
    expect(within(sequence[0]).queryByRole('img')).not.toBeInTheDocument();
    const choice = screen.getByText('CAT');
    userEvent.click(choice);
    sequence = screen.getAllByTestId(/block/);
    expect(within(sequence[0]).getByRole('button')).toBeInTheDocument();
    expect(within(sequence[0]).getByAltText('CAT')).toBeInTheDocument();
  });
  
  it('plays a block of a sequence', () => {
    renderWithProvider(<SequenceMaker />);
    const time = new TimeMock();
    setupChoices();
    const choice = screen.getByText('CAT');
    userEvent.click(choice);
    const block = screen.getByTestId('block1');
    userEvent.click(within(block).getByAltText('CAT'));
    expect(block).toHaveClass('playing');
    time.travel(3000);
    expect(block).not.toHaveClass('playing');
  });

  it('plays one block of a sequence at a time', async () => {
    renderWithProvider(<SequenceMaker />);
    const time = new TimeMock();
    setupChoices();
    setupSequence();

    const play = screen.getByTestId('play');
    userEvent.click(play);

    const [block1, block2] = screen.getAllByTestId(/block/);
    await waitFor(() => expect(block1).toHaveClass('playing'));
    time.travel(3000);
    await waitFor(() => expect(block1).not.toHaveClass('playing'));

    await waitFor(() => expect(block2).toHaveClass('playing'));
    time.travel(3000);
    await waitFor(() => expect(block2).not.toHaveClass('playing'));
    time.teardown();
  });
  
  it('plays all blocks in a sequence at once', async () => {
    renderWithProvider(<SequenceMaker />);
    const time = new TimeMock();
    setupChoices();
    setupSequence();

    const playAll = screen.getByTestId('playAll');
    userEvent.click(playAll);

    const [block1, block2] = screen.getAllByTestId(/block/);
    await waitFor(() => expect(block1).toHaveClass('playing'));
    await waitFor(() => expect(block2).toHaveClass('playing'));
    time.travel(3000);
    await waitFor(() => expect(block1).not.toHaveClass('playing'));
    await waitFor(() => expect(block2).not.toHaveClass('playing'));
    time.teardown();
  });

  it('resets the sequence', () => {
    renderWithProvider(<SequenceMaker />);
    setupChoices();
    setupSequence();
    const [block1, block2] = screen.getAllByTestId(/block/);
    expect(within(block1).getByAltText('CAT')).toBeInTheDocument();
    expect(within(block2).getByAltText('DOG')).toBeInTheDocument();

    const reset = screen.getByTestId('reset');
    userEvent.click(reset);

    expect(within(block1).queryByAltText('CAT')).not.toBeInTheDocument();
    expect(within(block2).queryByAltText('DOG')).not.toBeInTheDocument();
  });
});