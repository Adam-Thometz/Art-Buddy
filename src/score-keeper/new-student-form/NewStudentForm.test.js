import React from "react";

import renderWithProvider from "../../_testUtils/renderWithProvider";

import NewStudentForm from "./NewStudentForm";

describe('New Student Form', () => {
  it('renders without crashing', () => {
    renderWithProvider(<NewStudentForm />)
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithProvider(<NewStudentForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});