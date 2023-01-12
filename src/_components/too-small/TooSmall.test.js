import TooSmall from './TooSmall';

import { render } from '_testUtils/render';

describe('TooSmall component', () => {
  it('renders without crashing', () => {
    render(<TooSmall />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TooSmall />);
    expect(asFragment()).toMatchSnapshot();
  });
});