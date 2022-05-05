import React from "react";

import renderWithProvider from '../../_testUtils/renderWithProvider';
import { screen, within } from "@testing-library/react";

import Points from './Points';

describe('Points component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Points />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithProvider(<Points points={5} color='#000000' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct amount of points', () => {
    renderWithProvider(<Points points={4} />)
    const pointContainer = screen.getByTestId('points')
    const points = within(pointContainer).getAllByTestId('point')
    expect(points.length).toBe(4);
  })
})