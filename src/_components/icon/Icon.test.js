import Icon from './Icon';

import { render } from '_testUtils/render';

describe('Icon component', () => {
  it('renders without crashing', () => {
    render(<Icon />);
  });

  it('matches the snapshot of the icon', () => {
    const { asFragment } = render(<Icon />);
    expect(asFragment()).toMatchSnapshot();
  });
});