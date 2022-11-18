import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SequenceMaker from './SequenceMaker';

import { SM } from '_data/_utils/localStorageKeys';

jest.mock('_helpers/sequence-maker/createBuffer');

function setupChoices() {
  const categoryDropdown = screen.getByText('SOUND CATEGORY');
  userEvent.click(categoryDropdown);
  const option = screen.getByText('ANIMALS');
  userEvent.click(option);
};

describe('SequenceMaker component', () => {
  window.localStorage.setItem(`visited-${SM}`, true);
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
    const choice = screen.getByText('CAT');
    userEvent.click(choice);
    expect(screen.getByText('X')).toBeInTheDocument();
  })
});