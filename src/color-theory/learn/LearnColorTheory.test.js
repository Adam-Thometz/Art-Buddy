import LearnColorTheory from "./LearnColorTheory";

import { render } from "_testUtils/render";

describe('LearnColorTheory component', () => {
  it('renders without crashing', () => {
    render(<LearnColorTheory />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<LearnColorTheory />);
    expect(asFragment()).toMatchSnapshot();
  });
});