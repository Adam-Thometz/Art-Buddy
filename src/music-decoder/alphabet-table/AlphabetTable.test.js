import AlphabetTable from './AlphabetTable';

import { render } from "_testUtils/render";

describe('AlphabetTable component', () => {
  it('renders without crashing', () => {
    render(<AlphabetTable />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<AlphabetTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});