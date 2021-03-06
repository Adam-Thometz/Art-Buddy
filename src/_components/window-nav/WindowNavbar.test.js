import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import WindowNavbar from './WindowNavbar';

import ReportCardIcon from '../../instrument-id/play/listening-skills/level/corner-icon/ReportCardIcon';

describe('WindowNavbar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WindowNavbar />);
  });

  it('matches the snapshot of the WindowNavbar', () => {
    const { asFragment } = renderWithProvider(<WindowNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a page and corner icon', () => {
    renderWithProvider(<WindowNavbar page='Listening Skills Test' cornerIcon={<ReportCardIcon />}/>);
    expect(screen.getByText('Listening Skills Test')).toBeInTheDocument();
    expect(screen.getByText('REPORT CARD')).toBeInTheDocument();
  });
});