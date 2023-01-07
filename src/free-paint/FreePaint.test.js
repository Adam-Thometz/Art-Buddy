import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FreePaint from './FreePaint';

import { freePaint } from "_data/_activities/activityList";

describe('FreePaint component', () => {
  window.localStorage.setItem(`visited-${freePaint.lsKey}`, true);
  it('renders without crashing', () => {
    renderWithProvider(<FreePaint />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<FreePaint />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders a stencil when an option is picked', () => {
    renderWithProvider(<FreePaint />);
    const abc = screen.getByText('abc');
    userEvent.click(abc);
    const f = screen.getByText('f');
    userEvent.click(f);
    userEvent.click(abc);
    expect(screen.getByText('f')).toBeInTheDocument();
  });
});