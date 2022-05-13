import React from "react";

import renderWithProvider from "../../../_testUtils/renderWithProvider";

import LearnFamilyPage from "./LearnFamilyPage";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    family: 'brass'
  })
}));

describe('LearnFamilyPage component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<LearnFamilyPage />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<LearnFamilyPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});