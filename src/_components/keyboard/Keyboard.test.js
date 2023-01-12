import Keyboard from "./Keyboard";

import { render } from "_testUtils/render";

describe('Keyboard component', () => {
  it('renders without crashing', () => {
    render(<Keyboard />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Keyboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});