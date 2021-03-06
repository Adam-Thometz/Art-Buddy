import React from "react";

import renderWithProvider from "../../../_testUtils/renderWithProvider";

import Instrument from "./Instrument";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    family: 'brass',
    instrument: 'trumpet'
  })
}));

describe('Instrument component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Instrument />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Instrument />);
    expect(asFragment()).toMatchSnapshot();
  });
});