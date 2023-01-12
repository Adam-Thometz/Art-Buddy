import ColorWheel from "./ColorWheel";

import { render } from "_testUtils/render";

describe('ColorWheel component', () => {
  it('renders without crashing', () => {
    render(<ColorWheel />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ColorWheel />);
    expect(asFragment()).toMatchSnapshot();
  });
});