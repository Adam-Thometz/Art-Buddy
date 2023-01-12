import Help from "./Help";

import { render } from "_testUtils/render";

describe('Help component', () => {
  it('renders without crashing', () => {
    render(<Help />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });
});