import Notes from "./Notes";

import { render } from "_testUtils/render";

describe('Notes component', () => {
  it('renders without crashing', () => {
    render(<Notes />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Notes />);
    expect(asFragment()).toMatchSnapshot();
  });
});