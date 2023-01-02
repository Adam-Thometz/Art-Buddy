import React from "react";
import renderWithProvider from "_testUtils/renderWithProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SongMaker from "./SongMaker";
import { PlayContextMock } from "_testUtils/mocks/contextMocks";

jest.mock('tone', () => ({
  Transport: { stop: jest.fn() },
  Time: jest.fn(() => ({ toSeconds: jest.fn() })),
  Buffer: jest.fn(),
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => ({
      urls,
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note, duration, time
      }))
    }))
  })),
}));

describe('SongMaker component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<PlayContextMock>
      <SongMaker />
    </PlayContextMock>);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<PlayContextMock>
      <SongMaker />
    </PlayContextMock>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('selects melodies', () => {
    renderWithProvider(<PlayContextMock>
      <SongMaker />
    </PlayContextMock>);
    const instrumentDropdown = screen.getByText('INSTRUMENT');
    userEvent.click(instrumentDropdown);
    const instrumentOption = screen.getByText('VIOLIN');
    userEvent.click(instrumentOption);
    expect(screen.getByText('MELODY')).toBeInTheDocument();
    
    const melodyDropdown = screen.getByText('MELODY');
    userEvent.click(melodyDropdown);
    const melodyOption = screen.getByText('BABY SHARK');
    userEvent.click(melodyOption);
    expect(screen.queryByText('MELODY')).not.toBeInTheDocument();
  });
  
  it('selects rhythms', () => {
    renderWithProvider(<PlayContextMock>
      <SongMaker />
    </PlayContextMock>);
    const addInstrumentBtns = screen.getAllByText('ADD INSTRUMENT');
    userEvent.click(addInstrumentBtns[0]);
    expect(screen.getAllByText('INSTRUMENT')[1]).toBeInTheDocument();

    const instrumentDropdown = screen.getAllByText('INSTRUMENT')[1];
    userEvent.click(instrumentDropdown);
    const instrumentOption = screen.getByText('DRUM SET');
    userEvent.click(instrumentOption);
    expect(screen.getByText('RHYTHM')).toBeInTheDocument();

    const rhythmDropdown = screen.getByText('RHYTHM');
    userEvent.click(rhythmDropdown);
    const rhythmOption = screen.getByText('REGULAR');
    userEvent.click(rhythmOption);
    expect(screen.queryByText('RHYTHM')).not.toBeInTheDocument();
  });
  
  it('saves a song', () => {
    renderWithProvider(<PlayContextMock>
      <SongMaker />
    </PlayContextMock>);
    const saveBtn = screen.getAllByText('SAVE')[0];
    userEvent.click(saveBtn);
    expect(screen.getByText('SAVE SONG')).toBeInTheDocument();
    
    const input = screen.getByLabelText('Song Title');
    userEvent.type(input, 'Regular Baby');
    const submit = screen.getAllByText('SAVE')[1];
    userEvent.click(submit);
    expect(screen.getByText('Song Saved!')).toBeInTheDocument();
    
    const close = screen.getByText('CLOSE');
    userEvent.click(close);
    const savedSongs = screen.getByText('SAVED SONGS');
    userEvent.click(savedSongs);
    expect(screen.getByText('Regular Baby')).toBeInTheDocument();
  });
});