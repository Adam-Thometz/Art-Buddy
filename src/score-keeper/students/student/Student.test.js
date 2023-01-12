import Student from './Student'

import { render } from '_testUtils/render';

describe('Student component', () => {
  it('renders without crashing', () => {
    render(<Student />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Student name='Eddie' points={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});