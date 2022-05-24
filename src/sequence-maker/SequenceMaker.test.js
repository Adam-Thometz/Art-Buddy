import React from "react";

import renderWithProvider from '../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SequenceMaker from './SequenceMaker';

describe('SequenceMaker component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SequenceMaker />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SequenceMaker />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('adds sounds to the sound options component', () => {
    renderWithProvider(<SequenceMaker />);
    const categoryDropdown = screen.getByText('SOUND CATEGORY');
    userEvent.hover(categoryDropdown);
    const option = screen.getByText('ANIMALS');
    userEvent.click(option);
    expect(screen.getByText('DOG')).toBeInTheDocument();
  });
});