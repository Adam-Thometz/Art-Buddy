import Popup from "./Popup";

import { render } from "_testUtils/render";

describe('Popup component', () => {
  it('renders without crashing', () => {
    render(<Popup />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Popup />);
    expect(asFragment()).toMatchSnapshot();
  });
});