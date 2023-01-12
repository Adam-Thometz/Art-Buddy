import Settings from './Settings';

import { render } from "_testUtils/render";

describe('Settings component', () => {
  window.localStorage.setItem('rosters', '{}')
  it('renders without crashing', () => {
    render(<Settings />);
  });

  it('matches the snapshot of Settings', () => {
    const { asFragment } = render(<Settings />);
    expect(asFragment()).toMatchSnapshot();
  });
});