import React from "react";

import { default as store } from "_redux/rootReducer";
import { loadStudents } from "_redux/score-keeper/scoreKeeperActions";
import { demoClass } from "_redux/settings/settingsReducer";

import renderWithProvider from '_testUtils/renderWithProvider';

import Students from './Students';

describe('Students component', () => {
  store.dispatch(loadStudents(demoClass.students));

  it('renders without crashing', () => {
    renderWithProvider(<Students />, { store });
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Students />, { store });
    expect(asFragment()).toMatchSnapshot();
  });
});