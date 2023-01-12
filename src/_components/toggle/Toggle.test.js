import Toggle from './Toggle';

import { render } from '_testUtils/render';

describe('Toggle component', () => {
  it('renders without crashing', () => {
    render(<Toggle />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Toggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});