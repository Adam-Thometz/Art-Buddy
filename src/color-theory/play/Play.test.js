import Play from "./Play";

import { render } from "_testUtils/render";

describe('Play component', () => {
  it('renders without crashing', () => {
    render(<Play />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Play />);
    expect(asFragment()).toMatchSnapshot();
  });
});