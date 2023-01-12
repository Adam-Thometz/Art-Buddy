import Volume from './Volume';

import { render } from "_testUtils/render";

describe('Volume component', () => {
  it('renders without crashing', () => {
    render(<Volume />);
  });

  it('matches the snapshot of Volume', () => {
    const { asFragment } = render(<Volume />);
    expect(asFragment()).toMatchSnapshot();
  });
});