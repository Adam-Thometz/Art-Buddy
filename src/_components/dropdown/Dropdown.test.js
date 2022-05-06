import React from "react";

import renderWithProvider from "../../_testUtils/renderWithProvider";

import Dropdown from "./Dropdown";

const testOptions = {
  test: 'test option',
  test2: 'another test option'
}

describe('Dropdown component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Dropdown options={testOptions} />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithProvider(<Dropdown options={testOptions} />);
    expect(asFragment()).toMatchSnapshot();
  })
})