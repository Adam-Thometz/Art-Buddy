import Rosters from './Rosters';

import { render } from "_testUtils/render";

describe('Rosters component', () => {
  window.localStorage.setItem('rosters', '{}');
  it('renders without crashing', () => {
    render(<Rosters />);
  });

  it('matches the snapshot of Rosters', () => {
    const { asFragment } = render(<Rosters />);
    expect(asFragment()).toMatchSnapshot();
  });
});