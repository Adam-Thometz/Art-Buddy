import Canvas from "./Canvas";

import { render } from "_testUtils/render";

describe('Canvas component', () => {
  it('renders without crashing', () => {
    render(<Canvas />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Canvas />);
    expect(asFragment()).toMatchSnapshot();
  });
});