'cNIg45GZ_ts'
import React from "react";
import renderWithProvider from '_testUtils/renderWithProvider';
import Video from './Video';

describe('Video component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Video uri='cNIg45GZ_ts' />);
  });

  it('matches the snapshot of the Video', () => {
    const { asFragment } = renderWithProvider(<Video uri='cNIg45GZ_ts' />);
    expect(asFragment()).toMatchSnapshot();
  });
});