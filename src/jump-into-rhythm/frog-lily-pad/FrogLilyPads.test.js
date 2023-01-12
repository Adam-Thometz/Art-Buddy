import FrogLilyPads from "./FrogLilyPads";

import { render } from "_testUtils/render";

describe('FrogLilyPads component', () => {
  it('renders without crashing', () => {
    render(<FrogLilyPads />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<FrogLilyPads />);
    expect(asFragment()).toMatchSnapshot();
  });
});