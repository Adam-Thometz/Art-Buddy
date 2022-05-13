import React from "react";
import renderWithProvider from '../../_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";
import WindowNavbar from './WindowNavbar'
import ReportCardIcon from "./corner-icons/report-card/ReportCardIcon";

describe('WindowNavbar component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<WindowNavbar />);
  });

  it('matches the snapshot of the WindowNavbar', () => {
    const { asFragment } = renderWithProvider(<WindowNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the WindowNavbar in the music menu', () => {
    renderWithProvider(<WindowNavbar page='MUSIC GAMES' />);
    expect(screen.getByText('MUSIC GAMES')).toBeInTheDocument();
  });

  it('renders a corner icon', () => {
    renderWithProvider(<WindowNavbar page='Listening Skills Test' cornerIcon={<ReportCardIcon />}/>);
    expect(screen.getByText('Listening Skills Test')).toBeInTheDocument();
    expect(screen.getByText('REPORT CARD')).toBeInTheDocument();
  });
})