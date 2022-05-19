import React from "react";
import renderWithProvider from "../../../_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SongMaker from "./SongMaker";

describe('SongMaker component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SongMaker />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<SongMaker />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('selects melodies', () => {
    renderWithProvider(<SongMaker />);
    const instrumentDropdown = screen.getByText('INSTRUMENT');
    userEvent.hover(instrumentDropdown);
    const instrumentOption = screen.getByText('VIOLIN');
    userEvent.click(instrumentOption);
    expect(screen.getByText('MELODY')).toBeInTheDocument();
    const melodyDropdown = screen.getByText('MELODY');
    userEvent.hover(melodyDropdown);
    const melodyOption = screen.getByText('BABY SHARK');
    userEvent.click(melodyOption);
    expect(screen.queryByText('MELODY')).not.toBeInTheDocument();
  });
  
  it('selects rhythms', () => {
    renderWithProvider(<SongMaker />);
    const addInstrumentBtns = screen.getAllByText('ADD INSTRUMENT')
    userEvent.click(addInstrumentBtns[0])
    expect(screen.getAllByText('INSTRUMENT')[1]).toBeInTheDocument();
    const instrumentDropdown = screen.getAllByText('INSTRUMENT')[1];
    userEvent.hover(instrumentDropdown);
    const instrumentOption = screen.getAllByText('DRUM SET')[1];
    userEvent.click(instrumentOption);
    expect(screen.getByText('RHYTHM')).toBeInTheDocument();
    const rhythmDropdown = screen.getByText('RHYTHM');
    userEvent.hover(rhythmDropdown);
    const rhythmOption = screen.getByText('REGULAR');
    userEvent.click(rhythmOption);
    expect(screen.queryByText('RHYTHM')).not.toBeInTheDocument();
  });
});